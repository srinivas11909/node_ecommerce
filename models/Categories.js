const mongoose = require("mongoose");
const Schema = mongoose.Schema;


CategorySchema = new Schema({
    categoryName: {type: String}
});


module.exports = mongoose.model('Category', CategorySchema);