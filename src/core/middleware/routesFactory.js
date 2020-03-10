import express from 'express';
const routes = [
    require("../../controllers/auth.controller")
];

module.exports = function routesFactory() {
  var router = express.Router();
  routes.map(factory => factory(router));
  
  return router;
};