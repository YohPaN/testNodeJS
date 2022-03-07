var mongoose = require('mongoose');
const { schema } = require('./author');

var Schema = mongoose.Schema;

var GenreSchema = new Schema(
    {
        name: {type: String, minLength: 3, maxLength: 100},
    }
);

GenreSchema
.virtual('url')
.get(function () {
    return '/catalog/genre/' + this._id;
});

module.exports = mongoose.model('Genre', GenreSchema);