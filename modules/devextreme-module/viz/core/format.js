/**
 * DevExtreme (viz/core/format.js)
 * Version: 17.2.5
 * Build date: Tue Jan 23 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
"use strict";
var _format = require("../../format_helper").format;
module.exports = function(value, options) {
    return _format(value, options.format, options.precision)
};
