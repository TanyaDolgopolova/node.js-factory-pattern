/**
 * @swagger
 * definitions:
 *   ResponseLoginUser:
 *     type: object
 *     properties:
 *       accessToken:
 *         type: string
 *       userId:
 *         type: number
 *       username:
 *         type: string
 *       email:
 *         type: string
 *         format: email
 *       firstName:
 *         type: string
 *       lastName: 
 *         type: string
 *     required:
 *        - accessToken
 *        - userId
 *        - username
 *        - email
*/

module.exports = function() {
    this.accessToken = "";
    this.userId = -1;
    this.userName = "";
    this.email = "";
    this.firstName = "";
    this.lastName = "";
};
