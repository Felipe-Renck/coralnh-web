/**
 * DevExtreme (core/utils/variable_wrapper.js)
 * Version: 17.2.5
 * Build date: Tue Jan 23 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
"use strict";
var logger = require("./console").logger,
    dependencyInjector = require("./dependency_injector");
module.exports = dependencyInjector({
    isWrapped: function() {
        return false
    },
    isWritableWrapped: function() {
        return false
    },
    wrap: function(value) {
        return value
    },
    unwrap: function(value) {
        return value
    },
    assign: function() {
        logger.error("Method 'assign' should not be used for not wrapped variables. Use 'isWrapped' method for ensuring.")
    }
});
