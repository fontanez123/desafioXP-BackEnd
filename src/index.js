const app = require('./app');
require('dotenv').config();

const { PORT } = process.env;

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${PORT}`);
});
