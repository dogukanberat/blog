var config = require("../Utilities/config").config;
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'remotemysql.com',
    user: 'C6dhFyew1n',
    password: 'yXLUV7ycKs',
    database: 'C6dhFyew1n',

});

connection.connect(() => {
    require('../Models/Event').initialize();
});

let getDB = () => {
    console.log(connection.state);
    if(connection.state === "disconnected"){
    while(connection.state != "disconnected"){
        getDB();
    }
    }
    return connection;
}

module.exports = {
    getDB: getDB
}


