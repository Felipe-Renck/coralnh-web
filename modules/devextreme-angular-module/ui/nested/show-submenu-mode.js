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
var DxoShowSubmenuModeComponent = (function (_super) {
    __extends(DxoShowSubmenuModeComponent, _super);
    function DxoShowSubmenuModeComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoShowSubmenuModeComponent.prototype, "delay", {
        get: function () {
            return this._getOption('delay');
        },
        set: function (value) {
            this._setOption('delay', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoShowSubmenuModeComponent.prototype, "name", {
        get: function () {
            return this._getOption('name');
        },
        set: function (value) {
            this._setOption('name', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoShowSubmenuModeComponent.prototype, "_optionPath", {
        get: function () {
            return 'showSubmenuMode';
        },
        enumerable: true,
        configurable: true
    });
    DxoShowSubmenuModeComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-show-submenu-mode',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoShowSubmenuModeComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoShowSubmenuModeComponent.propDecorators = {
        'delay': [{ type: core_1.Input },],
        'name': [{ type: core_1.Input },],
    };
    return DxoShowSubmenuModeComponent;
}(nested_option_2.NestedOption));
exports.DxoShowSubmenuModeComponent = DxoShowSubmenuModeComponent;
var DxoShowSubmenuModeModule = (function () {
    function DxoShowSubmenuModeModule() {
    }
    DxoShowSubmenuModeModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoShowSubmenuModeComponent
                    ],
                    exports: [
                        DxoShowSubmenuModeComponent
                    ],
                },] },
    ];
    /** @nocollapse */
    DxoShowSubmenuModeModule.ctorParameters = function () { return []; };
    return DxoShowSubmenuModeModule;
}());
exports.DxoShowSubmenuModeModule = DxoShowSubmenuModeModule;
//# sourceMappingURL=show-submenu-mode.js.map