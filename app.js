//importaçoes dos modulos
const express = require('express');
const rotas = require("./routes");

const app = express();


//rotas
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(express.static('public'));
app.use(rotas);


app.post('/receber-contato', (req, res)=>{
    console.log(req.body);
    res.send("Olá " + req.body.nome + " recebemos a sua mensagem e entraremos em contato em breve!" )
})


app.listen(3000, ()=> console.log("Servidor iniciado!"));

// app.post