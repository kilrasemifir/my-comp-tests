"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var UtilisateurService_1 = require("../main/services/UtilisateurService");
var data_1 = require("./data");
var sauvegarder = jest.fn(function (u) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        u._id = "test";
        return [2 /*return*/, u];
    });
}); });
var findAll = jest.fn(function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, data_1.utilisateurListe];
}); }); });
var findById = jest.fn(function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, data_1.utilisateurListe.filter(function (u) { return u._id === id; })[0]];
}); }); });
var deleteById = jest.fn(function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/];
}); }); });
var repo = {
    sauvegarder: sauvegarder,
    findAll: findAll,
    findById: findById,
    deleteById: deleteById
};
var service = new UtilisateurService_1.UtilisateurService(repo);
describe("Sauvegarde", function () {
    it("Sauvegarde dans le repository un utilisateur", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, service.sauvegarder(data_1.utilisateur)];
                case 1:
                    _a.sent();
                    expect(sauvegarder.mock.calls[0][0]).toBe(data_1.utilisateur);
                    return [2 /*return*/];
            }
        });
    }); });
    it("L'utilisateur sauvegardé porte un id", function () { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, service.sauvegarder(data_1.utilisateur)];
                case 1:
                    result = _a.sent();
                    expect(result._id).toBeDefined();
                    return [2 /*return*/];
            }
        });
    }); });
});
describe("Trouver Tous", function () {
    it("Retourne la liste de l'ensemble des utilisateurs", function () { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, service.trouverTous()];
                case 1:
                    result = _a.sent();
                    expect(result).toBe(data_1.utilisateurListe);
                    return [2 /*return*/];
            }
        });
    }); });
});
describe("Trouver par id", function () {
    it("Retourne l'utilisateur portant l'id", function () { return __awaiter(void 0, void 0, void 0, function () {
        var id, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = "2";
                    return [4 /*yield*/, service.trouverParId(id)];
                case 1:
                    result = _a.sent();
                    expect(result._id).toBe("2");
                    return [2 /*return*/];
            }
        });
    }); });
});
describe("Supprimer par id", function () {
    it("Appel le repository avec l'id", function () { return __awaiter(void 0, void 0, void 0, function () {
        var id;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = "2";
                    return [4 /*yield*/, service.supprimerParId(id)];
                case 1:
                    _a.sent();
                    expect(deleteById.mock.calls[0][0]).toBe(id);
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=UtilisateurService.spec.js.map