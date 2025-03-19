const express = require('express'); // importa o pacote do express;
const app = express(); // cria uma instancia do express para a nossa API;
const PORT = 3000; // cria uma constante para definir a PORTA onde a aplicação roda;

app.use(express.json());

app.get('/', (req, res) => {
    const hello = {
      message: 'Eduardo'
    }
    return res.json(hello);
});
  
require('./routes')(app);
  
// abre a API para receber requisições na PORTA definida.
app.listen(PORT, () => {
  console.log(`api rodando na porta ${PORT}`)
});