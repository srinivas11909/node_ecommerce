const mongoose = require("mongoose");
const Schema = mongoose.Schema;


CategorySchema = new Schema({
    categoryName: {type: String, required: true}
});


module.exports = mongoose.model('Category', CategorySchema);