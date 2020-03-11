import AuthRepository from "repositories/auth.repository";

var AuthService = {
    loginUser: (loginData) => {
        AuthRepository.loginUser(loginData);
    },

    registerUser: (registerData) => {
        AuthRepository.registerUser(registerData);
    }
};

module.exports = AuthService;
