const { uuid } = require ('uuidv4');
let listaDeProdutos = [
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


function excluirProduto(id){
    const novaListaDeProdutos = listaDeProdutos.filter(
        (produto) => produto.id != id);
        if (novaListaDeProdutos.length == listaDeProdutos.length) return false;

    listaDeProdutos = novaListaDeProdutos;
    return true;
}


module.exports = { listaDeProdutos, cadastrarProduto }; 