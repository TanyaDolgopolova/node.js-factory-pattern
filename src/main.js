import express from "express";
import config from "config";
import mongoose from "mongoose";
import middlewareFactory from "core/middleware/middlewareFactory";

const API_PORT = process.env.API_PORT || 3300;

function bootstrap() {
    var app = express();
    mongoose.connect(config.database.dbConfig.url, {
        dbName: config.database.dbConfig.dbName,
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

    app.use(middlewareFactory());
    app.listen(API_PORT, () => {
        console.log(`Example app listening on port ${API_PORT}!`);
        console.log("NODE_ENV: " + config.util.getEnv("NODE_ENV"));
    });
}

bootstrap();
