require("dotenv").config
const express = require('express');
const swaggerUi = require('swagger-ui-express');

//const swaggerDocument = require('./src/data/swagger.json'); // ou './swagger.yaml' se for um arquivo json
const swaggerDocument = require('./src/data/sw_technical_metadata.json'); // ou './swagger.yaml' se for um arquivo json
const app = express();
const port = 3030;

// Rota para a documentação do Swagger
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Suas rotas e configurações de API aqui...

app.listen(process.env.PORT || port, () => {
    console.log(`Servidor está rodando na porta ${process.env.PORT || port}`);
});

