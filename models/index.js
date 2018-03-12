var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/book-app2");

module.exports.Books = require("./book.js");
module.exports.Authors = require("./author.js");
