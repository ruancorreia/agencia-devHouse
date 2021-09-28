//importaçoes dos modulos
const express = require('express');
const path = require('path')
const rotas = require("./routes/index");

const app = express();

//configurando o template engine
app.set('view engine', 'ejs'); // informa o template engine, qual visualizador sera utilizado
app.set('views', path.resolve('views')); // informa a pasta onde os arquivos estao e o patch resolve se encarrega de gerenciar esses endereços (caminhos)

//rotas
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(express.static('public'));
app.use(rotas);

//configurando o servidor
app.listen(3000, ()=> console.log("Servidor iniciado!"));

// app.post