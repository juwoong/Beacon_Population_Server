/**
 * Created by juwoong on 2016. 1. 21..
 */
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LocationSchema = new Schema({
    name : String,
    uuid : String,
    location : {
        longitude : Number,
        latitude : Number,
    }
});

module.exports = mongoose.model("location", LocationSchema);