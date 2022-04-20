import { Competence } from "../entities/Competence";
import { CompetenceRepository } from "../repositories/CompetenceRepository";

export class CompetenceService {

    public constructor(private repository:CompetenceRepository){}

    public sauvegarder(competence:Competence): Promise<Competence>{
        if (competence.nom.length > 50) throw new Error();
        return this.repository.sauvegarder(competence);
    }
}

// export const competenceService = Object.freeze(new CompetenceService())