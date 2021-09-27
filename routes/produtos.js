const express = require("express");
const routes = express.Router();
const produtoController = require('../controllers/produtos')

routes.get("/produtos/lista", produtoController.listarProdutos);

routes.get("/produto/:nome", (req, res) =>{
    console.log(req.params.nome);
    res.send("pagina de produtos")
});




module.exports = routes