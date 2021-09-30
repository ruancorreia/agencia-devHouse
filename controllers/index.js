const depoimentos = require("../models/depoimentos");

const indexController = {
  home: (req, res) =>{
    res.render("home", {titulo: 'Sua empresa vai ser incrivel!'});},

  about: (req, res) =>{
      res.render("about")},

  blog: (req, res) =>{
    res.render("blog")},

  contato: (req, res) =>{
    res.render("contato")},

  contatoRecebido: (req, res)=>{
    console.log(req.body);
    res.send("Olá " + req.body.nome + " recebemos a sua mensagem e entraremos em contato em breve!" )
},

  manutencao: (req, res) =>{
    res.render("manutencao")},

  exibirDepoimentos: (req, res)=>{
    res.render("depoimentos", { depoimentos, titulo: "Depoimentos" })
},

};


module.exports = indexController;