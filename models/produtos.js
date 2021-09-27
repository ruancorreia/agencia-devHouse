const {uuid} = require ('uuidv4');
const listaDeProdutos = [
    {
        id: "id",
        nome: "Site",
        descricao: "Seu site incrivel",
        imagem: "https://www.sitesincriveis.com.br/wp-content/uploads/2021/02/SITES-INCRIVEIS-06-1.png"
    },
    {
        nome: "Headset Gamer",
        descricao: "Headset com RGB",
        imagem: "link",
    }
];
function cadastrarProduto(nome, descricao, imagem){
    const novoProduto = {
        id: uuid(),
        nome,
        descricao,
        imagem
    }
    return listaDeProdutos.push(novoProduto)
}


function deletaProduto(id){
    const novaListaDeProdutos = listaDeProdutos.filter(
        (produtos) => produtos.id != id);
    listaDeProdutos = novaListaDeProdutos;
}
/*d

module.exports = { produtos, cadastrarProduto };