/**
 * DevExtreme (viz/gauges/theme_manager.js)
 * Version: 17.2.5
 * Build date: Tue Jan 23 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
"use strict";
var extend = require("../../core/utils/extend").extend,
    _extend = extend,
    BaseThemeManager = require("../core/base_theme_manager").BaseThemeManager;
var ThemeManager = BaseThemeManager.inherit({
    _themeSection: "gauge",
    _fontFields: ["scale.label.font", "valueIndicators.rangebar.text.font", "valueIndicators.textcloud.text.font", "title.font", "title.subtitle.font", "tooltip.font", "indicator.text.font", "loadingIndicator.font", "export.font"],
    _initializeTheme: function() {
        var subTheme, that = this;
        if (that._subTheme) {
            subTheme = _extend(true, {}, that._theme[that._subTheme], that._theme);
            _extend(true, that._theme, subTheme)
        }
        that.callBase.apply(that, arguments)
    }
});
module.exports = ThemeManager;
