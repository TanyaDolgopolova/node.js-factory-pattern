import mongoose from "mongoose";
import PetTypeEnum from "common/enums/petTypesEnum";

module.export = new mongoose.Schema({
    _id: String,
    creationDate: Date,
    petName: String,
    type: PetTypeEnum,
    birth: String,
    description: String
});
