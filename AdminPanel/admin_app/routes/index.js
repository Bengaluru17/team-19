const express = require('express');
const router = express.Router();
const pg = require('pg');
const path = require('path');



/* GET home page. */


router.get('/main', function(req, res) {
	var result;

var client = new pg.Client({
	user:"ylvyrtycszshqx",
	password:"d835faa696e7d370a74def7c74c01f3f02a8b317b70a8e23e1aac616fc53ec06",
	database:"d2de65l6fkntou",
	port:5432,
	host:"ec2-54-225-182-108.compute-1.amazonaws.com",
	ssl:true
});
client.connect();

// client.query("CREATE TABLE IF NOT EXISTS emps(firstname varchar(64), lastname varchar(64))");
// client.query("INSERT INTO emps(firstname, lastname) values($1, $2)", ['Ronald', 'McDonald']);
// client.query("INSERT INTO emps(firstname, lastname) values($1, $2)", ['Mayor', 'McCheese']);



var query = client.query("SELECT * FROM answers");
query.on("row", function(row,result) {
    result.addRow(row);
});
query.on("end", function (result) {
    console.log(result.rows);
    client.end();
    res.render('index1', {result1:result.rows});
});

	//console.log(result.rows);
	
	});

router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.get('/stats', function(req, res, next) {
  res.render('stats-bar1', { title: 'Express' });
});

router.get('/overall', function(req, res, next) {
  res.render('overall', { title: 'Express' });
});


module.exports = router;
