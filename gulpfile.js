const PORT = 3000;
const CONTENT_HTML = 'text/html';
const CONTENT_TEXT = 'text/plain';
const CONTENT_JSON = 'application/json';
const ROOT = './app';

var gulp = require('gulp');
var express = require('express');
var apiUrl = require(ROOT + '/restApi.js');
var app = express();

gulp.task('route', function () {
    app.use(express.static(ROOT));
    app.get('/', function (req, res) {
        res.statusCode = 200;
        res.setHeader('Content-Type', CONTENT_HTML);
        res.sendFile('index.html', { root: ROOT });
    });
});

gulp.task('api', function () {
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
});

gulp.task('serve', function () {
    app.listen(PORT);
});

gulp.task('default', ['route', 'api', 'serve']);