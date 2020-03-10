import mongoose from "mongoose";
import { RoleTypesEnum } from "common/enums/roleTypesEnum";

module.export = new mongoose.Schema({
    _id: String,
    creationDate: Date,
    email: String,
    username: String,
    passwordHash: String,
    isActive: Boolean,
    role: RoleTypesEnum
});
