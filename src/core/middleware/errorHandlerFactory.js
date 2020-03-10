import errorTypes from "common/models/errorTypes";
import logFunctionFactory from "common/services/logFunctionFactory";

module.exports = function errorHandlerFactory() {
    const writeError = logFunctionFactory.getErrorLogger("errorHandler");

    return (err, req, res, next) => {
        writeError("In custom error handler:", err);
        if (res.headersSent) {
            next(err);
        }

        switch (err.errorType) {
            case errorTypes.badRequest: {
                res.status(400).json({ message: err.message });
                break;
            }
            case errorTypes.loginFailed: {
                res.status(401).json({
                    message: "The username or password was invalid."
                });
                break;
            }
            case errorTypes.notFound: {
                res.status(404).json({ message: err.message });
                break;
            }
            case errorTypes.serverError: {
                res.status(500).json({ message: err.message });
                break;
            }
            default: {
                next(err);
                break;
            }
        }
    };
};
