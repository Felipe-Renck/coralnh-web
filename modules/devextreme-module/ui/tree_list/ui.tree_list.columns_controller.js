/**
 * DevExtreme (ui/tree_list/ui.tree_list.columns_controller.js)
 * Version: 17.2.5
 * Build date: Tue Jan 23 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
"use strict";
var isDefined = require("../../core/utils/type").isDefined,
    treeListCore = require("./ui.tree_list.core"),
    columnsControllerModule = require("../grid_core/ui.grid_core.columns_controller");
exports.ColumnsController = columnsControllerModule.controllers.columns.inherit(function() {
    return {
        _getFirstItems: function(dataSourceAdapter) {
            return this.callBase(dataSourceAdapter).map(function(node) {
                return node.data
            })
        },
        getFirstDataColumnIndex: function() {
            var visibleColumns = this.getVisibleColumns(),
                visibleColumnsLength = visibleColumns.length,
                firstDataColumnIndex = 0;
            for (var i = 0; i <= visibleColumnsLength - 1; i++) {
                if (!isDefined(visibleColumns[i].command)) {
                    firstDataColumnIndex = visibleColumns[i].index;
                    break
                }
            }
            return firstDataColumnIndex
        }
    }
}());
treeListCore.registerModule("columns", {
    defaultOptions: columnsControllerModule.defaultOptions,
    controllers: {
        columns: exports.ColumnsController
    }
});
