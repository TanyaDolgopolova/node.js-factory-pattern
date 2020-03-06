/**
 * @swagger
 * definitions:
 *   User:
 *     type: object
 *     properties:
 *       username:
 *         type: string
 *       password:
 *         type: string
 *         format: password
 */

module.exports = function() {
    (this.userName = ""), (this.password = "");
};
