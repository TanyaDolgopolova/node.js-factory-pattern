/*
Usage example:
throw {
  message: `Login failed for username '${username}'.`,
  errorType: errorTypes.loginFailed
};
*/

module.exports = {
    badRequest: Symbol.for("bad request"),
    loginFailed: Symbol.for("login failed"),
    serverError: Symbol.for("server error"),
    notFound: Symbol.for("not found")
};
