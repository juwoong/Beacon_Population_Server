/**
 * Created by juwoong on 2016. 1. 21..
 */
'use strict';
var mongoose = require('mongoose');
var Log = mongoose.model('log');
var User = mongoose.model('user');

function* getLocation(req, res) {
    return "Hello World!"
}

function* postLocation (req) {
    try {
        var body = req.body;
        var current = moment();
        console.log(body);
        if(body.uuid == undefined) throw new Error("Send me more.");

        console.log(req.params.userId);

        var logs = new Log({
            uuid: body.uuid,
            timestamp: current,
        });

        yield logs.save();
        var execResult = yield User.update({_id:req.params.userId}, {$pushAll : {locations : [{uuid:body.uuid, timestamp:current}]}});

        return {"msg": "success"};
    } catch(e) {
        console.log('POST: /api/locate - '+ e.stack);
        log.error(e);
        this.status = 500;
        return {"msg" : "error"};
    }
}

module.exports.get = getLocation;
module.exports.post = postLocation;