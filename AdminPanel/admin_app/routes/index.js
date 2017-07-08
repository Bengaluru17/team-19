const express = require('express');
const router = express.Router();
const pg = require('pg');
const path = require('path');



/* GET home page. */


router.get('/', function(req, res) {
	var result;

var client = new pg.Client({
	user:"rnefboxmyfnhwa",
	password:"d4ad0a9d817f41fd48994b9af0c2ea0b28c817c22e477311cd21ccf23a3ab6d4",
	database:"d47srlbsoj19eq",
	port:5432,
	host:"ec2-54-235-181-120.compute-1.amazonaws.com",
	ssl:true
});
client.connect();

// client.query("CREATE TABLE IF NOT EXISTS emps(firstname varchar(64), lastname varchar(64))");
// client.query("INSERT INTO emps(firstname, lastname) values($1, $2)", ['Ronald', 'McDonald']);
// client.query("INSERT INTO emps(firstname, lastname) values($1, $2)", ['Mayor', 'McCheese']);



var query = client.query("SELECT * FROM students");
query.on("row", function(row,result) {
    result.addRow(row);
});
query.on("end", function (result) {
    console.log(result.rows);
    client.end();
    res.render('index1', {result1:result});
});

	//console.log(result.rows);
	
	});

router.get('/stats', function(req, res, next) {
  res.render('stats-bar1', { title: 'Express' });
});


router.get('/overall', function(req, res, next) {
  res.render('overall', { title: 'Express' });
});



module.exports = router;
