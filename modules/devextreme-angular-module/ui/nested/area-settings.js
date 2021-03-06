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
var DxoAreaSettingsComponent = (function (_super) {
    __extends(DxoAreaSettingsComponent, _super);
    function DxoAreaSettingsComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoAreaSettingsComponent.prototype, "borderColor", {
        get: function () {
            return this._getOption('borderColor');
        },
        set: function (value) {
            this._setOption('borderColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoAreaSettingsComponent.prototype, "borderWidth", {
        get: function () {
            return this._getOption('borderWidth');
        },
        set: function (value) {
            this._setOption('borderWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoAreaSettingsComponent.prototype, "color", {
        get: function () {
            return this._getOption('color');
        },
        set: function (value) {
            this._setOption('color', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoAreaSettingsComponent.prototype, "colorGroupingField", {
        get: function () {
            return this._getOption('colorGroupingField');
        },
        set: function (value) {
            this._setOption('colorGroupingField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoAreaSettingsComponent.prototype, "colorGroups", {
        get: function () {
            return this._getOption('colorGroups');
        },
        set: function (value) {
            this._setOption('colorGroups', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoAreaSettingsComponent.prototype, "customize", {
        get: function () {
            return this._getOption('customize');
        },
        set: function (value) {
            this._setOption('customize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoAreaSettingsComponent.prototype, "hoveredBorderColor", {
        get: function () {
            return this._getOption('hoveredBorderColor');
        },
        set: function (value) {
            this._setOption('hoveredBorderColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoAreaSettingsComponent.prototype, "hoveredBorderWidth", {
        get: function () {
            return this._getOption('hoveredBorderWidth');
        },
        set: function (value) {
            this._setOption('hoveredBorderWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoAreaSettingsComponent.prototype, "hoveredColor", {
        get: function () {
            return this._getOption('hoveredColor');
        },
        set: function (value) {
            this._setOption('hoveredColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoAreaSettingsComponent.prototype, "hoverEnabled", {
        get: function () {
            return this._getOption('hoverEnabled');
        },
        set: function (value) {
            this._setOption('hoverEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoAreaSettingsComponent.prototype, "label", {
        get: function () {
            return this._getOption('label');
        },
        set: function (value) {
            this._setOption('label', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoAreaSettingsComponent.prototype, "palette", {
        get: function () {
            return this._getOption('palette');
        },
        set: function (value) {
            this._setOption('palette', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoAreaSettingsComponent.prototype, "paletteSize", {
        get: function () {
            return this._getOption('paletteSize');
        },
        set: function (value) {
            this._setOption('paletteSize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoAreaSettingsComponent.prototype, "selectedBorderColor", {
        get: function () {
            return this._getOption('selectedBorderColor');
        },
        set: function (value) {
            this._setOption('selectedBorderColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoAreaSettingsComponent.prototype, "selectedBorderWidth", {
        get: function () {
            return this._getOption('selectedBorderWidth');
        },
        set: function (value) {
            this._setOption('selectedBorderWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoAreaSettingsComponent.prototype, "selectedColor", {
        get: function () {
            return this._getOption('selectedColor');
        },
        set: function (value) {
            this._setOption('selectedColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoAreaSettingsComponent.prototype, "selectionMode", {
        get: function () {
            return this._getOption('selectionMode');
        },
        set: function (value) {
            this._setOption('selectionMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoAreaSettingsComponent.prototype, "_optionPath", {
        get: function () {
            return 'areaSettings';
        },
        enumerable: true,
        configurable: true
    });
    DxoAreaSettingsComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-area-settings',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoAreaSettingsComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoAreaSettingsComponent.propDecorators = {
        'borderColor': [{ type: core_1.Input },],
        'borderWidth': [{ type: core_1.Input },],
        'color': [{ type: core_1.Input },],
        'colorGroupingField': [{ type: core_1.Input },],
        'colorGroups': [{ type: core_1.Input },],
        'customize': [{ type: core_1.Input },],
        'hoveredBorderColor': [{ type: core_1.Input },],
        'hoveredBorderWidth': [{ type: core_1.Input },],
        'hoveredColor': [{ type: core_1.Input },],
        'hoverEnabled': [{ type: core_1.Input },],
        'label': [{ type: core_1.Input },],
        'palette': [{ type: core_1.Input },],
        'paletteSize': [{ type: core_1.Input },],
        'selectedBorderColor': [{ type: core_1.Input },],
        'selectedBorderWidth': [{ type: core_1.Input },],
        'selectedColor': [{ type: core_1.Input },],
        'selectionMode': [{ type: core_1.Input },],
    };
    return DxoAreaSettingsComponent;
}(nested_option_2.NestedOption));
exports.DxoAreaSettingsComponent = DxoAreaSettingsComponent;
var DxoAreaSettingsModule = (function () {
    function DxoAreaSettingsModule() {
    }
    DxoAreaSettingsModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoAreaSettingsComponent
                    ],
                    exports: [
                        DxoAreaSettingsComponent
                    ],
                },] },
    ];
    /** @nocollapse */
    DxoAreaSettingsModule.ctorParameters = function () { return []; };
    return DxoAreaSettingsModule;
}());
exports.DxoAreaSettingsModule = DxoAreaSettingsModule;
//# sourceMappingURL=area-settings.js.map