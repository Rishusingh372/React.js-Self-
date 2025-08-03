const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ListingSchema = new Schema({
    name:String,
    number:Number,
    city:String

});
const Listing = mongoose.model("Listing", ListingSchema);
module.exports = Listing;