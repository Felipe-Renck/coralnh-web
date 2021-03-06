/**
 * DevExtreme (ui/scheduler/ui.scheduler.currentTimeShader.js)
 * Version: 17.2.5
 * Build date: Tue Jan 23 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
"use strict";
var $ = require("../../core/renderer"),
    Class = require("../../core/class");
var DATE_TIME_SHADER_CLASS = "dx-scheduler-date-time-shader";
var currentTimeShader = Class.inherit({
    render: function(workspace) {
        this._workspace = workspace;
        this._$container = workspace._dateTableScrollable.$content();
        this._$shader = $("<div>").addClass(DATE_TIME_SHADER_CLASS);
        this._renderShader();
        if (this._$shader && this._workspace.option("crossScrollingEnabled")) {
            this._$shader.css("marginTop", -this._$container.outerHeight());
            this._$shader.css("height", this._$container.outerHeight())
        }
        this._$container.append(this._$shader)
    },
    clean: function() {
        this._$shader && this._$shader.remove()
    }
});
module.exports = currentTimeShader;
