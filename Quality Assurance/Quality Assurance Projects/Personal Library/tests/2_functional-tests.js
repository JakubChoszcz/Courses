/*
*
*
*       FILL IN EACH FUNCTIONAL TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]-----
*       
*/

const chaiHttp = require('chai-http');
const chai = require('chai');
const assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

let testBookId;

suite('Functional Tests', function() {

  /*
  * ----[EXAMPLE TEST]----
  * Each test should completely test the response of the API end-point including response status code!
  */
  // test('#example Test GET /api/books', function(done){
  //    chai.request(server)
  //     .get('/api/books')
  //     .end(function(err, res){
  //       assert.equal(res.status, 200);
  //       assert.isArray(res.body, 'response should be an array');
  //       assert.property(res.body[0], 'commentcount', 'Books in array should contain commentcount');
  //       assert.property(res.body[0], 'title', 'Books in array should contain title');
  //       assert.property(res.body[0], '_id', 'Books in array should contain _id');
  //       done();
  //     });
  // });
  /*
  * ----[END of EXAMPLE TEST]----
  */

  suite('Routing tests', async function()  {

     suite('POST /api/books with title => create book object/expect book object', function() {
      
      test('Test POST /api/books with title', function(done) {
        chai
          .request(server)
          .post('/api/books')
          .send({
            title: 'test book'
          })
          .end((req, res) => {
            assert.equal(res.status, 200);
            assert.equal(res.body.title, 'test book');
            testBookId = res.body._id;
            done();
          })
      });
      
      test('Test POST /api/books with no title given', function(done) {
        chai
          .request(server)
          .post('/api/books')
          .send()
          .end((req, res) => {
            assert.equal(res.status, 200);
            assert.equal(res.text, 'missing required field title');
            done();
          })
      });
      
    });


    suite('GET /api/books => array of books', function(){
      
      test('Test GET /api/books',  function(done){
        chai
          .request(server)
          .get('/api/books')
          .end((req, res) => {
            assert.equal(res.status, 200);
            assert.isArray(res.body);
            done();
          })
      });      
      
    });


    suite('GET /api/books/[id] => book object with [id]', function(){
      
      test('Test GET /api/books/[id] with id not in db',  function(done){
        chai
          .request(server)
          .get('/api/books/1234')
          .end((req, res) => {
            assert.equal(res.status, 200);
            assert.equal(res.text, 'no book exists')
            done();
          })
      });
      
      test('Test GET /api/books/[id] with valid id in db',  function(done){
        chai
          .request(server)
          .get(`/api/books/${testBookId}`)
          .end((req, res) => {
            assert.equal(res.status, 200);
            assert.equal(res.body._id, testBookId);
            assert.equal(res.body.title, "test book");
            done();
          })
      });
      
    });


    suite('POST /api/books/[id] => add comment/expect book object with id', function(){
      
      test('Test POST /api/books/[id] with comment', function(done){
        chai 
          .request(server)
          .post(`/api/books/${testBookId}`)
          .send({
            comment: "test comment"
          })
          .end((req, res) => {
            const { body } = res;

            assert.equal(res.status, 200);
            assert.equal(body._id, testBookId);
            assert.equal(body.title, 'test book');
            assert.isArray(body.comments);
            done();
          })
      });

      test('Test POST /api/books/[id] without comment field', function(done){
        chai
        .request(server)
        .post(`/api/books/${testBookId}`)
        .end((req, res) => {
          assert.equal(res.status, 200);
          assert.equal(res.text, 'missing required field comment')
          done();
        })
      });

      test('Test POST /api/books/[id] with comment, id not in db', function(done){
        chai 
          .request(server)
          .post('/api/books/1234')
          .send({
            comment: "test comment"
          })
          .end((req, res) => {
            assert.equal(res.status, 200);
            assert.equal(res.text, 'no book exists');
            done();
          })
      });
      
    });

    suite('DELETE /api/books/[id] => delete book object id', function() {

      test('Test DELETE /api/books/[id] with valid id in db', function(done){
        chai 
          .request(server)
          .delete(`/api/books/${testBookId}`)
          .send()
          .end((req, res) => {
            assert.equal(res.status, 200);
            assert.equal(res.text, 'delete successful');
            done();
          })
      });

      test('Test DELETE /api/books/[id] with  id not in db', function(done){
        chai 
          .request(server)
          .delete('/api/books/1234')
          .send()
          .end((req, res) => {
            assert.equal(res.status, 200);
            assert.equal(res.text, 'no book exists');
            done();
          })
      });

    });
  });

});
