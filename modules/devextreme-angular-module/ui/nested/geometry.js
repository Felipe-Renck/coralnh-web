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
var DxoGeometryComponent = (function (_super) {
    __extends(DxoGeometryComponent, _super);
    function DxoGeometryComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoGeometryComponent.prototype, "endAngle", {
        get: function () {
            return this._getOption('endAngle');
        },
        set: function (value) {
            this._setOption('endAngle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoGeometryComponent.prototype, "startAngle", {
        get: function () {
            return this._getOption('startAngle');
        },
        set: function (value) {
            this._setOption('startAngle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoGeometryComponent.prototype, "orientation", {
        get: function () {
            return this._getOption('orientation');
        },
        set: function (value) {
            this._setOption('orientation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoGeometryComponent.prototype, "_optionPath", {
        get: function () {
            return 'geometry';
        },
        enumerable: true,
        configurable: true
    });
    DxoGeometryComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-geometry',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoGeometryComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoGeometryComponent.propDecorators = {
        'endAngle': [{ type: core_1.Input },],
        'startAngle': [{ type: core_1.Input },],
        'orientation': [{ type: core_1.Input },],
    };
    return DxoGeometryComponent;
}(nested_option_2.NestedOption));
exports.DxoGeometryComponent = DxoGeometryComponent;
var DxoGeometryModule = (function () {
    function DxoGeometryModule() {
    }
    DxoGeometryModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoGeometryComponent
                    ],
                    exports: [
                        DxoGeometryComponent
                    ],
                },] },
    ];
    /** @nocollapse */
    DxoGeometryModule.ctorParameters = function () { return []; };
    return DxoGeometryModule;
}());
exports.DxoGeometryModule = DxoGeometryModule;
//# sourceMappingURL=geometry.js.map