/**
 * @swagger
 * definitions:
 *   RequestLoginUser:
 *     type: object
 *     properties:
 *       username:
 *         type: string
 *       password:
 *         type: string
 *         format: password
 *     required:
 *       - username
 *       - password
 */

module.exports = function() {
    this.userName = "";
    this.password = "";
};
