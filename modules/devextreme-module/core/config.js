/**
 * DevExtreme (core/config.js)
 * Version: 17.2.5
 * Build date: Tue Jan 23 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
"use strict";
var extendUtils = require("./utils/extend");
var config = {
    rtlEnabled: false,
    defaultCurrency: "USD",
    designMode: false,
    serverDecimalSeparator: ".",
    decimalSeparator: ".",
    thousandsSeparator: ",",
    forceIsoDateParsing: true,
    wrapActionsBeforeExecute: true,
    useJQuery: void 0
};
var configMethod = function() {
    if (!arguments.length) {
        return config
    }
    extendUtils.extend(config, arguments[0])
};
if (window && window.DevExpress && window.DevExpress.config) {
    configMethod(window.DevExpress.config)
}
module.exports = configMethod;
module.exports.default = module.exports;
