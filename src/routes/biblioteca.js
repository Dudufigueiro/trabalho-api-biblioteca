const controller = require('../controllers/biblioteca');

module.exports = (app) => {
  app.get('/biblioteca', controller.buscarLivro)
  app.get('/biblioteca/:id([0-9]+)', controller.buscarLivroPorId)
  app.post('/biblioteca', controller.cadastrarLivro)
  app.patch('/biblioteca/:id([0-9]+)', controller.atualizarLivro);
  app.delete('/biblioteca/:id', controller.deletarLivro)
};