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
var responsive_box_1 = require("devextreme/ui/responsive_box");
var component_1 = require("../core/component");
var template_host_1 = require("../core/template-host");
var template_1 = require("../core/template");
var nested_option_1 = require("../core/nested-option");
var watcher_helper_1 = require("../core/watcher-helper");
var iterable_differ_helper_1 = require("../core/iterable-differ-helper");
var col_dxi_1 = require("./nested/col-dxi");
var item_dxi_1 = require("./nested/item-dxi");
var location_dxi_1 = require("./nested/location-dxi");
var row_dxi_1 = require("./nested/row-dxi");
var col_dxi_2 = require("./nested/col-dxi");
var item_dxi_2 = require("./nested/item-dxi");
var row_dxi_2 = require("./nested/row-dxi");
/**
 * The ResponsiveBox widget allows you to create an application or a website with a layout adapted to different screen sizes.
 */
var DxResponsiveBoxComponent = (function (_super) {
    __extends(DxResponsiveBoxComponent, _super);
    function DxResponsiveBoxComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper) || this;
        _this._watcherHelper = _watcherHelper;
        _this._idh = _idh;
        _this._createEventEmitters([
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'itemClick', emit: 'onItemClick' },
            { subscribe: 'itemContextMenu', emit: 'onItemContextMenu' },
            { subscribe: 'itemHold', emit: 'onItemHold' },
            { subscribe: 'itemRendered', emit: 'onItemRendered' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { emit: 'colsChange' },
            { emit: 'dataSourceChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'heightChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'itemHoldTimeoutChange' },
            { emit: 'itemsChange' },
            { emit: 'itemTemplateChange' },
            { emit: 'rowsChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'screenByWidthChange' },
            { emit: 'singleColumnScreenChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' }
        ]);
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxResponsiveBoxComponent.prototype, "cols", {
        /**
         * Specifies the collection of columns for the grid used to position layout elements.
         */
        get: function () {
            return this._getOption('cols');
        },
        set: function (value) {
            this._setOption('cols', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxResponsiveBoxComponent.prototype, "dataSource", {
        /**
         * A data source used to fetch data to be displayed by the widget.
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
    Object.defineProperty(DxResponsiveBoxComponent.prototype, "disabled", {
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
    Object.defineProperty(DxResponsiveBoxComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxResponsiveBoxComponent.prototype, "height", {
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
    Object.defineProperty(DxResponsiveBoxComponent.prototype, "hoverStateEnabled", {
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
    Object.defineProperty(DxResponsiveBoxComponent.prototype, "itemHoldTimeout", {
        /**
         * The time period in milliseconds before the onItemHold event is raised.
         */
        get: function () {
            return this._getOption('itemHoldTimeout');
        },
        set: function (value) {
            this._setOption('itemHoldTimeout', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxResponsiveBoxComponent.prototype, "items", {
        /**
         * An array of items displayed by the widget.
         */
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this._setOption('items', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxResponsiveBoxComponent.prototype, "itemTemplate", {
        /**
         * Specifies a custom template for items.
         */
        get: function () {
            return this._getOption('itemTemplate');
        },
        set: function (value) {
            this._setOption('itemTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxResponsiveBoxComponent.prototype, "rows", {
        /**
         * Specifies the collection of rows for the grid used to position layout elements.
         */
        get: function () {
            return this._getOption('rows');
        },
        set: function (value) {
            this._setOption('rows', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxResponsiveBoxComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxResponsiveBoxComponent.prototype, "screenByWidth", {
        /**
         * Specifies the function returning the size qualifier depending on the screen's width.
         */
        get: function () {
            return this._getOption('screenByWidth');
        },
        set: function (value) {
            this._setOption('screenByWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxResponsiveBoxComponent.prototype, "singleColumnScreen", {
        /**
         * Decides on which screens all layout elements should be arranged in a single column.
         */
        get: function () {
            return this._getOption('singleColumnScreen');
        },
        set: function (value) {
            this._setOption('singleColumnScreen', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxResponsiveBoxComponent.prototype, "visible", {
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
    Object.defineProperty(DxResponsiveBoxComponent.prototype, "width", {
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
    Object.defineProperty(DxResponsiveBoxComponent.prototype, "colsChildren", {
        get: function () {
            return this._getOption('cols');
        },
        set: function (value) {
            this.setChildren('cols', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxResponsiveBoxComponent.prototype, "itemsChildren", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this.setChildren('items', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxResponsiveBoxComponent.prototype, "rowsChildren", {
        get: function () {
            return this._getOption('rows');
        },
        set: function (value) {
            this.setChildren('rows', value);
        },
        enumerable: true,
        configurable: true
    });
    DxResponsiveBoxComponent.prototype._createInstance = function (element, options) {
        return new responsive_box_1.default(element, options);
    };
    DxResponsiveBoxComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxResponsiveBoxComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('cols', changes);
        this.setupChanges('dataSource', changes);
        this.setupChanges('items', changes);
        this.setupChanges('rows', changes);
    };
    DxResponsiveBoxComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxResponsiveBoxComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('cols');
        this._idh.doCheck('dataSource');
        this._idh.doCheck('items');
        this._idh.doCheck('rows');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
    };
    DxResponsiveBoxComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxResponsiveBoxComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-responsive-box',
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
    DxResponsiveBoxComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: iterable_differ_helper_1.IterableDifferHelper, },
        { type: nested_option_1.NestedOptionHost, },
    ]; };
    DxResponsiveBoxComponent.propDecorators = {
        'cols': [{ type: core_1.Input },],
        'dataSource': [{ type: core_1.Input },],
        'disabled': [{ type: core_1.Input },],
        'elementAttr': [{ type: core_1.Input },],
        'height': [{ type: core_1.Input },],
        'hoverStateEnabled': [{ type: core_1.Input },],
        'itemHoldTimeout': [{ type: core_1.Input },],
        'items': [{ type: core_1.Input },],
        'itemTemplate': [{ type: core_1.Input },],
        'rows': [{ type: core_1.Input },],
        'rtlEnabled': [{ type: core_1.Input },],
        'screenByWidth': [{ type: core_1.Input },],
        'singleColumnScreen': [{ type: core_1.Input },],
        'visible': [{ type: core_1.Input },],
        'width': [{ type: core_1.Input },],
        'onContentReady': [{ type: core_1.Output },],
        'onDisposing': [{ type: core_1.Output },],
        'onInitialized': [{ type: core_1.Output },],
        'onItemClick': [{ type: core_1.Output },],
        'onItemContextMenu': [{ type: core_1.Output },],
        'onItemHold': [{ type: core_1.Output },],
        'onItemRendered': [{ type: core_1.Output },],
        'onOptionChanged': [{ type: core_1.Output },],
        'colsChange': [{ type: core_1.Output },],
        'dataSourceChange': [{ type: core_1.Output },],
        'disabledChange': [{ type: core_1.Output },],
        'elementAttrChange': [{ type: core_1.Output },],
        'heightChange': [{ type: core_1.Output },],
        'hoverStateEnabledChange': [{ type: core_1.Output },],
        'itemHoldTimeoutChange': [{ type: core_1.Output },],
        'itemsChange': [{ type: core_1.Output },],
        'itemTemplateChange': [{ type: core_1.Output },],
        'rowsChange': [{ type: core_1.Output },],
        'rtlEnabledChange': [{ type: core_1.Output },],
        'screenByWidthChange': [{ type: core_1.Output },],
        'singleColumnScreenChange': [{ type: core_1.Output },],
        'visibleChange': [{ type: core_1.Output },],
        'widthChange': [{ type: core_1.Output },],
        'colsChildren': [{ type: core_1.ContentChildren, args: [col_dxi_2.DxiColComponent,] },],
        'itemsChildren': [{ type: core_1.ContentChildren, args: [item_dxi_2.DxiItemComponent,] },],
        'rowsChildren': [{ type: core_1.ContentChildren, args: [row_dxi_2.DxiRowComponent,] },],
    };
    return DxResponsiveBoxComponent;
}(component_1.DxComponent));
exports.DxResponsiveBoxComponent = DxResponsiveBoxComponent;
var DxResponsiveBoxModule = (function () {
    function DxResponsiveBoxModule() {
    }
    DxResponsiveBoxModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        col_dxi_1.DxiColModule,
                        item_dxi_1.DxiItemModule,
                        location_dxi_1.DxiLocationModule,
                        row_dxi_1.DxiRowModule,
                        template_1.DxTemplateModule
                    ],
                    declarations: [
                        DxResponsiveBoxComponent
                    ],
                    exports: [
                        DxResponsiveBoxComponent,
                        col_dxi_1.DxiColModule,
                        item_dxi_1.DxiItemModule,
                        location_dxi_1.DxiLocationModule,
                        row_dxi_1.DxiRowModule,
                        template_1.DxTemplateModule
                    ],
                },] },
    ];
    /** @nocollapse */
    DxResponsiveBoxModule.ctorParameters = function () { return []; };
    return DxResponsiveBoxModule;
}());
exports.DxResponsiveBoxModule = DxResponsiveBoxModule;
//# sourceMappingURL=responsive-box.js.map