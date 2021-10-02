const depoimentos = [
  {
    autor: "Ruan",
    titulo: "Depoimento Fake",
    descricao: "teste teste teste ",
  },
  {
    autor: "Juvescleide",
    titulo: "Depoimento Fake II",
    descricao: "asdnjasndjnas sndioasndonasodna sndansdnabsdga",
  },
  {
    autor: "Saturnino",
    titulo: "Depoimento Fake III",
    descricao: "jsbfjs sjfshjfb jhgcuyhsvb",
  },
  {
    autor: "john doe",
    titulo: "Depoimento Fake VI",
    descricao: "jsbfjs sjfshjfb jhgcuyhsvb",
  },
];

function cadastrarDepoimento(autor, titulo, descricao) {
  return depoimentos.push({
    autor,
    titulo,
    descricao,
  });
}
module.exports = { depoimentos, cadastrarDepoimento };
