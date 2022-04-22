import { UtilisateurRepository } from "../repositories/UtilisateurRepository";

export class UtilisateurService {

    constructor(private repository:UtilisateurRepository){}
    public sauvegarder(utilisateur:Utilisateur){
        return this.repository.sauvegarder(utilisateur);
    }

    public trouverTous(){
        return this.repository.findAll();
    }

    public trouverParId(id:string){
        return this.repository.findById(id);
    }

    public supprimerParId(id:string){
        this.repository.deleteById(id);
    }
}