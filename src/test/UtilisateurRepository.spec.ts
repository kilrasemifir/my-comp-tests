import { UtilisateurRepositoryImpl } from "../main/repositories/UtilisateurRepository"
import {connect, model} from 'mongoose'
import { uListeSave, utilisateur, utilisateurListe } from "./data";

connect("mongodb://localhost:27017/test")

const repository = new UtilisateurRepositoryImpl();

beforeEach(()=>{
    const m = model("utilisateurs")
    m.remove({})
})

describe("Sauvegarde", ()=>{
    it("Retourne l'utilisateur avec son id",async  ()=>{
        const result = await repository.sauvegarder(utilisateur);

        expect(result._id).toBeDefined()
        expect(result.nom).toBe(utilisateur.nom)
        expect(result.prenom).toBe(utilisateur.prenom)
    })
})

describe("FindAll", ()=>{

    
    it("Retourne L'ensemble des utilisateurs",async  ()=>{
        const ids = await Promise.all(uListeSave.map(async (u)=>(await repository.sauvegarder(u))._id))
        
        const results = (await repository.findAll()).map(u=>u._id)

        for (let id of ids){
            expect(results).toContainEqual(id)
        }
    })
})

describe("FindById", ()=>{

    
    it.each(uListeSave)("Retourne l'utilsiateur portant l'id",async  (user)=>{
        const id = (await repository.sauvegarder(user))._id
        
        const result = await repository.findById(id)
        expect(result._id).toStrictEqual(id)
    })
})

describe("FindById", ()=>{

    
    it.each(uListeSave)("Retourne l'utilsiateur portant l'id",async  (user)=>{
        const id = (await repository.sauvegarder(user))._id
        
        await repository.deleteById(id);

        const result = await repository.findById(id)
        expect(result).toBeNull()
    })
})