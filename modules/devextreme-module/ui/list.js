/**
 * DevExtreme (ui/list.js)
 * Version: 17.2.5
 * Build date: Tue Jan 23 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
"use strict";
var ListEdit = require("./list/ui.list.edit.search"),
    registerComponent = require("../core/component_registrator");
registerComponent("dxList", ListEdit);
module.exports = ListEdit;
module.exports.default = module.exports;
