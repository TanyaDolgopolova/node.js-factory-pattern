/**
 * @swagger
 * definitions:
 *   RequestRegisterUser:
 *     type: object
 *     properties:
 *       username:
 *         type: string
 *       firstName:
 *         type: string
 *       lastName:
 *         type: string
 *       email:
 *          type: string
 *          format: email
 *       password:
 *         type: string
 *         format: password
 *     required:
 *        - username
 *        - email
 *        - password
 */

module.exports = function() {
    this.userName = "";
    this.email = "";
    this.password = "";
    this.firstName = "";
    this.lastName = "";
};
