var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var workSchema = new Schema({
    artistId: {
        type:String,
        required: true,
    },
    image: {
        type:String,
        required: true,
    },
},{
    timestamps: true
})

var Works = mongoose.model('Work', workSchema);

module.exports = Works;