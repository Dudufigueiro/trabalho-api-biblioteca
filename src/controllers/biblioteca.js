const biblioteca = require('../routes/biblioteca');
const service = require('../services/biblioteca');

function buscarLivro (req, res) {
  const biblioteca = service.buscarLivro();
  return res.status(200).json(biblioteca);
}

function buscarLivroPorId (req, res) {
  const biblioteca = service.buscarLivroPorId(req.params.id);
  if (!biblioteca) {
    return res.status(404).json({
      erro: `O livro com o id ${req.params.id} não foi encontrado`
    })
  }
  return res.status(200).json(biblioteca);
}

function cadastrarLivro (req, res) {
  const data = req.body;

  if (!data.id || !data.titulo || !data.autor) {
    return res.status(400).json({
      erro: 'Preencha todos os campos obrigatórios'
    })
  }
  service.cadastrarLivro(data);
  return res.status(201).json({
    message: 'Livro cadastrado com sucesso'
  })
}

function atualizarLivro(req, res) {
  const livro = req.body;

  //Verifica se o livro existe, se ele não existir, retorna o erro 404
  if (!service.buscarLivroPorId(req.params.id)) {
      return res.status(404).json({ erro: `Livro com o código ${req.params.id} não encontrado` });
  }

  //Se o livro existir, atualiza o livro, caso contrário retorna o erro 500
  if (!service.atualizarLivro(req.params.id, livro)) {
      return res.status(500).json({ erro: 'Erro ao atualizar livro' });
  }

  return res.status(204).send();
}

function deletarLivro(req, res) {
  if (!service.buscarLivroPorId(req.params.id)) {
    return res.status(404).json({ erro: `Livro com o código ${req.params.id} não encontrado`});
  }

  if (!service.deletarLivro(req.params.id)) {
    return res.status(500).json({ erro: "Erro ao excluir livro"});
  }

  return res.status(204).send();
}

module.exports = {
  buscarLivro,
  buscarLivroPorId,
  cadastrarLivro,
  atualizarLivro,
  deletarLivro
}