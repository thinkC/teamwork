import express from 'express';

const app = express();
const port = process.env.PORT || 3000

var pg = require('pg');
//or native libpq bindings
//var pg = require('pg').native

var conString = "postgres://yahvxwss:LwPKQqQR4lpFdG6npb6UEIq3NiHb3ggk@manny.db.elephantsql.com:5432/yahvxwss"
var client = new pg.Client(conString);
client.connect(function (err) {
    if (err) {
        return console.error('could not connect to postgres', err);
    }
    client.query('SELECT NOW() AS "theTime"', function (err, result) {
        if (err) {
            return console.error('error running query', err);
        }
        console.log(result.rows[0].theTime);
        // >> output: 2018-08-23T14:02:57.117Z
        client.end();
    });
});

app.get('/', (req, res) => {
    res.send('Teamwork Project!')
});

app.listen(port, () => {
    console.log(`server started on port ${port}`)
})