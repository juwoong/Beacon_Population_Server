/**
 * Created by juwoong on 2016. 1. 23..
 */
"use strict";
var mongoose = require('mongoose');
var User = mongoose.model("user");
var moment=  require('moment');

function generateToken(id, pwd) {
    var res = encrypt(id + pwd);
    res = encrypt(res + moment().valueOf());
    return res;
}

function* postUser(req) {
    try {
        if((req.body.id && req.body.passwd && req.body.gender && req.body.age) == undefined) throw new Error("Not exist");

        console.log(req.body);

        var token = generateToken(req.body.id, req.body.passwd);
        var userObject = new User({
              id : req.body.id,
              passwd : encrypt(req.body.passwd),
              info : {
                  gender : req.body.gender,
                  age : req.body.age,
              },
              token : token
        });
        yield userObject.save();

        return {"msg" : "success", "token" : token};
    } catch (e){
        console.log("POST: /api/user/signup , " + e);
        log.error(e);
        this.status = 500;
        return {"msg" : "Server Error"};
    }
}

module.exports = postUser;