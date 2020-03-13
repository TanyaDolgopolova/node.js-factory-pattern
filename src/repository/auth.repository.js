import User from "core/schema/userSchema";

let AuthRepository = {
    loginUser: async loginData => {
        let res = await User.findOne({
            userName: loginData.userName
        });
        if (!res || res.errors || !res.isActive) {
            return null;
        }

        return {
            id: res.id,
            userName: res.userName,
            email: res.email,
            firstName: res.firstName,
            lastName: res.lastName,
            password: res.password,
            role: res.role
        };
    },

    registerUser: async registerData => {
        let user = await User.findOne({
            userName: registerData.userName
        });
        if (user) {
            return false;
        }

        let obj = new User(registerData);
        await obj.save();

        return true;
    }
};

module.exports = AuthRepository;
