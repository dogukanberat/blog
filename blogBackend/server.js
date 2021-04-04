let app = require('express')(),
    server = require('http').Server(app),
    bodyParser = require('body-parser')
express = require('express'),
    cors = require('cors'),
    multer = require('multer'),
    http = require('http'),
    path = require('path');

let eventRoute = require('./Backend/Routes/event'),
    util = require('./Backend/Utilities/util');

// File upload settings
const PATH = './uploads';
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, PATH);
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + file.originalname);
    }
});

let upload = multer({storage: storage});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use(function (err, req, res, next) {return res.send({"statusCode": util.statusCode.ONE, "statusMessage": util.statusMessage.SOMETHING_WENT_WRONG});});
app.use('/event', eventRoute);

app.use('/gmeventadmin',express.static(path.join(__dirname, "site/gmeventadmin")));

app.use('/uploads', express.static('uploads'));
app.use('/product',express.static(path.join(__dirname, "site/product")));
app.use('/pages',express.static(path.join(__dirname, "site/pages")));
app.use('/index',express.static(path.join(__dirname, "site/index")));
app.use('/',express.static(path.join(__dirname, "site/index")));

app.use(function (req, res, next) {next();});
app.get('/api', function (req, res) {res.end('File catcher');});
app.post('/api/upload', upload.single('image'), function (req, res) {
    if (!req.file) {
        return res.send({
            success: false
        });

    } else {
        return res.send({
            link: req.file.filename,
            success: true
        })
    }
});
/*first API to check if server is running
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../server/client/dist'));
})*/


server.listen(3050, function () {
    console.log('app listening on port: 3050');
});
