var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var shopSchema = new Schema({
    name: {
        type:String,
        required: true,
    },
    phone:{
        type:Number,
        required: true,
    },
    email: {
        type:String,
        required: true,
    },
    password: {
        type:String,
        
    },
    usertype:   {
        type: Number,
        default: 1
    },
    status:   {
        type: Boolean,
        default: false
    }
},{
    timestamps: true
})

var Shops = mongoose.model('Artist', shopSchema);

module.exports = Shops;

