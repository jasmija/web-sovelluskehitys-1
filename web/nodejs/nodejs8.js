//ASYNC AND WAIT
const mysql = require('mysql');

const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())

var server = app.listen(8087, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "juurimaria",
    database: "example_db"
});

var url = require('url');

conn.connect(function(err) {
    if (err) throw err;
    console.log("Connected to MySQL!");
});

var util = require('util'); // for async calls
// node native promisify
const query = util.promisify(conn.query).bind(conn); // is bind needed?

//http://localhost:8087/api/location?Location_name=
// parametrien kirjoitustapa selaimessa : http://localhost:8087/api/location
app.get("/api/location", function (req, res) {
    console.log("Get events addresses");
    var q = url.parse(req.url, true).query;
    var location = q.Location_name;
    var string;

    var sql = "SELECT Location_id, Location_name, Street_address, City, Zip, Country"
        + " FROM location"
        + " WHERE Location_name= ?";

    (async () => { // IIFE (Immediately Invoked Function Expression)
        try {
            const rows = await query(sql,[location]);
            string = JSON.stringify(rows);
            console.log(string);
            res.send(string);
        }
        catch (err) {
            console.log("Database error!"+ err);
        }
        finally {
            //conn.end();
        }
    })()
});


