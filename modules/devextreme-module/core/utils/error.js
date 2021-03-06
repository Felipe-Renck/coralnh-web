/**
 * DevExtreme (core/utils/error.js)
 * Version: 17.2.5
 * Build date: Tue Jan 23 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
"use strict";
var extend = require("./extend").extend,
    consoleUtils = require("./console"),
    stringUtils = require("./string"),
    version = require("../version");
var ERROR_URL = "http://js.devexpress.com/error/" + version.split(".").slice(0, 2).join("_") + "/";
module.exports = function(baseErrors, errors) {
    var exports = {
        ERROR_MESSAGES: extend(errors, baseErrors),
        Error: function() {
            return makeError([].slice.call(arguments))
        },
        log: function(id) {
            var method = "log";
            if (/^E\d+$/.test(id)) {
                method = "error"
            } else {
                if (/^W\d+$/.test(id)) {
                    method = "warn"
                }
            }
            consoleUtils.logger[method]("log" === method ? id : combineMessage([].slice.call(arguments)))
        }
    };
    var combineMessage = function(args) {
        var id = args[0];
        args = args.slice(1);
        return formatMessage(id, formatDetails(id, args))
    };
    var formatDetails = function(id, args) {
        args = [exports.ERROR_MESSAGES[id]].concat(args);
        return stringUtils.format.apply(this, args).replace(/\.*\s*?$/, "")
    };
    var formatMessage = function(id, details) {
        return stringUtils.format.apply(this, ["{0} - {1}. See:\n{2}", id, details, ERROR_URL + id])
    };
    var makeError = function(args) {
        var id, details, message;
        id = args[0];
        args = args.slice(1);
        details = formatDetails(id, args);
        message = formatMessage(id, details);
        return extend(new Error(message), {
            __id: id,
            __details: details
        })
    };
    return exports
};
