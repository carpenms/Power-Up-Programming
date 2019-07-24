
var express = require('express'); //Ensure our express framework has been added
var app = express();
var bodyParser = require('body-parser'); //Ensure our body-parser tool has been added
app.use(bodyParser.json());              // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
var cors = require('cors');

app.use(cors());

//Create Database Connection
var pgp = require('pg-promise')();

/**********************
  Database Connection information
  host: This defines the ip address of the server hosting our database.  We'll be using localhost and run our database on our local machine (i.e. can't be access via the Internet)
  port: This defines what port we can expect to communicate to our database.  We'll use 5432 to talk with PostgreSQL
  database: This is the name of our specific database.  From our previous lab, we created the football_db database, which holds our football data tables
  user: This should be left as postgres, the default user account created when PostgreSQL was installed
  password: This the password for accessing the database.  You'll need to set a password USING THE PSQL TERMINAL THIS IS NOT A PASSWORD FOR POSTGRES USER ACCOUNT IN LINUX!
**********************/
// const dbConfig = {
// 	host: 'localhost',
// 	port: 3306,
// 	database: '3308proj',
// 	user: 'root',
// 	password: 'Dcsd136532'
// };
//
// var db = pgp(dbConfig);

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: 3306,
  password: "password",
  database: "3308proj"
});

con.connect(function(err) {
  if (err) throw err;


});


// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/'));//This line is necessary for us to use relative paths and access our resources directory


// login page
app.get('/', function(req, res) {
  var query = 'select Name from onCategories;';
  con.query(query, function (err, result, fields) {
    if (err) throw err;
    res.json({
      "categories": result
    })
  });
});

app.get('/home', function(req, res) {
  var category = req.query.category;
  console.log(category);
  var query = 'select Url from onCourses where categoryId = (select Id from onCategories where Name = "' + category + '");';
  con.query(query, function (err, result, fields){
    if (err) throw err;
    res.json({
      "Courses": result
  })
})
});

app.listen(3001);
console.log('3001 is the magic port');
