/**
 * @swagger
 * definitions:
 *   RequestLoginUser:
 *     type: object
 *     properties:
 *       userName:
 *         type: string
 *       password:
 *         type: string
 *         format: password
 *     required:
 *       - username
 *       - password
 */

export class RequestLoginUserModel {
    constructor(userName, password) {
        this.userName = userName;
        this.password = password;
    }
}
