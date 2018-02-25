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
var DxoFieldChooserComponent = (function (_super) {
    __extends(DxoFieldChooserComponent, _super);
    function DxoFieldChooserComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoFieldChooserComponent.prototype, "allowSearch", {
        get: function () {
            return this._getOption('allowSearch');
        },
        set: function (value) {
            this._setOption('allowSearch', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFieldChooserComponent.prototype, "enabled", {
        get: function () {
            return this._getOption('enabled');
        },
        set: function (value) {
            this._setOption('enabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFieldChooserComponent.prototype, "height", {
        get: function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFieldChooserComponent.prototype, "layout", {
        get: function () {
            return this._getOption('layout');
        },
        set: function (value) {
            this._setOption('layout', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFieldChooserComponent.prototype, "texts", {
        get: function () {
            return this._getOption('texts');
        },
        set: function (value) {
            this._setOption('texts', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFieldChooserComponent.prototype, "title", {
        get: function () {
            return this._getOption('title');
        },
        set: function (value) {
            this._setOption('title', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFieldChooserComponent.prototype, "width", {
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFieldChooserComponent.prototype, "_optionPath", {
        get: function () {
            return 'fieldChooser';
        },
        enumerable: true,
        configurable: true
    });
    DxoFieldChooserComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-field-chooser',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost]
                },] },
    ];
    /** @nocollapse */
    DxoFieldChooserComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoFieldChooserComponent.propDecorators = {
        'allowSearch': [{ type: core_1.Input },],
        'enabled': [{ type: core_1.Input },],
        'height': [{ type: core_1.Input },],
        'layout': [{ type: core_1.Input },],
        'texts': [{ type: core_1.Input },],
        'title': [{ type: core_1.Input },],
        'width': [{ type: core_1.Input },],
    };
    return DxoFieldChooserComponent;
}(nested_option_2.NestedOption));
exports.DxoFieldChooserComponent = DxoFieldChooserComponent;
var DxoFieldChooserModule = (function () {
    function DxoFieldChooserModule() {
    }
    DxoFieldChooserModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoFieldChooserComponent
                    ],
                    exports: [
                        DxoFieldChooserComponent
                    ],
                },] },
    ];
    /** @nocollapse */
    DxoFieldChooserModule.ctorParameters = function () { return []; };
    return DxoFieldChooserModule;
}());
exports.DxoFieldChooserModule = DxoFieldChooserModule;
//# sourceMappingURL=field-chooser.js.map