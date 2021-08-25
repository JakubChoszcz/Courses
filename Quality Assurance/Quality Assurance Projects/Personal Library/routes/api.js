/*
*
*
*       Complete the API routing below
*       
*       
*/

'use strict';

require('dotenv').config();
const mongoose = require("mongoose");
const BookModel = require("../book");

// const database = require("../database");

mongoose.connect(process.env.DB)

module.exports = function (app) {

  app.route('/api/books')
    .get(function (req, res){
      //response will be array of book objects
      //json res format: [{"_id": bookid, "title": book_title, "commentcount": num_of_comments },...]

      BookModel
        .find()
        .then((doc) => {
          res.json(doc)
        })
        .catch((err) => {
          res.send(err)
        })
    })
    
    .post(function (req, res){
      let { title } = req.body;
      //response will contain new book object including atleast _id and title

      let book = new BookModel({
        title
      })

      book.save()
        .then((doc) => {
          res.json({ _id: doc._id, title: doc.title });
        })
        .catch((err) => {
          res.send('missing required field title');
        })
    })
    
    .delete(function(req, res){
      //if successful response will be 'complete delete successful'

      BookModel
        .deleteMany()
        .then(() => {
          res.send('complete delete successful');
        })
        .catch((err) => {
          res.send('something went wrong');
        })
    });

  app.route('/api/books/:id')
    .get(function (req, res){
      let bookid = req.params.id;
      //json res format: {"_id": bookid, "title": book_title, "comments": [comment,comment,...]}

      BookModel
        .findById(bookid, (err, doc) => {
          if (err || !doc) return res.send('no book exists');

          res.json(doc);
        })
    })
    
    .post(function(req, res){
      let bookid = req.params.id;
      let comment = req.body.comment;
      //json res format same as .get

      if (!comment) return res.send('missing required field comment');

      BookModel
        .findByIdAndUpdate(bookid, { $push: { comments: comment }, $inc: { commentcount: 1 }}, { new: true }, (err, doc) => {
          if (err || !doc) return res.send('no book exists');

          res.json(doc);
        })
    })
    
    .delete(function(req, res){
      let bookid = req.params.id;
      //if successful response will be 'delete successful'

      BookModel
        .findByIdAndDelete(bookid, (err, doc) => {
          if (err || !doc) return res.send('no book exists');
          
          res.send('delete successful');
        })
    });
  
};
