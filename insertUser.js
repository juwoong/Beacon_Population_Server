/**
 * Created by juwoong on 2016. 1. 24..
 */
var mongoose = require('mongoose');
var model = require('./model');

mongoose.connect(config.mongo.url);

var userList = [];

for(var i=0; i<100000; i++) {

}

