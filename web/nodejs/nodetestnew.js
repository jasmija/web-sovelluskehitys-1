
//ASYNC AND WAIT
const mysql = require('mysql');
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
var bodyParser = require('body-parser'); // Create application/x-www-form-urlencoded parser (for POST)
var url = require('url');

var server = app.listen(8084, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // for reading JSON

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "juurimaria",
    database: "example_db"
});

conn.connect(function(err) {
    if (err) throw err;
    console.log("Connected to MySQL!");
});

var util = require('util');
const res = require("express"); // for async calls
// node native promisify
const query = util.promisify(conn.query).bind(conn); // is bind needed?

// parametrien kirjoitustapa selaimessa : http://localhost:8084/api/events?start=2019-01-01&end=2021-11-29
app.get("/api/events", function (req, res) {
    console.log("Get events from a certain period");
    var q = url.parse(req.url, true).query;
    var params = q.start + " " + q.end;
    var startDate = q.start;
    var endDate = q.end;
    var string;
    // res.send("Getting events: "+params);

    var sql = "SELECT event_date.Date, event.Name, event.Type, Location.Location_name"
        + " FROM event_date, event, location"
        + " WHERE event_date.Event_id = event.Event_id and event.Location_Location_id = Location.Location_id"
        + " and event_date.Date >= ? and event_date.Date <= ?"
        + " GROUP BY Name"
        + " ORDER BY event_date.Date";

    (async () => { // IIFE (Immediately Invoked Function Expression)
        try {
            const rows = await query(sql,[startDate, endDate]);
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

app.post("/api/testingevent", urlencodedParser, function (req, res) {

    //console.log("Request body: " + req.body);
    //console.log("Request body length: " + req.body.getLength);

    console.log("Inside post");
    console.log("body: %j", req.body);

    // get JSON-object from the http-body
    let jsonObj = req.body;
    console.log("Arvo: " + jsonObj.Name);

    // make updates to the database
    let responseString = JSON.stringify(jsonObj)
    res.send("POST succesful: " + responseString);

    if(jsonObj.Location_Location_id>-1) {
        var sql = "INSERT INTO event (Name, Type, Location_Location_id) VALUES ( ?, ?, ?)";

        (async () => { // IIFE (Immediately Invoked Function Expression)
            try {
                const result = await query(sql, [jsonObj.Name, jsonObj.Type, jsonObj.Location_Location_id]);

                let insertedId = result.insertId;
                sql = "INSERT INTO event_date (Date, Event_id) VALUES ( ?, ?)";
                console.log(sql);
                await query(sql, [jsonObj.Date, insertedId]);
                console.log("insertedid " + insertedId);

            } catch (err) {
                console.log("Insertion into tables was unsuccessful!" + err);
                res.send("POST was not succesful " + err);
            }
        })()
    }
});




