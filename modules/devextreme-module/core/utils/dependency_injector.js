/**
 * DevExtreme (core/utils/dependency_injector.js)
 * Version: 17.2.5
 * Build date: Tue Jan 23 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
"use strict";
module.exports = function(object) {
    var extend = require("./extend").extend,
        isFunction = require("./type").isFunction,
        each = require("./iterator").each,
        Class = require("../class");
    var BaseClass = Class.inherit(object),
        InjectedClass = BaseClass,
        instance = new InjectedClass(object),
        initialFields = {};
    var injectFields = function(injectionObject, initial) {
        each(injectionObject, function(key) {
            if (isFunction(instance[key])) {
                if (initial || !object[key]) {
                    object[key] = function() {
                        return instance[key].apply(object, arguments)
                    }
                }
            } else {
                if (initial) {
                    initialFields[key] = object[key]
                }
                object[key] = instance[key]
            }
        })
    };
    injectFields(object, true);
    object.inject = function(injectionObject) {
        InjectedClass = InjectedClass.inherit(injectionObject);
        instance = new InjectedClass;
        injectFields(injectionObject)
    };
    object.resetInjection = function() {
        extend(object, initialFields);
        InjectedClass = BaseClass;
        instance = new BaseClass
    };
    return object
};
