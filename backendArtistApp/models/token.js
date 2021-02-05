var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tokenSchema = new Schema({
    artistId: {
        type:String,
        required: true,
    },
    userId: {
        type:String,
        required: true,
    },
    time:{
        type:String,
        required: true,
    },
    date: {
        type:String,
        required: true,
    }
},{
    timestamps: true
})

var Tokens = mongoose.model('Token', tokenSchema);

module.exports = Tokens;