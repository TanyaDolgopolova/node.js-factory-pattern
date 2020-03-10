const middlewareFactoryList = [
    require("./swaggerFactory"),
    require("./corsFactory"),
    require("./bodyParserJsonFactory"),
    require("./bodyParserUrlFactory"),
    // Make sure configureErrorHandler is LAST
    require("./errorHandlerFactory")
];

module.exports = function middlewareFactory(config) {
    return middlewareFactoryList.map(factory => factory(config));
};
