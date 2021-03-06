/**
 * DevExtreme (core/utils/ready.js)
 * Version: 17.2.5
 * Build date: Tue Jan 23 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
"use strict";
module.exports = function(callback) {
    if ("complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll) {
        callback();
        return
    }
    var loadedCallback = function() {
        callback();
        document.removeEventListener("DOMContentLoaded", loadedCallback)
    };
    document.addEventListener("DOMContentLoaded", loadedCallback)
};
