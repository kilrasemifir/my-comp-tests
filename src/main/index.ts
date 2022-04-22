import * as Express from "express"
import { utilisateurRoute } from "./controllers/UtilisateurController"
import {connect} from "mongoose"
const app = Express()
app.use(Express.json())

connect("mongodb://localhost:27017/test")

utilisateurRoute(app);

app.listen(8080, ()=>{
    console.log("It's aliveee!!!");
})
