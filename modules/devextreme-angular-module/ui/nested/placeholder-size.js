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
var DxoPlaceholderSizeComponent = (function (_super) {
    __extends(DxoPlaceholderSizeComponent, _super);
    function DxoPlaceholderSizeComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoPlaceholderSizeComponent.prototype, "height", {
        get: function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoPlaceholderSizeComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoPlaceholderSizeComponent.prototype, "_optionPath", {
        get: function () {
            return 'placeholderSize';
        },
        enumerable: true,
        configurable: true
    });
    DxoPlaceholderSizeComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-placeholder-size',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoPlaceholderSizeComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoPlaceholderSizeComponent.propDecorators = {
        'height': [{ type: core_1.Input },],
        'width': [{ type: core_1.Input },],
    };
    return DxoPlaceholderSizeComponent;
}(nested_option_2.NestedOption));
exports.DxoPlaceholderSizeComponent = DxoPlaceholderSizeComponent;
var DxoPlaceholderSizeModule = (function () {
    function DxoPlaceholderSizeModule() {
    }
    DxoPlaceholderSizeModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoPlaceholderSizeComponent
                    ],
                    exports: [
                        DxoPlaceholderSizeComponent
                    ],
                },] },
    ];
    /** @nocollapse */
    DxoPlaceholderSizeModule.ctorParameters = function () { return []; };
    return DxoPlaceholderSizeModule;
}());
exports.DxoPlaceholderSizeModule = DxoPlaceholderSizeModule;
//# sourceMappingURL=placeholder-size.js.map