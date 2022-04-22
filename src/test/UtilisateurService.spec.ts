import { UtilisateurRepository } from "../main/repositories/UtilisateurRepository"
import { UtilisateurService } from "../main/services/UtilisateurService"
import { utilisateur, utilisateurListe } from "./data";

const sauvegarder = jest.fn(async u=>{
    u._id = `test`;
    return u;
});
const findAll = jest.fn(async ()=>utilisateurListe)
const findById = jest.fn(async id=>utilisateurListe.filter(u=>u._id === id)[0])
const deleteById = jest.fn(async id=>{});
const repo:UtilisateurRepository = {
    sauvegarder, findAll, findById, deleteById
}

const service = new UtilisateurService(repo);


describe("Sauvegarde", ()=>{
    it("Sauvegarde dans le repository un utilisateur",async ()=>{
        await service.sauvegarder(utilisateur);
        expect(sauvegarder.mock.calls[0][0]).toBe(utilisateur)
    })

    it("L'utilisateur sauvegardé porte un id",async ()=>{
        const result = await service.sauvegarder(utilisateur)
        expect(result._id).toBeDefined()
    })
})

describe("Trouver Tous", ()=>{
    it("Retourne la liste de l'ensemble des utilisateurs",async ()=>{
        const result = await service.trouverTous();
        expect(result).toBe(utilisateurListe)
    })
})

describe("Trouver par id", ()=>{
    it("Retourne l'utilisateur portant l'id",async ()=>{
        const id = "2";
        const result = await service.trouverParId(id);
        expect(result._id).toBe("2")
    })
})

describe("Supprimer par id", ()=>{
    it("Appel le repository avec l'id",async ()=>{
        const id = "2";
        await service.supprimerParId(id);
        expect(deleteById.mock.calls[0][0]).toBe(id)
    })
})
