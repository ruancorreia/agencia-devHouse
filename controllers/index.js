const modelDepoimentos = require("../models/depoimentos");
const path = require("path");

const indexController = {
  exibirHome: (req, res) => {
    const usuario = undefined;
    res.render("home", { titulo: "Sua empresa vai ser incrivel!", usuario });
  },

  redirectHome: (req, res) => {
    res.redirect("/");
  },

  exibirManutencao: (req, res) => {
    res.render("manutencao");
  },
  
  about: (req, res) => {
    res.render("about");
  },
  
  blog: (req, res) => {
    res.render("blog");
  },

  exibirDepoimentos: (req, res) => {
    res.render("depoimentos", {
      depoimentos: modelDepoimentos.depoimentos,
      titulo: "Depoimentos",
    });
  },

  exibirFormDepoimento: (req, res) => {
    res.render("cadastroDepoimento");
  },

  cadastrarDepoimento: (req, res) => {
    console.log(req.body);
    const { autor, titulo, descricao } = req.body;

    modelDepoimentos.cadastrarDepoimento(autor, titulo, descricao);
    return res.redirect("/depoimentos");
  },

  cadastrarProdutoForm: (req, res) => {
    res.render("cadastrar-produto");
  },
};

module.exports = indexController;