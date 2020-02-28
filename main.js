import express from 'express';
import config from 'config';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import bodyParser from 'body-parser';
import Cors from 'cors';
import initializeRoutes from 'common/functions/initializeRoutes';
const swaggerDefinition = require('./swagger.json');
const API_PORT = process.env.API_PORT || 3300;

async function bootstrap() {
  var app = express();

  let swaggerSpec = swaggerJSDoc({
    swaggerDefinition,
    apis: ['src/controllers/*.js', 'src/shared/models/request/*.js']
  });

  app.get('/', (req, res) => res.redirect('/swagger'));
  app.get('/swagger.json', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });
  app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  
  app.use(Cors({
    "origin": "*",
    "credentials": true,
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "allowedHeaders": "Content-Type,Authorization",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
  }));
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  initializeRoutes(app);

  app.listen(API_PORT, function () {
    console.log(`Example app listening on port ${API_PORT}!`);
    console.log('NODE_ENV: ' + config.util.getEnv('NODE_ENV'));
  });
}

bootstrap();
