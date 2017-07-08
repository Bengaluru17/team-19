const express = require('express');
const router = express.Router();
const pg = require('pg');
const path = require('path');
/*
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

var query = client.query("SELECT name FROM temp");
query.on("row", function (row, result) {
    result.addRow(row);
});
query.on("end", function (result) {
    
    console.log(JSON.stringify(result.rows, null, "    "));
    client.end();
});
*/
/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index1',function(req,res){
		const results = [];
  // Get a Postgres client from the connection pool
  var client = new pg.Client({
	user:"rnefboxmyfnhwa",
	password:"d4ad0a9d817f41fd48994b9af0c2ea0b28c817c22e477311cd21ccf23a3ab6d4",
	database:"d47srlbsoj19eq",
	port:5432,
	host:"ec2-54-235-181-120.compute-1.amazonaws.com",
	ssl:true
});
client.connect();
    // SQL Query > Select Data
    const query = client.query('SELECT * FROM temp;');
    // Stream results back one row at a time
    query.on('row', (row) => {
      results.push(row);
    });
    // After all data is returned, close connection and return results
    query.on('end', () => {
      console.log(JSON.stringify(results.rows, null, "    "));
      //return res.json(results);
      if (!res.headersSent) {
  if (typeof res.writeHead === 'function') res.writeHead(500, {'content-type': 'application/json'});
}
	  res.write(JSON.stringify(results, null, "    ") + "\n");
	  res.end(); 
  //res.render('index1', { title: 'Express' });
		});
	});
	
});

router.get('/stats', function(req, res, next) {
  res.render('stats-bar1', { title: 'Express' });
});

router.get('/overall', function(req, res, next) {
  res.render('overall', { title: 'Express' });
});
module.exports = router;
