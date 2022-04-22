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
var CompetenceService_1 = require("../main/services/CompetenceService");
var data_1 = require("./data");
var comp = { _id: "id", nom: "", description: "", prerequis: [] };
var mockSauvegarde = jest.fn(function (x) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, x];
}); }); });
var mockRecherche = jest.fn(function (id) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        if (id === "id")
            return [2 /*return*/, comp];
        throw new Error();
    });
}); });
var mockRechercherTous = jest.fn(function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, data_1.listComp];
}); }); });
var repository = {
    sauvegarder: mockSauvegarde,
    recherche: mockRecherche,
    rechercherTous: mockRechercherTous
};
var service = new CompetenceService_1.CompetenceService(repository);
describe("Sauvegarde d'un competence", function () {
    it("Le nom d'une competence doit contenir moins de 50 chars", function () {
        // Given
        var competence = {
            nom: ";kjdhgmsdlkghmslkghsmldkgjùsmldgj*smdlgjsmùlgj*smdlgj*skµm",
            description: "",
            prerequis: []
        };
        // When & Then
        expect(function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, service.sauvegarder(competence)];
        }); }); }).rejects.toThrowError();
    });
    it("Si la competence est valide, elle doit etre sauvegarder par le repository", function () {
        // Given
        var competence = {
            nom: "Test",
            description: "",
            prerequis: []
        };
        // When
        service.sauvegarder(competence);
        // Then
        expect(mockSauvegarde.mock.calls.length).toBe(1);
        expect(mockSauvegarde.mock.calls[0][0]).toBe(competence);
    });
});
describe("Rechercher", function () {
    it("Si aucune competence porte l'id donné, alors retourne une erreur", function () {
        // Given
        var id = "1";
        //When
        expect(function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, service.chercher(id)];
        }); }); }).rejects.toThrowError();
    });
    it("Si l'id est valide, alors retourne une competence portant l'id", function () { return __awaiter(void 0, void 0, void 0, function () {
        var id, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = "id";
                    return [4 /*yield*/, service.chercher(id)];
                case 1:
                    result = _a.sent();
                    // Then
                    expect(result._id).toBe(id);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Recheche dans le repository si la competence d'id id existe", function () { return __awaiter(void 0, void 0, void 0, function () {
        var id, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = "id";
                    return [4 /*yield*/, service.chercher(id)];
                case 1:
                    result = _a.sent();
                    // then
                    expect(mockRecherche.mock.calls.length).toBe(1);
                    expect(result._id).toBe(id);
                    return [2 /*return*/];
            }
        });
    }); });
});
describe("Assos", function () {
    var niveauComps = [
        { niveau: 12, competence: data_1.java },
        { niveau: 3, competence: data_1.shell }
    ];
    it("Retourne les competences passé en param", function () { return __awaiter(void 0, void 0, void 0, function () {
        var results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, service.rechercheAccessible(niveauComps)];
                case 1:
                    results = _a.sent();
                    expect(results).toContain(data_1.java);
                    expect(results).toContain(data_1.shell);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Retourne lenseble des comps ayant les prereq", function () { return __awaiter(void 0, void 0, void 0, function () {
        var results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, service.rechercheAccessible(niveauComps)];
                case 1:
                    results = _a.sent();
                    expect(results).toContain(data_1.java);
                    expect(results).toContain(data_1.spring);
                    return [2 /*return*/];
            }
        });
    }); });
    // T1 Retourne les competences passé en param
    // T2 [Optionnel] REtourne les comps sans prereq
    // T3 Retourne lenseble des comps ayant les prereq
    it("Retourne lenseble des comps ayant les prereq", function () { return __awaiter(void 0, void 0, void 0, function () {
        var results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, service.rechercheAccessible(niveauComps)];
                case 1:
                    results = _a.sent();
                    expect(results).not.toContain(data_1.docker);
                    expect(results).not.toContain(data_1.kubernetes);
                    return [2 /*return*/];
            }
        });
    }); });
    // T4 Ne retourne pas ceux possédant pas les prereq
    // T5 pas de doublons
});
//# sourceMappingURL=CompetenceService.spec.js.map