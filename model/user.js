/**
 * Created by juwoong on 2016. 1. 21..
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LogSchema = new Schema({
    uuid : String,
    timestamp : Date,
    userid : {type: Schema.ObjectId, ref:'user'}
});

var UserSchema = new Schema({
    name : String,
    id : String,
    passwd : String,
    info : {
        gender : String,
        age : Number,
    },
    locations : [{
        uuid : String,
        timestamp: Date
    }],
    token : String
});

module.exports.log = mongoose.model("log", LogSchema);
module.exports.user = mongoose.model("user", UserSchema);