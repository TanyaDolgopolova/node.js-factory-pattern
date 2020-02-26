const Express = require('express');
const SwaggerUI = require("swagger-ui-express");
const Swagger = require("swagger-node-express");
const swaggerDoc = require('../swagger.json');

async function bootstrap() {
  var app = Express();
  app.get('/', (req, res) => res.redirect('/swagger'));
  app.use('/swagger', SwaggerUI.serve, SwaggerUI.setup(swaggerDoc));

  Swagger.setHeaders = function setHeaders(res) {
    res.header("Access-Control-Allow-Headers", "Content-Type, X-API-KEY");
    res.header("Content-Type", "application/json; charset=utf-8");
  };
  Swagger.setAppHandler(app);
  app.listen(3100, function () {
    console.log('Example app listening on port 3100!');
  });
}

bootstrap();
