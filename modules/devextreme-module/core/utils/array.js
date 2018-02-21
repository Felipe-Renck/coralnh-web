/**
 * DevExtreme (core/utils/array.js)
 * Version: 17.2.5
 * Build date: Tue Jan 23 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
"use strict";
var isDefined = require("./type").isDefined,
    each = require("./iterator").each,
    objectUtils = require("./object");
var isEmpty = function(entity) {
    return Array.isArray(entity) && !entity.length
};
var wrapToArray = function(entity) {
    return Array.isArray(entity) ? entity : [entity]
};
var intersection = function(a, b) {
    if (!Array.isArray(a) || 0 === a.length || !Array.isArray(b) || 0 === b.length) {
        return []
    }
    var result = [];
    each(a, function(_, value) {
        var index = inArray(value, b);
        if (index !== -1) {
            result.push(value)
        }
    });
    return result
};
var removeDuplicates = function(from, what) {
    if (!Array.isArray(from) || 0 === from.length) {
        return []
    }
    if (!Array.isArray(what) || 0 === what.length) {
        return from.slice()
    }
    var result = [];
    each(from, function(_, value) {
        var index = inArray(value, what);
        if (index === -1) {
            result.push(value)
        }
    });
    return result
};
var normalizeIndexes = function(items, indexParameterName, currentItem, needIndexCallback) {
    var indexedItems = {},
        parameterIndex = 0;
    each(items, function(index, item) {
        index = item[indexParameterName];
        if (isDefined(index)) {
            indexedItems[index] = indexedItems[index] || [];
            if (item === currentItem) {
                indexedItems[index].unshift(item)
            } else {
                indexedItems[index].push(item)
            }
            delete item[indexParameterName]
        }
    });
    objectUtils.orderEach(indexedItems, function(index, items) {
        each(items, function() {
            if (index >= 0) {
                this[indexParameterName] = parameterIndex++
            }
        })
    });
    each(items, function() {
        if (!isDefined(this[indexParameterName]) && (!needIndexCallback || needIndexCallback(this))) {
            this[indexParameterName] = parameterIndex++
        }
    });
    return parameterIndex
};
var inArray = function(value, object) {
    if (!object) {
        return -1
    }
    var array = Array.isArray(object) ? object : object.toArray();
    return array.indexOf(value)
};
var merge = function(array1, array2) {
    for (var i = 0; i < array2.length; i++) {
        array1[array1.length] = array2[i]
    }
    return array1
};
exports.isEmpty = isEmpty;
exports.wrapToArray = wrapToArray;
exports.intersection = intersection;
exports.removeDuplicates = removeDuplicates;
exports.normalizeIndexes = normalizeIndexes;
exports.inArray = inArray;
exports.merge = merge;
