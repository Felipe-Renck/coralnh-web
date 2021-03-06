"use strict";
/*!
 * devextreme-angular
 * Version: 17.2.5
 * Build date: Wed Jan 24 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var data_grid_1 = require("devextreme/ui/data_grid");
var component_1 = require("../core/component");
var template_host_1 = require("../core/template-host");
var template_1 = require("../core/template");
var nested_option_1 = require("../core/nested-option");
var watcher_helper_1 = require("../core/watcher-helper");
var iterable_differ_helper_1 = require("../core/iterable-differ-helper");
var column_chooser_1 = require("./nested/column-chooser");
var column_fixing_1 = require("./nested/column-fixing");
var texts_1 = require("./nested/texts");
var column_dxi_1 = require("./nested/column-dxi");
var header_filter_1 = require("./nested/header-filter");
var lookup_1 = require("./nested/lookup");
var format_1 = require("./nested/format");
var form_item_1 = require("./nested/form-item");
var label_1 = require("./nested/label");
var validation_rule_dxi_1 = require("./nested/validation-rule-dxi");
var editing_1 = require("./nested/editing");
var form_1 = require("./nested/form");
var col_count_by_screen_1 = require("./nested/col-count-by-screen");
var item_dxi_1 = require("./nested/item-dxi");
var tab_panel_options_1 = require("./nested/tab-panel-options");
var tab_dxi_1 = require("./nested/tab-dxi");
var popup_1 = require("./nested/popup");
var animation_1 = require("./nested/animation");
var hide_1 = require("./nested/hide");
var show_1 = require("./nested/show");
var position_1 = require("./nested/position");
var at_1 = require("./nested/at");
var boundary_offset_1 = require("./nested/boundary-offset");
var collision_1 = require("./nested/collision");
var my_1 = require("./nested/my");
var offset_1 = require("./nested/offset");
var toolbar_item_dxi_1 = require("./nested/toolbar-item-dxi");
var export_1 = require("./nested/export");
var filter_row_1 = require("./nested/filter-row");
var operation_descriptions_1 = require("./nested/operation-descriptions");
var grouping_1 = require("./nested/grouping");
var group_panel_1 = require("./nested/group-panel");
var load_panel_1 = require("./nested/load-panel");
var master_detail_1 = require("./nested/master-detail");
var pager_1 = require("./nested/pager");
var paging_1 = require("./nested/paging");
var remote_operations_1 = require("./nested/remote-operations");
var scrolling_1 = require("./nested/scrolling");
var search_panel_1 = require("./nested/search-panel");
var selection_1 = require("./nested/selection");
var sort_by_group_summary_info_dxi_1 = require("./nested/sort-by-group-summary-info-dxi");
var sorting_1 = require("./nested/sorting");
var state_storing_1 = require("./nested/state-storing");
var summary_1 = require("./nested/summary");
var group_item_dxi_1 = require("./nested/group-item-dxi");
var value_format_1 = require("./nested/value-format");
var total_item_dxi_1 = require("./nested/total-item-dxi");
var column_dxi_2 = require("./nested/column-dxi");
var sort_by_group_summary_info_dxi_2 = require("./nested/sort-by-group-summary-info-dxi");
/**
 * The DataGrid is a widget that represents data from a local or remote source in the form of a grid. This widget offers such basic features as sorting, grouping, filtering, as well as more advanced capabilities, like state storing, export to Excel, master-detail interface, and many others.
 */
