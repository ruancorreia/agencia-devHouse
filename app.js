//importaçoes dos modulos
const express = require('express');
const app = express();
const rotasDeProdutos = require("./routes/produtos")
const rotas = require("./routes");

//rotas
app.use(express.static('public'));


app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/views/home.html")
});

app.get('/home', (req, res)=>{
    res.sendFile(__dirname + "/views/home.html")
});

app.get('/manutencao', (req, res)=>{
    res.sendFile(__dirname + "/views/manutencao.html")
});

app.get('/produtos', (req, res)=>{
    res.sendFile(__dirname + "/views/produtos.html")
});

app.get('/blog', (req, res)=>{
    res.sendFile(__dirname + "/views/blog.html")
});

app.get('/depoimento', (req, res)=>{
    res.sendFile(__dirname + "/views/depoimento.html")
});

app.get('/contato', (req, res)=>{
    res.sendFile(__dirname + "/views/contato.html")
});


app.listen(3000, ()=> console.log("Servidor iniciado!"));

app.post