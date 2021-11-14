



let express = require('express');
let app = express();

let PORT = process.env.PORT || 3007;

app.listen(PORT, function(){
  console.log('App starting on port:', PORT);
});

const exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use(express.static('public'));



const sqlite3 = require('sqlite3');
const { open } = require('sqlite');

open({
  filename: './register.db',
  driver: sqlite3.Database
  
}) .then(async function (db) {
  await db.migrate(); 



  app.get("/",async function(req, res){
    res.render("login-screen");


    
   const register = db.all('select * from register')
   .then(function(register) {
  console.log(register);
 })

  

  });


  app.get('/login-screen', function(req, res) {
    res.render("login-screen"); 

  });
  
  app.get('/register-screen', function(req, res) {
    res.render("register-screen"); 

  });

  app.get('/loggedin-screen', function(req, res) {
    res.render("loggedin-screen"); 

  });

  app.get('/annual-water-increase', function(req, res) {
    res.render("annual-water-increase"); 

  });

  app.get('/check-price-screen', function(req, res) {
    res.render("check-price-screen"); 

  });

  app.get('/type-of-customer', function(req, res) {
    res.render("type-of-customer"); 

  });

  app.get('/water-tariffs', function(req, res) {
    res.render("water-tariffs"); 

  });

  
  
  //app.get('/registration', function(req, res) {
    //res.render("register-screen"); 

  //});

  //app.get('/Register', function(req, res) {
    

  //});



  


  //app.post('/login',  function (req, res) {
    
    //console.log(req.body); 


//const insertRegister = 'insert into Register(full_name, id, username) values (?, ?, ?)'; 

//await db.run(insertRegisterSQL, full_name, id, username); 

    //res.redirect('register-screen'); 

//});
})

app.post('/login',  function (req, res) {
    
  console.log(req.body); 


//const insertRegister = 'insert into Register(full_name, id, username) values (?, ?, ?)'; 

//await db.run(insertRegisterSQL, full_name, id, username); 

  res.redirect('loggedin-screen'); 

});


app.post('/registration',  function (req, res) {
    
  console.log(req.body); 



  res.redirect('register-screen'); 

});

app.post('/register-screen',  function (req, res) {
    
  console.log(req.body); 



  res.redirect('loggedin-screen'); 

});

app.post('/loggedin-screen',  function (req, res) {
    
  console.log(req.body); 



  res.redirect('loggedin-screen'); 

});

app.post('/check-price-screen',  function (req, res) {
    
  console.log(req.body); 



  res.redirect('check-price-screen'); 

});

app.post('/annual-water-increase',  function (req, res) {
    
  console.log(req.body); 



  res.redirect('annual-water-increase'); 

});

app.post('/type-of-customer',  function (req, res) {
    
  console.log(req.body); 



  res.redirect('type-of-customer'); 

});

app.post('/water-tariffs',  function (req, res) {
    
  console.log(req.body); 



  res.redirect('water-tariffs'); 

});






//app.post('/login-screen', function(req, res) {
  //console.log(req.body); 

  //res.redirect('Register-screen'); 

//});







//app.get('/', function (req, res) {

    //res.render('home');
//});



//app.post('/action', function (req, res) {
    //.render('index');
//});


