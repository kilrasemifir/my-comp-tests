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
var UtilisateurRepository_1 = require("../main/repositories/UtilisateurRepository");
var mongoose_1 = require("mongoose");
var data_1 = require("./data");
mongoose_1.connect("mongodb://localhost:27017/test");
var repository = new UtilisateurRepository_1.UtilisateurRepositoryImpl();
beforeEach(function () {
    var m = mongoose_1.model("utilisateurs");
    m.remove({});
});
describe("Sauvegarde", function () {
    it("Retourne l'utilisateur avec son id", function () { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, repository.sauvegarder(data_1.utilisateur)];
                case 1:
                    result = _a.sent();
                    expect(result._id).toBeDefined();
                    expect(result.nom).toBe(data_1.utilisateur.nom);
                    expect(result.prenom).toBe(data_1.utilisateur.prenom);
                    return [2 /*return*/];
            }
        });
    }); });
});
describe("FindAll", function () {
    it("Retourne L'ensemble des utilisateurs", function () { return __awaiter(void 0, void 0, void 0, function () {
        var ids, results, _i, ids_1, id;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(data_1.uListeSave.map(function (u) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, repository.sauvegarder(u)];
                            case 1: return [2 /*return*/, (_a.sent())._id];
                        }
                    }); }); }))];
                case 1:
                    ids = _a.sent();
                    return [4 /*yield*/, repository.findAll()];
                case 2:
                    results = (_a.sent()).map(function (u) { return u._id; });
                    for (_i = 0, ids_1 = ids; _i < ids_1.length; _i++) {
                        id = ids_1[_i];
                        expect(results).toContainEqual(id);
                    }
                    return [2 /*return*/];
            }
        });
    }); });
});
describe("FindById", function () {
    it.each(data_1.uListeSave)("Retourne l'utilsiateur portant l'id", function (user) { return __awaiter(void 0, void 0, void 0, function () {
        var id, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, repository.sauvegarder(user)];
                case 1:
                    id = (_a.sent())._id;
                    return [4 /*yield*/, repository.findById(id)];
                case 2:
                    result = _a.sent();
                    expect(result._id).toStrictEqual(id);
                    return [2 /*return*/];
            }
        });
    }); });
});
describe("FindById", function () {
    it.each(data_1.uListeSave)("Retourne l'utilsiateur portant l'id", function (user) { return __awaiter(void 0, void 0, void 0, function () {
        var id, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, repository.sauvegarder(user)];
                case 1:
                    id = (_a.sent())._id;
                    return [4 /*yield*/, repository.deleteById(id)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, repository.findById(id)];
                case 3:
                    result = _a.sent();
                    expect(result).toBeNull();
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=UtilisateurRepository.spec.js.map