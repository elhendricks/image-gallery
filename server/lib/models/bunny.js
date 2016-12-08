const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

const requiredString = {type: String, required: true};

const schema = new Schema({
    name: requiredString,
    link: requiredString,
    description: requiredString
});

module.exports = mongoose.model('Bunny', schema);