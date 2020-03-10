import bodyParser from "body-parser";

module.exports = function bodyParserUrlFactory() {
    return bodyParser.urlencoded({ extended: false });
};
