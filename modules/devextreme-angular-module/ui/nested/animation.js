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
/* tslint:disable:use-input-property-decorator */
var core_1 = require("@angular/core");
var nested_option_1 = require("../../core/nested-option");
var animation_config_1 = require("./base/animation-config");
var DxoAnimationComponent = (function (_super) {
    __extends(DxoAnimationComponent, _super);
    function DxoAnimationComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoAnimationComponent.prototype, "_optionPath", {
        get: function () {
            return 'animation';
        },
        enumerable: true,
        configurable: true
    });
    DxoAnimationComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-animation',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost],
                    inputs: [
                        'duration',
                        'easing',
                        'enabled',
                        'maxPointCountSupported',
                        'hide',
                        'show',
                        'complete',
                        'delay',
                        'direction',
                        'from',
                        'staggerDelay',
                        'start',
                        'to',
                        'type'
                    ]
                },] },
    ];
    /** @nocollapse */
    DxoAnimationComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    return DxoAnimationComponent;
}(animation_config_1.DxoAnimationConfig));
exports.DxoAnimationComponent = DxoAnimationComponent;
var DxoAnimationModule = (function () {
    function DxoAnimationModule() {
    }
    DxoAnimationModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoAnimationComponent
                    ],
                    exports: [
                        DxoAnimationComponent
                    ],
                },] },
    ];
    /** @nocollapse */
    DxoAnimationModule.ctorParameters = function () { return []; };
    return DxoAnimationModule;
}());
exports.DxoAnimationModule = DxoAnimationModule;
//# sourceMappingURL=animation.js.map