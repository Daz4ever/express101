var express = require('express');
var bodyParser = require('body-parser');
var app = express();


// app.get('/hello/:name', function (request, response) {
//   var name = request.params.name || 'world';
//   response.send('Hello ' + name + '!');
// });
//
// app.listen(3000, function() {
//   console.log('Example app listening on port 3000!');
// });


// app.get('/:myage/:name', function (request, response) {
//
//   var age = function(yearBorn) {
//     return 2016 - yearBorn;
//   };
//   var name = request.params.name || 'world';
//   var ageReturned = request.params.myage;
//   response.send('Hello ' + name + '!. You are ' + age(ageReturned) + ' years old!');
// });
//
// app.listen(3000, function() {
//   console.log('Example app listening on port 3000!');
// });

//
app.set('view engine', 'hbs');
app.use(bodyParser.json());



// app.get('/:myage/:name', function (request, response) {



//   var age = function(yearBorn) {
//     return 2016 - yearBorn;
//   };
//
//   var name = request.params.name || 'world';
//   var ageReturned = request.params.myage;
//
//   response.render('hello.hbs', {
//     title: 'Hello',
//     name: name,
//     age: age(ageReturned)
//   });
// });
//
// app.listen(3000, function() {
//   console.log('Example app listening on port 3000!');
// });



 //Used to test in postman
app.post('/hello', function (request, response) {

  var name = request.body.name || 'world';
  response.send("Hello " + name + "!");


});
app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
