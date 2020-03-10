import bodyParser from "body-parser";

module.exports = function bodyParserJsonFactory() {
    return bodyParser.json();
};
