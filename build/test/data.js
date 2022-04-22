"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uListeSave = exports.utilisateurListe = exports.utilisateur = exports.listComp = exports.kubernetes = exports.docker = exports.shell = exports.spring = exports.java = void 0;
var emptyComp = { nom: "",
    description: "",
    prerequis: [] };
exports.java = {
    _id: "java",
    nom: "Java",
    description: "",
    prerequis: []
};
exports.spring = {
    _id: "spring",
    nom: "Java",
    description: "",
    prerequis: [
        { niveauMinimum: 10, competence: __assign({ _id: "java" }, emptyComp) }
    ]
};
exports.shell = {
    _id: "shell",
    nom: "shell",
    description: "",
    prerequis: []
};
exports.docker = {
    _id: "docker",
    nom: "docker",
    description: "",
    prerequis: [
        { niveauMinimum: 5, competence: __assign({ _id: "shell" }, emptyComp) }
    ]
};
exports.kubernetes = {
    _id: "kubernetes",
    nom: "kubernetes",
    description: "",
    prerequis: [
        { niveauMinimum: 10, competence: __assign({ _id: "docker" }, emptyComp) }
    ]
};
exports.listComp = [exports.java, exports.spring, exports.shell, exports.docker, exports.kubernetes];
exports.utilisateur = { nom: "Do", prenom: "John" };
exports.utilisateurListe = [
    { _id: "1", nom: "Do", prenom: "John" },
    { _id: "2", nom: "Da", prenom: "John" },
    { _id: "3", nom: "Du", prenom: "John" },
    { _id: "4", nom: "Di", prenom: "John" },
    { _id: "5", nom: "Dé", prenom: "John" },
    { _id: "6", nom: "Do", prenom: "Martin" },
    { _id: "7", nom: "Do", prenom: "Jean" },
    { _id: "8", nom: "Do", prenom: "Rodrigez" },
    { _id: "9", nom: "Do", prenom: "Scott" }
];
exports.uListeSave = [
    { nom: "Do", prenom: "John" },
    { nom: "Da", prenom: "John" },
    { nom: "Du", prenom: "John" },
    { nom: "Di", prenom: "John" },
    { nom: "Dé", prenom: "John" },
    { nom: "Do", prenom: "Martin" },
    { nom: "Do", prenom: "Jean" },
    { nom: "Do", prenom: "Rodrigez" },
    { nom: "Do", prenom: "Scott" }
];
//# sourceMappingURL=data.js.map