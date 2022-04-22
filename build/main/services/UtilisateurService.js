"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilisateurService = void 0;
var UtilisateurService = /** @class */ (function () {
    function UtilisateurService(repository) {
        this.repository = repository;
    }
    UtilisateurService.prototype.sauvegarder = function (utilisateur) {
        return this.repository.sauvegarder(utilisateur);
    };
    UtilisateurService.prototype.trouverTous = function () {
        return this.repository.findAll();
    };
    UtilisateurService.prototype.trouverParId = function (id) {
        return this.repository.findById(id);
    };
    UtilisateurService.prototype.supprimerParId = function (id) {
        this.repository.deleteById(id);
    };
    return UtilisateurService;
}());
exports.UtilisateurService = UtilisateurService;
//# sourceMappingURL=UtilisateurService.js.map