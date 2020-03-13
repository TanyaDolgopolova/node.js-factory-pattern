/**
 * @swagger
 * definitions:
 *   ResponseLoginUser:
 *     type: object
 *     properties:
 *       accessToken:
 *         type: string
 *       id:
 *         type: string
 *       userName:
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
 *        - id
 *        - username
 *        - email
 */

export class ResponseLoginUserModel {
    constructor(accessToken, user) {
        this.accessToken = accessToken;
        this.id = user.id;
        this.userName = user.userName;
        this.email = user.email;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
    }
}
