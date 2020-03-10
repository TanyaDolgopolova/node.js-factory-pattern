import Cors from "cors";

module.exports = function corsFactory() {
    return Cors({
        origin: "*",
        credentials: true,
        methods: "GET,PUT,POST,DELETE,OPTIONS",
        allowedHeaders:
            "Content-Type,X-Amz-Date,Authorization,X-Api-Key,Origin,Accept,Access-Control-Allow-Headers,Access-Control-Allow-Methods,Access-Control-Allow-Origin",
        preflightContinue: false,
        optionsSuccessStatus: 200
    });
};
