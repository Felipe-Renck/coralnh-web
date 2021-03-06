/**
 * DevExtreme (ui/tree_list/ui.tree_list.data_controller.js)
 * Version: 17.2.5
 * Build date: Tue Jan 23 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
"use strict";
var extend = require("../../core/utils/extend").extend,
    Deferred = require("../../core/utils/deferred").Deferred,
    treeListCore = require("./ui.tree_list.core"),
    equalByValue = require("../../core/utils/common").equalByValue,
    dataSourceAdapterProvider = require("./ui.tree_list.data_source_adapter"),
    dataControllerModule = require("../grid_core/ui.grid_core.data_controller");
exports.DataController = dataControllerModule.controllers.data.inherit(function() {
    return {
        _getDataSourceAdapter: function() {
            return dataSourceAdapterProvider
        },
        _getNodeLevel: function(node) {
            var level = -1;
            while (node.parent) {
                if (node.visible) {
                    level++
                }
                node = node.parent
            }
            return level
        },
        _generateDataItem: function(node) {
            return {
                rowType: "data",
                node: node,
                key: node.key,
                data: node.data,
                isExpanded: this.isRowExpanded(node.key),
                level: this._getNodeLevel(node)
            }
        },
        _setPagingOptions: function(dataSource) {
            var isVirtualScrolling = "virtual" === this.option("scrolling.mode");
            dataSource.paginate(isVirtualScrolling);
            dataSource.requireTotalCount(true)
        },
        _loadOnOptionChange: function() {
            this._dataSource.load()
        },
        init: function() {
            this.createAction("onRowExpanding");
            this.createAction("onRowExpanded");
            this.createAction("onRowCollapsing");
            this.createAction("onRowCollapsed");
            this.callBase.apply(this, arguments)
        },
        keyOf: function(data) {
            var dataSource = this._dataSource;
            if (dataSource) {
                return dataSource.keyOf(data)
            }
        },
        key: function() {
            var dataSource = this._dataSource;
            if (dataSource) {
                return dataSource.getKeyExpr()
            }
        },
        publicMethods: function() {
            return this.callBase().concat(["expandRow", "collapseRow", "isRowExpanded", "getRootNode", "getNodeByKey", "loadDescendants"])
        },
        changeRowExpand: function(key) {
            if (this._dataSource) {
                var that = this,
                    args = {
                        key: key
                    },
                    isExpanded = this.isRowExpanded(key);
                that.executeAction(isExpanded ? "onRowCollapsing" : "onRowExpanding", args);
                if (!args.cancel) {
                    return that._dataSource.changeRowExpand(key).done(function() {
                        that.executeAction(isExpanded ? "onRowCollapsed" : "onRowExpanded", args)
                    })
                }
            }
            return (new Deferred).resolve()
        },
        isRowExpanded: function(key) {
            return this._dataSource && this._dataSource.isRowExpanded(key)
        },
        expandRow: function(key) {
            if (!this.isRowExpanded(key)) {
                return this.changeRowExpand(key)
            }
            return (new Deferred).resolve()
        },
        collapseRow: function(key) {
            if (this.isRowExpanded(key)) {
                return this.changeRowExpand(key)
            }
            return (new Deferred).resolve()
        },
        getRootNode: function() {
            return this._dataSource && this._dataSource.getRootNode()
        },
        optionChanged: function(args) {
            switch (args.name) {
                case "rootValue":
                case "parentIdExpr":
                case "itemsExpr":
                case "filterMode":
                case "expandNodesOnFiltering":
                case "autoExpandAll":
                case "hasItemsExpr":
                case "dataStructure":
                    this._columnsController.reset();
                    this._items = [];
                    this._refreshDataSource();
                    args.handled = true;
                    break;
                case "expandedRowKeys":
                case "onNodesInitialized":
                    if (this._dataSource && !this._dataSource._isNodesInitializing && !equalByValue(args.value, args.previousValue)) {
                        this._loadOnOptionChange()
                    }
                    args.handled = true;
                    break;
                case "maxFilterLengthInRequest":
                    args.handled = true;
                    break;
                default:
                    this.callBase(args)
            }
        },
        getNodeByKey: function(key) {
            if (!this._dataSource) {
                return
            }
            return this._dataSource.getNodeByKey(key)
        },
        getNodeLeafKeys: function(keys, callBack) {
            if (!this._dataSource) {
                return
            }
            return this._dataSource.getNodeLeafKeys(keys, callBack)
        },
        loadDescendants: function(keys, childrenOnly) {
            if (!this._dataSource) {
                return
            }
            return this._dataSource.loadDescendants(keys, childrenOnly)
        }
    }
}());
treeListCore.registerModule("data", {
    defaultOptions: function() {
        return extend({}, dataControllerModule.defaultOptions(), {
            itemsExpr: "items",
            parentIdExpr: "parentId",
            rootValue: 0,
            dataStructure: "plain",
            expandedRowKeys: [],
            filterMode: "extended",
            expandNodesOnFiltering: true,
            autoExpandAll: false,
            onNodesInitialized: null,
            maxFilterLengthInRequest: 1500
        })
    },
    controllers: {
        data: exports.DataController
    }
});
