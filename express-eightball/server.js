const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.listen(process.env.PORT || 3000, () => {
  console.log('Listening on port 3000,examen');
});

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));

var localStorage = require('localStorage')

var antw = ["goed zo","dat klopt niet","waarschijnlijk ga je dood","ok wow"]

/*var LocalStorage = require('node-localstorage').LocalStorage,
localStorage = new LocalStorage('./scratch');

var localStorage = require('localStorage')*/


app.get('/', (req, res) => {
  res.render('form.ejs', {})

});

app.post('/question', (req, res) => {
 // console.log('Hellooooooooooooooooo!')
 //console.log(req.body.question);
 //console.log(req.body);

//var local = localStorage.setItem('id', req.body.question)
 //console.log(localStorage.getItem('userToken'));
 //localStorage.setItem('question',JSON.stringify(req.body.question))
  var random1 = Math.floor(Math.random() * antw.length) ;
  var local = localStorage.setItem("quest", JSON.stringify(req.body.question))
  //console.log(localStorage.getItem('quest'))




  //console.log(items)
 
   //res.render('question.ejs', {question : localStorage.getItem('quest')})
  
  for(var i =0; i < localStorage.length; i++){
    //var a = antw[random1]
    res.render('question.ejs', {question : localStorage.getItem(localStorage.key(i))})
 }




})




