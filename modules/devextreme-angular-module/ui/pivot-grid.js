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
var pivot_grid_1 = require("devextreme/ui/pivot_grid");
var component_1 = require("../core/component");
var template_host_1 = require("../core/template-host");
var template_1 = require("../core/template");
var nested_option_1 = require("../core/nested-option");
var watcher_helper_1 = require("../core/watcher-helper");
var iterable_differ_helper_1 = require("../core/iterable-differ-helper");
var data_source_1 = require("./nested/data-source");
var field_dxi_1 = require("./nested/field-dxi");
var format_1 = require("./nested/format");
var header_filter_1 = require("./nested/header-filter");
var store_1 = require("./nested/store");
var export_1 = require("./nested/export");
var field_chooser_1 = require("./nested/field-chooser");
var texts_1 = require("./nested/texts");
var field_panel_1 = require("./nested/field-panel");
var load_panel_1 = require("./nested/load-panel");
var scrolling_1 = require("./nested/scrolling");
var state_storing_1 = require("./nested/state-storing");
/**
 * The PivotGrid is a widget that allows you to display and analyze multi-dimensional data from a local storage or an OLAP cube.
 */
var DxPivotGridComponent = (function (_super) {
    __extends(DxPivotGridComponent, _super);
    function DxPivotGridComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper) || this;
        _this._watcherHelper = _watcherHelper;
        _this._idh = _idh;
        _this._createEventEmitters([
            { subscribe: 'cellClick', emit: 'onCellClick' },
            { subscribe: 'cellPrepared', emit: 'onCellPrepared' },
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'contextMenuPreparing', emit: 'onContextMenuPreparing' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'exported', emit: 'onExported' },
            { subscribe: 'exporting', emit: 'onExporting' },
            { subscribe: 'fileSaving', emit: 'onFileSaving' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { emit: 'allowExpandAllChange' },
            { emit: 'allowFilteringChange' },
            { emit: 'allowSortingChange' },
            { emit: 'allowSortingBySummaryChange' },
            { emit: 'dataFieldAreaChange' },
            { emit: 'dataSourceChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'exportChange' },
            { emit: 'fieldChooserChange' },
            { emit: 'fieldPanelChange' },
            { emit: 'headerFilterChange' },
            { emit: 'heightChange' },
            { emit: 'hideEmptySummaryCellsChange' },
            { emit: 'hintChange' },
            { emit: 'loadPanelChange' },
            { emit: 'rowHeaderLayoutChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'scrollingChange' },
            { emit: 'showBordersChange' },
            { emit: 'showColumnGrandTotalsChange' },
            { emit: 'showColumnTotalsChange' },
            { emit: 'showRowGrandTotalsChange' },
            { emit: 'showRowTotalsChange' },
            { emit: 'showTotalsPriorChange' },
            { emit: 'stateStoringChange' },
            { emit: 'tabIndexChange' },
            { emit: 'textsChange' },
            { emit: 'useNativeScrollingChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' },
            { emit: 'wordWrapEnabledChange' }
        ]);
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxPivotGridComponent.prototype, "allowExpandAll", {
        /**
         * Allows an end-user to expand/collapse all header items within a header level.
         */
        get: function () {
            return this._getOption('allowExpandAll');
        },
        set: function (value) {
            this._setOption('allowExpandAll', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "allowFiltering", {
        /**
         * Allows a user to filter fields by selecting or deselecting values in the popup menu.
         */
        get: function () {
            return this._getOption('allowFiltering');
        },
        set: function (value) {
            this._setOption('allowFiltering', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "allowSorting", {
        /**
         * Allows an end-user to change sorting options.
         */
        get: function () {
            return this._getOption('allowSorting');
        },
        set: function (value) {
            this._setOption('allowSorting', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "allowSortingBySummary", {
        /**
         * Allows an end-user to sort columns by summary values.
         */
        get: function () {
            return this._getOption('allowSortingBySummary');
        },
        set: function (value) {
            this._setOption('allowSortingBySummary', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "dataFieldArea", {
        /**
         * Specifies the area to which data field headers must belong.
         */
        get: function () {
            return this._getOption('dataFieldArea');
        },
        set: function (value) {
            this._setOption('dataFieldArea', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "dataSource", {
        /**
         * Specifies a data source for the pivot grid.
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
    Object.defineProperty(DxPivotGridComponent.prototype, "disabled", {
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
    Object.defineProperty(DxPivotGridComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxPivotGridComponent.prototype, "export", {
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
    Object.defineProperty(DxPivotGridComponent.prototype, "fieldChooser", {
        /**
         * The Field Chooser configuration options.
         */
        get: function () {
            return this._getOption('fieldChooser');
        },
        set: function (value) {
            this._setOption('fieldChooser', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "fieldPanel", {
        /**
         * Configures the field panel.
         */
        get: function () {
            return this._getOption('fieldPanel');
        },
        set: function (value) {
            this._setOption('fieldPanel', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "headerFilter", {
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
    Object.defineProperty(DxPivotGridComponent.prototype, "height", {
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
    Object.defineProperty(DxPivotGridComponent.prototype, "hideEmptySummaryCells", {
        /**
         * Specifies whether or not to hide rows and columns with no data.
         */
        get: function () {
            return this._getOption('hideEmptySummaryCells');
        },
        set: function (value) {
            this._setOption('hideEmptySummaryCells', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "hint", {
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
    Object.defineProperty(DxPivotGridComponent.prototype, "loadPanel", {
        /**
         * Specifies options configuring the load panel.
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
    Object.defineProperty(DxPivotGridComponent.prototype, "rowHeaderLayout", {
        /**
         * Specifies the layout of items in the row header.
         */
        get: function () {
            return this._getOption('rowHeaderLayout');
        },
        set: function (value) {
            this._setOption('rowHeaderLayout', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxPivotGridComponent.prototype, "scrolling", {
        /**
         * A configuration object specifying scrolling options.
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
    Object.defineProperty(DxPivotGridComponent.prototype, "showBorders", {
        /**
         * Specifies whether the outer borders of the grid are visible or not.
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
    Object.defineProperty(DxPivotGridComponent.prototype, "showColumnGrandTotals", {
        /**
         * Specifies whether to display the Grand Total column.
         */
        get: function () {
            return this._getOption('showColumnGrandTotals');
        },
        set: function (value) {
            this._setOption('showColumnGrandTotals', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "showColumnTotals", {
        /**
         * Specifies whether to display the Total columns.
         */
        get: function () {
            return this._getOption('showColumnTotals');
        },
        set: function (value) {
            this._setOption('showColumnTotals', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "showRowGrandTotals", {
        /**
         * Specifies whether to display the Grand Total row.
         */
        get: function () {
            return this._getOption('showRowGrandTotals');
        },
        set: function (value) {
            this._setOption('showRowGrandTotals', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "showRowTotals", {
        /**
         * Specifies whether to display the Total rows. Applies only if rowHeaderLayout is "standard".
         */
        get: function () {
            return this._getOption('showRowTotals');
        },
        set: function (value) {
            this._setOption('showRowTotals', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "showTotalsPrior", {
        /**
         * Specifies where to show the total rows or columns. Applies only if rowHeaderLayout is "standard".
         */
        get: function () {
            return this._getOption('showTotalsPrior');
        },
        set: function (value) {
            this._setOption('showTotalsPrior', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "stateStoring", {
        /**
         * A configuration object specifying options related to state storing.
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
    Object.defineProperty(DxPivotGridComponent.prototype, "tabIndex", {
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
    Object.defineProperty(DxPivotGridComponent.prototype, "texts", {
        /**
         * Strings that can be changed or localized in the PivotGrid widget.
         */
        get: function () {
            return this._getOption('texts');
        },
        set: function (value) {
            this._setOption('texts', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "useNativeScrolling", {
        get: function () {
            return this._getOption('useNativeScrolling');
        },
        set: function (value) {
            this._setOption('useNativeScrolling', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPivotGridComponent.prototype, "visible", {
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
    Object.defineProperty(DxPivotGridComponent.prototype, "width", {
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
    Object.defineProperty(DxPivotGridComponent.prototype, "wordWrapEnabled", {
        /**
         * Specifies whether long text in header items should be wrapped.
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
    DxPivotGridComponent.prototype._createInstance = function (element, options) {
        return new pivot_grid_1.default(element, options);
    };
    DxPivotGridComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxPivotGridComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('dataSource', changes);
    };
    DxPivotGridComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxPivotGridComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('dataSource');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
    };
    DxPivotGridComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxPivotGridComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-pivot-grid',
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
    DxPivotGridComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: iterable_differ_helper_1.IterableDifferHelper, },
        { type: nested_option_1.NestedOptionHost, },
    ]; };
    DxPivotGridComponent.propDecorators = {
        'allowExpandAll': [{ type: core_1.Input },],
        'allowFiltering': [{ type: core_1.Input },],
        'allowSorting': [{ type: core_1.Input },],
        'allowSortingBySummary': [{ type: core_1.Input },],
        'dataFieldArea': [{ type: core_1.Input },],
        'dataSource': [{ type: core_1.Input },],
        'disabled': [{ type: core_1.Input },],
        'elementAttr': [{ type: core_1.Input },],
        'export': [{ type: core_1.Input },],
        'fieldChooser': [{ type: core_1.Input },],
        'fieldPanel': [{ type: core_1.Input },],
        'headerFilter': [{ type: core_1.Input },],
        'height': [{ type: core_1.Input },],
        'hideEmptySummaryCells': [{ type: core_1.Input },],
        'hint': [{ type: core_1.Input },],
        'loadPanel': [{ type: core_1.Input },],
        'rowHeaderLayout': [{ type: core_1.Input },],
        'rtlEnabled': [{ type: core_1.Input },],
        'scrolling': [{ type: core_1.Input },],
        'showBorders': [{ type: core_1.Input },],
        'showColumnGrandTotals': [{ type: core_1.Input },],
        'showColumnTotals': [{ type: core_1.Input },],
        'showRowGrandTotals': [{ type: core_1.Input },],
        'showRowTotals': [{ type: core_1.Input },],
        'showTotalsPrior': [{ type: core_1.Input },],
        'stateStoring': [{ type: core_1.Input },],
        'tabIndex': [{ type: core_1.Input },],
        'texts': [{ type: core_1.Input },],
        'useNativeScrolling': [{ type: core_1.Input },],
        'visible': [{ type: core_1.Input },],
        'width': [{ type: core_1.Input },],
        'wordWrapEnabled': [{ type: core_1.Input },],
        'onCellClick': [{ type: core_1.Output },],
        'onCellPrepared': [{ type: core_1.Output },],
        'onContentReady': [{ type: core_1.Output },],
        'onContextMenuPreparing': [{ type: core_1.Output },],
        'onDisposing': [{ type: core_1.Output },],
        'onExported': [{ type: core_1.Output },],
        'onExporting': [{ type: core_1.Output },],
        'onFileSaving': [{ type: core_1.Output },],
        'onInitialized': [{ type: core_1.Output },],
        'onOptionChanged': [{ type: core_1.Output },],
        'allowExpandAllChange': [{ type: core_1.Output },],
        'allowFilteringChange': [{ type: core_1.Output },],
        'allowSortingChange': [{ type: core_1.Output },],
        'allowSortingBySummaryChange': [{ type: core_1.Output },],
        'dataFieldAreaChange': [{ type: core_1.Output },],
        'dataSourceChange': [{ type: core_1.Output },],
        'disabledChange': [{ type: core_1.Output },],
        'elementAttrChange': [{ type: core_1.Output },],
        'exportChange': [{ type: core_1.Output },],
        'fieldChooserChange': [{ type: core_1.Output },],
        'fieldPanelChange': [{ type: core_1.Output },],
        'headerFilterChange': [{ type: core_1.Output },],
        'heightChange': [{ type: core_1.Output },],
        'hideEmptySummaryCellsChange': [{ type: core_1.Output },],
        'hintChange': [{ type: core_1.Output },],
        'loadPanelChange': [{ type: core_1.Output },],
        'rowHeaderLayoutChange': [{ type: core_1.Output },],
        'rtlEnabledChange': [{ type: core_1.Output },],
        'scrollingChange': [{ type: core_1.Output },],
        'showBordersChange': [{ type: core_1.Output },],
        'showColumnGrandTotalsChange': [{ type: core_1.Output },],
        'showColumnTotalsChange': [{ type: core_1.Output },],
        'showRowGrandTotalsChange': [{ type: core_1.Output },],
        'showRowTotalsChange': [{ type: core_1.Output },],
        'showTotalsPriorChange': [{ type: core_1.Output },],
        'stateStoringChange': [{ type: core_1.Output },],
        'tabIndexChange': [{ type: core_1.Output },],
        'textsChange': [{ type: core_1.Output },],
        'useNativeScrollingChange': [{ type: core_1.Output },],
        'visibleChange': [{ type: core_1.Output },],
        'widthChange': [{ type: core_1.Output },],
        'wordWrapEnabledChange': [{ type: core_1.Output },],
    };
    return DxPivotGridComponent;
}(component_1.DxComponent));
exports.DxPivotGridComponent = DxPivotGridComponent;
var DxPivotGridModule = (function () {
    function DxPivotGridModule() {
    }
    DxPivotGridModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        data_source_1.DxoDataSourceModule,
                        field_dxi_1.DxiFieldModule,
                        format_1.DxoFormatModule,
                        header_filter_1.DxoHeaderFilterModule,
                        store_1.DxoStoreModule,
                        export_1.DxoExportModule,
                        field_chooser_1.DxoFieldChooserModule,
                        texts_1.DxoTextsModule,
                        field_panel_1.DxoFieldPanelModule,
                        load_panel_1.DxoLoadPanelModule,
                        scrolling_1.DxoScrollingModule,
                        state_storing_1.DxoStateStoringModule,
                        template_1.DxTemplateModule
                    ],
                    declarations: [
                        DxPivotGridComponent
                    ],
                    exports: [
                        DxPivotGridComponent,
                        data_source_1.DxoDataSourceModule,
                        field_dxi_1.DxiFieldModule,
                        format_1.DxoFormatModule,
                        header_filter_1.DxoHeaderFilterModule,
                        store_1.DxoStoreModule,
                        export_1.DxoExportModule,
                        field_chooser_1.DxoFieldChooserModule,
                        texts_1.DxoTextsModule,
                        field_panel_1.DxoFieldPanelModule,
                        load_panel_1.DxoLoadPanelModule,
                        scrolling_1.DxoScrollingModule,
                        state_storing_1.DxoStateStoringModule,
                        template_1.DxTemplateModule
                    ],
                },] },
    ];
    /** @nocollapse */
    DxPivotGridModule.ctorParameters = function () { return []; };
    return DxPivotGridModule;
}());
exports.DxPivotGridModule = DxPivotGridModule;
//# sourceMappingURL=pivot-grid.js.map