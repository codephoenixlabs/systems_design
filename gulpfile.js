const PORT = 3000;
const CONTENT_HTML = 'text/html';
const CONTENT_TEXT = 'text/plain';
const CONTENT_JSON = 'application/json';
const ROOT = './app';

var gulp = require('gulp');
var express = require('express');
var apiUrl = require(ROOT + '/restApi.js');

gulp.task('serve', function () {
    var app = express();
    
    app.use(express.static(ROOT));

    app.get('/', function (req, res) {
        res.statusCode = 200;
        res.setHeader('Content-Type', CONTENT_HTML);
        res.sendFile('index.html', {root : ROOT});
    });
    app.get('/about', function (req, res) {
        res.statusCode = 200;
        res.setHeader('Content-Type', CONTENT_HTML);
        res.sendFile('about.html', {root : ROOT});
    });

    app.get(apiUrl.url().GetStudentbyIdApi, function (req, res) {
        console.info('GetStudentbyIdApi called');
        res.statusCode = 200;
        res.setHeader('Content-Type', CONTENT_JSON);
        var data = {
            Id: 1,
            Name: 'Alex',
            Topic: 'Node.js'
        }
        res.send(JSON.stringify(data));
    });
    app.listen(PORT);
    console.info('server started');
});

gulp.task('default', ['serve']);