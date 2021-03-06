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
var nested_option_1 = require("../../core/nested-option");
var nested_option_2 = require("../../core/nested-option");
var DxiLayerComponent = (function (_super) {
    __extends(DxiLayerComponent, _super);
    function DxiLayerComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxiLayerComponent.prototype, "borderColor", {
        get: function () {
            return this._getOption('borderColor');
        },
        set: function (value) {
            this._setOption('borderColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiLayerComponent.prototype, "borderWidth", {
        get: function () {
            return this._getOption('borderWidth');
        },
        set: function (value) {
            this._setOption('borderWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiLayerComponent.prototype, "color", {
        get: function () {
            return this._getOption('color');
        },
        set: function (value) {
            this._setOption('color', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiLayerComponent.prototype, "colorGroupingField", {
        get: function () {
            return this._getOption('colorGroupingField');
        },
        set: function (value) {
            this._setOption('colorGroupingField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiLayerComponent.prototype, "colorGroups", {
        get: function () {
            return this._getOption('colorGroups');
        },
        set: function (value) {
            this._setOption('colorGroups', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiLayerComponent.prototype, "customize", {
        get: function () {
            return this._getOption('customize');
        },
        set: function (value) {
            this._setOption('customize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiLayerComponent.prototype, "data", {
        get: function () {
            return this._getOption('data');
        },
        set: function (value) {
            this._setOption('data', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiLayerComponent.prototype, "dataField", {
        get: function () {
            return this._getOption('dataField');
        },
        set: function (value) {
            this._setOption('dataField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiLayerComponent.prototype, "dataSource", {
        get: function () {
            return this._getOption('dataSource');
        },
        set: function (value) {
            this._setOption('dataSource', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiLayerComponent.prototype, "elementType", {
        get: function () {
            return this._getOption('elementType');
        },
        set: function (value) {
            this._setOption('elementType', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiLayerComponent.prototype, "hoveredBorderColor", {
        get: function () {
            return this._getOption('hoveredBorderColor');
        },
        set: function (value) {
            this._setOption('hoveredBorderColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiLayerComponent.prototype, "hoveredBorderWidth", {
        get: function () {
            return this._getOption('hoveredBorderWidth');
        },
        set: function (value) {
            this._setOption('hoveredBorderWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiLayerComponent.prototype, "hoveredColor", {
        get: function () {
            return this._getOption('hoveredColor');
        },
        set: function (value) {
            this._setOption('hoveredColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiLayerComponent.prototype, "hoverEnabled", {
        get: function () {
            return this._getOption('hoverEnabled');
        },
        set: function (value) {
            this._setOption('hoverEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiLayerComponent.prototype, "label", {
        get: function () {
            return this._getOption('label');
        },
        set: function (value) {
            this._setOption('label', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiLayerComponent.prototype, "maxSize", {
        get: function () {
            return this._getOption('maxSize');
        },
        set: function (value) {
            this._setOption('maxSize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiLayerComponent.prototype, "minSize", {
        get: function () {
            return this._getOption('minSize');
        },
        set: function (value) {
            this._setOption('minSize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiLayerComponent.prototype, "name", {
        get: function () {
            return this._getOption('name');
        },
        set: function (value) {
            this._setOption('name', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiLayerComponent.prototype, "opacity", {
        get: function () {
            return this._getOption('opacity');
        },
        set: function (value) {
            this._setOption('opacity', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiLayerComponent.prototype, "palette", {
        get: function () {
            return this._getOption('palette');
        },
        set: function (value) {
            this._setOption('palette', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiLayerComponent.prototype, "paletteSize", {
        get: function () {
            return this._getOption('paletteSize');
        },
        set: function (value) {
            this._setOption('paletteSize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiLayerComponent.prototype, "selectedBorderColor", {
        get: function () {
            return this._getOption('selectedBorderColor');
        },
        set: function (value) {
            this._setOption('selectedBorderColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiLayerComponent.prototype, "selectedBorderWidth", {
        get: function () {
            return this._getOption('selectedBorderWidth');
        },
        set: function (value) {
            this._setOption('selectedBorderWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiLayerComponent.prototype, "selectedColor", {
        get: function () {
            return this._getOption('selectedColor');
        },
        set: function (value) {
            this._setOption('selectedColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiLayerComponent.prototype, "selectionMode", {
        get: function () {
            return this._getOption('selectionMode');
        },
        set: function (value) {
            this._setOption('selectionMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiLayerComponent.prototype, "size", {
        get: function () {
            return this._getOption('size');
        },
        set: function (value) {
            this._setOption('size', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiLayerComponent.prototype, "sizeGroupingField", {
        get: function () {
            return this._getOption('sizeGroupingField');
        },
        set: function (value) {
            this._setOption('sizeGroupingField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiLayerComponent.prototype, "sizeGroups", {
        get: function () {
            return this._getOption('sizeGroups');
        },
        set: function (value) {
            this._setOption('sizeGroups', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiLayerComponent.prototype, "type", {
        get: function () {
            return this._getOption('type');
        },
        set: function (value) {
            this._setOption('type', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiLayerComponent.prototype, "_optionPath", {
        get: function () {
            return 'layers';
        },
        enumerable: true,
        configurable: true
    });
    DxiLayerComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxi-layer',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxiLayerComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxiLayerComponent.propDecorators = {
        'borderColor': [{ type: core_1.Input },],
        'borderWidth': [{ type: core_1.Input },],
        'color': [{ type: core_1.Input },],
        'colorGroupingField': [{ type: core_1.Input },],
        'colorGroups': [{ type: core_1.Input },],
        'customize': [{ type: core_1.Input },],
        'data': [{ type: core_1.Input },],
        'dataField': [{ type: core_1.Input },],
        'dataSource': [{ type: core_1.Input },],
        'elementType': [{ type: core_1.Input },],
        'hoveredBorderColor': [{ type: core_1.Input },],
        'hoveredBorderWidth': [{ type: core_1.Input },],
        'hoveredColor': [{ type: core_1.Input },],
        'hoverEnabled': [{ type: core_1.Input },],
        'label': [{ type: core_1.Input },],
        'maxSize': [{ type: core_1.Input },],
        'minSize': [{ type: core_1.Input },],
        'name': [{ type: core_1.Input },],
        'opacity': [{ type: core_1.Input },],
        'palette': [{ type: core_1.Input },],
        'paletteSize': [{ type: core_1.Input },],
        'selectedBorderColor': [{ type: core_1.Input },],
        'selectedBorderWidth': [{ type: core_1.Input },],
        'selectedColor': [{ type: core_1.Input },],
        'selectionMode': [{ type: core_1.Input },],
        'size': [{ type: core_1.Input },],
        'sizeGroupingField': [{ type: core_1.Input },],
        'sizeGroups': [{ type: core_1.Input },],
        'type': [{ type: core_1.Input },],
    };
    return DxiLayerComponent;
}(nested_option_2.CollectionNestedOption));
exports.DxiLayerComponent = DxiLayerComponent;
var DxiLayerModule = (function () {
    function DxiLayerModule() {
    }
    DxiLayerModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxiLayerComponent
                    ],
                    exports: [
                        DxiLayerComponent
                    ],
                },] },
    ];
    /** @nocollapse */
    DxiLayerModule.ctorParameters = function () { return []; };
    return DxiLayerModule;
}());
exports.DxiLayerModule = DxiLayerModule;
//# sourceMappingURL=layer-dxi.js.map