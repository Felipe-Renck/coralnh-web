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
var DxoMinorTickComponent = (function (_super) {
    __extends(DxoMinorTickComponent, _super);
    function DxoMinorTickComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoMinorTickComponent.prototype, "color", {
        get: function () {
            return this._getOption('color');
        },
        set: function (value) {
            this._setOption('color', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMinorTickComponent.prototype, "length", {
        get: function () {
            return this._getOption('length');
        },
        set: function (value) {
            this._setOption('length', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMinorTickComponent.prototype, "opacity", {
        get: function () {
            return this._getOption('opacity');
        },
        set: function (value) {
            this._setOption('opacity', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMinorTickComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMinorTickComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMinorTickComponent.prototype, "customTickValues", {
        get: function () {
            return this._getOption('customTickValues');
        },
        set: function (value) {
            this._setOption('customTickValues', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMinorTickComponent.prototype, "showCalculatedTicks", {
        get: function () {
            return this._getOption('showCalculatedTicks');
        },
        set: function (value) {
            this._setOption('showCalculatedTicks', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMinorTickComponent.prototype, "tickInterval", {
        get: function () {
            return this._getOption('tickInterval');
        },
        set: function (value) {
            this._setOption('tickInterval', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMinorTickComponent.prototype, "_optionPath", {
        get: function () {
            return 'minorTick';
        },
        enumerable: true,
        configurable: true
    });
    DxoMinorTickComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-minor-tick',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoMinorTickComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoMinorTickComponent.propDecorators = {
        'color': [{ type: core_1.Input },],
        'length': [{ type: core_1.Input },],
        'opacity': [{ type: core_1.Input },],
        'visible': [{ type: core_1.Input },],
        'width': [{ type: core_1.Input },],
        'customTickValues': [{ type: core_1.Input },],
        'showCalculatedTicks': [{ type: core_1.Input },],
        'tickInterval': [{ type: core_1.Input },],
    };
    return DxoMinorTickComponent;
}(nested_option_2.NestedOption));
exports.DxoMinorTickComponent = DxoMinorTickComponent;
var DxoMinorTickModule = (function () {
    function DxoMinorTickModule() {
    }
    DxoMinorTickModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoMinorTickComponent
                    ],
                    exports: [
                        DxoMinorTickComponent
                    ],
                },] },
    ];
    /** @nocollapse */
    DxoMinorTickModule.ctorParameters = function () { return []; };
    return DxoMinorTickModule;
}());
exports.DxoMinorTickModule = DxoMinorTickModule;
//# sourceMappingURL=minor-tick.js.map