/*
Usage example:
throw {
  message: `Login failed for username '${username}'.`,
  errorType: errorTypes.loginFailed
};
*/

module.exports = {
    badRequest: Symbol.for("bad request"),
    notFound: Symbol.for("not found"),
    serverError: Symbol.for("server error")
};
