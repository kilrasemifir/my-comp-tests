import { Competence, NiveauCompetence, Prerequis } from "../entities/Competence";
import { CompetenceRepository } from "../repositories/CompetenceRepository";

export class CompetenceService {
    

    public constructor(private repository:CompetenceRepository){

    }

    public sauvegarder(competence:Competence): Promise<Competence>{
        if (competence.nom.length > 50) throw new Error();
        return this.repository.sauvegarder(competence);
    }

    public async chercher(id: string):Promise<Competence> {
        return this.repository.recherche(id);
    }

    public async rechercheAccessible(niveauComps:NiveauCompetence[]): Promise<Competence[]>{
        const all = await this.repository.rechercherTous();
        const results = []
        for (let comp of all){
            if (comp.prerequis.length){
                comp.prerequis.forEach(p=>{
                    if (this.check(p, niveauComps)) results.push(comp)
                })
            }else {
                results.push(comp)
            }
        }
        return results;
    }

    private check(preq: Prerequis, niveauComps: NiveauCompetence[]){
        let keep = false;
        niveauComps.forEach(nc=>{
            if (nc.competence._id === preq.competence._id && nc.niveau>=preq.niveauMinimum) keep = true
        })
        return keep;
    }
}

// export const competenceService = Object.freeze(new CompetenceService())

