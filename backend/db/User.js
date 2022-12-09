const mongoose = require('mongoose');

const usersSchemea = new mongoose.Schema({
    Email:String,
});

module.exports = mongoose.model("users", usersSchemea);