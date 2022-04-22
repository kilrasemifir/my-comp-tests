import { Schema, model, Model } from 'mongoose';
import { utilisateur } from '../../test/data';

export interface UtilisateurRepository {
    sauvegarder(utilisateur:Utilisateur):Promise<Utilisateur>;
    findAll():Promise<Utilisateur[]>;
    findById(id:string):Promise<Utilisateur|undefined>;
    deleteById(id:string):Promise<void>;
}

export class UtilisateurRepositoryImpl implements UtilisateurRepository{

    private UserModel: Model<Utilisateur>; 

    constructor(){
        const userSchema = new Schema<Utilisateur>({
            nom:{type:String},
            prenom:{type:String}
        })
        this.UserModel = model<Utilisateur>("utilisateurs", userSchema);
    }
    async sauvegarder(utilisateur: Utilisateur): Promise<Utilisateur> {
        const result = new this.UserModel(utilisateur).save()
        return result
    }
    async findAll(): Promise<Utilisateur[]> {
        const results = this.UserModel.find()
        return results
    }
    async findById(id: string): Promise<Utilisateur> {
        return this.UserModel.findById(id);
    }
    async deleteById(id: string): Promise<void> {
        await this.UserModel.deleteOne({_id:id})
    }
    
}