const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerConfig = require('./docs/swaggerConfig');
const ativosRouter = require('./routes/ativos');
const contaRouter = require('./routes/conta');
const investimentoRouter = require('./routes/investimentos');
const loginRouter = require('./routes/login');

const app = express();

app.use(express.json());

const swaggerDoc = swaggerJSDoc(swaggerConfig);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use('/ativos', ativosRouter);
app.use('/conta', contaRouter);
app.use('/investimentos', investimentoRouter);
app.use('/login', loginRouter);

module.exports = app;
