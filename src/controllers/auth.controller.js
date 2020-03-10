/**
 * @swagger
 * /loginUser:
 *   post:
 *     tags:
 *       - Auth
 *     name: Login
 *     summary: Login a user
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         schema:
 *           $ref: '#/definitions/LoginUser'
 *         required:
 *           - username
 *           - password
 *     responses:
 *       '200':
 *         description: User found and logged in successfully
 *       '401':
 *         description: Bad usernLoginUserame, not found in db
 *       '404':
 *         description: Username and password don't match
 *       '500':
 *         description: Internal Server Error
 */

module.exports = (router) => {
    router.post("/api/loginUser", (req, res, next) => {});
};

/**
 * @swagger
 * /registerUser:
*   post:
 *     tags:
 *       - Auth
 *     name: Register
 *     summary: Register a user
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         schema:
 *           $ref: '#/definitions/RegisterUser'
 *         required:
 *           - username
 *           - email
 *           - password
 *     responses:
 *       '200':
 *         description: User found and logged in successfully
 *       '401':
 *         description: Bad username, not found in db
 *       '404':
 *         description: Username and password don't match
 *       '500':
 *         description: Internal Server Error
 */

module.exports = (router) => {
    router.post("/api/registerUser", (req, res) => {
        
    });
};
