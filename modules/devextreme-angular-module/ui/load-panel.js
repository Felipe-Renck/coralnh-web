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
var load_panel_1 = require("devextreme/ui/load_panel");
var component_1 = require("../core/component");
var template_host_1 = require("../core/template-host");
var template_1 = require("../core/template");
var nested_option_1 = require("../core/nested-option");
var watcher_helper_1 = require("../core/watcher-helper");
var animation_1 = require("./nested/animation");
var hide_1 = require("./nested/hide");
var show_1 = require("./nested/show");
var position_1 = require("./nested/position");
var at_1 = require("./nested/at");
var boundary_offset_1 = require("./nested/boundary-offset");
var collision_1 = require("./nested/collision");
var my_1 = require("./nested/my");
var offset_1 = require("./nested/offset");
/**
 * The LoadPanel is an overlay widget notifying the viewer that loading is in progress.
 */
var DxLoadPanelComponent = (function (_super) {
    __extends(DxLoadPanelComponent, _super);
    function DxLoadPanelComponent(elementRef, ngZone, templateHost, _watcherHelper, optionHost) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper) || this;
        _this._createEventEmitters([
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'hidden', emit: 'onHidden' },
            { subscribe: 'hiding', emit: 'onHiding' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'showing', emit: 'onShowing' },
            { subscribe: 'shown', emit: 'onShown' },
            { emit: 'animationChange' },
            { emit: 'closeOnOutsideClickChange' },
            { emit: 'deferRenderingChange' },
            { emit: 'delayChange' },
            { emit: 'elementAttrChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'indicatorSrcChange' },
            { emit: 'maxHeightChange' },
            { emit: 'maxWidthChange' },
            { emit: 'messageChange' },
            { emit: 'minHeightChange' },
            { emit: 'minWidthChange' },
            { emit: 'positionChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'shadingChange' },
            { emit: 'shadingColorChange' },
            { emit: 'showIndicatorChange' },
            { emit: 'showPaneChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' }
        ]);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxLoadPanelComponent.prototype, "animation", {
        /**
         * Configures widget visibility animations. This object contains two fields: show and hide.
         */
        get: function () {
            return this._getOption('animation');
        },
        set: function (value) {
            this._setOption('animation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadPanelComponent.prototype, "closeOnOutsideClick", {
        /**
         * Specifies whether to close the widget if a user clicks outside it.
         */
        get: function () {
            return this._getOption('closeOnOutsideClick');
        },
        set: function (value) {
            this._setOption('closeOnOutsideClick', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadPanelComponent.prototype, "deferRendering", {
        /**
         * Specifies whether widget content is rendered when the widget is shown or when rendering the widget.
         */
        get: function () {
            return this._getOption('deferRendering');
        },
        set: function (value) {
            this._setOption('deferRendering', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadPanelComponent.prototype, "delay", {
        /**
         * The delay in milliseconds after which the load panel is displayed.
         */
        get: function () {
            return this._getOption('delay');
        },
        set: function (value) {
            this._setOption('delay', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadPanelComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxLoadPanelComponent.prototype, "focusStateEnabled", {
        /**
         * Specifies whether or not the widget can be focused.
         */
        get: function () {
            return this._getOption('focusStateEnabled');
        },
        set: function (value) {
            this._setOption('focusStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadPanelComponent.prototype, "height", {
        /**
         * Specified the widget's height.
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
    Object.defineProperty(DxLoadPanelComponent.prototype, "hint", {
        /**
         * Specifies text for a hint that appears when a user pauses on the widget.
         */
        get: function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadPanelComponent.prototype, "hoverStateEnabled", {
        /**
         * Specifies whether the widget changes its state when a user pauses on it.
         */
        get: function () {
            return this._getOption('hoverStateEnabled');
        },
        set: function (value) {
            this._setOption('hoverStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadPanelComponent.prototype, "indicatorSrc", {
        /**
         * A URL pointing to an image to be used as a load indicator.
         */
        get: function () {
            return this._getOption('indicatorSrc');
        },
        set: function (value) {
            this._setOption('indicatorSrc', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadPanelComponent.prototype, "maxHeight", {
        /**
         * Specifies the maximum height the widget can reach while resizing.
         */
        get: function () {
            return this._getOption('maxHeight');
        },
        set: function (value) {
            this._setOption('maxHeight', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadPanelComponent.prototype, "maxWidth", {
        /**
         * Specifies the maximum width the widget can reach while resizing.
         */
        get: function () {
            return this._getOption('maxWidth');
        },
        set: function (value) {
            this._setOption('maxWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadPanelComponent.prototype, "message", {
        /**
         * The text displayed in the load panel.
         */
        get: function () {
            return this._getOption('message');
        },
        set: function (value) {
            this._setOption('message', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadPanelComponent.prototype, "minHeight", {
        /**
         * Specifies the minimum height the widget can reach while resizing.
         */
        get: function () {
            return this._getOption('minHeight');
        },
        set: function (value) {
            this._setOption('minHeight', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadPanelComponent.prototype, "minWidth", {
        /**
         * Specifies the minimum width the widget can reach while resizing.
         */
        get: function () {
            return this._getOption('minWidth');
        },
        set: function (value) {
            this._setOption('minWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadPanelComponent.prototype, "position", {
        /**
         * An object defining widget positioning options.
         */
        get: function () {
            return this._getOption('position');
        },
        set: function (value) {
            this._setOption('position', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadPanelComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxLoadPanelComponent.prototype, "shading", {
        /**
         * A Boolean value specifying whether or not the main screen is inactive while the widget is active.
         */
        get: function () {
            return this._getOption('shading');
        },
        set: function (value) {
            this._setOption('shading', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadPanelComponent.prototype, "shadingColor", {
        /**
         * Specifies the shading color.
         */
        get: function () {
            return this._getOption('shadingColor');
        },
        set: function (value) {
            this._setOption('shadingColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadPanelComponent.prototype, "showIndicator", {
        /**
         * A Boolean value specifying whether or not to show a load indicator.
         */
        get: function () {
            return this._getOption('showIndicator');
        },
        set: function (value) {
            this._setOption('showIndicator', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadPanelComponent.prototype, "showPane", {
        /**
         * A Boolean value specifying whether or not to show the pane behind the load indicator.
         */
        get: function () {
            return this._getOption('showPane');
        },
        set: function (value) {
            this._setOption('showPane', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadPanelComponent.prototype, "visible", {
        /**
         * A Boolean value specifying whether or not the widget is visible.
         */
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxLoadPanelComponent.prototype, "width", {
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
    DxLoadPanelComponent.prototype._createInstance = function (element, options) {
        return new load_panel_1.default(element, options);
    };
    DxLoadPanelComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxLoadPanelComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-load-panel',
                    template: '',
                    providers: [
                        template_host_1.DxTemplateHost,
                        watcher_helper_1.WatcherHelper,
                        nested_option_1.NestedOptionHost
                    ]
                },] },
    ];
    /** @nocollapse */
    DxLoadPanelComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: nested_option_1.NestedOptionHost, },
    ]; };
    DxLoadPanelComponent.propDecorators = {
        'animation': [{ type: core_1.Input },],
        'closeOnOutsideClick': [{ type: core_1.Input },],
        'deferRendering': [{ type: core_1.Input },],
        'delay': [{ type: core_1.Input },],
        'elementAttr': [{ type: core_1.Input },],
        'focusStateEnabled': [{ type: core_1.Input },],
        'height': [{ type: core_1.Input },],
        'hint': [{ type: core_1.Input },],
        'hoverStateEnabled': [{ type: core_1.Input },],
        'indicatorSrc': [{ type: core_1.Input },],
        'maxHeight': [{ type: core_1.Input },],
        'maxWidth': [{ type: core_1.Input },],
        'message': [{ type: core_1.Input },],
        'minHeight': [{ type: core_1.Input },],
        'minWidth': [{ type: core_1.Input },],
        'position': [{ type: core_1.Input },],
        'rtlEnabled': [{ type: core_1.Input },],
        'shading': [{ type: core_1.Input },],
        'shadingColor': [{ type: core_1.Input },],
        'showIndicator': [{ type: core_1.Input },],
        'showPane': [{ type: core_1.Input },],
        'visible': [{ type: core_1.Input },],
        'width': [{ type: core_1.Input },],
        'onContentReady': [{ type: core_1.Output },],
        'onDisposing': [{ type: core_1.Output },],
        'onHidden': [{ type: core_1.Output },],
        'onHiding': [{ type: core_1.Output },],
        'onInitialized': [{ type: core_1.Output },],
        'onOptionChanged': [{ type: core_1.Output },],
        'onShowing': [{ type: core_1.Output },],
        'onShown': [{ type: core_1.Output },],
        'animationChange': [{ type: core_1.Output },],
        'closeOnOutsideClickChange': [{ type: core_1.Output },],
        'deferRenderingChange': [{ type: core_1.Output },],
        'delayChange': [{ type: core_1.Output },],
        'elementAttrChange': [{ type: core_1.Output },],
        'focusStateEnabledChange': [{ type: core_1.Output },],
        'heightChange': [{ type: core_1.Output },],
        'hintChange': [{ type: core_1.Output },],
        'hoverStateEnabledChange': [{ type: core_1.Output },],
        'indicatorSrcChange': [{ type: core_1.Output },],
        'maxHeightChange': [{ type: core_1.Output },],
        'maxWidthChange': [{ type: core_1.Output },],
        'messageChange': [{ type: core_1.Output },],
        'minHeightChange': [{ type: core_1.Output },],
        'minWidthChange': [{ type: core_1.Output },],
        'positionChange': [{ type: core_1.Output },],
        'rtlEnabledChange': [{ type: core_1.Output },],
        'shadingChange': [{ type: core_1.Output },],
        'shadingColorChange': [{ type: core_1.Output },],
        'showIndicatorChange': [{ type: core_1.Output },],
        'showPaneChange': [{ type: core_1.Output },],
        'visibleChange': [{ type: core_1.Output },],
        'widthChange': [{ type: core_1.Output },],
    };
    return DxLoadPanelComponent;
}(component_1.DxComponent));
exports.DxLoadPanelComponent = DxLoadPanelComponent;
var DxLoadPanelModule = (function () {
    function DxLoadPanelModule() {
    }
    DxLoadPanelModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        animation_1.DxoAnimationModule,
                        hide_1.DxoHideModule,
                        show_1.DxoShowModule,
                        position_1.DxoPositionModule,
                        at_1.DxoAtModule,
                        boundary_offset_1.DxoBoundaryOffsetModule,
                        collision_1.DxoCollisionModule,
                        my_1.DxoMyModule,
                        offset_1.DxoOffsetModule,
                        template_1.DxTemplateModule
                    ],
                    declarations: [
                        DxLoadPanelComponent
                    ],
                    exports: [
                        DxLoadPanelComponent,
                        animation_1.DxoAnimationModule,
                        hide_1.DxoHideModule,
                        show_1.DxoShowModule,
                        position_1.DxoPositionModule,
                        at_1.DxoAtModule,
                        boundary_offset_1.DxoBoundaryOffsetModule,
                        collision_1.DxoCollisionModule,
                        my_1.DxoMyModule,
                        offset_1.DxoOffsetModule,
                        template_1.DxTemplateModule
                    ],
                },] },
    ];
    /** @nocollapse */
    DxLoadPanelModule.ctorParameters = function () { return []; };
    return DxLoadPanelModule;
}());
exports.DxLoadPanelModule = DxLoadPanelModule;
//# sourceMappingURL=load-panel.js.map