export interface UtilisateurRepository {
    sauvegarder(utilisateur:Utilisateur):Promise<Utilisateur>;
    findAll():Promise<Utilisateur[]>;
    findById(id:string):Promise<Utilisateur|undefined>;
    deleteById(id:string):Promise<void>;
}