require('dotenv').config();
const { PORT } = process.env;

const swaggerConfig = {
    definition: {
        openapi: "3.0.1",
        info: {
            title: "Desafio XP BackEnd - Express API com Swagger",
            description: "API utilizando Express documentada pelo Swagger - Feito por Lázaro Kabib",
            version: "1.0" 
        },
        servers: [{
            url: `http://localhost:${PORT}`,
            description: "Servidor local"
        }],
        components: {
            securitySchemes: {
                beareAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT'
                }
            }
        }
    },
    apis: ["./src/routes/ativos.js", "./src/routes/conta.js", "./src/routes/investimentos.js", "./src/routes/login.js"]
}

module.exports = swaggerConfig;