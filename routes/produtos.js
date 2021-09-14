const express = require("express");
const routes = express.Router();

routes.get("/produtos/lista", (req, res) =>{
    res.send("pagina de produtos")
})

routes.get("/produto/:nome", (req, res) =>{
    console.log(req.params.nome);
    res.send("pagina de produtos")
});




module.exports = routes