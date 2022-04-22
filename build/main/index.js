"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Express = require("express");
var UtilisateurController_1 = require("./controllers/UtilisateurController");
var mongoose_1 = require("mongoose");
var app = Express();
app.use(Express.json());
mongoose_1.connect("mongodb://localhost:27017/test");
UtilisateurController_1.utilisateurRoute(app);
app.listen(8080, function () {
    console.log("It's aliveee!!!");
});
//# sourceMappingURL=index.js.map