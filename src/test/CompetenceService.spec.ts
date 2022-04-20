import { rejects } from "assert"
import { Competence, NiveauCompetence } from "../main/entities/Competence"
import { CompetenceRepository } from "../main/repositories/CompetenceRepository"
import { CompetenceService } from "../main/services/CompetenceService"
import { docker, java, kubernetes, listComp, shell, spring } from "./data"

const comp = { _id:"id", nom:"",description:"",prerequis:[]}
const mockSauvegarde = jest.fn(async x=>x)
const mockRecherche = jest.fn(async id=>{
    if (id==="id") return comp;
    throw new Error()
})
const mockRechercherTous= jest.fn(async ()=>listComp)
const repository:CompetenceRepository = {
    sauvegarder: mockSauvegarde,
    recherche:mockRecherche,
    rechercherTous: mockRechercherTous
}   
const service = new CompetenceService(repository)
describe("Sauvegarde d'un competence", ()=>{
    it("Le nom d'une competence doit contenir moins de 50 chars", ()=> {
        // Given
        const competence:Competence = {
            nom: ";kjdhgmsdlkghmslkghsmldkgjùsmldgj*smdlgjsmùlgj*smdlgj*skµm",
            description:"",
            prerequis:[]
        }
        // When & Then
        expect(async ()=> service.sauvegarder(competence)).rejects.toThrowError()
        
    })

    it("Si la competence est valide, elle doit etre sauvegarder par le repository", ()=>{
        // Given
        const competence = {
            nom: "Test",
            description: "",
            prerequis:[]
        }
        // When
        service.sauvegarder(competence)
        // Then
        expect(mockSauvegarde.mock.calls.length).toBe(1)
        expect(mockSauvegarde.mock.calls[0][0]).toBe(competence)
    })
});

describe("Rechercher", ()=>{
    it("Si aucune competence porte l'id donné, alors retourne une erreur", ()=>{
        // Given
        const id = "1";
        //When
        expect(async ()=> service.chercher(id)).rejects.toThrowError();
    })

    it("Si l'id est valide, alors retourne une competence portant l'id", async ()=>{
        // Given
        const id = "id";
        // When
        const result = await service.chercher(id);
        
        // Then
        expect(result._id).toBe(id)
    })

    it("Recheche dans le repository si la competence d'id id existe", async ()=>{
        // Given
        const id = "id";

        // when
        const result = await service.chercher(id);
        // then
        expect(mockRecherche.mock.calls.length).toBe(1)
        expect(result._id).toBe(id)
    })
})


describe("Assos",()=>{

    const niveauComps:NiveauCompetence[] = [
        {niveau: 12, competence:java},
        {niveau:3, competence:shell}
    ]

    it("Retourne les competences passé en param",async ()=>{
        const results = await service.rechercheAccessible(niveauComps);

        expect(results).toContain(java)
        expect(results).toContain(shell)

    })

    it("Retourne lenseble des comps ayant les prereq",async ()=>{
        const results = await service.rechercheAccessible(niveauComps);

        expect(results).toContain(java)
        expect(results).toContain(spring)

    })
    // T1 Retourne les competences passé en param
    // T2 [Optionnel] REtourne les comps sans prereq
    // T3 Retourne lenseble des comps ayant les prereq
    it("Retourne lenseble des comps ayant les prereq",async ()=>{
        const results = await service.rechercheAccessible(niveauComps);

        expect(results).not.toContain(docker)
        expect(results).not.toContain(kubernetes)

    })
    // T4 Ne retourne pas ceux possédant pas les prereq
    // T5 pas de doublons
})