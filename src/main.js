import express from "express";
import config from "config";
import bodyParser from "body-parser";
import Cors from "cors";
import initializeRoutes from "common/services/initializeRoutes";
import middlewareFactory from "core/middleware/middlewareFactory";

const API_PORT = process.env.API_PORT || 3300;

function bootstrap() {
    var app = express();

    app.use(
        Cors({
            origin: "*",
            credentials: true,
            methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
            allowedHeaders: "Content-Type,Authorization",
            preflightContinue: false,
            optionsSuccessStatus: 204
        })
    );

    initializeRoutes(app);
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(middlewareFactory(config));
    app.listen(API_PORT, function() {
        console.log(`Example app listening on port ${API_PORT}!`);
        console.log("NODE_ENV: " + config.util.getEnv("NODE_ENV"));
    });
}

bootstrap();
