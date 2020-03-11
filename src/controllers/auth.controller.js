import AuthService from "services/auth.service";
import config from "config";

module.exports = function AuthController(router) {
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
     *           $ref: '#/definitions/RequestLoginUser'
     *     responses:
     *       200:
     *         description: User found and registered successfully.
     *         schema:
     *           $ref: '#/definitions/ResponseLoginUser'
     *       401:
     *         description: Bad user Login userame, not found in db.
     *       404:
     *         description: Username and password don't match.
     *       500:
     *         description: Internal Server Error.
    */
    router.post(`${config.basePath}/loginUser`, (req, res) =>
        res.json(AuthService.loginUser(req.body))
    );

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
     *           $ref: '#/definitions/RequestRegisterUser'
     *     responses:
     *       200:
     *         description: User found and logged in successfully.
     *         schema:
     *             type: string
     *             description: Response messsage after register user.
     *       401:
     *         description: Bad username, not found in db.
     *       404:
     *         description: Username and password don't match.
     *       500:
     *         description: Internal Server Error.
    */
    router.post(`${config.basePath}/registerUser`, (req, res) =>
        res.json(AuthService.registerUser(req.body))
    );
};
