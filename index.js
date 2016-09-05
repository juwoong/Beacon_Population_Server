/**
 * Created by juwoong on 2016. 1. 21..
 */
'use strict';

var mongoose = require('mongoose');
var model = require('./model');
var Logger = require('./lib/logger');


global.log = new Logger("population");
global.config = require('./setting.json');
global.encrypt = require('./lib/encrypt');
global.moment = require('moment');

mongoose.connect(config.mongo.url);

require('./model');
require('./app');