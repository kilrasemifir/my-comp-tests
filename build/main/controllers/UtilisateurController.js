"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.utilisateurRoute = void 0;
var UtilisateurService_1 = require("../services/UtilisateurService");
var UtilisateurRepository_1 = require("../repositories/UtilisateurRepository");
var repository = new UtilisateurRepository_1.UtilisateurRepositoryImpl();
var service = new UtilisateurService_1.UtilisateurService(repository);
var utilisateurRoute = function (app) {
    app.get("/utilisateurs", function (req, res) {
        res.send(service.trouverTous());
    });
    app.post("/utilisateurs", function (req, res) {
        var body = req.body;
        var result = service.sauvegarder(body);
        res.send(result);
    });
};
exports.utilisateurRoute = utilisateurRoute;
//# sourceMappingURL=UtilisateurController.js.map