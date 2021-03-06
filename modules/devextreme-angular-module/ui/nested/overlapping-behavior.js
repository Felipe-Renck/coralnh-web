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
var DxoOverlappingBehaviorComponent = (function (_super) {
    __extends(DxoOverlappingBehaviorComponent, _super);
    function DxoOverlappingBehaviorComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoOverlappingBehaviorComponent.prototype, "mode", {
        get: function () {
            return this._getOption('mode');
        },
        set: function (value) {
            this._setOption('mode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoOverlappingBehaviorComponent.prototype, "rotationAngle", {
        get: function () {
            return this._getOption('rotationAngle');
        },
        set: function (value) {
            this._setOption('rotationAngle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoOverlappingBehaviorComponent.prototype, "staggeringSpacing", {
        get: function () {
            return this._getOption('staggeringSpacing');
        },
        set: function (value) {
            this._setOption('staggeringSpacing', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoOverlappingBehaviorComponent.prototype, "hideFirstOrLast", {
        get: function () {
            return this._getOption('hideFirstOrLast');
        },
        set: function (value) {
            this._setOption('hideFirstOrLast', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoOverlappingBehaviorComponent.prototype, "useAutoArrangement", {
        get: function () {
            return this._getOption('useAutoArrangement');
        },
        set: function (value) {
            this._setOption('useAutoArrangement', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoOverlappingBehaviorComponent.prototype, "_optionPath", {
        get: function () {
            return 'overlappingBehavior';
        },
        enumerable: true,
        configurable: true
    });
    DxoOverlappingBehaviorComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-overlapping-behavior',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoOverlappingBehaviorComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoOverlappingBehaviorComponent.propDecorators = {
        'mode': [{ type: core_1.Input },],
        'rotationAngle': [{ type: core_1.Input },],
        'staggeringSpacing': [{ type: core_1.Input },],
        'hideFirstOrLast': [{ type: core_1.Input },],
        'useAutoArrangement': [{ type: core_1.Input },],
    };
    return DxoOverlappingBehaviorComponent;
}(nested_option_2.NestedOption));
exports.DxoOverlappingBehaviorComponent = DxoOverlappingBehaviorComponent;
var DxoOverlappingBehaviorModule = (function () {
    function DxoOverlappingBehaviorModule() {
    }
    DxoOverlappingBehaviorModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoOverlappingBehaviorComponent
                    ],
                    exports: [
                        DxoOverlappingBehaviorComponent
                    ],
                },] },
    ];
    /** @nocollapse */
    DxoOverlappingBehaviorModule.ctorParameters = function () { return []; };
    return DxoOverlappingBehaviorModule;
}());
exports.DxoOverlappingBehaviorModule = DxoOverlappingBehaviorModule;
//# sourceMappingURL=overlapping-behavior.js.map