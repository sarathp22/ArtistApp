var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SpecialWorkSchema = new Schema({
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

var SpecialWorks = mongoose.model('SpecialWork', SpecialWorkSchema);

module.exports = SpecialWorks;