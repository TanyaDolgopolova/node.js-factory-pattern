import mongoose from "mongoose";
import PetTypeEnum from "common/enums/petTypesEnum";

let PetSchema = mongoose.Schema({
    creationDate: Date,
    petName: String,
    type: PetTypeEnum,
    birth: String,
    description: String
});

module.exports = mongoose.model("Pet", PetSchema);
