/**
 * DevExtreme (data/query.js)
 * Version: 17.2.5
 * Build date: Tue Jan 23 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
"use strict";
var arrayQueryImpl = require("./array_query"),
    remoteQueryImpl = require("./remote_query");
var queryImpl = {
    array: arrayQueryImpl,
    remote: remoteQueryImpl
};
var query = function() {
    var impl = Array.isArray(arguments[0]) ? "array" : "remote";
    return queryImpl[impl].apply(this, arguments)
};
module.exports = query;
module.exports.queryImpl = queryImpl;
module.exports.default = module.exports;
