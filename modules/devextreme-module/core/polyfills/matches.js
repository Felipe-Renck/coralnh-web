/**
 * DevExtreme (core/polyfills/matches.js)
 * Version: 17.2.5
 * Build date: Tue Jan 23 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
"use strict";
var matches = Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(selector) {
    var items = (this.document || this.ownerDocument).querySelectorAll(selector);
    for (var i = 0; i < items.length; i++) {
        if (items[i] === this) {
            return true
        }
    }
};
module.exports = function(element, selector) {
    return matches.call(element, selector)
};
