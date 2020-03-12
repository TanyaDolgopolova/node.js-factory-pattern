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
 *        - userId
 *        - username
 *        - email
 */

export class ResponseLoginUserModel {
    constructor(accessToken, user) {
        this.accessToken = accessToken;
        this.userId = user.userId;
        this.userName = user.userName;
        this.email = user.email;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
    }
}
