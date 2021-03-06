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
var scroll_view_1 = require("devextreme/ui/scroll_view");
var component_1 = require("../core/component");
var template_host_1 = require("../core/template-host");
var template_1 = require("../core/template");
var nested_option_1 = require("../core/nested-option");
var watcher_helper_1 = require("../core/watcher-helper");
/**
 * The ScrollView is a widget that enables a user to scroll its content.
 */
var DxScrollViewComponent = (function (_super) {
    __extends(DxScrollViewComponent, _super);
    function DxScrollViewComponent(elementRef, ngZone, templateHost, _watcherHelper, optionHost) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper) || this;
        _this._createEventEmitters([
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'pullDown', emit: 'onPullDown' },
            { subscribe: 'reachBottom', emit: 'onReachBottom' },
            { subscribe: 'scroll', emit: 'onScroll' },
            { subscribe: 'updated', emit: 'onUpdated' },
            { emit: 'bounceEnabledChange' },
            { emit: 'directionChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'heightChange' },
            { emit: 'pulledDownTextChange' },
            { emit: 'pullingDownTextChange' },
            { emit: 'reachBottomTextChange' },
            { emit: 'refreshingTextChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'scrollByContentChange' },
            { emit: 'scrollByThumbChange' },
            { emit: 'showScrollbarChange' },
            { emit: 'useNativeChange' },
            { emit: 'widthChange' }
        ]);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxScrollViewComponent.prototype, "bounceEnabled", {
        /**
         * A Boolean value specifying whether to enable or disable the bounce-back effect.
         */
        get: function () {
            return this._getOption('bounceEnabled');
        },
        set: function (value) {
            this._setOption('bounceEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxScrollViewComponent.prototype, "direction", {
        /**
         * A string value specifying the available scrolling directions.
         */
        get: function () {
            return this._getOption('direction');
        },
        set: function (value) {
            this._setOption('direction', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxScrollViewComponent.prototype, "disabled", {
        /**
         * A Boolean value specifying whether or not the widget can respond to user interaction.
         */
        get: function () {
            return this._getOption('disabled');
        },
        set: function (value) {
            this._setOption('disabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxScrollViewComponent.prototype, "elementAttr", {
        /**
         * Specifies the attributes to be attached to the widget's root element.
         */
        get: function () {
            return this._getOption('elementAttr');
        },
        set: function (value) {
            this._setOption('elementAttr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxScrollViewComponent.prototype, "height", {
        /**
         * Specifies the widget's height.
         */
        get: function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxScrollViewComponent.prototype, "pulledDownText", {
        /**
         * Specifies the text shown in the pullDown panel when pulling the content down lowers the refresh threshold.
         */
        get: function () {
            return this._getOption('pulledDownText');
        },
        set: function (value) {
            this._setOption('pulledDownText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxScrollViewComponent.prototype, "pullingDownText", {
        /**
         * Specifies the text shown in the pullDown panel while pulling the content down to the refresh threshold.
         */
        get: function () {
            return this._getOption('pullingDownText');
        },
        set: function (value) {
            this._setOption('pullingDownText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxScrollViewComponent.prototype, "reachBottomText", {
        /**
         * Specifies the text shown in the pullDown panel displayed when content is scrolled to the bottom.
         */
        get: function () {
            return this._getOption('reachBottomText');
        },
        set: function (value) {
            this._setOption('reachBottomText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxScrollViewComponent.prototype, "refreshingText", {
        /**
         * Specifies the text shown in the pullDown panel displayed when the content is being refreshed.
         */
        get: function () {
            return this._getOption('refreshingText');
        },
        set: function (value) {
            this._setOption('refreshingText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxScrollViewComponent.prototype, "rtlEnabled", {
        /**
         * Switches the widget to a right-to-left representation.
         */
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxScrollViewComponent.prototype, "scrollByContent", {
        /**
         * A Boolean value specifying whether or not an end-user can scroll the widget content swiping it up or down. Applies only if useNative is false
         */
        get: function () {
            return this._getOption('scrollByContent');
        },
        set: function (value) {
            this._setOption('scrollByContent', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxScrollViewComponent.prototype, "scrollByThumb", {
        /**
         * A Boolean value specifying whether or not an end-user can scroll the widget content using the scrollbar.
         */
        get: function () {
            return this._getOption('scrollByThumb');
        },
        set: function (value) {
            this._setOption('scrollByThumb', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxScrollViewComponent.prototype, "showScrollbar", {
        /**
         * Specifies when the widget shows the scrollbar.
         */
        get: function () {
            return this._getOption('showScrollbar');
        },
        set: function (value) {
            this._setOption('showScrollbar', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxScrollViewComponent.prototype, "useNative", {
        /**
         * Indicates whether to use native or simulated scrolling.
         */
        get: function () {
            return this._getOption('useNative');
        },
        set: function (value) {
            this._setOption('useNative', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxScrollViewComponent.prototype, "width", {
        /**
         * Specifies the widget's width.
         */
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    DxScrollViewComponent.prototype._createInstance = function (element, options) {
        return new scroll_view_1.default(element, options);
    };
    DxScrollViewComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxScrollViewComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-scroll-view',
                    template: '<ng-content></ng-content>',
                    providers: [
                        template_host_1.DxTemplateHost,
                        watcher_helper_1.WatcherHelper,
                        nested_option_1.NestedOptionHost
                    ]
                },] },
    ];
    /** @nocollapse */
    DxScrollViewComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: nested_option_1.NestedOptionHost, },
    ]; };
    DxScrollViewComponent.propDecorators = {
        'bounceEnabled': [{ type: core_1.Input },],
        'direction': [{ type: core_1.Input },],
        'disabled': [{ type: core_1.Input },],
        'elementAttr': [{ type: core_1.Input },],
        'height': [{ type: core_1.Input },],
        'pulledDownText': [{ type: core_1.Input },],
        'pullingDownText': [{ type: core_1.Input },],
        'reachBottomText': [{ type: core_1.Input },],
        'refreshingText': [{ type: core_1.Input },],
        'rtlEnabled': [{ type: core_1.Input },],
        'scrollByContent': [{ type: core_1.Input },],
        'scrollByThumb': [{ type: core_1.Input },],
        'showScrollbar': [{ type: core_1.Input },],
        'useNative': [{ type: core_1.Input },],
        'width': [{ type: core_1.Input },],
        'onDisposing': [{ type: core_1.Output },],
        'onInitialized': [{ type: core_1.Output },],
        'onOptionChanged': [{ type: core_1.Output },],
        'onPullDown': [{ type: core_1.Output },],
        'onReachBottom': [{ type: core_1.Output },],
        'onScroll': [{ type: core_1.Output },],
        'onUpdated': [{ type: core_1.Output },],
        'bounceEnabledChange': [{ type: core_1.Output },],
        'directionChange': [{ type: core_1.Output },],
        'disabledChange': [{ type: core_1.Output },],
        'elementAttrChange': [{ type: core_1.Output },],
        'heightChange': [{ type: core_1.Output },],
        'pulledDownTextChange': [{ type: core_1.Output },],
        'pullingDownTextChange': [{ type: core_1.Output },],
        'reachBottomTextChange': [{ type: core_1.Output },],
        'refreshingTextChange': [{ type: core_1.Output },],
        'rtlEnabledChange': [{ type: core_1.Output },],
        'scrollByContentChange': [{ type: core_1.Output },],
        'scrollByThumbChange': [{ type: core_1.Output },],
        'showScrollbarChange': [{ type: core_1.Output },],
        'useNativeChange': [{ type: core_1.Output },],
        'widthChange': [{ type: core_1.Output },],
    };
    return DxScrollViewComponent;
}(component_1.DxComponent));
exports.DxScrollViewComponent = DxScrollViewComponent;
var DxScrollViewModule = (function () {
    function DxScrollViewModule() {
    }
    DxScrollViewModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        template_1.DxTemplateModule
                    ],
                    declarations: [
                        DxScrollViewComponent
                    ],
                    exports: [
                        DxScrollViewComponent,
                        template_1.DxTemplateModule
                    ],
                },] },
    ];
    /** @nocollapse */
    DxScrollViewModule.ctorParameters = function () { return []; };
    return DxScrollViewModule;
}());
exports.DxScrollViewModule = DxScrollViewModule;
//# sourceMappingURL=scroll-view.js.map