const express = require("express");
const routes = express.Router();
const path = require("path");



routes.get("/", (req, res) =>{
    res.render("home", {titulo: 'Sua empresa vai ser incrivel!'});
});

routes.get("/home", (req, res) =>{
    res.redirect("/")
});

routes.get("/about", (req, res) =>{
    res.render("about")
})

routes.get("/blog", (req, res) =>{
    res.render("blog")
})

routes.get("/contato", (req, res) =>{
    res.render("contato")
})

routes.get("/depoimento", (req, res) =>{
    res.render("depoimentos")
})

routes.get("/manutencao", (req, res) =>{
    res.render("manutencao")
})

routes.get("/produtos", (req, res) =>{
    res.render("produtos")
})

routes.post('/receber-contato', (req, res)=>{
    console.log(req.body);
    res.send("Olá " + req.body.nome + " recebemos a sua mensagem e entraremos em contato em breve!" )
})


module.exports = routes;