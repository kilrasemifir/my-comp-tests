import { Competence } from "../main/entities/Competence"
import { CompetenceRepository } from "../main/repositories/CompetenceRepository"
import { CompetenceService } from "../main/services/CompetenceService"

const mockSauvegarde = jest.fn(async x=>x)
const repository:CompetenceRepository = {
    sauvegarder: mockSauvegarde
}   
const service = new CompetenceService(repository)

it("Le nom d'une competence doit contenir moins de 50 chars", ()=> {
    // Given
    const competence:Competence = {
        nom: ";kjdhgmsdlkghmslkghsmldkgjùsmldgj*smdlgjsmùlgj*smdlgj*skµm",
        description:"",
        prerequis:[]
    }
    // When & Then
    expect(()=>service.sauvegarder(competence)).toThrowError()
    
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
