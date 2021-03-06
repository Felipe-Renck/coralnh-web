/**
 * DevExtreme (core/polyfills/promise.js)
 * Version: 17.2.5
 * Build date: Tue Jan 23 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
"use strict";
var deferredUtils = require("../../core/utils/deferred"),
    Deferred = deferredUtils.Deferred,
    when = deferredUtils.when,
    Promise = window.Promise;
if (!Promise) {
    Promise = function(resolver) {
        var d = new Deferred;
        resolver(d.resolve.bind(this), d.reject.bind(this));
        return d.promise()
    };
    Promise.resolve = function(val) {
        return (new Deferred).resolve(val).promise()
    };
    Promise.reject = function(val) {
        return (new Deferred).reject(val).promise()
    };
    Promise.all = function(promises) {
        return when.apply(this, promises).then(function() {
            return [].slice.call(arguments)
        })
    }
}
module.exports = Promise;
