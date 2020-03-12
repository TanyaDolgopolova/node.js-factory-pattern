import express from "express";
const routes = [require("../../controller/auth.controller")];

module.exports = function routesFactory() {
    let router = express.Router();
    routes.map(factory => factory(router));

    return router;
};
