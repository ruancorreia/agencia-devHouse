//importaçoes dos modulos
const express = require('express');
const app = express();
const rotasDeProdutos = require("./routes/produtos")
const rotas = require("./routes");
const { urlencoded } = require('express');

//rotas
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
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

app.get('/about', (req, res)=>{
    res.sendFile(__dirname + "/views/about.html")
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

app.post('/receber-contato', (req, res)=>{
    console.log(req.body);
    res.send("Olá " + req.body.nome + " recebemos a sua mensagem e entraremos em contato em breve!" )
})

app.listen(3000, ()=> console.log("Servidor iniciado!"));

app.post