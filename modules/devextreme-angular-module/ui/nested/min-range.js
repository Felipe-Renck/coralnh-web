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
var DxoMinRangeComponent = (function (_super) {
    __extends(DxoMinRangeComponent, _super);
    function DxoMinRangeComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoMinRangeComponent.prototype, "days", {
        get: function () {
            return this._getOption('days');
        },
        set: function (value) {
            this._setOption('days', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMinRangeComponent.prototype, "hours", {
        get: function () {
            return this._getOption('hours');
        },
        set: function (value) {
            this._setOption('hours', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMinRangeComponent.prototype, "milliseconds", {
        get: function () {
            return this._getOption('milliseconds');
        },
        set: function (value) {
            this._setOption('milliseconds', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMinRangeComponent.prototype, "minutes", {
        get: function () {
            return this._getOption('minutes');
        },
        set: function (value) {
            this._setOption('minutes', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMinRangeComponent.prototype, "months", {
        get: function () {
            return this._getOption('months');
        },
        set: function (value) {
            this._setOption('months', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMinRangeComponent.prototype, "quarters", {
        get: function () {
            return this._getOption('quarters');
        },
        set: function (value) {
            this._setOption('quarters', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMinRangeComponent.prototype, "seconds", {
        get: function () {
            return this._getOption('seconds');
        },
        set: function (value) {
            this._setOption('seconds', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMinRangeComponent.prototype, "weeks", {
        get: function () {
            return this._getOption('weeks');
        },
        set: function (value) {
            this._setOption('weeks', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMinRangeComponent.prototype, "years", {
        get: function () {
            return this._getOption('years');
        },
        set: function (value) {
            this._setOption('years', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoMinRangeComponent.prototype, "_optionPath", {
        get: function () {
            return 'minRange';
        },
        enumerable: true,
        configurable: true
    });
    DxoMinRangeComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-min-range',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoMinRangeComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoMinRangeComponent.propDecorators = {
        'days': [{ type: core_1.Input },],
        'hours': [{ type: core_1.Input },],
        'milliseconds': [{ type: core_1.Input },],
        'minutes': [{ type: core_1.Input },],
        'months': [{ type: core_1.Input },],
        'quarters': [{ type: core_1.Input },],
        'seconds': [{ type: core_1.Input },],
        'weeks': [{ type: core_1.Input },],
        'years': [{ type: core_1.Input },],
    };
    return DxoMinRangeComponent;
}(nested_option_2.NestedOption));
exports.DxoMinRangeComponent = DxoMinRangeComponent;
var DxoMinRangeModule = (function () {
    function DxoMinRangeModule() {
    }
    DxoMinRangeModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoMinRangeComponent
                    ],
                    exports: [
                        DxoMinRangeComponent
                    ],
                },] },
    ];
    /** @nocollapse */
    DxoMinRangeModule.ctorParameters = function () { return []; };
    return DxoMinRangeModule;
}());
exports.DxoMinRangeModule = DxoMinRangeModule;
//# sourceMappingURL=min-range.js.map