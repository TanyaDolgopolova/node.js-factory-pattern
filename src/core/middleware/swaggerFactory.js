import { Router } from "express";
import swaggerDefinition from "swagger.json";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

module.exports = function swaggerFactory() {
    let swaggerSpec = swaggerJSDoc({
        swaggerDefinition,
        apis: ["src/controllers/*.js", "src/common/models/request/*.js"]
    });
    Router().get("/", (req, res) => res.redirect("/swagger"));

    return Router()
        .get("/swagger.json", function(req, res) {
            res.setHeader("Content-Type", "application/json");
            res.send(swaggerSpec);
        })
        .use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
