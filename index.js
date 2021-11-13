

let express = require('express');
let app = express();

let PORT = process.env.PORT || 3007;

app.listen(PORT, function(){
  console.log('App starting on port:', PORT);
});


const sqlite3 = require('sqlite3');
const { open } = require('sqlite');

open({
  filename: './register.db',
  driver: sqlite3.Database
  
}) .then(async function (db) {
  await db.migrate(); 



  app.get("/",async function(req, res){
    res.render("register-screen");


    
   const register = db.all('select * from register')
   .then(function(register) {
  console.log(register);
 })

  

  });

  app.get('/loggedin-screen', function(req, res) {
    res.render("loggedin-screen"); 

  }); 


  app.post('/Register',  function (req, res) {
    
    console.log(req.body); 


//const insertRegister = 'insert into Register(full_name, id, username) values (?, ?, ?)'; 

//await db.run(insertRegisterSQL, full_name, id, username); 

    res.redirect('loggedin-screen'); 

});
})





const exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//app.get('/', function (req, res) {

    //res.render('home');
//});



//app.post('/action', function (req, res) {
    //.render('index');
//});

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use(express.static('public'));

 