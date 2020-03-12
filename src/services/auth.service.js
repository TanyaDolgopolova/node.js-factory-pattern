import AuthRepository from "repository/auth.repository";
import bcrypt from "bcryptjs";
import saltRounds from "common/constants";
import errorTypes from "common/models/errorTypes";
import RoleTypesEnum from "common/enums/roleTypesEnum";
import {ResponseLoginUserModel} from "common/models/response/resLoginUser.model";

var AuthService = {
    loginUser: async (loginData, response, errorHandler) => {
        let userData = await AuthRepository.loginUser(loginData);
        if (!userData) {
            errorHandler({
                message: "User with such username does not exist.",
                errorType: errorTypes.badRequest
            });
            return;
        }

        bcrypt.compare(loginData.password, userData.password, function(
            err,
            result
        ) {
            if (err) {
                errorHandler({
                    message: err.message,
                    errorType: errorTypes.serverError
                });
                return;
            }

            if (result) {
                const accessToken = "";
                return response.json(
                    new ResponseLoginUserModel(
                        accessToken,
                        userData.id,
                        userData.userName,
                        userData.email,
                        userData.firstName,
                        userData.lastName
                    )
                );
            }
        });
    },

    registerUser: (registerData, response, errorHandler) => {
        bcrypt.genSalt(saltRounds, function(err, salt) {
            if (err) {
                errorHandler({
                    message: err.message,
                    errorType: errorTypes.serverError
                });
                return;
            }

            bcrypt.hash(registerData.password, salt, async function(err, hash) {
                if (err) {
                    errorHandler({
                        message: err.message,
                        errorType: errorTypes.serverError
                    });
                    return;
                }

                let result = await AuthRepository.registerUser({
                    creationDate: Date.now(),
                    userName: registerData.userName,
                    email: registerData.email,
                    firstName: registerData.firstName,
                    lastName: registerData.lastName,
                    password: hash,
                    isActive: true,
                    role: RoleTypesEnum[1]
                });

                if (result) {
                    errorHandler({
                        message: result,
                        errorType: errorTypes.badRequest
                    });
                    return;
                }

                return response.json({ message: "Successful register user" });
            });
        });
    }
};

module.exports = AuthService;
