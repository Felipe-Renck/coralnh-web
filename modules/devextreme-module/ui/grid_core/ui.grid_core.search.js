/**
 * DevExtreme (ui/grid_core/ui.grid_core.search.js)
 * Version: 17.2.5
 * Build date: Tue Jan 23 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
"use strict";
var $ = require("../../core/renderer"),
    isDefined = require("../../core/utils/type").isDefined,
    compileGetter = require("../../core/utils/data").compileGetter,
    each = require("../../core/utils/iterator").each,
    gridCoreUtils = require("./ui.grid_core.utils"),
    messageLocalization = require("../../localization/message"),
    dataQuery = require("../../data/query");
var SEARCH_PANEL_CLASS = "search-panel",
    SEARCH_TEXT_CLASS = "search-text",
    FILTERING_TIMEOUT = 700;

function allowSearch(column) {
    return isDefined(column.allowSearch) ? column.allowSearch : column.allowFiltering
}

function parseValue(column, text) {
    var lookup = column.lookup;
    if (lookup) {
        return column.parseValue.call(lookup, text)
    } else {
        return column.parseValue ? column.parseValue(text) : text
    }
}
module.exports = {
    defaultOptions: function() {
        return {
            searchPanel: {
                visible: false,
                width: 160,
                placeholder: messageLocalization.format("dxDataGrid-searchPanelPlaceholder"),
                highlightSearchText: true,
                highlightCaseSensitive: false,
                text: "",
                searchVisibleColumnsOnly: false
            }
        }
    },
    extenders: {
        controllers: {
            data: function() {
                var calculateSearchFilter = function(that, text) {
                    var i, column, filterValue, lookup, columns = that._columnsController.getColumns(),
                        searchVisibleColumnsOnly = that.option("searchPanel.searchVisibleColumnsOnly"),
                        filters = [];
                    if (!text) {
                        return null
                    }

                    function onQueryDone(items) {
                        var i, value, valueGetter = compileGetter(lookup.valueExpr);
                        for (i = 0; i < items.length; i++) {
                            value = valueGetter(items[i]);
                            filters.push(column.createFilterExpression(value, null, "search"))
                        }
                    }
                    for (i = 0; i < columns.length; i++) {
                        column = columns[i];
                        if (searchVisibleColumnsOnly && !column.visible) {
                            continue
                        }
                        if (allowSearch(column) && column.calculateFilterExpression) {
                            lookup = column.lookup;
                            filterValue = parseValue(column, text);
                            if (lookup && lookup.items) {
                                dataQuery(lookup.items).filter(column.createFilterExpression.call({
                                    dataField: lookup.displayExpr,
                                    dataType: lookup.dataType,
                                    calculateFilterExpression: column.calculateFilterExpression
                                }, filterValue, null, "search")).enumerate().done(onQueryDone)
                            } else {
                                if (void 0 !== filterValue) {
                                    filters.push(column.createFilterExpression(filterValue, null, "search"))
                                }
                            }
                        }
                    }
                    return gridCoreUtils.combineFilters(filters, "or")
                };
                return {
                    publicMethods: function() {
                        return this.callBase().concat(["searchByText"])
                    },
                    _calculateAdditionalFilter: function() {
                        var that = this,
                            filter = that.callBase(),
                            searchFilter = calculateSearchFilter(that, that.option("searchPanel.text"));
                        return gridCoreUtils.combineFilters([filter, searchFilter])
                    },
                    searchByText: function(text) {
                        this.option("searchPanel.text", text)
                    },
                    optionChanged: function(args) {
                        var that = this;
                        switch (args.fullName) {
                            case "searchPanel.text":
                            case "searchPanel":
                                that._applyFilter();
                                args.handled = true;
                                break;
                            default:
                                that.callBase(args)
                        }
                    }
                }
            }()
        },
        views: {
            headerPanel: function() {
                var getSearchPanelOptions = function(that) {
                    return that.option("searchPanel")
                };
                return {
                    _getToolbarItems: function() {
                        var items = this.callBase();
                        return this._prepareSearchItem(items)
                    },
                    _prepareSearchItem: function(items) {
                        var that = this,
                            dataController = that.getController("data"),
                            searchPanelOptions = getSearchPanelOptions(that);
                        if (searchPanelOptions && searchPanelOptions.visible) {
                            var toolbarItem = {
                                template: function(data, index, container) {
                                    var $search = $("<div>").addClass(that.addWidgetPrefix(SEARCH_PANEL_CLASS)).appendTo(container);
                                    that.setAria("label", messageLocalization.format("dxDataGrid-ariaSearchInGrid"), $search);
                                    that.getController("editorFactory").createEditor($search, {
                                        width: searchPanelOptions.width,
                                        placeholder: searchPanelOptions.placeholder,
                                        parentType: "searchPanel",
                                        value: that.option("searchPanel.text"),
                                        updateValueTimeout: FILTERING_TIMEOUT,
                                        setValue: function(value) {
                                            dataController.searchByText(value)
                                        }
                                    });
                                    that.resize()
                                },
                                name: "searchPanel",
                                location: "after",
                                locateInMenu: "never",
                                sortIndex: 40
                            };
                            items.push(toolbarItem)
                        }
                        return items
                    },
                    _getSearchTextEditor: function() {
                        var $searchPanel = this.element().find("." + this.addWidgetPrefix(SEARCH_PANEL_CLASS));
                        if ($searchPanel.length) {
                            return $searchPanel.dxTextBox("instance")
                        }
                        return null
                    },
                    isVisible: function() {
                        var searchPanelOptions = getSearchPanelOptions(this);
                        return this.callBase() || searchPanelOptions && searchPanelOptions.visible
                    },
                    optionChanged: function(args) {
                        if ("searchPanel" === args.name) {
                            if ("searchPanel.text" === args.fullName) {
                                var editor = this._getSearchTextEditor();
                                if (editor) {
                                    editor.option("value", args.value)
                                }
                            } else {
                                this._invalidate()
                            }
                            args.handled = true
                        } else {
                            this.callBase(args)
                        }
                    }
                }
            }(),
            rowsView: {
                init: function() {
                    this.callBase.apply(this, arguments);
                    this._searchParams = []
                },
                _highlightSearchText: function(cellElement, isEquals, column) {
                    var $parent, that = this,
                        searchText = that.option("searchPanel.text");
                    if (searchText && that.option("searchPanel.highlightSearchText")) {
                        var normalizeString = that.option("searchPanel.highlightCaseSensitive") ? function(str) {
                            return str
                        } : function(str) {
                            return str.toLowerCase()
                        };
                        if (isEquals && column) {
                            var value = parseValue(column, searchText),
                                formatOptions = gridCoreUtils.getFormatOptionsByColumn(column, "search");
                            searchText = gridCoreUtils.formatValue(value, formatOptions);
                            if (!searchText) {
                                return
                            }
                        }
                        $parent = cellElement.parent();
                        if (!$parent.length) {
                            $parent = $("<div>").append(cellElement)
                        }
                        var $items = $parent.find("*").filter(function(index, element) {
                            var $contents = $(element).contents();
                            for (var i = 0; i < $contents.length; i++) {
                                var node = $contents.get(i);
                                if (3 === node.nodeType) {
                                    return (node.textContent || node.nodeValue || "").toLowerCase().indexOf(searchText.toLowerCase()) > -1
                                }
                                return false
                            }
                        });
                        each($items, function(index, element) {
                            each($(element).contents(), function(index, content) {
                                if (3 !== content.nodeType) {
                                    return
                                }
                                var highlightSearchTextInTextNode = function($content, searchText) {
                                    var $searchTextSpan = $("<span>").addClass(that.addWidgetPrefix(SEARCH_TEXT_CLASS)),
                                        text = $content.text(),
                                        index = normalizeString(text).indexOf(normalizeString(searchText));
                                    if (index >= 0) {
                                        if ($content[0].textContent) {
                                            $content[0].textContent = text.substr(0, index)
                                        } else {
                                            $content[0].nodeValue = text.substr(0, index)
                                        }
                                        $content.after($searchTextSpan.text(text.substr(index, searchText.length)));
                                        $content = $(document.createTextNode(text.substr(index + searchText.length))).insertAfter($searchTextSpan);
                                        return highlightSearchTextInTextNode($content, searchText)
                                    }
                                };
                                if (isEquals) {
                                    if (normalizeString($(content).text()) === normalizeString(searchText)) {
                                        $(this).replaceWith($("<span>").addClass(that.addWidgetPrefix(SEARCH_TEXT_CLASS)).text($(content).text()))
                                    }
                                } else {
                                    highlightSearchTextInTextNode($(content), searchText)
                                }
                            })
                        })
                    }
                },
                _renderCore: function() {
                    this.callBase.apply(this, arguments);
                    if (this.option("rowTemplate")) {
                        if (this.option("templatesRenderAsynchronously")) {
                            clearTimeout(this._highlightTimer);
                            this._highlightTimer = setTimeout(function() {
                                this._highlightSearchText(this._getTableElement())
                            }.bind(this))
                        } else {
                            this._highlightSearchText(this._getTableElement())
                        }
                    }
                },
                _updateCell: function($cell, parameters) {
                    var column = parameters.column,
                        dataType = column.lookup && column.lookup.dataType || column.dataType,
                        isEquals = "string" !== dataType;
                    if (allowSearch(column)) {
                        if (this.option("templatesRenderAsynchronously")) {
                            if (!this._searchParams.length) {
                                clearTimeout(this._highlightTimer);
                                this._highlightTimer = setTimeout(function() {
                                    this._searchParams.forEach(function(params) {
                                        this._highlightSearchText.apply(this, params)
                                    }.bind(this));
                                    this._searchParams = []
                                }.bind(this))
                            }
                            this._searchParams.push([$cell, isEquals, column])
                        } else {
                            this._highlightSearchText($cell, isEquals, column)
                        }
                    }
                    this.callBase($cell, parameters)
                },
                dispose: function() {
                    clearTimeout(this._highlightTimer);
                    this.callBase()
                }
            }
        }
    }
};
