/**
 * DevExtreme (integration/jquery/renderer.js)
 * Version: 17.2.5
 * Build date: Tue Jan 23 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
"use strict";
var jQuery = require("jquery");
var rendererBase = require("../../core/renderer_base");
var useJQuery = require("./use_jquery")();
if (useJQuery) {
    rendererBase.set(jQuery)
}
