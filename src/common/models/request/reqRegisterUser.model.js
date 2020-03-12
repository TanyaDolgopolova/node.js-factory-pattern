/**
 * @swagger
 * definitions:
 *   RequestRegisterUser:
 *     type: object
 *     properties:
 *       userName:
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

export class RequestRegisterUserModel {
    constructor(userName, email, password, firstName = null, lastName = null) {
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
