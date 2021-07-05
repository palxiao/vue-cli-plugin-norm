#!/usr/bin/env node

var express = require('express');
// var http = require('http');
var fs = require('fs');
var open = require('open');
var bodyParser = require('body-parser');
var marked = require('marked');
var app = express();

app.use(express.static('./node_modules/vue-cli-plugin-norm/lib/md2html'));  //加载静态文件

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/getMdFile',urlencodedParser, function(req, res) {

    var data = fs.readFileSync('_CHANGELOG.md', 'utf-8');
    res.end(JSON.stringify({
        body : marked(data)
    }));
    
} );

//启动端口监听
var port = process.env.PORT || 8088
var server = app.listen(port, function () {

    // var host = server.address().address;
    var host = '127.0.0.1';
    var port = server.address().port;

    console.log("runing http://%s:%s", host, port)
    open(`http://${host}:${port}`);

});