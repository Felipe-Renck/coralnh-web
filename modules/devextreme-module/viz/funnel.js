/**
 * DevExtreme (viz/funnel.js)
 * Version: 17.2.5
 * Build date: Tue Jan 23 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
"use strict";
var dxFunnel = require("./funnel/funnel");
dxFunnel.addPlugin(require("./funnel/label").plugin);
dxFunnel.addPlugin(require("./core/export").plugin);
dxFunnel.addPlugin(require("./core/title").plugin);
dxFunnel.addPlugin(require("./components/legend").plugin);
dxFunnel.addPlugin(require("./funnel/tracker").plugin);
dxFunnel.addPlugin(require("./funnel/tooltip").plugin);
dxFunnel.addPlugin(require("./core/loading_indicator").plugin);
module.exports = dxFunnel;
module.exports.default = module.exports;
