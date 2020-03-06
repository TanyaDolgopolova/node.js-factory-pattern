const middlewareFactoryList = [
    require("./swaggerFactory"),

    // Make sure configureErrorHandler is LAST
    require("./errorHandlerFactory")
];

module.exports = function middlewareFactory(config) {
    return middlewareFactoryList.map(factory => factory(config));
};
