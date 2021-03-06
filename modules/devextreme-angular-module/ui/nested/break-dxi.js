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
var DxiBreakComponent = (function (_super) {
    __extends(DxiBreakComponent, _super);
    function DxiBreakComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxiBreakComponent.prototype, "endValue", {
        get: function () {
            return this._getOption('endValue');
        },
        set: function (value) {
            this._setOption('endValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiBreakComponent.prototype, "startValue", {
        get: function () {
            return this._getOption('startValue');
        },
        set: function (value) {
            this._setOption('startValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiBreakComponent.prototype, "_optionPath", {
        get: function () {
            return 'breaks';
        },
        enumerable: true,
        configurable: true
    });
    DxiBreakComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxi-break',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxiBreakComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxiBreakComponent.propDecorators = {
        'endValue': [{ type: core_1.Input },],
        'startValue': [{ type: core_1.Input },],
    };
    return DxiBreakComponent;
}(nested_option_2.CollectionNestedOption));
exports.DxiBreakComponent = DxiBreakComponent;
var DxiBreakModule = (function () {
    function DxiBreakModule() {
    }
    DxiBreakModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxiBreakComponent
                    ],
                    exports: [
                        DxiBreakComponent
                    ],
                },] },
    ];
    /** @nocollapse */
    DxiBreakModule.ctorParameters = function () { return []; };
    return DxiBreakModule;
}());
exports.DxiBreakModule = DxiBreakModule;
//# sourceMappingURL=break-dxi.js.map