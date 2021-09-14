const express = require("express");
const routes = express.Router();
const path = require("path");


routes.get("/", (req, res) =>{
    res.sendFile(path.resolve('views', 'index.html'))
})

routes.get("/home", (req, res) =>{
    res.sendFile(path.resolve('views', 'index.html'))
})

routes.get("/blog", (req, res) =>{
    res.sendFile(path.resolve('views', 'blog.html'))
})

routes.get("/contato", (req, res) =>{
    res.sendFile(path.resolve('views', 'contato.html'))
})

routes.get("/depoimento", (req, res) =>{
    res.sendFile(path.resolve('views', 'depoimento.html'))
})

routes.get("/manutencao", (req, res) =>{
    res.sendFile(path.resolve('views', 'manutencao.html'))
})

routes.get("/produtos", (req, res) =>{
    res.sendFile(path.resolve('views', 'produtos.html'))
})


