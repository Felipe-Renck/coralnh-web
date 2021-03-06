/**
 * DevExtreme (ui/grid_core/ui.grid_core.grid_view.js)
 * Version: 17.2.5
 * Build date: Tue Jan 23 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
"use strict";
var $ = require("../../core/renderer"),
    modules = require("./ui.grid_core.modules"),
    commonUtils = require("../../core/utils/common"),
    each = require("../../core/utils/iterator").each,
    typeUtils = require("../../core/utils/type"),
    messageLocalization = require("../../localization/message"),
    when = require("../../core/utils/deferred").when;
var TABLE_CLASS = "table",
    BORDERS_CLASS = "borders",
    TABLE_FIXED_CLASS = "table-fixed",
    IMPORTANT_MARGIN_CLASS = "important-margin",
    TEXT_CONTENT_CLASS = "text-content",
    HIDDEN_CLASS = "dx-hidden",
    HIDDEN_COLUMNS_WIDTH = "adaptiveHidden",
    EDITORS_INPUT_SELECTOR = "input:not([type='hidden'])",
    EMPTY_GRID_ROWS_HEIGHT = 100,
    LOADPANEL_MARGIN = 50,
    VIEW_NAMES = ["columnsSeparatorView", "blockSeparatorView", "trackerView", "headerPanel", "columnHeadersView", "rowsView", "footerView", "columnChooserView", "pagerView", "draggingHeaderView", "contextMenuView", "errorView", "headerFilterView"];
var isPercentWidth = function(width) {
    return typeUtils.isString(width) && "%" === width.slice(-1)
};
var mergeArraysByMaxValue = function(values1, values2) {
    var i, result = [];
    if (values1 && values2 && values1.length && values1.length === values2.length) {
        for (i = 0; i < values1.length; i++) {
            result.push(values1[i] > values2[i] ? values1[i] : values2[i])
        }
    } else {
        if (values1 && values1.length) {
            result = values1
        } else {
            if (values2) {
                result = values2
            }
        }
    }
    return result
};
var getContainerHeight = function($container) {
    var clientHeight = $container.get(0).clientHeight,
        paddingTop = parseFloat($container.css("paddingTop")),
        paddingBottom = parseFloat($container.css("paddingBottom"));
    return clientHeight - paddingTop - paddingBottom
};
var ResizingController = modules.ViewController.inherit({
    _initPostRenderHandlers: function() {
        var that = this,
            dataController = that._dataController;
        if (!that._refreshSizesHandler) {
            that._refreshSizesHandler = function(e) {
                dataController.changed.remove(that._refreshSizesHandler);
                var resizeDeferred, changeType = e && e.changeType,
                    isDelayed = e && e.isDelayed,
                    items = dataController.items();
                if (!e || "refresh" === changeType || "prepend" === changeType || "append" === changeType) {
                    if (!isDelayed) {
                        resizeDeferred = that.resize()
                    }
                } else {
                    if ("update" === changeType) {
                        if ((items.length > 1 || "insert" !== e.changeTypes[0]) && !(0 === items.length && "remove" === e.changeTypes[0])) {
                            that._rowsView.resize()
                        } else {
                            resizeDeferred = that.resize()
                        }
                    }
                }
                if (changeType && "updateSelection" !== changeType && !isDelayed) {
                    when(resizeDeferred).done(function() {
                        that.component._fireContentReadyAction()
                    })
                }
            };
            that._dataController.changed.add(function() {
                that._dataController.changed.add(that._refreshSizesHandler)
            })
        }
    },
    _getBestFitWidths: function() {
        var rowsColumnWidths, headerColumnWidths, footerColumnWidths, resultWidths, that = this;
        rowsColumnWidths = that._rowsView.getColumnWidths();
        headerColumnWidths = that._columnHeadersView && that._columnHeadersView.getColumnWidths();
        footerColumnWidths = that._footerView && that._footerView.getColumnWidths();
        resultWidths = mergeArraysByMaxValue(rowsColumnWidths, headerColumnWidths);
        resultWidths = mergeArraysByMaxValue(resultWidths, footerColumnWidths);
        return resultWidths
    },
    _setVisibleWidths: function(visibleColumns, widths) {
        var columnsController = this._columnsController;
        columnsController.beginUpdate();
        each(visibleColumns, function(index, column) {
            var columnId = column.command ? "command:" + column.command : column.index;
            columnsController.columnOption(columnId, "visibleWidth", widths[index])
        });
        columnsController.endUpdate()
    },
    _toggleBestFitMode: function(isBestFit) {
        var $element = this.component.$element();
        $element.find("." + this.addWidgetPrefix(TABLE_CLASS)).toggleClass(this.addWidgetPrefix(TABLE_FIXED_CLASS), !isBestFit);
        $element.find(EDITORS_INPUT_SELECTOR).toggleClass(HIDDEN_CLASS, isBestFit);
        $element.find(".dx-group-cell").toggleClass(HIDDEN_CLASS, isBestFit);
        $element.find(".dx-header-row ." + this.addWidgetPrefix(TEXT_CONTENT_CLASS)).css("maxWidth", "")
    },
    _synchronizeColumns: function() {
        var resetBestFitMode, that = this,
            columnsController = that._columnsController,
            visibleColumns = columnsController.getVisibleColumns(),
            columnAutoWidth = that.option("columnAutoWidth"),
            needBestFit = that._needBestFit(),
            hasMinWidth = false,
            isColumnWidthsCorrected = false,
            resultWidths = [],
            normalizeWidthsByExpandColumns = function() {
                var expandColumnWidth;
                each(visibleColumns, function(index, column) {
                    if ("expand" === column.command) {
                        expandColumnWidth = resultWidths[index]
                    }
                });
                each(visibleColumns, function(index, column) {
                    if ("expand" === column.command && expandColumnWidth) {
                        resultWidths[index] = expandColumnWidth
                    }
                })
            };
        !needBestFit && each(visibleColumns, function(index, column) {
            if ("auto" === column.width || column.fixed) {
                needBestFit = true;
                return false
            }
        });
        each(visibleColumns, function(index, column) {
            if (column.minWidth) {
                hasMinWidth = true;
                return false
            }
        });
        that._setVisibleWidths(visibleColumns, []);
        if (needBestFit) {
            that._toggleBestFitMode(true);
            resetBestFitMode = true
        }
        commonUtils.deferUpdate(function() {
            if (needBestFit) {
                resultWidths = that._getBestFitWidths();
                each(visibleColumns, function(index, column) {
                    var columnId = column.command ? "command:" + column.command : column.index;
                    columnsController.columnOption(columnId, "bestFitWidth", resultWidths[index], true)
                })
            } else {
                if (hasMinWidth) {
                    resultWidths = that._getBestFitWidths()
                }
            }
            each(visibleColumns, function(index) {
                if ("auto" !== this.width) {
                    if (this.width) {
                        resultWidths[index] = this.width
                    } else {
                        if (!columnAutoWidth) {
                            resultWidths[index] = void 0
                        }
                    }
                }
            });
            if (resetBestFitMode) {
                that._toggleBestFitMode(false);
                resetBestFitMode = false
            }
            isColumnWidthsCorrected = that._correctColumnWidths(resultWidths, visibleColumns);
            if (columnAutoWidth) {
                normalizeWidthsByExpandColumns();
                that._processStretch(resultWidths, visibleColumns)
            }
            commonUtils.deferRender(function() {
                if (needBestFit || isColumnWidthsCorrected) {
                    that._setVisibleWidths(visibleColumns, resultWidths)
                }
            })
        })
    },
    _needBestFit: function() {
        return this.option("columnAutoWidth") || this._maxHeightHappened
    },
    _getAverageColumnsWidth: function(resultWidths) {
        var contentWidth = this._rowsView.contentWidth(),
            totalWidth = this._getTotalWidth(resultWidths, contentWidth),
            columnCountWithoutWidth = resultWidths.filter(function(width) {
                return void 0 === width
            }).length;
        return (contentWidth - totalWidth) / columnCountWithoutWidth
    },
    _correctColumnWidths: function(resultWidths, visibleColumns) {
        var averageColumnsWidth, lastColumnIndex, that = this,
            hasPercentWidth = false,
            hasAutoWidth = false,
            isColumnWidthsCorrected = false,
            $element = that.component.$element(),
            hasWidth = that._hasWidth;
        each(visibleColumns, function(index) {
            var isMinWidthApplied = false,
                isHiddenColumn = resultWidths[index] === HIDDEN_COLUMNS_WIDTH,
                width = resultWidths[index];
            if (void 0 === width && this.minWidth) {
                if (void 0 === averageColumnsWidth) {
                    averageColumnsWidth = that._getAverageColumnsWidth(resultWidths)
                }
                width = averageColumnsWidth
            }
            if (width < this.minWidth && !isHiddenColumn) {
                resultWidths[index] = this.minWidth;
                isColumnWidthsCorrected = true;
                isMinWidthApplied = true
            }
            if ("auto" !== this.width) {
                if (this.width) {
                    if (!isHiddenColumn && !isMinWidthApplied) {
                        resultWidths[index] = this.width
                    }
                } else {
                    hasAutoWidth = true
                }
            }
            if (isPercentWidth(this.width)) {
                hasPercentWidth = true
            }
        });
        if ($element && that._maxWidth) {
            delete that._maxWidth;
            $element.css("maxWidth", "")
        }
        if (!hasAutoWidth && resultWidths.length) {
            var contentWidth = that._rowsView.contentWidth(),
                scrollbarWidth = that._rowsView.getScrollbarWidth(),
                totalWidth = that._getTotalWidth(resultWidths, contentWidth);
            if (totalWidth <= contentWidth) {
                lastColumnIndex = resultWidths.length - 1;
                while (lastColumnIndex >= 0 && visibleColumns[lastColumnIndex] && (visibleColumns[lastColumnIndex].command || resultWidths[lastColumnIndex] === HIDDEN_COLUMNS_WIDTH)) {
                    lastColumnIndex--
                }
                if (lastColumnIndex >= 0) {
                    resultWidths[lastColumnIndex] = "auto";
                    isColumnWidthsCorrected = true;
                    if (!hasWidth && !hasPercentWidth) {
                        that._maxWidth = totalWidth + scrollbarWidth + (that.option("showBorders") ? 2 : 0);
                        $element.css("maxWidth", that._maxWidth)
                    }
                }
            }
        }
        return isColumnWidthsCorrected
    },
    _processStretch: function(resultSizes, visibleColumns) {
        var diff, diffElement, onePixelElementsCount, i, groupSize = this._rowsView.contentWidth(),
            tableSize = this._getTotalWidth(resultSizes, groupSize),
            unusedIndexes = {
                length: 0
            };
        if (!resultSizes.length) {
            return
        }
        each(visibleColumns, function(index) {
            if (this.width || resultSizes[index] === HIDDEN_COLUMNS_WIDTH) {
                unusedIndexes[index] = true;
                unusedIndexes.length++
            }
        });
        diff = groupSize - tableSize;
        diffElement = Math.floor(diff / (resultSizes.length - unusedIndexes.length));
        onePixelElementsCount = diff - diffElement * (resultSizes.length - unusedIndexes.length);
        if (diff >= 0) {
            for (i = 0; i < resultSizes.length; i++) {
                if (unusedIndexes[i]) {
                    continue
                }
                resultSizes[i] += diffElement;
                if (onePixelElementsCount) {
                    resultSizes[i]++;
                    onePixelElementsCount--
                }
            }
        }
    },
    _getTotalWidth: function(widths, groupWidth) {
        var width, i, result = 0;
        for (i = 0; i < widths.length; i++) {
            width = widths[i];
            if (width && width !== HIDDEN_COLUMNS_WIDTH) {
                result += isPercentWidth(width) ? parseInt(width) * groupWidth / 100 : parseInt(width)
            }
        }
        return Math.round(result)
    },
    updateSize: function($rootElement) {
        var $groupElement, width, that = this,
            importantMarginClass = that.addWidgetPrefix(IMPORTANT_MARGIN_CLASS);
        if (void 0 === that._hasHeight && $rootElement && $rootElement.is(":visible")) {
            $groupElement = $rootElement.children("." + that.getWidgetContainerClass());
            if ($groupElement.length) {
                $groupElement.detach()
            }
            that._hasHeight = !!getContainerHeight($rootElement);
            width = $rootElement.width();
            $rootElement.addClass(importantMarginClass);
            that._hasWidth = $rootElement.width() === width;
            $rootElement.removeClass(importantMarginClass);
            if ($groupElement.length) {
                $groupElement.appendTo($rootElement)
            }
        }
    },
    publicMethods: function() {
        return ["resize", "updateDimensions"]
    },
    resize: function() {
        return !this.component._requireResize && this.updateDimensions()
    },
    updateDimensions: function(checkSize) {
        var that = this,
            $element = that.component.$element(),
            maxHeight = parseFloat($element.css("maxHeight")),
            minHeight = parseFloat($element.css("minHeight"));
        that._initPostRenderHandlers();
        if (!that._checkSize(checkSize)) {
            return
        }
        return commonUtils.deferRender(function() {
            var scrollTop, scrollable = that._rowsView.getScrollable();
            if (that._dataController.isLoaded()) {
                that._synchronizeColumns();
                if (maxHeight || minHeight) {
                    scrollTop = scrollable && scrollable._container().get(0).scrollTop;
                    that._rowsView.height("auto")
                }
            }
            commonUtils.deferUpdate(function() {
                commonUtils.deferRender(function() {
                    commonUtils.deferUpdate(function() {
                        that._updateDimensionsCore(maxHeight, scrollTop)
                    })
                })
            })
        })
    },
    _checkSize: function(checkSize) {
        var $rootElement = this.component.$element();
        if (checkSize && (this._lastWidth === $rootElement.width() && this._lastHeight === $rootElement.height() || !$rootElement.is(":visible"))) {
            return false
        }
        return true
    },
    _updateDimensionsCore: function(maxHeight, scrollTop) {
        var rowsViewHeight, $testDiv, that = this,
            scrollable = that._rowsView.getScrollable(),
            dataController = that._dataController,
            rowsView = that._rowsView,
            columnHeadersView = that._columnHeadersView,
            footerView = that._footerView,
            $rootElement = that.component.$element(),
            rootElementHeight = $rootElement && ($rootElement.get(0).clientHeight || $rootElement.height()),
            maxHeightHappened = maxHeight && rootElementHeight >= maxHeight,
            hasHeight = that._hasHeight || maxHeightHappened,
            loadPanelOptions = that.option("loadPanel"),
            height = that.option("height") || $rootElement.get(0).style.height,
            editorFactory = that.getController("editorFactory");
        that._maxHeightHappened = maxHeightHappened;
        that.updateSize($rootElement);
        if (height && that._hasHeight ^ "auto" !== height) {
            $testDiv = $("<div>").height(height).appendTo($rootElement);
            that._hasHeight = !!$testDiv.height();
            $testDiv.remove()
        }
        if (that.option("scrolling") && (that._hasHeight && rootElementHeight > 0 || maxHeightHappened)) {
            rowsViewHeight = rootElementHeight;
            each(that.getViews(), function() {
                if (this.isVisible() && this.getHeight) {
                    rowsViewHeight -= this.getHeight()
                }
            })
        } else {
            if (!that._hasHeight && 0 === dataController.items().length) {
                rowsViewHeight = loadPanelOptions && loadPanelOptions.enabled ? loadPanelOptions.height + LOADPANEL_MARGIN : EMPTY_GRID_ROWS_HEIGHT
            } else {
                rowsViewHeight = "auto"
            }
        }
        commonUtils.deferRender(function() {
            rowsView.height(rowsViewHeight, hasHeight);
            if (scrollTop && scrollable) {
                scrollable._container().get(0).scrollTop = scrollTop
            }
            if (!dataController.isLoaded()) {
                rowsView.setLoading(true);
                return
            }
            commonUtils.deferUpdate(function() {
                that._updateLastSizes($rootElement);
                var vScrollbarWidth = hasHeight ? rowsView.getScrollbarWidth() : 0;
                var hScrollbarWidth = rowsView.getScrollbarWidth(true);
                commonUtils.deferRender(function() {
                    columnHeadersView && columnHeadersView.setScrollerSpacing(vScrollbarWidth);
                    footerView && footerView.setScrollerSpacing(vScrollbarWidth);
                    rowsView.setScrollerSpacing(vScrollbarWidth, hScrollbarWidth)
                });
                each(VIEW_NAMES, function(index, viewName) {
                    var view = that.getView(viewName);
                    if (view) {
                        view.resize()
                    }
                });
                editorFactory && editorFactory.resize()
            })
        })
    },
    _updateLastSizes: function($rootElement) {
        this._lastWidth = $rootElement.width();
        this._lastHeight = $rootElement.height()
    },
    optionChanged: function(args) {
        switch (args.name) {
            case "width":
            case "height":
                this.component._renderDimensions();
                this.resize();
            default:
                this.callBase(args)
        }
    },
    init: function() {
        var that = this;
        that._dataController = that.getController("data");
        that._columnsController = that.getController("columns");
        that._columnHeadersView = that.getView("columnHeadersView");
        that._footerView = that.getView("footerView");
        that._rowsView = that.getView("rowsView")
    }
});
var SynchronizeScrollingController = modules.ViewController.inherit({
    _scrollChangedHandler: function(views, pos, viewName) {
        for (var j = 0; j < views.length; j++) {
            if (views[j] && views[j].name !== viewName) {
                views[j].scrollTo({
                    left: pos.left,
                    top: pos.top
                })
            }
        }
    },
    init: function() {
        var view, i, views = [this.getView("columnHeadersView"), this.getView("footerView"), this.getView("rowsView")];
        for (i = 0; i < views.length; i++) {
            view = views[i];
            if (view) {
                view.scrollChanged.add(this._scrollChangedHandler.bind(this, views))
            }
        }
    }
});
var GridView = modules.View.inherit({
    _endUpdateCore: function() {
        if (this.component._requireResize) {
            this.component._requireResize = false;
            this._resizingController.resize()
        }
    },
    _getWidgetAriaLabel: function() {
        return "dxDataGrid-ariaDataGrid"
    },
    init: function() {
        var that = this;
        that._resizingController = this.getController("resizing");
        that._dataController = that.getController("data")
    },
    getView: function(name) {
        return this.component._views[name]
    },
    element: function() {
        return this._groupElement
    },
    optionChanged: function(args) {
        var that = this;
        if (typeUtils.isDefined(that._groupElement) && "showBorders" === args.name) {
            that._groupElement.toggleClass(that.addWidgetPrefix(BORDERS_CLASS), !!args.value);
            args.handled = true
        } else {
            that.callBase(args)
        }
    },
    _renderViews: function($groupElement) {
        var that = this;
        each(VIEW_NAMES, function(index, viewName) {
            var view = that.getView(viewName);
            if (view) {
                view.render($groupElement)
            }
        })
    },
    render: function($rootElement) {
        var that = this,
            isFirstRender = !that._groupElement,
            $groupElement = that._groupElement || $("<div>").addClass(that.getWidgetContainerClass());
        $groupElement.toggleClass(that.addWidgetPrefix(BORDERS_CLASS), !!that.option("showBorders"));
        that.component.setAria({
            role: "application",
            label: messageLocalization.format(that._getWidgetAriaLabel())
        }, $rootElement);
        that._rootElement = $rootElement || that._rootElement;
        if (isFirstRender) {
            that._groupElement = $groupElement;
            that.getController("resizing").updateSize($rootElement);
            $groupElement.appendTo($rootElement)
        }
        that._renderViews($groupElement);
        that.update()
    },
    update: function() {
        var that = this,
            $rootElement = that._rootElement,
            $groupElement = that._groupElement,
            resizingController = that.getController("resizing");
        if ($rootElement && $groupElement) {
            resizingController.resize();
            if (that._dataController.isLoaded()) {
                that.component._fireContentReadyAction()
            }
        }
    }
});
module.exports = {
    defaultOptions: function() {
        return {
            showBorders: false
        }
    },
    controllers: {
        resizing: ResizingController,
        synchronizeScrolling: SynchronizeScrollingController
    },
    views: {
        gridView: GridView
    }
};
