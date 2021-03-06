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
var DxoStoreComponent = (function (_super) {
    __extends(DxoStoreComponent, _super);
    function DxoStoreComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoStoreComponent.prototype, "type", {
        get: function () {
            return this._getOption('type');
        },
        set: function (value) {
            this._setOption('type', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoStoreComponent.prototype, "_optionPath", {
        get: function () {
            return 'store';
        },
        enumerable: true,
        configurable: true
    });
    DxoStoreComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-store',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoStoreComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoStoreComponent.propDecorators = {
        'type': [{ type: core_1.Input },],
    };
    return DxoStoreComponent;
}(nested_option_2.NestedOption));
exports.DxoStoreComponent = DxoStoreComponent;
var DxoStoreModule = (function () {
    function DxoStoreModule() {
    }
    DxoStoreModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoStoreComponent
                    ],
                    exports: [
                        DxoStoreComponent
                    ],
                },] },
    ];
    /** @nocollapse */
    DxoStoreModule.ctorParameters = function () { return []; };
    return DxoStoreModule;
}());
exports.DxoStoreModule = DxoStoreModule;
//# sourceMappingURL=store.js.map