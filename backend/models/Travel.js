import mongoose from "mongoose";

const Schema = mongoose.Schema;

const travelSchema = new Schema({

    title : {
        type : String,
        required : true
    },

    description : {
        type : String,
        required : true
    },


});

const Travel = 
    mongoose.model('Travel', travelSchema);

    export default Travel;

