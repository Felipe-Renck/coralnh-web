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
var DxoMajorTickComponent = (function (_super) {
    __extends(DxoMajorTickComponent, _super);
    function DxoMajorTickComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoMajorTickComponent.prototype, "color", {
        get: function () {
            return this._getOption('color');
        },
        set: function (value) {
            this._setOption('color', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMajorTickComponent.prototype, "customTickValues", {
        get: function () {
            return this._getOption('customTickValues');
        },
        set: function (value) {
            this._setOption('customTickValues', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMajorTickComponent.prototype, "length", {
        get: function () {
            return this._getOption('length');
        },
        set: function (value) {
            this._setOption('length', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMajorTickComponent.prototype, "showCalculatedTicks", {
        get: function () {
            return this._getOption('showCalculatedTicks');
        },
        set: function (value) {
            this._setOption('showCalculatedTicks', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMajorTickComponent.prototype, "tickInterval", {
        get: function () {
            return this._getOption('tickInterval');
        },
        set: function (value) {
            this._setOption('tickInterval', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMajorTickComponent.prototype, "useTicksAutoArrangement", {
        get: function () {
            return this._getOption('useTicksAutoArrangement');
        },
        set: function (value) {
            this._setOption('useTicksAutoArrangement', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMajorTickComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMajorTickComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMajorTickComponent.prototype, "_optionPath", {
        get: function () {
            return 'majorTick';
        },
        enumerable: true,
        configurable: true
    });
    DxoMajorTickComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-major-tick',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoMajorTickComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoMajorTickComponent.propDecorators = {
        'color': [{ type: core_1.Input },],
        'customTickValues': [{ type: core_1.Input },],
        'length': [{ type: core_1.Input },],
        'showCalculatedTicks': [{ type: core_1.Input },],
        'tickInterval': [{ type: core_1.Input },],
        'useTicksAutoArrangement': [{ type: core_1.Input },],
        'visible': [{ type: core_1.Input },],
        'width': [{ type: core_1.Input },],
    };
    return DxoMajorTickComponent;
}(nested_option_2.NestedOption));
exports.DxoMajorTickComponent = DxoMajorTickComponent;
var DxoMajorTickModule = (function () {
    function DxoMajorTickModule() {
    }
    DxoMajorTickModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoMajorTickComponent
                    ],
                    exports: [
                        DxoMajorTickComponent
                    ],
                },] },
    ];
    /** @nocollapse */
    DxoMajorTickModule.ctorParameters = function () { return []; };
    return DxoMajorTickModule;
}());
exports.DxoMajorTickModule = DxoMajorTickModule;
//# sourceMappingURL=major-tick.js.map