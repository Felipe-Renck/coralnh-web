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
var resizable_1 = require("devextreme/ui/resizable");
var component_1 = require("../core/component");
var template_host_1 = require("../core/template-host");
var template_1 = require("../core/template");
var nested_option_1 = require("../core/nested-option");
var watcher_helper_1 = require("../core/watcher-helper");
/**
 * The Resizable widget enables its content to be resizable in the UI.
 */
var DxResizableComponent = (function (_super) {
    __extends(DxResizableComponent, _super);
    function DxResizableComponent(elementRef, ngZone, templateHost, _watcherHelper, optionHost) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper) || this;
        _this._createEventEmitters([
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'resize', emit: 'onResize' },
            { subscribe: 'resizeEnd', emit: 'onResizeEnd' },
            { subscribe: 'resizeStart', emit: 'onResizeStart' },
            { emit: 'elementAttrChange' },
            { emit: 'handlesChange' },
            { emit: 'heightChange' },
            { emit: 'maxHeightChange' },
            { emit: 'maxWidthChange' },
            { emit: 'minHeightChange' },
            { emit: 'minWidthChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'widthChange' }
        ]);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxResizableComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxResizableComponent.prototype, "handles", {
        /**
         * Specifies which borders of the widget element are used as a handle.
         */
        get: function () {
            return this._getOption('handles');
        },
        set: function (value) {
            this._setOption('handles', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxResizableComponent.prototype, "height", {
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
    Object.defineProperty(DxResizableComponent.prototype, "maxHeight", {
        /**
         * Specifies the upper height boundary for resizing.
         */
        get: function () {
            return this._getOption('maxHeight');
        },
        set: function (value) {
            this._setOption('maxHeight', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxResizableComponent.prototype, "maxWidth", {
        /**
         * Specifies the upper width boundary for resizing.
         */
        get: function () {
            return this._getOption('maxWidth');
        },
        set: function (value) {
            this._setOption('maxWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxResizableComponent.prototype, "minHeight", {
        /**
         * Specifies the lower height boundary for resizing.
         */
        get: function () {
            return this._getOption('minHeight');
        },
        set: function (value) {
            this._setOption('minHeight', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxResizableComponent.prototype, "minWidth", {
        /**
         * Specifies the lower width boundary for resizing.
         */
        get: function () {
            return this._getOption('minWidth');
        },
        set: function (value) {
            this._setOption('minWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxResizableComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxResizableComponent.prototype, "width", {
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
    DxResizableComponent.prototype._createInstance = function (element, options) {
        return new resizable_1.default(element, options);
    };
    DxResizableComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxResizableComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-resizable',
                    template: '<ng-content></ng-content>',
                    providers: [
                        template_host_1.DxTemplateHost,
                        watcher_helper_1.WatcherHelper,
                        nested_option_1.NestedOptionHost
                    ]
                },] },
    ];
    /** @nocollapse */
    DxResizableComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: nested_option_1.NestedOptionHost, },
    ]; };
    DxResizableComponent.propDecorators = {
        'elementAttr': [{ type: core_1.Input },],
        'handles': [{ type: core_1.Input },],
        'height': [{ type: core_1.Input },],
        'maxHeight': [{ type: core_1.Input },],
        'maxWidth': [{ type: core_1.Input },],
        'minHeight': [{ type: core_1.Input },],
        'minWidth': [{ type: core_1.Input },],
        'rtlEnabled': [{ type: core_1.Input },],
        'width': [{ type: core_1.Input },],
        'onDisposing': [{ type: core_1.Output },],
        'onInitialized': [{ type: core_1.Output },],
        'onOptionChanged': [{ type: core_1.Output },],
        'onResize': [{ type: core_1.Output },],
        'onResizeEnd': [{ type: core_1.Output },],
        'onResizeStart': [{ type: core_1.Output },],
        'elementAttrChange': [{ type: core_1.Output },],
        'handlesChange': [{ type: core_1.Output },],
        'heightChange': [{ type: core_1.Output },],
        'maxHeightChange': [{ type: core_1.Output },],
        'maxWidthChange': [{ type: core_1.Output },],
        'minHeightChange': [{ type: core_1.Output },],
        'minWidthChange': [{ type: core_1.Output },],
        'rtlEnabledChange': [{ type: core_1.Output },],
        'widthChange': [{ type: core_1.Output },],
    };
    return DxResizableComponent;
}(component_1.DxComponent));
exports.DxResizableComponent = DxResizableComponent;
var DxResizableModule = (function () {
    function DxResizableModule() {
    }
    DxResizableModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        template_1.DxTemplateModule
                    ],
                    declarations: [
                        DxResizableComponent
                    ],
                    exports: [
                        DxResizableComponent,
                        template_1.DxTemplateModule
                    ],
                },] },
    ];
    /** @nocollapse */
    DxResizableModule.ctorParameters = function () { return []; };
    return DxResizableModule;
}());
exports.DxResizableModule = DxResizableModule;
//# sourceMappingURL=resizable.js.map