import mongoose from "mongoose";
import User from "core/schema/userSchema";

let UserRepository = {
    updateUser: async updateData => {
        if (mongoose.Types.ObjectId.isValid(updateData.id)) {
            let res = await User.findOneAndUpdate({ _id: updateData.id });
            return !!res;
        }
    },

    deleteUser: async id => {
        if (mongoose.Types.ObjectId.isValid(id)) {
            let res = await User.findOneAndRemove({ _id: id });
            return !!res;
        }
    }
};

module.exports = UserRepository;
