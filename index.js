const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.post('/webhook', async (req, res) => {
  console.log('Evento recebido:', req.body);

  // Aqui depois vamos tratar venda, comprador etc
  res.sendStatus(200);
});

app.get('/', (req, res) => {
  res.send('Servidor Mercado Livre rodando 🚀');
});

app.listen(PORT, () => {
  console.log(Servidor rodando na porta ${PORT});
});
