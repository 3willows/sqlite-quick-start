var express = require('express');
var app = express();
var fs = require('fs');
const sqlite3 = require('sqlite3');
const sqlite = require('sqlite');
app.use(express.static('public'))


async function getDBConnection(){
    const db = await sqlite.open({
        filename: "author.db",
        driver: sqlite3.Database
    });
    return db;
}

app.get('/', async function(req, res){
    let db = await getDBConnection();
    let authors = await db.all("SELECT * from author");
    await db.close();
    return res.json(authors)
})

var port = 3000;
app.listen(port, function(){
    console.log('server on! http://localhost:' + port);
});
