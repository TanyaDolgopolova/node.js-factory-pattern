/**
 * @swagger
 * definitions:
 *   RequestUpdateUser:
 *     type: object
 *     properties:
 *       id:
 *         type: string
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

export class RequestUpdateUserModel {
    constructor(id, userName, email, password, firstName, lastName) {
        this.id = id;
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
