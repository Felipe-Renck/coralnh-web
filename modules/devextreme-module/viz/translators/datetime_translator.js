/**
 * DevExtreme (viz/translators/datetime_translator.js)
 * Version: 17.2.5
 * Build date: Tue Jan 23 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
"use strict";
var numericTranslator = require("./numeric_translator");
module.exports = {
    translate: numericTranslator.translate,
    untranslate: numericTranslator.untranslate,
    _getValue: numericTranslator._getValue,
    getInterval: numericTranslator.getInterval,
    zoom: numericTranslator.zoom,
    getMinScale: numericTranslator.getMinScale,
    getScale: numericTranslator.getScale,
    isValid: function(value) {
        return numericTranslator.isValid.call(this, new Date(value))
    },
    parse: function(value) {
        return new Date(value)
    },
    to: numericTranslator.to,
    from: function(position, direction) {
        var result = numericTranslator.from.call(this, position, direction);
        return null === result ? result : new Date(result)
    },
    _add: require("../../core/utils/date").addDateInterval,
    isValueProlonged: numericTranslator.isValueProlonged
};
