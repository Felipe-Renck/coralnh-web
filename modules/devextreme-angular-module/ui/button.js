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
var button_1 = require("devextreme/ui/button");
var component_1 = require("../core/component");
var template_host_1 = require("../core/template-host");
var template_1 = require("../core/template");
var nested_option_1 = require("../core/nested-option");
var watcher_helper_1 = require("../core/watcher-helper");
/**
 * The Button widget is a simple button that performs specified commands when a user clicks it.
 */
var DxButtonComponent = (function (_super) {
    __extends(DxButtonComponent, _super);
    function DxButtonComponent(elementRef, ngZone, templateHost, _watcherHelper, optionHost) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper) || this;
        _this._createEventEmitters([
            { subscribe: 'click', emit: 'onClick' },
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'iconChange' },
            { emit: 'iconSrcChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'tabIndexChange' },
            { emit: 'templateChange' },
            { emit: 'textChange' },
            { emit: 'typeChange' },
            { emit: 'useSubmitBehaviorChange' },
            { emit: 'validationGroupChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' }
        ]);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxButtonComponent.prototype, "accessKey", {
        /**
         * Specifies the shortcut key that sets focus on the widget.
         */
        get: function () {
            return this._getOption('accessKey');
        },
        set: function (value) {
            this._setOption('accessKey', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxButtonComponent.prototype, "activeStateEnabled", {
        /**
         * A Boolean value specifying whether or not the widget changes its state when interacting with a user.
         */
        get: function () {
            return this._getOption('activeStateEnabled');
        },
        set: function (value) {
            this._setOption('activeStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxButtonComponent.prototype, "disabled", {
        /**
         * Specifies whether the widget responds to user interaction.
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
    Object.defineProperty(DxButtonComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxButtonComponent.prototype, "focusStateEnabled", {
        /**
         * Specifies whether the widget can be focused using keyboard navigation.
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
    Object.defineProperty(DxButtonComponent.prototype, "height", {
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
    Object.defineProperty(DxButtonComponent.prototype, "hint", {
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
    Object.defineProperty(DxButtonComponent.prototype, "hoverStateEnabled", {
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
    Object.defineProperty(DxButtonComponent.prototype, "icon", {
        /**
         * Specifies the icon to be displayed on the button.
         */
        get: function () {
            return this._getOption('icon');
        },
        set: function (value) {
            this._setOption('icon', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxButtonComponent.prototype, "iconSrc", {
        get: function () {
            return this._getOption('iconSrc');
        },
        set: function (value) {
            this._setOption('iconSrc', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxButtonComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxButtonComponent.prototype, "tabIndex", {
        /**
         * Specifies the number of the element when the Tab key is used for navigating.
         */
        get: function () {
            return this._getOption('tabIndex');
        },
        set: function (value) {
            this._setOption('tabIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxButtonComponent.prototype, "template", {
        /**
         * Specifies a custom template for the Button widget.
         */
        get: function () {
            return this._getOption('template');
        },
        set: function (value) {
            this._setOption('template', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxButtonComponent.prototype, "text", {
        /**
         * The text displayed on the button.
         */
        get: function () {
            return this._getOption('text');
        },
        set: function (value) {
            this._setOption('text', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxButtonComponent.prototype, "type", {
        /**
         * Specifies the button type.
         */
        get: function () {
            return this._getOption('type');
        },
        set: function (value) {
            this._setOption('type', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxButtonComponent.prototype, "useSubmitBehavior", {
        /**
         * Specifies whether or not the button must submit an HTML form.
         */
        get: function () {
            return this._getOption('useSubmitBehavior');
        },
        set: function (value) {
            this._setOption('useSubmitBehavior', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxButtonComponent.prototype, "validationGroup", {
        /**
         * Specifies the name of the validation group to be accessed in the click event handler.
         */
        get: function () {
            return this._getOption('validationGroup');
        },
        set: function (value) {
            this._setOption('validationGroup', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxButtonComponent.prototype, "visible", {
        /**
         * Specifies whether the widget is visible.
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
    Object.defineProperty(DxButtonComponent.prototype, "width", {
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
    DxButtonComponent.prototype._createInstance = function (element, options) {
        return new button_1.default(element, options);
    };
    DxButtonComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxButtonComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-button',
                    template: '',
                    providers: [
                        template_host_1.DxTemplateHost,
                        watcher_helper_1.WatcherHelper,
                        nested_option_1.NestedOptionHost
                    ]
                },] },
    ];
    /** @nocollapse */
    DxButtonComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: nested_option_1.NestedOptionHost, },
    ]; };
    DxButtonComponent.propDecorators = {
        'accessKey': [{ type: core_1.Input },],
        'activeStateEnabled': [{ type: core_1.Input },],
        'disabled': [{ type: core_1.Input },],
        'elementAttr': [{ type: core_1.Input },],
        'focusStateEnabled': [{ type: core_1.Input },],
        'height': [{ type: core_1.Input },],
        'hint': [{ type: core_1.Input },],
        'hoverStateEnabled': [{ type: core_1.Input },],
        'icon': [{ type: core_1.Input },],
        'iconSrc': [{ type: core_1.Input },],
        'rtlEnabled': [{ type: core_1.Input },],
        'tabIndex': [{ type: core_1.Input },],
        'template': [{ type: core_1.Input },],
        'text': [{ type: core_1.Input },],
        'type': [{ type: core_1.Input },],
        'useSubmitBehavior': [{ type: core_1.Input },],
        'validationGroup': [{ type: core_1.Input },],
        'visible': [{ type: core_1.Input },],
        'width': [{ type: core_1.Input },],
        'onClick': [{ type: core_1.Output },],
        'onContentReady': [{ type: core_1.Output },],
        'onDisposing': [{ type: core_1.Output },],
        'onInitialized': [{ type: core_1.Output },],
        'onOptionChanged': [{ type: core_1.Output },],
        'accessKeyChange': [{ type: core_1.Output },],
        'activeStateEnabledChange': [{ type: core_1.Output },],
        'disabledChange': [{ type: core_1.Output },],
        'elementAttrChange': [{ type: core_1.Output },],
        'focusStateEnabledChange': [{ type: core_1.Output },],
        'heightChange': [{ type: core_1.Output },],
        'hintChange': [{ type: core_1.Output },],
        'hoverStateEnabledChange': [{ type: core_1.Output },],
        'iconChange': [{ type: core_1.Output },],
        'iconSrcChange': [{ type: core_1.Output },],
        'rtlEnabledChange': [{ type: core_1.Output },],
        'tabIndexChange': [{ type: core_1.Output },],
        'templateChange': [{ type: core_1.Output },],
        'textChange': [{ type: core_1.Output },],
        'typeChange': [{ type: core_1.Output },],
        'useSubmitBehaviorChange': [{ type: core_1.Output },],
        'validationGroupChange': [{ type: core_1.Output },],
        'visibleChange': [{ type: core_1.Output },],
        'widthChange': [{ type: core_1.Output },],
    };
    return DxButtonComponent;
}(component_1.DxComponent));
exports.DxButtonComponent = DxButtonComponent;
var DxButtonModule = (function () {
    function DxButtonModule() {
    }
    DxButtonModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        template_1.DxTemplateModule
                    ],
                    declarations: [
                        DxButtonComponent
                    ],
                    exports: [
                        DxButtonComponent,
                        template_1.DxTemplateModule
                    ],
                },] },
    ];
    /** @nocollapse */
    DxButtonModule.ctorParameters = function () { return []; };
    return DxButtonModule;
}());
exports.DxButtonModule = DxButtonModule;
//# sourceMappingURL=button.js.map