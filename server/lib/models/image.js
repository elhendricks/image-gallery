const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

const requiredString = {type: String, required: true};

const schema = new Schema({
    name: requiredString,
    link: requiredString,
    description: requiredString, 
    // galleryId: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Gallery'
    // }
});

module.exports = mongoose.model('Image', schema);