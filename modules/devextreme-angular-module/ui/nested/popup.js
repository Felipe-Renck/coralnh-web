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
var popup_options_1 = require("./base/popup-options");
var toolbar_item_dxi_1 = require("./toolbar-item-dxi");
var DxoPopupComponent = (function (_super) {
    __extends(DxoPopupComponent, _super);
    function DxoPopupComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoPopupComponent.prototype, "_optionPath", {
        get: function () {
            return 'popup';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxoPopupComponent.prototype, "toolbarItemsChildren", {
        get: function () {
            return this._getOption('toolbarItems');
        },
        set: function (value) {
            this.setChildren('toolbarItems', value);
        },
        enumerable: true,
        configurable: true
    });
    DxoPopupComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-popup',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost],
                    inputs: [
                        'accessKey',
                        'animation',
                        'buttons',
                        'closeOnBackButton',
                        'closeOnOutsideClick',
                        'contentTemplate',
                        'deferRendering',
                        'disabled',
                        'dragEnabled',
                        'elementAttr',
                        'focusStateEnabled',
                        'fullScreen',
                        'height',
                        'hint',
                        'hoverStateEnabled',
                        'maxHeight',
                        'maxWidth',
                        'minHeight',
                        'minWidth',
                        'onContentReady',
                        'onDisposing',
                        'onHidden',
                        'onHiding',
                        'onInitialized',
                        'onOptionChanged',
                        'onResize',
                        'onResizeEnd',
                        'onResizeStart',
                        'onShowing',
                        'onShown',
                        'onTitleRendered',
                        'position',
                        'resizeEnabled',
                        'rtlEnabled',
                        'shading',
                        'shadingColor',
                        'showCloseButton',
                        'showTitle',
                        'tabIndex',
                        'title',
                        'titleTemplate',
                        'toolbarItems',
                        'visible',
                        'width'
                    ]
                },] },
    ];
    /** @nocollapse */
    DxoPopupComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxoPopupComponent.propDecorators = {
        'toolbarItemsChildren': [{ type: core_1.ContentChildren, args: [core_1.forwardRef(function () { return toolbar_item_dxi_1.DxiToolbarItemComponent; }),] },],
    };
    return DxoPopupComponent;
}(popup_options_1.DxoPopupOptions));
exports.DxoPopupComponent = DxoPopupComponent;
var DxoPopupModule = (function () {
    function DxoPopupModule() {
    }
    DxoPopupModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoPopupComponent
                    ],
                    exports: [
                        DxoPopupComponent
                    ],
                },] },
    ];
    /** @nocollapse */
    DxoPopupModule.ctorParameters = function () { return []; };
    return DxoPopupModule;
}());
exports.DxoPopupModule = DxoPopupModule;
//# sourceMappingURL=popup.js.map