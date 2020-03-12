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
    constructor(accessToken, userId, userName, email, firstName, lastName) {
        this.accessToken = accessToken;
        this.userId = userId;
        this.userName = userName;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
