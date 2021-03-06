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
var DxoPositionConfig = (function (_super) {
    __extends(DxoPositionConfig, _super);
    function DxoPositionConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DxoPositionConfig.prototype, "at", {
        get: function () {
            return this._getOption('at');
        },
        set: function (value) {
            this._setOption('at', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoPositionConfig.prototype, "boundary", {
        get: function () {
            return this._getOption('boundary');
        },
        set: function (value) {
            this._setOption('boundary', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoPositionConfig.prototype, "boundaryOffset", {
        get: function () {
            return this._getOption('boundaryOffset');
        },
        set: function (value) {
            this._setOption('boundaryOffset', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoPositionConfig.prototype, "collision", {
        get: function () {
            return this._getOption('collision');
        },
        set: function (value) {
            this._setOption('collision', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoPositionConfig.prototype, "my", {
        get: function () {
            return this._getOption('my');
        },
        set: function (value) {
            this._setOption('my', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoPositionConfig.prototype, "of", {
        get: function () {
            return this._getOption('of');
        },
        set: function (value) {
            this._setOption('of', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoPositionConfig.prototype, "offset", {
        get: function () {
            return this._getOption('offset');
        },
        set: function (value) {
            this._setOption('offset', value);
        },
        enumerable: true,
        configurable: true
    });
    return DxoPositionConfig;
}(nested_option_1.NestedOption));
exports.DxoPositionConfig = DxoPositionConfig;
//# sourceMappingURL=position-config.js.map