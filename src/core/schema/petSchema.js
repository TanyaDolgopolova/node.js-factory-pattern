import mongoose from "mongoose";
import PetTypeEnum from "common/enums/petTypesEnum";

var PetSchema = mongoose.Schema({
    creationDate: Date,
    petName: String,
    type: PetTypeEnum,
    birth: String,
    description: String
});

module.exports = mongoose.model("Pet", PetSchema);
