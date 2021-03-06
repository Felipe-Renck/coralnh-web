/**
 * DevExtreme (ui/scheduler/ui.scheduler.currentTimeShader.horizontal.js)
 * Version: 17.2.5
 * Build date: Tue Jan 23 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
"use strict";
var Shader = require("./ui.scheduler.currentTimeShader");
var HorizontalCurrentTimeShader = Shader.inherit({
    _renderShader: function() {
        var shaderWidth = this._workspace.getIndicationWidth(),
            maxWidth = this._$container.outerWidth();
        if (shaderWidth > maxWidth) {
            shaderWidth = maxWidth
        }
        if (shaderWidth > 0) {
            this._$shader.width(shaderWidth)
        }
    }
});
module.exports = HorizontalCurrentTimeShader;
