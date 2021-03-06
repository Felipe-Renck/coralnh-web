/**
 * DevExtreme (ui/grid_core/ui.grid_core.utils.js)
 * Version: 17.2.5
 * Build date: Tue Jan 23 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
"use strict";
var $ = require("../../core/renderer"),
    commonUtils = require("../../core/utils/common"),
    typeUtils = require("../../core/utils/type"),
    stringUtils = require("../../core/utils/string"),
    iteratorUtils = require("../../core/utils/iterator"),
    extend = require("../../core/utils/extend").extend,
    inArray = require("../../core/utils/array").inArray,
    toComparable = require("../../core/utils/data").toComparable,
    LoadPanel = require("../load_panel"),
    dataUtils = require("../../data/utils"),
    formatHelper = require("../../format_helper");
var NO_DATA_CLASS = "nodata",
    DATE_INTERVAL_SELECTORS = {
        year: function(value) {
            return value && value.getFullYear()
        },
        month: function(value) {
            return value && value.getMonth() + 1
        },
        day: function(value) {
            return value && value.getDate()
        },
        quarter: function(value) {
            return value && Math.floor(value.getMonth() / 3) + 1
        },
        hour: function(value) {
            return value && value.getHours()
        },
        minute: function(value) {
            return value && value.getMinutes()
        },
        second: function(value) {
            return value && value.getSeconds()
        }
    },
    DEFAULT_DATE_INTERVAL = ["year", "month", "day"],
    DEFAULT_DATETIME_INTERVAL = ["year", "month", "day", "hour", "minute"];
module.exports = function() {
    var getIntervalSelector = function() {
        var groupInterval, nameIntervalSelector, data = arguments[1],
            value = this.calculateCellValue(data);
        if (!typeUtils.isDefined(value)) {
            return null
        } else {
            if (isDateType(this.dataType)) {
                nameIntervalSelector = arguments[0];
                return DATE_INTERVAL_SELECTORS[nameIntervalSelector](value)
            } else {
                if ("number" === this.dataType) {
                    groupInterval = arguments[0];
                    return Math.floor(Number(value) / groupInterval) * groupInterval
                }
            }
        }
    };
    var getDateValues = function(dateValue) {
        if (typeUtils.isDate(dateValue)) {
            return [dateValue.getFullYear(), dateValue.getMonth(), dateValue.getDate(), dateValue.getHours(), dateValue.getMinutes(), dateValue.getSeconds()]
        }
        return iteratorUtils.map(("" + dateValue).split("/"), function(value, index) {
            return 1 === index ? Number(value) - 1 : Number(value)
        })
    };
    var getFilterExpressionForDate = function(filterValue, selectedFilterOperation, target) {
        var dateStart, dateEnd, dateInterval, column = this,
            values = getDateValues(filterValue),
            selector = getFilterSelector(column, target);
        if ("headerFilter" === target) {
            dateInterval = module.exports.getGroupInterval(column)[values.length - 1]
        } else {
            if ("datetime" === column.dataType) {
                dateInterval = "minute"
            }
        }
        switch (dateInterval) {
            case "year":
                dateStart = new Date(values[0], 0, 1);
                dateEnd = new Date(values[0] + 1, 0, 1);
                break;
            case "month":
                dateStart = new Date(values[0], values[1], 1);
                dateEnd = new Date(values[0], values[1] + 1, 1);
                break;
            case "quarter":
                dateStart = new Date(values[0], 3 * values[1], 1);
                dateEnd = new Date(values[0], 3 * values[1] + 3, 1);
                break;
            case "hour":
                dateStart = new Date(values[0], values[1], values[2], values[3]);
                dateEnd = new Date(values[0], values[1], values[2], values[3] + 1);
                break;
            case "minute":
                dateStart = new Date(values[0], values[1], values[2], values[3], values[4]);
                dateEnd = new Date(values[0], values[1], values[2], values[3], values[4] + 1);
                break;
            case "second":
                dateStart = new Date(values[0], values[1], values[2], values[3], values[4], values[5]);
                dateEnd = new Date(values[0], values[1], values[2], values[3], values[4], values[5] + 1);
                break;
            default:
                dateStart = new Date(values[0], values[1], values[2]);
                dateEnd = new Date(values[0], values[1], values[2] + 1)
        }
        switch (selectedFilterOperation) {
            case "<":
                return [selector, "<", dateStart];
            case "<=":
                return [selector, "<", dateEnd];
            case ">":
                return [selector, ">=", dateEnd];
            case ">=":
                return [selector, ">=", dateStart];
            case "<>":
                return [
                    [selector, "<", dateStart], "or", [selector, ">=", dateEnd]
                ];
            default:
                return [
                    [selector, ">=", dateStart], "and", [selector, "<", dateEnd]
                ]
        }
    };
    var getFilterExpressionForNumber = function(filterValue, selectedFilterOperation, target) {
        var interval, startFilterValue, endFilterValue, column = this,
            selector = getFilterSelector(column, target),
            values = ("" + filterValue).split("/"),
            value = Number(values[values.length - 1]),
            isExclude = "exclude" === column.filterType,
            groupInterval = module.exports.getGroupInterval(column);
        if ("headerFilter" === target && groupInterval && typeUtils.isDefined(filterValue)) {
            interval = groupInterval[values.length - 1];
            startFilterValue = [selector, isExclude ? "<" : ">=", value];
            endFilterValue = [selector, isExclude ? ">=" : "<", value + interval];
            return [startFilterValue, isExclude ? "or" : "and", endFilterValue]
        }
        return [selector, selectedFilterOperation || "=", filterValue]
    };
    var getFilterSelector = function(column, target) {
        var selector = column.dataField || column.selector;
        if ("search" === target) {
            selector = column.displayField || column.calculateDisplayValue || selector
        }
        return selector
    };
    var isZeroTime = function(date) {
        return date.getHours() + date.getMinutes() + date.getSeconds() + date.getMilliseconds() < 1
    };
    var getFilterExpressionByRange = function(filterValue) {
        var endFilterValue, startFilterExpression, endFilterExpression, column = this,
            dataField = column.dataField;
        if (Array.isArray(filterValue) && typeUtils.isDefined(filterValue[0]) && typeUtils.isDefined(filterValue[1])) {
            startFilterExpression = [dataField, ">=", filterValue[0]];
            endFilterExpression = [dataField, "<=", filterValue[1]];
            if (isDateType(column.dataType)) {
                if (isZeroTime(filterValue[1])) {
                    endFilterValue = new Date(filterValue[1].getTime());
                    endFilterValue.setDate(filterValue[1].getDate() + 1);
                    endFilterExpression = [dataField, "<", endFilterValue]
                }
            }
            return [startFilterExpression, "and", endFilterExpression]
        }
    };
    var equalSelectors = function(selector1, selector2) {
        if (typeUtils.isFunction(selector1) && typeUtils.isFunction(selector2)) {
            if (selector1.originalCallback && selector2.originalCallback) {
                return selector1.originalCallback === selector2.originalCallback
            }
        }
        return selector1 === selector2
    };
    var isDateType = function(dataType) {
        return "date" === dataType || "datetime" === dataType
    };
    return {
        renderNoDataText: function($element) {
            var that = this;
            $element = $element || this.element();
            if (!$element) {
                return
            }
            var noDataClass = that.addWidgetPrefix(NO_DATA_CLASS),
                noDataElement = $element.find("." + noDataClass).last(),
                isVisible = this._dataController.isEmpty(),
                isLoading = this._dataController.isLoading();
            if (!noDataElement.length) {
                noDataElement = $("<span>").addClass(noDataClass).appendTo($element)
            }
            if (isVisible && !isLoading) {
                noDataElement.removeClass("dx-hidden").text(that._getNoDataText())
            } else {
                noDataElement.addClass("dx-hidden")
            }
        },
        renderLoadPanel: function($element, $container, isLocalStore) {
            var loadPanelOptions, that = this;
            that._loadPanel && that._loadPanel.$element().remove();
            loadPanelOptions = that.option("loadPanel");
            if (loadPanelOptions && ("auto" === loadPanelOptions.enabled ? !isLocalStore : loadPanelOptions.enabled)) {
                loadPanelOptions = extend({
                    shading: false,
                    message: loadPanelOptions.text,
                    position: { of: $element
                    },
                    container: $element
                }, loadPanelOptions);
                that._loadPanel = that._createComponent($("<div>").appendTo($container), LoadPanel, loadPanelOptions)
            } else {
                that._loadPanel = null
            }
        },
        getIndexByKey: function(key, items, keyName) {
            var item, index = -1;
            if (Array.isArray(items)) {
                keyName = arguments.length <= 2 ? "key" : keyName;
                for (var i = 0; i < items.length; i++) {
                    item = typeUtils.isDefined(keyName) ? items[i][keyName] : items[i];
                    if (commonUtils.equalByValue(key, item)) {
                        index = i;
                        break
                    }
                }
            }
            return index
        },
        combineFilters: function(filters, operation) {
            var i, resultFilter = [];
            operation = operation || "and";
            for (i = 0; i < filters.length; i++) {
                if (!filters[i]) {
                    continue
                }
                if (resultFilter.length) {
                    resultFilter.push(operation)
                }
                resultFilter.push(filters[i])
            }
            if (1 === resultFilter.length) {
                resultFilter = resultFilter[0]
            }
            if (resultFilter.length) {
                return resultFilter
            }
        },
        checkChanges: function(changes, changeNames) {
            var i, changesWithChangeNamesCount = 0;
            for (i = 0; i < changeNames.length; i++) {
                if (changes[changeNames[i]]) {
                    changesWithChangeNamesCount++
                }
            }
            return changes.length && changes.length === changesWithChangeNamesCount
        },
        equalFilterParameters: function(filter1, filter2) {
            var i;
            if (Array.isArray(filter1) && Array.isArray(filter2)) {
                if (filter1.length !== filter2.length) {
                    return false
                } else {
                    for (i = 0; i < filter1.length; i++) {
                        if (!module.exports.equalFilterParameters(filter1[i], filter2[i])) {
                            return false
                        }
                    }
                }
                return true
            } else {
                if (typeUtils.isFunction(filter1) && filter1.columnIndex >= 0 && typeUtils.isFunction(filter2) && filter2.columnIndex >= 0) {
                    return filter1.columnIndex === filter2.columnIndex
                } else {
                    return toComparable(filter1) == toComparable(filter2)
                }
            }
        },
        proxyMethod: function(instance, methodName, defaultResult) {
            if (!instance[methodName]) {
                instance[methodName] = function() {
                    var dataSource = this._dataSource;
                    return dataSource ? dataSource[methodName].apply(dataSource, arguments) : defaultResult
                }
            }
        },
        formatValue: function(value, options) {
            var valueText = formatHelper.format(value, options.format, options.precision) || value && value.toString() || "",
                formatObject = {
                    value: value,
                    valueText: options.getDisplayFormat ? options.getDisplayFormat(valueText) : valueText,
                    target: options.target || "row",
                    groupInterval: options.groupInterval
                };
            return options.customizeText ? options.customizeText.call(options, formatObject) : formatObject.valueText
        },
        getFormatOptionsByColumn: function(column, target) {
            return {
                format: column.format,
                precision: column.precision,
                getDisplayFormat: column.getDisplayFormat,
                customizeText: column.customizeText,
                target: target,
                trueText: column.trueText,
                falseText: column.falseText
            }
        },
        getDisplayValue: function(column, value, data, rowType) {
            if (column.displayValueMap && void 0 !== column.displayValueMap[value]) {
                return column.displayValueMap[value]
            } else {
                if (column.calculateDisplayValue && data && "group" !== rowType) {
                    return column.calculateDisplayValue(data)
                } else {
                    if (column.lookup && !("group" === rowType && (column.calculateGroupValue || column.calculateDisplayValue))) {
                        return column.lookup.calculateCellValue(value)
                    }
                }
            }
            return value
        },
        getGroupRowSummaryText: function(summaryItems, summaryTexts) {
            var i, summaryItem, result = "(";
            for (i = 0; i < summaryItems.length; i++) {
                summaryItem = summaryItems[i];
                result += (i > 0 ? ", " : "") + module.exports.getSummaryText(summaryItem, summaryTexts)
            }
            return result += ")"
        },
        getSummaryText: function(summaryItem, summaryTexts) {
            var displayFormat = summaryItem.displayFormat || summaryItem.columnCaption && summaryTexts[summaryItem.summaryType + "OtherColumn"] || summaryTexts[summaryItem.summaryType];
            return this.formatValue(summaryItem.value, {
                format: summaryItem.valueFormat,
                precision: summaryItem.precision,
                getDisplayFormat: function(valueText) {
                    return displayFormat ? stringUtils.format(displayFormat, valueText, summaryItem.columnCaption) : valueText
                },
                customizeText: summaryItem.customizeText
            })
        },
        normalizeSortingInfo: function(sort) {
            sort = sort || [];
            var result, i;
            result = dataUtils.normalizeSortingInfo(sort);
            for (i = 0; i < sort.length; i++) {
                if (sort && sort[i] && void 0 !== sort[i].isExpanded) {
                    result[i].isExpanded = sort[i].isExpanded
                }
                if (sort && sort[i] && void 0 !== sort[i].groupInterval) {
                    result[i].groupInterval = sort[i].groupInterval
                }
            }
            return result
        },
        getFormatByDataType: function(dataType) {
            switch (dataType) {
                case "date":
                    return "shortDate";
                case "datetime":
                    return "shortDateShortTime"
            }
        },
        defaultCalculateFilterExpression: function(filterValue, selectedFilterOperation, target) {
            var column = this,
                selector = getFilterSelector(column, target),
                isSearchByDisplayValue = column.calculateDisplayValue && "search" === target,
                dataType = isSearchByDisplayValue && column.lookup && column.lookup.dataType || column.dataType,
                filter = null;
            if ("headerFilter" === target && null === filterValue) {
                filter = [selector, selectedFilterOperation || "=", null];
                if ("string" === dataType) {
                    filter = [filter, "=" === selectedFilterOperation ? "or" : "and", [selector, selectedFilterOperation || "=", ""]]
                }
            } else {
                if ("string" === dataType && (!column.lookup || isSearchByDisplayValue)) {
                    filter = [selector, selectedFilterOperation || "contains", filterValue]
                } else {
                    if ("between" === selectedFilterOperation) {
                        return getFilterExpressionByRange.apply(column, arguments)
                    } else {
                        if (isDateType(dataType) && typeUtils.isDefined(filterValue)) {
                            return getFilterExpressionForDate.apply(column, arguments)
                        } else {
                            if ("number" === dataType) {
                                return getFilterExpressionForNumber.apply(column, arguments)
                            } else {
                                if ("object" !== dataType) {
                                    filter = [selector, selectedFilterOperation || "=", filterValue]
                                }
                            }
                        }
                    }
                }
            }
            return filter
        },
        getHeaderFilterGroupParameters: function(column, remoteGrouping) {
            var result = [],
                dataField = column.dataField || column.name,
                groupInterval = this.getGroupInterval(column);
            if (groupInterval) {
                iteratorUtils.each(groupInterval, function(index, interval) {
                    result.push(remoteGrouping ? {
                        selector: dataField,
                        groupInterval: interval,
                        isExpanded: index < groupInterval.length - 1
                    } : getIntervalSelector.bind(column, interval))
                });
                return result
            }
            if (remoteGrouping) {
                result = [{
                    selector: dataField,
                    isExpanded: false
                }]
            } else {
                result = function(data) {
                    var result = column.calculateCellValue(data);
                    if (void 0 === result || "" === result) {
                        result = null
                    }
                    return result
                };
                if (column.sortingMethod) {
                    result = [{
                        selector: result,
                        compare: column.sortingMethod.bind(column)
                    }]
                }
            }
            return result
        },
        getGroupInterval: function(column) {
            var index, result = [],
                dateIntervals = ["year", "month", "day", "hour", "minute", "second"],
                groupInterval = column.headerFilter && column.headerFilter.groupInterval,
                interval = "quarter" === groupInterval ? "month" : groupInterval;
            if (isDateType(column.dataType)) {
                result = "datetime" === column.dataType ? DEFAULT_DATETIME_INTERVAL : DEFAULT_DATE_INTERVAL;
                index = inArray(interval, dateIntervals);
                if (index >= 0) {
                    result = dateIntervals.slice(0, index);
                    result.push(groupInterval);
                    return result
                }
                return result
            } else {
                if (typeUtils.isDefined(groupInterval)) {
                    return Array.isArray(groupInterval) ? groupInterval : [groupInterval]
                }
            }
        },
        equalSortParameters: function(sortParameters1, sortParameters2, ignoreIsExpanded) {
            var i;
            sortParameters1 = module.exports.normalizeSortingInfo(sortParameters1);
            sortParameters2 = module.exports.normalizeSortingInfo(sortParameters2);
            if (Array.isArray(sortParameters1) && Array.isArray(sortParameters2)) {
                if (sortParameters1.length !== sortParameters2.length) {
                    return false
                } else {
                    for (i = 0; i < sortParameters1.length; i++) {
                        if (!equalSelectors(sortParameters1[i].selector, sortParameters2[i].selector) || sortParameters1[i].desc !== sortParameters2[i].desc || sortParameters1[i].groupInterval !== sortParameters2[i].groupInterval || !ignoreIsExpanded && Boolean(sortParameters1[i].isExpanded) !== Boolean(sortParameters2[i].isExpanded)) {
                            return false
                        }
                    }
                }
                return true
            } else {
                return (!sortParameters1 || !sortParameters1.length) === (!sortParameters2 || !sortParameters2.length)
            }
        },
        getPointsByColumns: function(items, pointCreated, isVertical, startColumnIndex) {
            var point, i, item, offset, prevItemOffset, rtlEnabled, cellsLength = items.length,
                notCreatePoint = false,
                columnIndex = startColumnIndex || 0,
                result = [];
            for (i = 0; i <= cellsLength; i++) {
                if (i < cellsLength) {
                    item = items.eq(i);
                    offset = item.offset();
                    rtlEnabled = "rtl" === item.css("direction")
                }
                point = {
                    index: columnIndex,
                    x: offset ? offset.left + (!isVertical && rtlEnabled ^ i === cellsLength ? item.outerWidth() : 0) : 0,
                    y: offset ? offset.top + (isVertical && i === cellsLength ? item.outerHeight() : 0) : 0,
                    columnIndex: columnIndex
                };
                if (!isVertical && i > 0) {
                    prevItemOffset = items.eq(i - 1).offset();
                    if (prevItemOffset.top < point.y) {
                        point.y = prevItemOffset.top
                    }
                }
                if (pointCreated) {
                    notCreatePoint = pointCreated(point)
                }
                if (!notCreatePoint) {
                    result.push(point)
                }
                columnIndex++
            }
            return result
        },
        isDateType: isDateType
    }
}();
