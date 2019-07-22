const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const config = {
    name:{
        type:String
    },
    email:{
        type:String
    },
    username:{
        type:String
    },
    pasword:{
        type:String
    },
    age:{
        type:Number
    }
}

const persona = new Schema(config);
module.exports = mongoose.model('persona',persona);