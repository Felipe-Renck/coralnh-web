/**
 * DevExtreme (viz/translators/category_translator.js)
 * Version: 17.2.5
 * Build date: Tue Jan 23 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
"use strict";
var isDefined = require("../../core/utils/type").isDefined,
    round = Math.round;
module.exports = {
    translate: function(category, directionOffset) {
        var stickDelta, that = this,
            canvasOptions = that._canvasOptions,
            categoryIndex = that._categoriesToPoints[category.valueOf()],
            specialValue = that.translateSpecialCase(category),
            startPointIndex = canvasOptions.startPointIndex || 0,
            stickInterval = that._options.stick ? 0 : .5;
        if (isDefined(specialValue)) {
            return specialValue
        }
        if (!categoryIndex && 0 !== categoryIndex) {
            return null
        }
        directionOffset = directionOffset || 0;
        stickDelta = categoryIndex + stickInterval - startPointIndex + .5 * directionOffset;
        return round(that._calculateProjection(canvasOptions.interval * stickDelta))
    },
    untranslate: function(pos, directionOffset, enableOutOfCanvas) {
        var that = this,
            canvasOptions = that._canvasOptions,
            startPoint = canvasOptions.startPoint,
            categories = that.visibleCategories || that._categories,
            categoriesLength = categories.length,
            result = 0,
            stickInterval = that._options.stick ? .5 : 0;
        if (!enableOutOfCanvas && (pos < startPoint || pos > canvasOptions.endPoint)) {
            return null
        }
        directionOffset = directionOffset || 0;
        result = round((pos - startPoint) / canvasOptions.interval + stickInterval - .5 - .5 * directionOffset);
        if (categoriesLength === result) {
            result--
        }
        if (result === -1) {
            result = 0
        }
        if (canvasOptions.invert) {
            result = categoriesLength - result - 1
        }
        return categories[result]
    },
    getInterval: function() {
        return this._canvasOptions.interval
    },
    zoom: function(translate, scale) {
        var endCategoryIndex, newVisibleCategories, newInterval, that = this,
            canvasOptions = that._canvasOptions,
            stick = that._options.stick,
            invert = canvasOptions.invert,
            interval = canvasOptions.interval * scale,
            translateCategories = translate / interval,
            startCategoryIndex = parseInt((canvasOptions.startPointIndex || 0) + translateCategories + .5),
            categoriesLength = parseInt(canvasOptions.canvasLength / interval + (stick ? 1 : 0)) || 1,
            categories = that._categories;
        if (invert) {
            startCategoryIndex = parseInt((canvasOptions.startPointIndex || 0) + (that.visibleCategories || []).length - translateCategories + .5) - categoriesLength
        }
        if (startCategoryIndex < 0) {
            startCategoryIndex = 0
        }
        endCategoryIndex = startCategoryIndex + categoriesLength;
        if (endCategoryIndex > categories.length) {
            endCategoryIndex = categories.length;
            startCategoryIndex = endCategoryIndex - categoriesLength;
            if (startCategoryIndex < 0) {
                startCategoryIndex = 0
            }
        }
        newVisibleCategories = categories.slice(parseInt(startCategoryIndex), parseInt(endCategoryIndex));
        newInterval = that._getDiscreteInterval(newVisibleCategories.length, canvasOptions);
        scale = newInterval / canvasOptions.interval;
        translate = that.translate(!invert ? newVisibleCategories[0] : newVisibleCategories[newVisibleCategories.length - 1]) * scale - (canvasOptions.startPoint + (stick ? 0 : newInterval / 2));
        return {
            min: newVisibleCategories[0],
            max: newVisibleCategories[newVisibleCategories.length - 1],
            translate: translate,
            scale: scale
        }
    },
    getMinScale: function(zoom) {
        var that = this,
            canvasOptions = that._canvasOptions,
            categoriesLength = (that.visibleCategories || that._categories).length;
        categoriesLength += (parseInt(.1 * categoriesLength) || 1) * (zoom ? -2 : 2);
        return canvasOptions.canvasLength / (Math.max(categoriesLength, 1) * canvasOptions.interval)
    },
    getScale: function(min, max) {
        var that = this,
            canvasOptions = that._canvasOptions,
            visibleArea = that.getCanvasVisibleArea(),
            stickOffset = !that._options.stick && 1,
            minPoint = isDefined(min) ? that.translate(min, -stickOffset) : null,
            maxPoint = isDefined(max) ? that.translate(max, +stickOffset) : null;
        if (null === minPoint) {
            minPoint = canvasOptions.invert ? visibleArea.max : visibleArea.min
        }
        if (null === maxPoint) {
            maxPoint = canvasOptions.invert ? visibleArea.min : visibleArea.max
        }
        return that.canvasLength / Math.abs(maxPoint - minPoint)
    },
    isValid: function(value) {
        return isDefined(value) ? this._categoriesToPoints[value.valueOf()] >= 0 : false
    },
    parse: function(value) {
        return value
    },
    to: function(value, direction) {
        var canvasOptions = this._canvasOptions,
            categoryIndex = this._categoriesToPoints[value.valueOf()],
            startPointIndex = canvasOptions.startPointIndex || 0,
            stickDelta = categoryIndex + (this._options.stick ? 0 : .5) - startPointIndex + (this._businessRange.invert ? -1 : 1) * direction * .5;
        return round(this._calculateProjection(canvasOptions.interval * stickDelta))
    },
    from: function(position, direction) {
        var canvasOptions = this._canvasOptions,
            startPoint = canvasOptions.startPoint,
            categories = this._categories,
            categoriesLength = categories.length,
            stickInterval = this._options.stick ? .5 : 0,
            result = round((position - startPoint) / canvasOptions.interval + stickInterval - .5 - .5 * direction);
        if (categoriesLength === result) {
            result--
        }
        if (result === -1) {
            result = 0
        }
        if (canvasOptions.invert) {
            result = categoriesLength - result - 1
        }
        return categories[result]
    },
    _add: function() {
        return NaN
    },
    isValueProlonged: true
};
