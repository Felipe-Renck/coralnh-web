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
var DxoMinorGridComponent = (function (_super) {
    __extends(DxoMinorGridComponent, _super);
    function DxoMinorGridComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoMinorGridComponent.prototype, "color", {
        get: function () {
            return this._getOption('color');
        },
        set: function (value) {
            this._setOption('color', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMinorGridComponent.prototype, "opacity", {
        get: function () {
            return this._getOption('opacity');
        },
        set: function (value) {
            this._setOption('opacity', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMinorGridComponent.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMinorGridComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMinorGridComponent.prototype, "_optionPath", {
        get: function () {
            return 'minorGrid';
        },
        enumerable: true,
        configurable: true
    });
    DxoMinorGridComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-minor-grid',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoMinorGridComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoMinorGridComponent.propDecorators = {
        'color': [{ type: core_1.Input },],
        'opacity': [{ type: core_1.Input },],
        'visible': [{ type: core_1.Input },],
        'width': [{ type: core_1.Input },],
    };
    return DxoMinorGridComponent;
}(nested_option_2.NestedOption));
exports.DxoMinorGridComponent = DxoMinorGridComponent;
var DxoMinorGridModule = (function () {
    function DxoMinorGridModule() {
    }
    DxoMinorGridModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoMinorGridComponent
                    ],
                    exports: [
                        DxoMinorGridComponent
                    ],
                },] },
    ];
    /** @nocollapse */
    DxoMinorGridModule.ctorParameters = function () { return []; };
    return DxoMinorGridModule;
}());
exports.DxoMinorGridModule = DxoMinorGridModule;
//# sourceMappingURL=minor-grid.js.map