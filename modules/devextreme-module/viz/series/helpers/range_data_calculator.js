/**
 * DevExtreme (viz/series/helpers/range_data_calculator.js)
 * Version: 17.2.5
 * Build date: Tue Jan 23 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
"use strict";
var unique = require("../../core/utils").unique,
    _isDefined = require("../../../core/utils/type").isDefined,
    noop = require("../../../core/utils/common").noop,
    DISCRETE = "discrete";

function continuousRangeCalculator(range, minValue, maxValue) {
    range.min = range.min < minValue ? range.min : minValue;
    range.max = range.max > maxValue ? range.max : maxValue
}

function getRangeCalculator(axisType, axis) {
    if (axisType === DISCRETE) {
        return function(range, minValue, maxValue) {
            if (minValue !== maxValue) {
                range.categories.push(maxValue)
            }
            range.categories.push(minValue)
        }
    }
    if (axis) {
        return function(range, value) {
            var interval = axis.calculateInterval(value, range.prevValue),
                minInterval = range.interval;
            range.interval = (minInterval < interval ? minInterval : interval) || minInterval;
            range.prevValue = value;
            continuousRangeCalculator(range, value, value)
        }
    }
    return continuousRangeCalculator
}

function getInitialRange(axisType, dataType, firstValue) {
    var range = {
        axisType: axisType,
        dataType: dataType
    };
    if (axisType === DISCRETE) {
        range.categories = []
    } else {
        range.min = firstValue;
        range.max = firstValue
    }
    return range
}

function processCategories(range) {
    if (range.categories) {
        range.categories = unique(range.categories)
    }
}

function getValueForArgument(point, extraPoint, x) {
    if (extraPoint && _isDefined(extraPoint.value)) {
        var y1 = point.value,
            y2 = extraPoint.value,
            x1 = point.argument,
            x2 = extraPoint.argument;
        return (x - x1) * (y2 - y1) / (x2 - x1) + y1
    } else {
        return point.value
    }
}

function getViewPortFilter(viewport) {
    if (!_isDefined(viewport.max) && !_isDefined(viewport.min)) {
        return function() {
            return true
        }
    }
    if (!_isDefined(viewport.max)) {
        return function(argument) {
            return argument >= viewport.min
        }
    }
    if (!_isDefined(viewport.min)) {
        return function(argument) {
            return argument <= viewport.max
        }
    }
    return function(argument) {
        return argument >= viewport.min && argument <= viewport.max
    }
}

function calculateRangeBetweenPoints(rangeCalculator, range, point, prevPoint, bound) {
    var value = getValueForArgument(point, prevPoint, bound);
    rangeCalculator(range, value, value)
}

function isLineSeries(series) {
    return series.type.toLowerCase().indexOf("line") >= 0 || series.type.toLowerCase().indexOf("area") >= 0
}

function getViewportReducer(series) {
    var viewportFilter, rangeCalculator = getRangeCalculator(series.valueAxisType),
        viewport = series.getArgumentAxis() && series.getArgumentAxis().getViewport() || {},
        calculatePointBetweenPoints = isLineSeries(series) ? calculateRangeBetweenPoints : noop;
    viewportFilter = getViewPortFilter(viewport);
    return function(range, point, index, points) {
        var argument = point.argument;
        if (!point.hasValue()) {
            return range
        }
        if (viewportFilter(argument)) {
            if (!range.startCalc) {
                range.startCalc = true;
                calculatePointBetweenPoints(rangeCalculator, range, point, points[index - 1], viewport.min)
            }
            rangeCalculator(range, point.getMinValue(), point.getMaxValue())
        } else {
            if (_isDefined(viewport.max) && argument > viewport.max) {
                if (!range.startCalc) {
                    calculatePointBetweenPoints(rangeCalculator, range, point, points[index - 1], viewport.min)
                }
                range.endCalc = true;
                calculatePointBetweenPoints(rangeCalculator, range, point, points[index - 1], viewport.max)
            }
        }
        return range
    }
}
module.exports = {
    getRangeData: function(series) {
        var points = series.getPoints(),
            argumentCalculator = getRangeCalculator(series.argumentAxisType, points.length > 1 && series.getArgumentAxis()),
            valueRangeCalculator = getRangeCalculator(series.valueAxisType),
            viewportReducer = getViewportReducer(series),
            range = points.reduce(function(range, point, index, points) {
                var argument = point.argument;
                argumentCalculator(range.arg, argument, argument);
                if (point.hasValue()) {
                    valueRangeCalculator(range.val, point.getMinValue(), point.getMaxValue());
                    viewportReducer(range.viewport, point, index, points)
                }
                return range
            }, {
                arg: getInitialRange(series.argumentAxisType, series.argumentType, points.length ? points[0].argument : void 0),
                val: getInitialRange(series.valueAxisType, series.valueType, points.length ? series.getValueRangeInitialValue() : void 0),
                viewport: getInitialRange(series.valueAxisType, series.valueType, points.length ? series.getValueRangeInitialValue() : void 0)
            });
        processCategories(range.arg);
        processCategories(range.val);
        return range
    },
    getViewport: function(series) {
        var reducer, points = series.getPoints(),
            range = {};
        if (series.valueAxisType !== DISCRETE && series.argumentAxisType !== DISCRETE) {
            reducer = getViewportReducer(series);
            range = getInitialRange(series.valueAxisType, series.valueType, points.length ? series.getValueRangeInitialValue() : void 0);
            points.some(function(point, index) {
                reducer(range, point, index, points);
                return range.endCalc
            })
        }
        return range
    },
    getPointsInViewPort: function(series) {
        var argumentViewPortFilter = getViewPortFilter(series.getArgumentAxis().getViewport() || {}),
            valueViewPort = series.getValueAxis().getViewport() || {},
            valueViewPortFilter = getViewPortFilter(valueViewPort),
            points = series.getPoints(),
            addValue = function(values, point, isEdge) {
                var minValue = point.getMinValue(),
                    maxValue = point.getMaxValue(),
                    isMinValueInViewPort = valueViewPortFilter(minValue),
                    isMaxValueInViewPort = valueViewPortFilter(maxValue);
                if (isMinValueInViewPort) {
                    values.push(minValue)
                }
                if (maxValue !== minValue && isMaxValueInViewPort) {
                    values.push(maxValue)
                }
                if (isEdge && !isMinValueInViewPort && !isMaxValueInViewPort) {
                    if (!values.length) {
                        values.push(valueViewPort.min)
                    } else {
                        values.push(valueViewPort.max)
                    }
                }
            },
            addEdgePoints = isLineSeries(series) ? function(result, points, index) {
                var point = points[index],
                    prevPoint = points[index - 1],
                    nextPoint = points[index + 1];
                if (nextPoint && argumentViewPortFilter(nextPoint.argument)) {
                    addValue(result[1], point, true)
                }
                if (prevPoint && argumentViewPortFilter(prevPoint.argument)) {
                    addValue(result[1], point, true)
                }
            } : noop,
            checkPointInViewport = function(result, point, index) {
                if (argumentViewPortFilter(point.argument)) {
                    addValue(result[0], point)
                } else {
                    addEdgePoints(result, points, index)
                }
                return result
            };
        return points.reduce(checkPointInViewport, [
            [],
            []
        ])
    }
};
