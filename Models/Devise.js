const mongooose = require('mongoose');
const Schema = mongooose.Schema;

const config = {
    name:{
        type:String,
        required: true
    },
    type:{
        type:String,
        default:'SENSOR'
    },
    status:{
        type:Number,
        default: 0
    }
}

const DeviseShema = new Schema(config);

module.exports=mongooose.model('Device',DeviseShema);
