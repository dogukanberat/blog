let environment = "dev";

let serverURLs = {
    "dev": {
        "NODE_SERVER": "http://localhost",
        "NODE_SERVER_PORT": "3050",
        "MYSQL_HOST": 'remotemysql.com',
        "MYSQL_USER": 'C6dhFyew1n',
        "MYSQL_PASSWORD": 'yXLUV7ycKs',
        'MYSQL_DATABASE': 'C6dhFyew1n',
    }
}

let config = {
    "DB_URL_MYSQL": {
        "host": `${serverURLs[environment].MYSQL_HOST}`,
        "user": `${serverURLs[environment].MYSQL_USER}`,
        "password": `${serverURLs[environment].MYSQL_PASSWORD}`,
        "database": `${serverURLs[environment].MYSQL_DATABASE}`
    },
    "NODE_SERVER_PORT": {
        "port": `${serverURLs[environment].NODE_SERVER_PORT}`
    },
    "NODE_SERVER_URL": {
        "url": `${serverURLs[environment].NODE_SERVER}`
    }
};

module.exports = {
    config: config
};
