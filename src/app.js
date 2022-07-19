const express = require('express');
const ativosRouter = require('./routes/ativos');
const contaRouter = require('./routes/conta');
const investimentoRouter = require('./routes/investimentos');

const app = express();

app.use(express.json());

app.use('/ativos', ativosRouter);
app.use('/conta', contaRouter);
app.use('/investimentos', investimentoRouter);

app.get('/', (_req, res) => {
  res.send('testando');
});

module.exports = app;