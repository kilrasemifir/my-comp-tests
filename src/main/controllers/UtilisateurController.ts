import { UtilisateurService } from "../services/UtilisateurService";
import * as Express from "express"
import { UtilisateurRepositoryImpl } from "../repositories/UtilisateurRepository";

const repository = new UtilisateurRepositoryImpl();
const service = new UtilisateurService(repository);


export const utilisateurRoute = (app:Express.Application) => {

    app.get("/utilisateurs", (req, res)=>{
        res.send(service.trouverTous());
    })

    app.post("/utilisateurs", (req, res)=>{
        const body = req.body
        const result = service.sauvegarder(body);
        res.send(result)
    })
}
