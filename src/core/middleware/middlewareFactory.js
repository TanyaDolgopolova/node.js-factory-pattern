const middlewareFactoryList = [
    require("./swaggerFactory"),
    require("./corsFactory"),
    // Make sure bodyParser is BEFORE routes
    require("./bodyParserJsonFactory"),
    require("./bodyParserUrlFactory"),

    require('./routesFactory'),

    // Make sure configureErrorHandler is LAST
    require("./errorHandlerFactory")
];

module.exports = function middlewareFactory() {
    return middlewareFactoryList.map(factory => factory());
};
