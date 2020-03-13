import UserRepository from "repository/user.repository";
import { ErrorModel } from "common/models/error.model";
import errorTypes from "common/models/errorTypes";

let UserService = {
    updateUser: async (updateData, response, errorHandler) => {
        let result = await UserRepository.updateUser(updateData);
        if (!result) {
            errorHandler(
                new ErrorModel(
                    "Error while updating. User don't exist.",
                    errorTypes.badRequest
                )
            );
            return;
        }

        return response.json({
            message: "Successful updated user."
        });
    },

    deleteUser: async (id, response, errorHandler) => {
        let result = await UserRepository.deleteUser(id);
        if (!result) {
            errorHandler(
                new ErrorModel(
                    "Error while deleting. User don't exist.",
                    errorTypes.badRequest
                )
            );
            return;
        }

        return response.json({
            message: "Successful deleted user."
        });
    }
};

module.exports = UserService;
