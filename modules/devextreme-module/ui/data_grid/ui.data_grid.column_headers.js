/**
 * DevExtreme (ui/data_grid/ui.data_grid.column_headers.js)
 * Version: 17.2.5
 * Build date: Tue Jan 23 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
"use strict";
var gridCore = require("./ui.data_grid.core"),
    columnHeadersViewModule = require("../grid_core/ui.grid_core.column_headers");
exports.ColumnHeadersView = columnHeadersViewModule.views.columnHeadersView;
gridCore.registerModule("columnHeaders", columnHeadersViewModule);
