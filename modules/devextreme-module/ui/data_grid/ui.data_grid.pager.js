/**
 * DevExtreme (ui/data_grid/ui.data_grid.pager.js)
 * Version: 17.2.5
 * Build date: Tue Jan 23 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
"use strict";
var gridCore = require("./ui.data_grid.core"),
    Pager = require("./pager"),
    inArray = require("../../core/utils/array").inArray,
    isDefined = require("../../core/utils/type").isDefined;
var DATAGRID_PAGER_CLASS = "dx-datagrid-pager",
    MAX_PAGES_COUNT = 10;
exports.PagerView = gridCore.View.inherit({
    init: function() {
        var that = this,
            dataController = that.getController("data");
        that._isVisible = false;
        dataController.changed.add(function(e) {
            if (!e || "update" !== e.changeType) {
                that.render()
            }
        })
    },
    _getPager: function() {
        var $element = this.element();
        return $element && $element.data("dxPager")
    },
    _renderCore: function() {
        var that = this,
            $element = that.element().addClass(DATAGRID_PAGER_CLASS),
            pagerOptions = that.option("pager") || {},
            dataController = that.getController("data"),
            options = {
                maxPagesCount: MAX_PAGES_COUNT,
                pageIndex: 1 + (parseInt(dataController.pageIndex()) || 0),
                pageCount: dataController.pageCount(),
                pageSize: dataController.pageSize(),
                showPageSizes: pagerOptions.showPageSizeSelector,
                showInfo: pagerOptions.showInfo,
                pagesNavigatorVisible: pagerOptions.visible,
                showNavigationButtons: pagerOptions.showNavigationButtons,
                pageSizes: that.getPageSizes(),
                totalCount: dataController.totalCount(),
                hasKnownLastPage: dataController.hasKnownLastPage(),
                pageIndexChanged: function(pageIndex) {
                    if (dataController.pageIndex() !== pageIndex - 1) {
                        setTimeout(function() {
                            dataController.pageIndex(pageIndex - 1)
                        })
                    }
                },
                pageSizeChanged: function(pageSize) {
                    setTimeout(function() {
                        dataController.pageSize(pageSize)
                    })
                }
            };
        if (isDefined(pagerOptions.infoText)) {
            options.infoText = pagerOptions.infoText
        }
        that._createComponent($element, Pager, options)
    },
    getPageSizes: function() {
        var that = this,
            dataController = that.getController("data"),
            pagerOptions = that.option("pager"),
            allowedPageSizes = pagerOptions && pagerOptions.allowedPageSizes,
            pageSize = dataController.pageSize();
        if (!isDefined(that._pageSizes) || inArray(pageSize, that._pageSizes) === -1) {
            that._pageSizes = [];
            if (pagerOptions) {
                if (Array.isArray(allowedPageSizes)) {
                    that._pageSizes = allowedPageSizes
                } else {
                    if (allowedPageSizes && pageSize > 1) {
                        that._pageSizes = [Math.floor(pageSize / 2), pageSize, 2 * pageSize]
                    }
                }
            }
        }
        return that._pageSizes
    },
    isVisible: function() {
        var that = this,
            dataController = that.getController("data"),
            pagerOptions = that.option("pager"),
            pagerVisible = pagerOptions && pagerOptions.visible,
            scrolling = that.option("scrolling");
        if (that._isVisible) {
            return true
        }
        if ("auto" === pagerVisible) {
            if (scrolling && ("virtual" === scrolling.mode || "infinite" === scrolling.mode)) {
                pagerVisible = false
            } else {
                pagerVisible = dataController.pageCount() > 1 || dataController.isLoaded() && !dataController.hasKnownLastPage()
            }
        }
        that._isVisible = pagerVisible;
        return pagerVisible
    },
    getHeight: function() {
        return this.getElementHeight()
    },
    optionChanged: function(args) {
        var that = this,
            name = args.name,
            isPager = "pager" === name,
            isPaging = "paging" === name,
            isDataSource = "dataSource" === name,
            isScrolling = "scrolling" === name;
        if (isPager || isPaging || isScrolling || isDataSource) {
            if (isPager || isPaging) {
                that._pageSizes = null
            }
            if (isPager || isPaging || isScrolling) {
                that._isVisible = false
            }
            if (!isDataSource) {
                that._invalidate();
                if (isPager && that.component) {
                    that.component.resize()
                }
            }
            args.handled = true
        }
    }
});
gridCore.registerModule("pager", {
    defaultOptions: function() {
        return {
            pager: {
                visible: "auto",
                showPageSizeSelector: false,
                allowedPageSizes: "auto"
            }
        }
    },
    views: {
        pagerView: exports.PagerView
    }
});
