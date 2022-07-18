const express = require('express');
const ativosRouter = require('./routes/ativos');

const app = express();

app.use(express.json());

app.use('/ativos', ativosRouter);

app.get('/', (_req, res) => {
  res.send('testando');
});

module.exports = app;