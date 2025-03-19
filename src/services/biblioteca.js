const biblioteca = [
  { id: 1, titulo: 'A Volta dos Que Não Foram', autor: 'Eduardo Figueiro', editora: 'Horus', paginas: 50, anoPublicacao: 2000 },
  { id: 2, Titulo: 'O Triste Olhar do Galo Cego', autor: 'Leandro', editora: 'Horus', paginas: 220, anoPublicacao: 2019 }
];
  
function buscarLivro () {
  return biblioteca;
}
  
function buscarLivroPorId (id) {
  return biblioteca.find(el => el.id == id);
}
  
function cadastrarLivro (dados) {
  biblioteca.push(dados)
}
  
function atualizarLivro(id, livro) {
  //verifica se o livro existe, se não existir, retorna false
  const livroAtual = buscarLivroPorId(id);
  if (!livroAtual) {
    return false;
  }

  const index = biblioteca.indexOf(livroAtual); //se o livro existir, pega o index do livro no array de livros

  //atualiza o livro no array de livros apenas com os campos que foram passados no body da requisição
  biblioteca[index] = { ...livroAtual, ...livro };
  return true;
};

function deletarLivro(id) {
  const index = biblioteca.findIndex(livro => livro.id == id);
      
  if (index === -1) {
    return false; // Livro não encontrado
  }
    
  biblioteca.splice(index, 1); // Remove o livro do array
  return true; // Indica que o livro foi deletado com sucesso
}
  
module.exports = {
  buscarLivro,
  buscarLivroPorId,
  cadastrarLivro,
  atualizarLivro,
  deletarLivro
}