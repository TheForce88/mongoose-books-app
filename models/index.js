var mongoose = require("mongoose");
var Book = require("./book.js");
var Author = require("./author.js");

mongoose.connect("mongodb://localhost/book-app2");

module.exports.Book = Book;
