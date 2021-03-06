/**
 * DevExtreme (core/utils/console.js)
 * Version: 17.2.5
 * Build date: Tue Jan 23 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
"use strict";
var isFunction = require("./type").isFunction;
var logger = function() {
    var console = window.console;

    function info(text) {
        if (!console || !isFunction(console.info)) {
            return
        }
        console.info(text)
    }

    function warn(text) {
        if (!console || !isFunction(console.warn)) {
            return
        }
        console.warn(text)
    }

    function error(text) {
        if (!console || !isFunction(console.error)) {
            return
        }
        console.error(text)
    }
    return {
        info: info,
        warn: warn,
        error: error
    }
}();
var debug = function() {
    function assert(condition, message) {
        if (!condition) {
            throw new Error(message)
        }
    }

    function assertParam(parameter, message) {
        assert(null !== parameter && void 0 !== parameter, message)
    }
    return {
        assert: assert,
        assertParam: assertParam
    }
}();
exports.logger = logger;
exports.debug = debug;
