/**
 * Created by juwoong on 2016. 1. 20..
 */
'use strict';
var koa = require('koa')();
var bodyParser = require('koa-bodyparser');
var app = require('cottage')();
var route = require('./route');
var render = require('koa-ejs');
var path = require('path');
var serve = require('koa-static');
var User = require('mongoose').model('user');

app.use(bodyParser());
//app.use(serve(__dirname+"/static"))
render(koa, {
    root: path.join(__dirname, 'view'),
    layout: 'template',
    viewExt: 'ejs',
    cache: false,
    debug: true,
});
koa.use(serve(__dirname+"/static"));

//log middleware
app.use(function*(next) {
    var start = new Date();
    yield next;
    var end = new Date();
    log.access(this.method + ": " + this.url + ", " + (end-start) + " mills");
});

app.get('/', route.view.list);
app.get('/map', route.view.map);
app.post('/api/user/signup', route.api.user.signup);
app.get('/manual', route.view.manual);

//app.use(function*(next) {
//    if(this.request.header.accesstoken == undefined) {
//        this.response.status = 401;
//        this.body = {"msg" : "토큰 보내세요"};
//    } else {
//        var result = yield user.find({token : this.request.header.accesstoken});
//
//        if(result == null) {
//            this.response.status = 403;
//            this.body = {"msg" : "님 토큰 병신임 ㅅㄱ"};
//        }else {
//            console.log(result._id);
//            this.request.params.userId = result._id;
//            yield next;
//        }
//    }
//});

app.get('/api/locate', route.api.locate.get);
app.post('/api/locate', route.api.locate.post);

koa.use(app).listen(process.env.PORT || config.port, function() {
    console.log("Server start : " + (process.env.PORT || config.port));
});