var DxDataGridComponent = (function (_super) {
    __extends(DxDataGridComponent, _super);
    function DxDataGridComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper) || this;
        _this._watcherHelper = _watcherHelper;
        _this._idh = _idh;
        _this._createEventEmitters([
            { subscribe: 'adaptiveDetailRowPreparing', emit: 'onAdaptiveDetailRowPreparing' },
            { subscribe: 'cellClick', emit: 'onCellClick' },
            { subscribe: 'cellHoverChanged', emit: 'onCellHoverChanged' },
            { subscribe: 'cellPrepared', emit: 'onCellPrepared' },
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'contextMenuPreparing', emit: 'onContextMenuPreparing' },
            { subscribe: 'dataErrorOccurred', emit: 'onDataErrorOccurred' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'editingStart', emit: 'onEditingStart' },
            { subscribe: 'editorPrepared', emit: 'onEditorPrepared' },
            { subscribe: 'editorPreparing', emit: 'onEditorPreparing' },
            { subscribe: 'exported', emit: 'onExported' },
            { subscribe: 'exporting', emit: 'onExporting' },
            { subscribe: 'fileSaving', emit: 'onFileSaving' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'initNewRow', emit: 'onInitNewRow' },
            { subscribe: 'keyDown', emit: 'onKeyDown' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'rowClick', emit: 'onRowClick' },
            { subscribe: 'rowCollapsed', emit: 'onRowCollapsed' },
            { subscribe: 'rowCollapsing', emit: 'onRowCollapsing' },
            { subscribe: 'rowExpanded', emit: 'onRowExpanded' },
            { subscribe: 'rowExpanding', emit: 'onRowExpanding' },
            { subscribe: 'rowInserted', emit: 'onRowInserted' },
            { subscribe: 'rowInserting', emit: 'onRowInserting' },
            { subscribe: 'rowPrepared', emit: 'onRowPrepared' },
            { subscribe: 'rowRemoved', emit: 'onRowRemoved' },
            { subscribe: 'rowRemoving', emit: 'onRowRemoving' },
            { subscribe: 'rowUpdated', emit: 'onRowUpdated' },
            { subscribe: 'rowUpdating', emit: 'onRowUpdating' },
            { subscribe: 'rowValidating', emit: 'onRowValidating' },
            { subscribe: 'selectionChanged', emit: 'onSelectionChanged' },
            { subscribe: 'toolbarPreparing', emit: 'onToolbarPreparing' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'allowColumnReorderingChange' },
            { emit: 'allowColumnResizingChange' },
            { emit: 'cacheEnabledChange' },
            { emit: 'cellHintEnabledChange' },
            { emit: 'columnAutoWidthChange' },
            { emit: 'columnChooserChange' },
            { emit: 'columnFixingChange' },
            { emit: 'columnHidingEnabledChange' },
            { emit: 'columnMinWidthChange' },
            { emit: 'columnResizingModeChange' },
            { emit: 'columnsChange' },
            { emit: 'customizeColumnsChange' },
            { emit: 'customizeExportDataChange' },
            { emit: 'dataSourceChange' },
            { emit: 'dateSerializationFormatChange' },
            { emit: 'disabledChange' },
            { emit: 'editingChange' },
            { emit: 'elementAttrChange' },
            { emit: 'errorRowEnabledChange' },
            { emit: 'exportChange' },
            { emit: 'filterRowChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'groupingChange' },
            { emit: 'groupPanelChange' },
            { emit: 'headerFilterChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'keyExprChange' },
            { emit: 'loadPanelChange' },
            { emit: 'masterDetailChange' },
            { emit: 'noDataTextChange' },
            { emit: 'pagerChange' },
            { emit: 'pagingChange' },
            { emit: 'remoteOperationsChange' },
            { emit: 'rowAlternationEnabledChange' },
            { emit: 'rowTemplateChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'scrollingChange' },
            { emit: 'searchPanelChange' },
            { emit: 'selectedRowKeysChange' },
            { emit: 'selectionChange' },
            { emit: 'selectionFilterChange' },
            { emit: 'showBordersChange' },
            { emit: 'showColumnHeadersChange' },
            { emit: 'showColumnLinesChange' },
            { emit: 'showRowLinesChange' },
            { emit: 'sortByGroupSummaryInfoChange' },
            { emit: 'sortingChange' },
            { emit: 'stateStoringChange' },
            { emit: 'summaryChange' },
            { emit: 'tabIndexChange' },
            { emit: 'twoWayBindingEnabledChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' },
            { emit: 'wordWrapEnabledChange' }
        ]);
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxDataGridComponent.prototype, "accessKey", {
        /**
         * Specifies the shortcut key that sets focus on the widget.
         */
        get: function () {
            return this._getOption('accessKey');
        },
        set: function (value) {
            this._setOption('accessKey', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "activeStateEnabled", {
        /**
         * Specifies whether or not the widget changes its state when interacting with a user.
         */
        get: function () {
            return this._getOption('activeStateEnabled');
        },
        set: function (value) {
            this._setOption('activeStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "allowColumnReordering", {
        /**
         * Specifies whether a user can reorder columns.
         */
        get: function () {
            return this._getOption('allowColumnReordering');
        },
        set: function (value) {
            this._setOption('allowColumnReordering', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "allowColumnResizing", {
        /**
         * Specifies whether a user can resize columns.
         */
        get: function () {
            return this._getOption('allowColumnResizing');
        },
        set: function (value) {
            this._setOption('allowColumnResizing', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "cacheEnabled", {
        /**
         * Specifies whether data should be cached.
         */
        get: function () {
            return this._getOption('cacheEnabled');
        },
        set: function (value) {
            this._setOption('cacheEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "cellHintEnabled", {
        /**
         * Enables a hint that appears when a user hovers the mouse pointer over a cell with truncated content.
         */
        get: function () {
            return this._getOption('cellHintEnabled');
        },
        set: function (value) {
            this._setOption('cellHintEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "columnAutoWidth", {
        /**
         * Specifies whether columns should adjust their widths to the content.
         */
        get: function () {
            return this._getOption('columnAutoWidth');
        },
        set: function (value) {
            this._setOption('columnAutoWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "columnChooser", {
        /**
         * Configures the column chooser.
         */
        get: function () {
            return this._getOption('columnChooser');
        },
        set: function (value) {
            this._setOption('columnChooser', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "columnFixing", {
        /**
         * Configures column fixing.
         */
        get: function () {
            return this._getOption('columnFixing');
        },
        set: function (value) {
            this._setOption('columnFixing', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "columnHidingEnabled", {
        /**
         * Specifies whether the widget should hide columns to adapt to the screen or container size. Ignored if allowColumnResizing is true and columnResizingMode is "widget".
         */
        get: function () {
            return this._getOption('columnHidingEnabled');
        },
        set: function (value) {
            this._setOption('columnHidingEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "columnMinWidth", {
        /**
         * Specifies the minimum width of columns.
         */
        get: function () {
            return this._getOption('columnMinWidth');
        },
        set: function (value) {
            this._setOption('columnMinWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "columnResizingMode", {
        /**
         * Specifies how the widget resizes columns. Applies only if allowColumnResizing is true.
         */
        get: function () {
            return this._getOption('columnResizingMode');
        },
        set: function (value) {
            this._setOption('columnResizingMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "columns", {
        /**
         * An array of grid columns.
         */
        get: function () {
            return this._getOption('columns');
        },
        set: function (value) {
            this._setOption('columns', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "customizeColumns", {
        /**
         * Specifies a function that customizes grid columns after they are created.
         */
        get: function () {
            return this._getOption('customizeColumns');
        },
        set: function (value) {
            this._setOption('customizeColumns', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "customizeExportData", {
        /**
         * Customizes grid columns and data before exporting.
         */
        get: function () {
            return this._getOption('customizeExportData');
        },
        set: function (value) {
            this._setOption('customizeExportData', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "dataSource", {
        /**
         * Specifies the origin of data for the widget.
         */
        get: function () {
            return this._getOption('dataSource');
        },
        set: function (value) {
            this._setOption('dataSource', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "dateSerializationFormat", {
        /**
         * Specifies date-time values' serialization format. Use it only if you do not specify the dataSource at design time.
         */
        get: function () {
            return this._getOption('dateSerializationFormat');
        },
        set: function (value) {
            this._setOption('dateSerializationFormat', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "disabled", {
        /**
         * Specifies whether the widget responds to user interaction.
         */
        get: function () {
            return this._getOption('disabled');
        },
        set: function (value) {
            this._setOption('disabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "editing", {
        /**
         * Configures editing.
         */
        get: function () {
            return this._getOption('editing');
        },
        set: function (value) {
            this._setOption('editing', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "elementAttr", {
        /**
         * Specifies the attributes to be attached to the widget's root element.
         */
        get: function () {
            return this._getOption('elementAttr');
        },
        set: function (value) {
            this._setOption('elementAttr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "errorRowEnabled", {
        /**
         * Indicates whether to show the error row.
         */
        get: function () {
            return this._getOption('errorRowEnabled');
        },
        set: function (value) {
            this._setOption('errorRowEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "export", {
        /**
         * Configures client-side exporting.
         */
        get: function () {
            return this._getOption('export');
        },
        set: function (value) {
            this._setOption('export', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "filterRow", {
        /**
         * Configures the filter row.
         */
        get: function () {
            return this._getOption('filterRow');
        },
        set: function (value) {
            this._setOption('filterRow', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "focusStateEnabled", {
        /**
         * Specifies whether the widget can be focused using keyboard navigation.
         */
        get: function () {
            return this._getOption('focusStateEnabled');
        },
        set: function (value) {
            this._setOption('focusStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "grouping", {
        /**
         * Specifies grouping settings and the behavior of grouped grid records.
         */
        get: function () {
            return this._getOption('grouping');
        },
        set: function (value) {
            this._setOption('grouping', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "groupPanel", {
        /**
         * Configures the group panel.
         */
        get: function () {
            return this._getOption('groupPanel');
        },
        set: function (value) {
            this._setOption('groupPanel', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "headerFilter", {
        /**
         * Configures the header filter feature.
         */
        get: function () {
            return this._getOption('headerFilter');
        },
        set: function (value) {
            this._setOption('headerFilter', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "height", {
        /**
         * Specifies the widget's height.
         */
        get: function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "hint", {
        /**
         * Specifies text for a hint that appears when a user pauses on the widget.
         */
        get: function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "hoverStateEnabled", {
        /**
         * Specifies whether the widget changes its state when a user pauses on it.
         */
        get: function () {
            return this._getOption('hoverStateEnabled');
        },
        set: function (value) {
            this._setOption('hoverStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "keyExpr", {
        /**
         * Specifies which data field provides keys for data items. Applies only if data is a simple array.
         */
        get: function () {
            return this._getOption('keyExpr');
        },
        set: function (value) {
            this._setOption('keyExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "loadPanel", {
        /**
         * Configures the load panel.
         */
        get: function () {
            return this._getOption('loadPanel');
        },
        set: function (value) {
            this._setOption('loadPanel', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "masterDetail", {
        /**
         * Allows you to build a master-detail interface in the grid.
         */
        get: function () {
            return this._getOption('masterDetail');
        },
        set: function (value) {
            this._setOption('masterDetail', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "noDataText", {
        /**
         * Specifies text shown when the widget does not display any data.
         */
        get: function () {
            return this._getOption('noDataText');
        },
        set: function (value) {
            this._setOption('noDataText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "pager", {
        /**
         * Specifies the options of a grid pager.
         */
        get: function () {
            return this._getOption('pager');
        },
        set: function (value) {
            this._setOption('pager', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "paging", {
        /**
         * Specifies paging options.
         */
        get: function () {
            return this._getOption('paging');
        },
        set: function (value) {
            this._setOption('paging', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "remoteOperations", {
        /**
         * Specifies the operations that must be performed on the server side.
         */
        get: function () {
            return this._getOption('remoteOperations');
        },
        set: function (value) {
            this._setOption('remoteOperations', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "rowAlternationEnabled", {
        /**
         * Specifies whether rows should be shaded differently.
         */
        get: function () {
            return this._getOption('rowAlternationEnabled');
        },
        set: function (value) {
            this._setOption('rowAlternationEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "rowTemplate", {
        /**
         * Specifies a custom template for rows.
         */
        get: function () {
            return this._getOption('rowTemplate');
        },
        set: function (value) {
            this._setOption('rowTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "rtlEnabled", {
        /**
         * Switches the widget to a right-to-left representation.
         */
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "scrolling", {
        /**
         * Configures scrolling.
         */
        get: function () {
            return this._getOption('scrolling');
        },
        set: function (value) {
            this._setOption('scrolling', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "searchPanel", {
        /**
         * Configures the search panel.
         */
        get: function () {
            return this._getOption('searchPanel');
        },
        set: function (value) {
            this._setOption('searchPanel', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "selectedRowKeys", {
        /**
         * Specifies the keys of rows that must be selected initially.
         */
        get: function () {
            return this._getOption('selectedRowKeys');
        },
        set: function (value) {
            this._setOption('selectedRowKeys', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "selection", {
        /**
         * Configures runtime selection.
         */
        get: function () {
            return this._getOption('selection');
        },
        set: function (value) {
            this._setOption('selection', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "selectionFilter", {
        /**
         * Specifies filters for the rows that must be selected initially. Applies only if selection.deferred is true.
         */
        get: function () {
            return this._getOption('selectionFilter');
        },
        set: function (value) {
            this._setOption('selectionFilter', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "showBorders", {
        /**
         * Specifies whether the outer borders of the widget are visible.
         */
        get: function () {
            return this._getOption('showBorders');
        },
        set: function (value) {
            this._setOption('showBorders', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "showColumnHeaders", {
        /**
         * Specifies whether column headers are visible.
         */
        get: function () {
            return this._getOption('showColumnHeaders');
        },
        set: function (value) {
            this._setOption('showColumnHeaders', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "showColumnLines", {
        /**
         * Specifies whether vertical lines that separate one column from another are visible.
         */
        get: function () {
            return this._getOption('showColumnLines');
        },
        set: function (value) {
            this._setOption('showColumnLines', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "showRowLines", {
        /**
         * Specifies whether horizontal lines that separate one row from another are visible.
         */
        get: function () {
            return this._getOption('showRowLines');
        },
        set: function (value) {
            this._setOption('showRowLines', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "sortByGroupSummaryInfo", {
        /**
         * Allows you to sort groups according to the values of group summary items.
         */
        get: function () {
            return this._getOption('sortByGroupSummaryInfo');
        },
        set: function (value) {
            this._setOption('sortByGroupSummaryInfo', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "sorting", {
        /**
         * Configures runtime sorting.
         */
        get: function () {
            return this._getOption('sorting');
        },
        set: function (value) {
            this._setOption('sorting', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "stateStoring", {
        /**
         * Specifies options of state storing.
         */
        get: function () {
            return this._getOption('stateStoring');
        },
        set: function (value) {
            this._setOption('stateStoring', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "summary", {
        /**
         * Specifies the options of the grid summary.
         */
        get: function () {
            return this._getOption('summary');
        },
        set: function (value) {
            this._setOption('summary', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "tabIndex", {
        /**
         * Specifies the number of the element when the Tab key is used for navigating.
         */
        get: function () {
            return this._getOption('tabIndex');
        },
        set: function (value) {
            this._setOption('tabIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "twoWayBindingEnabled", {
        /**
         * Specifies whether to enable two-way data binding.
         */
        get: function () {
            return this._getOption('twoWayBindingEnabled');
        },
        set: function (value) {
            this._setOption('twoWayBindingEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "visible", {
        /**
         * Specifies whether the widget is visible.
         */
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "width", {
        /**
         * Specifies the widget's width.
         */
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "wordWrapEnabled", {
        /**
         * Specifies whether text that does not fit into a column should be wrapped.
         */
        get: function () {
            return this._getOption('wordWrapEnabled');
        },
        set: function (value) {
            this._setOption('wordWrapEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "columnsChildren", {
        get: function () {
            return this._getOption('columns');
        },
        set: function (value) {
            this.setChildren('columns', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDataGridComponent.prototype, "sortByGroupSummaryInfoChildren", {
        get: function () {
            return this._getOption('sortByGroupSummaryInfo');
        },
        set: function (value) {
            this.setChildren('sortByGroupSummaryInfo', value);
        },
        enumerable: true,
        configurable: true
    });
    DxDataGridComponent.prototype._createInstance = function (element, options) {
        return new data_grid_1.default(element, options);
    };
    DxDataGridComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxDataGridComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('columns', changes);
        this.setupChanges('dataSource', changes);
        this.setupChanges('keyExpr', changes);
        this.setupChanges('selectedRowKeys', changes);
        this.setupChanges('sortByGroupSummaryInfo', changes);
    };
    DxDataGridComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxDataGridComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('columns');
        this._idh.doCheck('dataSource');
        this._idh.doCheck('keyExpr');
        this._idh.doCheck('selectedRowKeys');
        this._idh.doCheck('sortByGroupSummaryInfo');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
    };
    DxDataGridComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxDataGridComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-data-grid',
                    template: '',
                    providers: [
                        template_host_1.DxTemplateHost,
                        watcher_helper_1.WatcherHelper,
                        nested_option_1.NestedOptionHost,
                        iterable_differ_helper_1.IterableDifferHelper
                    ]
                },] },
    ];
    /** @nocollapse */
    DxDataGridComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: iterable_differ_helper_1.IterableDifferHelper, },
        { type: nested_option_1.NestedOptionHost, },
    ]; };
    DxDataGridComponent.propDecorators = {
        'accessKey': [{ type: core_1.Input },],
        'activeStateEnabled': [{ type: core_1.Input },],
        'allowColumnReordering': [{ type: core_1.Input },],
        'allowColumnResizing': [{ type: core_1.Input },],
        'cacheEnabled': [{ type: core_1.Input },],
        'cellHintEnabled': [{ type: core_1.Input },],
        'columnAutoWidth': [{ type: core_1.Input },],
        'columnChooser': [{ type: core_1.Input },],
        'columnFixing': [{ type: core_1.Input },],
        'columnHidingEnabled': [{ type: core_1.Input },],
        'columnMinWidth': [{ type: core_1.Input },],
        'columnResizingMode': [{ type: core_1.Input },],
        'columns': [{ type: core_1.Input },],
        'customizeColumns': [{ type: core_1.Input },],
        'customizeExportData': [{ type: core_1.Input },],
        'dataSource': [{ type: core_1.Input },],
        'dateSerializationFormat': [{ type: core_1.Input },],
        'disabled': [{ type: core_1.Input },],
        'editing': [{ type: core_1.Input },],
        'elementAttr': [{ type: core_1.Input },],
        'errorRowEnabled': [{ type: core_1.Input },],
        'export': [{ type: core_1.Input },],
        'filterRow': [{ type: core_1.Input },],
        'focusStateEnabled': [{ type: core_1.Input },],
        'grouping': [{ type: core_1.Input },],
        'groupPanel': [{ type: core_1.Input },],
        'headerFilter': [{ type: core_1.Input },],
        'height': [{ type: core_1.Input },],
        'hint': [{ type: core_1.Input },],
        'hoverStateEnabled': [{ type: core_1.Input },],
        'keyExpr': [{ type: core_1.Input },],
        'loadPanel': [{ type: core_1.Input },],
        'masterDetail': [{ type: core_1.Input },],
        'noDataText': [{ type: core_1.Input },],
        'pager': [{ type: core_1.Input },],
        'paging': [{ type: core_1.Input },],
        'remoteOperations': [{ type: core_1.Input },],
        'rowAlternationEnabled': [{ type: core_1.Input },],
        'rowTemplate': [{ type: core_1.Input },],
        'rtlEnabled': [{ type: core_1.Input },],
        'scrolling': [{ type: core_1.Input },],
        'searchPanel': [{ type: core_1.Input },],
        'selectedRowKeys': [{ type: core_1.Input },],
        'selection': [{ type: core_1.Input },],
        'selectionFilter': [{ type: core_1.Input },],
        'showBorders': [{ type: core_1.Input },],
        'showColumnHeaders': [{ type: core_1.Input },],
        'showColumnLines': [{ type: core_1.Input },],
        'showRowLines': [{ type: core_1.Input },],
        'sortByGroupSummaryInfo': [{ type: core_1.Input },],
        'sorting': [{ type: core_1.Input },],
        'stateStoring': [{ type: core_1.Input },],
        'summary': [{ type: core_1.Input },],
        'tabIndex': [{ type: core_1.Input },],
        'twoWayBindingEnabled': [{ type: core_1.Input },],
        'visible': [{ type: core_1.Input },],
        'width': [{ type: core_1.Input },],
        'wordWrapEnabled': [{ type: core_1.Input },],
        'onAdaptiveDetailRowPreparing': [{ type: core_1.Output },],
        'onCellClick': [{ type: core_1.Output },],
        'onCellHoverChanged': [{ type: core_1.Output },],
        'onCellPrepared': [{ type: core_1.Output },],
        'onContentReady': [{ type: core_1.Output },],
        'onContextMenuPreparing': [{ type: core_1.Output },],
        'onDataErrorOccurred': [{ type: core_1.Output },],
        'onDisposing': [{ type: core_1.Output },],
        'onEditingStart': [{ type: core_1.Output },],
        'onEditorPrepared': [{ type: core_1.Output },],
        'onEditorPreparing': [{ type: core_1.Output },],
        'onExported': [{ type: core_1.Output },],
        'onExporting': [{ type: core_1.Output },],
        'onFileSaving': [{ type: core_1.Output },],
        'onInitialized': [{ type: core_1.Output },],
        'onInitNewRow': [{ type: core_1.Output },],
        'onKeyDown': [{ type: core_1.Output },],
        'onOptionChanged': [{ type: core_1.Output },],
        'onRowClick': [{ type: core_1.Output },],
        'onRowCollapsed': [{ type: core_1.Output },],
        'onRowCollapsing': [{ type: core_1.Output },],
        'onRowExpanded': [{ type: core_1.Output },],
        'onRowExpanding': [{ type: core_1.Output },],
        'onRowInserted': [{ type: core_1.Output },],
        'onRowInserting': [{ type: core_1.Output },],
        'onRowPrepared': [{ type: core_1.Output },],
        'onRowRemoved': [{ type: core_1.Output },],
        'onRowRemoving': [{ type: core_1.Output },],
        'onRowUpdated': [{ type: core_1.Output },],
        'onRowUpdating': [{ type: core_1.Output },],
        'onRowValidating': [{ type: core_1.Output },],
        'onSelectionChanged': [{ type: core_1.Output },],
        'onToolbarPreparing': [{ type: core_1.Output },],
        'accessKeyChange': [{ type: core_1.Output },],
        'activeStateEnabledChange': [{ type: core_1.Output },],
        'allowColumnReorderingChange': [{ type: core_1.Output },],
        'allowColumnResizingChange': [{ type: core_1.Output },],
        'cacheEnabledChange': [{ type: core_1.Output },],
        'cellHintEnabledChange': [{ type: core_1.Output },],
        'columnAutoWidthChange': [{ type: core_1.Output },],
        'columnChooserChange': [{ type: core_1.Output },],
        'columnFixingChange': [{ type: core_1.Output },],
        'columnHidingEnabledChange': [{ type: core_1.Output },],
        'columnMinWidthChange': [{ type: core_1.Output },],
        'columnResizingModeChange': [{ type: core_1.Output },],
        'columnsChange': [{ type: core_1.Output },],
        'customizeColumnsChange': [{ type: core_1.Output },],
        'customizeExportDataChange': [{ type: core_1.Output },],
        'dataSourceChange': [{ type: core_1.Output },],
        'dateSerializationFormatChange': [{ type: core_1.Output },],
        'disabledChange': [{ type: core_1.Output },],
        'editingChange': [{ type: core_1.Output },],
        'elementAttrChange': [{ type: core_1.Output },],
        'errorRowEnabledChange': [{ type: core_1.Output },],
        'exportChange': [{ type: core_1.Output },],
        'filterRowChange': [{ type: core_1.Output },],
        'focusStateEnabledChange': [{ type: core_1.Output },],
        'groupingChange': [{ type: core_1.Output },],
        'groupPanelChange': [{ type: core_1.Output },],
        'headerFilterChange': [{ type: core_1.Output },],
        'heightChange': [{ type: core_1.Output },],
        'hintChange': [{ type: core_1.Output },],
        'hoverStateEnabledChange': [{ type: core_1.Output },],
        'keyExprChange': [{ type: core_1.Output },],
        'loadPanelChange': [{ type: core_1.Output },],
        'masterDetailChange': [{ type: core_1.Output },],
        'noDataTextChange': [{ type: core_1.Output },],
        'pagerChange': [{ type: core_1.Output },],
        'pagingChange': [{ type: core_1.Output },],
        'remoteOperationsChange': [{ type: core_1.Output },],
        'rowAlternationEnabledChange': [{ type: core_1.Output },],
        'rowTemplateChange': [{ type: core_1.Output },],
        'rtlEnabledChange': [{ type: core_1.Output },],
        'scrollingChange': [{ type: core_1.Output },],
        'searchPanelChange': [{ type: core_1.Output },],
        'selectedRowKeysChange': [{ type: core_1.Output },],
        'selectionChange': [{ type: core_1.Output },],
        'selectionFilterChange': [{ type: core_1.Output },],
        'showBordersChange': [{ type: core_1.Output },],
        'showColumnHeadersChange': [{ type: core_1.Output },],
        'showColumnLinesChange': [{ type: core_1.Output },],
        'showRowLinesChange': [{ type: core_1.Output },],
        'sortByGroupSummaryInfoChange': [{ type: core_1.Output },],
        'sortingChange': [{ type: core_1.Output },],
        'stateStoringChange': [{ type: core_1.Output },],
        'summaryChange': [{ type: core_1.Output },],
        'tabIndexChange': [{ type: core_1.Output },],
        'twoWayBindingEnabledChange': [{ type: core_1.Output },],
        'visibleChange': [{ type: core_1.Output },],
        'widthChange': [{ type: core_1.Output },],
        'wordWrapEnabledChange': [{ type: core_1.Output },],
        'columnsChildren': [{ type: core_1.ContentChildren, args: [column_dxi_2.DxiColumnComponent,] },],
        'sortByGroupSummaryInfoChildren': [{ type: core_1.ContentChildren, args: [sort_by_group_summary_info_dxi_2.DxiSortByGroupSummaryInfoComponent,] },],
    };
    return DxDataGridComponent;
}(component_1.DxComponent));
exports.DxDataGridComponent = DxDataGridComponent;
var DxDataGridModule = (function () {
    function DxDataGridModule() {
    }
    DxDataGridModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        column_chooser_1.DxoColumnChooserModule,
                        column_fixing_1.DxoColumnFixingModule,
                        texts_1.DxoTextsModule,
                        column_dxi_1.DxiColumnModule,
                        header_filter_1.DxoHeaderFilterModule,
                        lookup_1.DxoLookupModule,
                        format_1.DxoFormatModule,
                        form_item_1.DxoFormItemModule,
                        label_1.DxoLabelModule,
                        validation_rule_dxi_1.DxiValidationRuleModule,
                        editing_1.DxoEditingModule,
                        form_1.DxoFormModule,
                        col_count_by_screen_1.DxoColCountByScreenModule,
                        item_dxi_1.DxiItemModule,
                        tab_panel_options_1.DxoTabPanelOptionsModule,
                        tab_dxi_1.DxiTabModule,
                        popup_1.DxoPopupModule,
                        animation_1.DxoAnimationModule,
                        hide_1.DxoHideModule,
                        show_1.DxoShowModule,
                        position_1.DxoPositionModule,
                        at_1.DxoAtModule,
                        boundary_offset_1.DxoBoundaryOffsetModule,
                        collision_1.DxoCollisionModule,
                        my_1.DxoMyModule,
                        offset_1.DxoOffsetModule,
                        toolbar_item_dxi_1.DxiToolbarItemModule,
                        export_1.DxoExportModule,
                        filter_row_1.DxoFilterRowModule,
                        operation_descriptions_1.DxoOperationDescriptionsModule,
                        grouping_1.DxoGroupingModule,
                        group_panel_1.DxoGroupPanelModule,
                        load_panel_1.DxoLoadPanelModule,
                        master_detail_1.DxoMasterDetailModule,
                        pager_1.DxoPagerModule,
                        paging_1.DxoPagingModule,
                        remote_operations_1.DxoRemoteOperationsModule,
                        scrolling_1.DxoScrollingModule,
                        search_panel_1.DxoSearchPanelModule,
                        selection_1.DxoSelectionModule,
                        sort_by_group_summary_info_dxi_1.DxiSortByGroupSummaryInfoModule,
                        sorting_1.DxoSortingModule,
                        state_storing_1.DxoStateStoringModule,
                        summary_1.DxoSummaryModule,
                        group_item_dxi_1.DxiGroupItemModule,
                        value_format_1.DxoValueFormatModule,
                        total_item_dxi_1.DxiTotalItemModule,
                        template_1.DxTemplateModule
                    ],
                    declarations: [
                        DxDataGridComponent
                    ],
                    exports: [
                        DxDataGridComponent,
                        column_chooser_1.DxoColumnChooserModule,
                        column_fixing_1.DxoColumnFixingModule,
                        texts_1.DxoTextsModule,
                        column_dxi_1.DxiColumnModule,
                        header_filter_1.DxoHeaderFilterModule,
                        lookup_1.DxoLookupModule,
                        format_1.DxoFormatModule,
                        form_item_1.DxoFormItemModule,
                        label_1.DxoLabelModule,
                        validation_rule_dxi_1.DxiValidationRuleModule,
                        editing_1.DxoEditingModule,
                        form_1.DxoFormModule,
                        col_count_by_screen_1.DxoColCountByScreenModule,
                        item_dxi_1.DxiItemModule,
                        tab_panel_options_1.DxoTabPanelOptionsModule,
                        tab_dxi_1.DxiTabModule,
                        popup_1.DxoPopupModule,
                        animation_1.DxoAnimationModule,
                        hide_1.DxoHideModule,
                        show_1.DxoShowModule,
                        position_1.DxoPositionModule,
                        at_1.DxoAtModule,
                        boundary_offset_1.DxoBoundaryOffsetModule,
                        collision_1.DxoCollisionModule,
                        my_1.DxoMyModule,
                        offset_1.DxoOffsetModule,
                        toolbar_item_dxi_1.DxiToolbarItemModule,
                        export_1.DxoExportModule,
                        filter_row_1.DxoFilterRowModule,
                        operation_descriptions_1.DxoOperationDescriptionsModule,
                        grouping_1.DxoGroupingModule,
                        group_panel_1.DxoGroupPanelModule,
                        load_panel_1.DxoLoadPanelModule,
                        master_detail_1.DxoMasterDetailModule,
                        pager_1.DxoPagerModule,
                        paging_1.DxoPagingModule,
                        remote_operations_1.DxoRemoteOperationsModule,
                        scrolling_1.DxoScrollingModule,
                        search_panel_1.DxoSearchPanelModule,
                        selection_1.DxoSelectionModule,
                        sort_by_group_summary_info_dxi_1.DxiSortByGroupSummaryInfoModule,
                        sorting_1.DxoSortingModule,
                        state_storing_1.DxoStateStoringModule,
                        summary_1.DxoSummaryModule,
                        group_item_dxi_1.DxiGroupItemModule,
                        value_format_1.DxoValueFormatModule,
                        total_item_dxi_1.DxiTotalItemModule,
                        template_1.DxTemplateModule
                    ],
                },] },
    ];
    /** @nocollapse */
    DxDataGridModule.ctorParameters = function () { return []; };
    return DxDataGridModule;
}());
exports.DxDataGridModule = DxDataGridModule;
//# sourceMappingURL=data-grid.js.map