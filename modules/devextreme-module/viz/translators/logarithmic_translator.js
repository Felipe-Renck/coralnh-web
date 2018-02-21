/**
 * DevExtreme (viz/translators/logarithmic_translator.js)
 * Version: 17.2.5
 * Build date: Tue Jan 23 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
"use strict";
var numericTranslator = require("./numeric_translator"),
    vizUtils = require("../core/utils"),
    isDefined = require("../../core/utils/type").isDefined,
    raiseTo = vizUtils.raiseTo,
    getLog = vizUtils.getLog;
module.exports = {
    translate: function(bp, direction) {
        var that = this,
            specialValue = that.translateSpecialCase(bp);
        if (isDefined(specialValue)) {
            return specialValue
        }
        if (that._isValueOutOfCanvas(getLog(bp, that._businessRange.base))) {
            return null
        }
        return that.to(bp, direction)
    },
    untranslate: numericTranslator.untranslate,
    getInterval: numericTranslator.getInterval,
    _getValue: function(value) {
        return Math.pow(this._canvasOptions.base, value)
    },
    zoom: numericTranslator.zoom,
    getMinScale: numericTranslator.getMinScale,
    getScale: function(val1, val2) {
        var base = this._businessRange.base;
        val1 = isDefined(val1) ? getLog(val1, base) : void 0;
        val2 = isDefined(val2) ? getLog(val2, base) : void 0;
        return numericTranslator.getScale.call(this, val1, val2)
    },
    isValid: function(value) {
        return numericTranslator.isValid.call(this, getLog(value, this._businessRange.base))
    },
    parse: numericTranslator.parse,
    to: function(value, direction) {
        return numericTranslator.to.call(this, getLog(value, this._businessRange.base), direction)
    },
    from: function(position, direction) {
        var result = numericTranslator.from.call(this, position, direction);
        return null !== result ? raiseTo(result, this._businessRange.base) : result
    },
    _add: function(value, diff, dir) {
        var b = this._businessRange.base;
        return raiseTo(numericTranslator._add(getLog(value, b), diff, dir), b)
    },
    isValueProlonged: numericTranslator.isValueProlonged,
    getMinBarSize: function(minBarSize) {
        var visibleArea = this.getCanvasVisibleArea(),
            minValue = this.untranslate(visibleArea.min + minBarSize),
            canvasOptions = this._canvasOptions;
        return Math.pow(canvasOptions.base, canvasOptions.rangeMinVisible + getLog(this.untranslate(visibleArea.min), canvasOptions.base) - getLog(!isDefined(minValue) ? this.untranslate(visibleArea.max) : minValue, canvasOptions.base))
    },
    checkMinBarSize: function(initialValue, minShownValue, stackValue) {
        var minBarSize, updateValue, canvasOptions = this._canvasOptions,
            prevValue = stackValue - initialValue,
            baseMethod = this.constructor.prototype.checkMinBarSize;
        if (isDefined(minShownValue) && prevValue > 0) {
            minBarSize = baseMethod(vizUtils.getLog(stackValue / prevValue, canvasOptions.base), vizUtils.getLog(minShownValue, canvasOptions.base) - canvasOptions.rangeMinVisible);
            updateValue = Math.pow(canvasOptions.base, vizUtils.getLog(prevValue, canvasOptions.base) + minBarSize) - prevValue
        } else {
            updateValue = baseMethod(initialValue, minShownValue)
        }
        return updateValue
    }
};
