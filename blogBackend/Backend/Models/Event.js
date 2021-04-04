let mysqlConfig = require("../Utilities/mysqlConfig");

let initialize = () => {
    mysqlConfig.getDB().query("create table IF NOT EXISTS event (id INT auto_increment primary key, category VARCHAR(30),image VARCHAR(500), title VARCHAR(24), iframeLink VARCHAR(500), descR VARCHAR(9999),descRDJ VARCHAR(9999))");
    mysqlConfig.getDB().query("create table IF NOT EXISTS category (id INT auto_increment primary key, category VARCHAR(30))");
    mysqlConfig.getDB().query("create table IF NOT EXISTS slider (id INT auto_increment primary key, url VARCHAR(4500),href VARCHAR(4500))");
    mysqlConfig.getDB().query("create table IF NOT EXISTS footerlink (id INT auto_increment primary key, name VARCHAR(4500),url VARCHAR(4500))");
    mysqlConfig.getDB().query("create table IF NOT EXISTS page (id INT auto_increment primary key, category VARCHAR(30),title VARCHAR(24), descR VARCHAR(9999))");
    mysqlConfig.getDB().query("create table IF NOT EXISTS uploadLink (id INT auto_increment primary key, link VARCHAR(9999))");
    mysqlConfig.getDB().query("create table IF NOT EXISTS users (id INT auto_increment primary key, uName VARCHAR(100),pW VARCHAR(100),uType VARCHAR(100))");
    mysqlConfig.getDB().query("create table IF NOT EXISTS followers (id INT auto_increment primary key, mail VARCHAR(400))");

}

module.exports = {
    initialize: initialize
}
