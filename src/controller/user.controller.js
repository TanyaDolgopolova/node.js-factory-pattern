import config from "config";
import UserService from "service/user.service";
import AuthMiddleware from "core/middleware/authMiddleware";

module.exports = function UserController(router) {
    /**
     * @swagger
     * /updateUser:
     *   put:
     *     tags:
     *       - User
     *     name: UpdateUser
     *     summary: Update user data
     *     produces:
     *       - application/json
     *     consumes:
     *       - application/json
     *     parameters:
     *       - name: body
     *         in: body
     *         schema:
     *           $ref: '#/definitions/RequestUpdateUser'
     *     security:
     *        - bearer_auth: []
     *     responses:
     *       200:
     *         description: User found and updated successfully.
     *         schema:
     *             type: string
     *             description: Response messsage after update user.
     *       400:
     *         description: Bad user id, not found in db.
     *       500:
     *         description: Internal Server Error.
     */
    router.post(
        `${config.basePath}/updateUser`,
        AuthMiddleware,
        (req, res, next) => UserService.updateUser(req.body, res, next)
    );

    /**
     * @swagger
     * /deleteUser/{id}:
     *   delete:
     *     tags:
     *       - User
     *     name: DeleteUser
     *     summary: Delete user from db
     *     produces:
     *       - application/json
     *     consumes:
     *       - application/json
     *     parameters:
     *       - name: "id"
     *         in: "path"
     *         description: "ID of the user that needs to be deleted"
     *         required: true
     *         type: "string"
     *     security:
     *       - bearer_auth: []
     *     responses:
     *       200:
     *         description: User found and updated successfully.
     *         schema:
     *             type: string
     *             description: Response messsage after delete user.
     *       400:
     *         description: Bad user id, not found in db.
     *       500:
     *         description: Internal Server Error.
     */
    router.delete(
        `${config.basePath}/deleteUser/:id`,
        AuthMiddleware,
        (req, res, next) => UserService.deleteUser(req.params.id, res, next)
    );
};
