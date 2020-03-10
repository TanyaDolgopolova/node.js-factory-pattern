/**
 * @swagger
 * definitions:
 *   RegisterUser:
 *     type: object
 *     properties:
 *       username:
 *         type: string
 *       email:
 *          type: string
 *          format: email
 *       password:
 *         type: string
 *         format: password
 */

module.exports = function() {
    this.userName = "";
    this.email = "";
    this.password = "";
};
