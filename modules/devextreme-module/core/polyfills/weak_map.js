/**
 * DevExtreme (core/polyfills/weak_map.js)
 * Version: 17.2.5
 * Build date: Tue Jan 23 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
"use strict";
var inArray = require("../../core/utils/array").inArray,
    WeakMap = window.WeakMap;
if (!WeakMap) {
    WeakMap = function() {
        var keys = [],
            values = [];
        this.set = function(key, value) {
            var index = inArray(key, keys);
            if (index === -1) {
                keys.push(key);
                values.push(value)
            } else {
                values[index] = value
            }
        };
        this.get = function(key) {
            var index = inArray(key, keys);
            if (index === -1) {
                return
            }
            return values[index]
        };
        this.has = function(key) {
            var index = inArray(key, keys);
            if (index === -1) {
                return false
            }
            return true
        };
        this.delete = function(key) {
            var index = inArray(key, keys);
            if (index === -1) {
                return
            }
            keys.splice(index, 1);
            values.splice(index, 1)
        }
    }
}
module.exports = WeakMap;
