const express = require("express");
const routes = express.Router();
const path = require("path");
const indexController = require("../controllers");



routes.get("/", indexController.home);

routes.get("/home", indexController.home);

routes.get("/about",indexController.about);

routes.get("/blog", indexController.blog);

routes.get("/contato", indexController.contato);

routes.get("/manutencao", indexController.manutencao);

routes.get("/depoimentos", indexController.exibirDepoimentos);

routes.post('/receber-contato', indexController.contatoRecebido)

routes.get("/produtos", (req, res) =>{
    res.render("produtos")
})

module.exports = routes;