/**
 * Created by juwoong on 2016. 1. 22..
 */
'use strict';
var mongoose = require('mongoose');
var Locate = mongoose.model("location");
var Log = mongoose.model("log");
var User = mongoose.model("user");

function* getList(req, res){
    var logs = yield Log.find({});
    var getQuery = yield Locate.find({});
    var userList = yield User.find({});
    var locate = {};
    var username = {};

    for(var i of getQuery) {
        locate[i.uuid] = i.name;
    }

    yield this.render("index", {list: logs, locate : locate, username : username});
}

module.exports = getList;