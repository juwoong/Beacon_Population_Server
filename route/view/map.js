/**
 * Created by juwoong on 2016. 1. 22..
 */
'use strict';
var mongoose = require('mongoose');
var Locate = mongoose.model("location");
var Log = mongoose.model("log");
var User = mongoose.model("user");

/*
* latitude longitude
 37.570717, 126.976940
 37.571312, 126.976908
 37.571992, 126.976897
 37.572587, 126.976865
 37.573846, 126.976801
 37.574739, 126.976747
 37.570836, 126.977530
 37.571482, 126.977498
 37.572162, 126.977444
 37.572698, 126.977305
 37.573302, 126.977251
 37.574058, 126.977251
 37.570436, 126.976511
 37.570725, 126.976071
 37.571116, 126.975749
 37.571601, 126.975374
 37.571592, 126.975996
 37.571652, 126.976500
 37.572111, 126.976532
 37.572927, 126.976500
 37.573633, 126.976511
 37.574186, 126.976479
 37.574067, 126.975942
 37.570995, 126.976548

 * */
var list = [
    {latitude : 37.570717, longitude : 126.976940},
    {latitude : 37.570717, longitude : 126.976940},
    {latitude : 37.571312, longitude : 126.976908},
    {latitude : 37.571992, longitude :126.976897},
    {latitude : 37.572587, longitude : 126.976865},
    {latitude : 37.573846, longitude : 126.976801},
    {latitude : 37.574739, longitude :126.976747},
    {latitude : 37.570836, longitude : 126.977530},
    {latitude : 37.571482, longitude : 126.977498},
    {latitude : 37.572162, longitude : 126.977444},
    {latitude : 37.572698, longitude : 126.977305},
    {latitude : 37.573302, longitude : 126.977251},
    {latitude : 37.574058, longitude : 126.977251},
    {latitude : 37.570436, longitude : 126.976511},
    {latitude : 37.570725, longitude : 126.976071},
    {latitude : 37.571116, longitude : 126.975749},
    {latitude : 37.571601, longitude : 126.975374},
    {latitude : 37.571592, longitude : 126.975996},
    {latitude : 37.571652, longitude : 126.976500},
    {latitude : 37.572111, longitude : 126.976532},
    {latitude : 37.572927, longitude : 126.976500},
    {latitude : 37.573633, longitude : 126.976511},
    {latitude : 37.574186, longitude : 126.976479},
    {latitude : 37.574067, longitude : 126.975942},
    {latitude : 37.570995, longitude : 126.976548},
];
function randomItem(a) {
    return a[Math.floor(Math.random() * a.length)];
}

function* getList(req, res){
    var logs = [];

    for(var i=0; i<300000; i++) {
        var obj = randomItem(list);
        obj.latitude += (0.000005 - (Math.random()/100000));
        obj.longitude += (0.000005 - (Math.random()/100000));

        logs[logs.length] = obj;
    }

    yield this.render("map", {list: logs});
}

module.exports = getList;/**
 * Created by juwoong on 2016. 1. 24..
 */
