/**
 * DevExtreme (ui/list/ui.list.edit.decorator_registry.js)
 * Version: 17.2.5
 * Build date: Tue Jan 23 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
"use strict";
var extend = require("../../core/utils/extend").extend;
exports.registry = {};
exports.register = function(option, type, decoratorClass) {
    var decoratorsRegistry = exports.registry;
    var decoratorConfig = {};
    decoratorConfig[option] = decoratorsRegistry[option] ? decoratorsRegistry[option] : {};
    decoratorConfig[option][type] = decoratorClass;
    decoratorsRegistry = extend(decoratorsRegistry, decoratorConfig)
};
