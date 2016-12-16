const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

const requiredString = {type: String, required: true};

const schema = new Schema({
    name: requiredString,
    description: String, 
});

module.exports = mongoose.model('Album', schema);