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
var DxoAtComponent = (function (_super) {
    __extends(DxoAtComponent, _super);
    function DxoAtComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoAtComponent.prototype, "x", {
        get: function () {
            return this._getOption('x');
        },
        set: function (value) {
            this._setOption('x', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoAtComponent.prototype, "y", {
        get: function () {
            return this._getOption('y');
        },
        set: function (value) {
            this._setOption('y', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoAtComponent.prototype, "_optionPath", {
        get: function () {
            return 'at';
        },
        enumerable: true,
        configurable: true
    });
    DxoAtComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-at',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoAtComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoAtComponent.propDecorators = {
        'x': [{ type: core_1.Input },],
        'y': [{ type: core_1.Input },],
    };
    return DxoAtComponent;
}(nested_option_2.NestedOption));
exports.DxoAtComponent = DxoAtComponent;
var DxoAtModule = (function () {
    function DxoAtModule() {
    }
    DxoAtModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoAtComponent
                    ],
                    exports: [
                        DxoAtComponent
                    ],
                },] },
    ];
    /** @nocollapse */
    DxoAtModule.ctorParameters = function () { return []; };
    return DxoAtModule;
}());
exports.DxoAtModule = DxoAtModule;
//# sourceMappingURL=at.js.map