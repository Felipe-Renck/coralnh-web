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
var nested_option_1 = require("../../../core/nested-option");
var DxoFormat = (function (_super) {
    __extends(DxoFormat, _super);
    function DxoFormat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DxoFormat.prototype, "currency", {
        get: function () {
            return this._getOption('currency');
        },
        set: function (value) {
            this._setOption('currency', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFormat.prototype, "formatter", {
        get: function () {
            return this._getOption('formatter');
        },
        set: function (value) {
            this._setOption('formatter', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFormat.prototype, "parser", {
        get: function () {
            return this._getOption('parser');
        },
        set: function (value) {
            this._setOption('parser', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFormat.prototype, "precision", {
        get: function () {
            return this._getOption('precision');
        },
        set: function (value) {
            this._setOption('precision', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoFormat.prototype, "type", {
        get: function () {
            return this._getOption('type');
        },
        set: function (value) {
            this._setOption('type', value);
        },
        enumerable: true,
        configurable: true
    });
    return DxoFormat;
}(nested_option_1.NestedOption));
exports.DxoFormat = DxoFormat;
//# sourceMappingURL=format.js.map