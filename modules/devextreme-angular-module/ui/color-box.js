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
var color_box_1 = require("devextreme/ui/color_box");
var validator_1 = require("./validator");
var forms_1 = require("@angular/forms");
var component_1 = require("../core/component");
var template_host_1 = require("../core/template-host");
var template_1 = require("../core/template");
var nested_option_1 = require("../core/nested-option");
var watcher_helper_1 = require("../core/watcher-helper");
var CUSTOM_VALUE_ACCESSOR_PROVIDER = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return DxColorBoxComponent; }),
    multi: true
};
/**
 * The ColorBox is a widget that allows an end user to enter a color or pick it out from the drop-down editor.
 */
var DxColorBoxComponent = (function (_super) {
    __extends(DxColorBoxComponent, _super);
    function DxColorBoxComponent(elementRef, ngZone, templateHost, _watcherHelper, optionHost) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper) || this;
        _this.touched = function () { };
        _this._createEventEmitters([
            { subscribe: 'change', emit: 'onChange' },
            { subscribe: 'closed', emit: 'onClosed' },
            { subscribe: 'copy', emit: 'onCopy' },
            { subscribe: 'cut', emit: 'onCut' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'enterKey', emit: 'onEnterKey' },
            { subscribe: 'focusIn', emit: 'onFocusIn' },
            { subscribe: 'focusOut', emit: 'onFocusOut' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'input', emit: 'onInput' },
            { subscribe: 'keyDown', emit: 'onKeyDown' },
            { subscribe: 'keyPress', emit: 'onKeyPress' },
            { subscribe: 'keyUp', emit: 'onKeyUp' },
            { subscribe: 'opened', emit: 'onOpened' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'paste', emit: 'onPaste' },
            { subscribe: 'valueChanged', emit: 'onValueChanged' },
            { emit: 'acceptCustomValueChange' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'applyButtonTextChange' },
            { emit: 'applyValueModeChange' },
            { emit: 'attrChange' },
            { emit: 'cancelButtonTextChange' },
            { emit: 'deferRenderingChange' },
            { emit: 'disabledChange' },
            { emit: 'dropDownButtonTemplateChange' },
            { emit: 'editAlphaChannelChange' },
            { emit: 'elementAttrChange' },
            { emit: 'fieldTemplateChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'inputAttrChange' },
            { emit: 'isValidChange' },
            { emit: 'keyStepChange' },
            { emit: 'nameChange' },
            { emit: 'openedChange' },
            { emit: 'placeholderChange' },
            { emit: 'readOnlyChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'tabIndexChange' },
            { emit: 'textChange' },
            { emit: 'validationErrorChange' },
            { emit: 'validationMessageModeChange' },
            { emit: 'valueChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' },
            { emit: 'onBlur' }
        ]);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxColorBoxComponent.prototype, "acceptCustomValue", {
        /**
         * Specifies whether or not the widget allows an end-user to enter a custom value.
         */
        get: function () {
            return this._getOption('acceptCustomValue');
        },
        set: function (value) {
            this._setOption('acceptCustomValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxColorBoxComponent.prototype, "accessKey", {
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
    Object.defineProperty(DxColorBoxComponent.prototype, "activeStateEnabled", {
        /**
         * Specifies whether or not the widget changes its state when interacting with a user.
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
    Object.defineProperty(DxColorBoxComponent.prototype, "applyButtonText", {
        /**
         * Specifies the text displayed on the button that applies changes and closes the drop-down editor.
         */
        get: function () {
            return this._getOption('applyButtonText');
        },
        set: function (value) {
            this._setOption('applyButtonText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxColorBoxComponent.prototype, "applyValueMode", {
        /**
         * Specifies the way an end-user applies the selected value.
         */
        get: function () {
            return this._getOption('applyValueMode');
        },
        set: function (value) {
            this._setOption('applyValueMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxColorBoxComponent.prototype, "attr", {
        get: function () {
            return this._getOption('attr');
        },
        set: function (value) {
            this._setOption('attr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxColorBoxComponent.prototype, "cancelButtonText", {
        /**
         * Specifies the text displayed on the button that cancels changes and closes the drop-down editor.
         */
        get: function () {
            return this._getOption('cancelButtonText');
        },
        set: function (value) {
            this._setOption('cancelButtonText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxColorBoxComponent.prototype, "deferRendering", {
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
    Object.defineProperty(DxColorBoxComponent.prototype, "disabled", {
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
    Object.defineProperty(DxColorBoxComponent.prototype, "dropDownButtonTemplate", {
        /**
         * Specifies a custom template for the drop-down button.
         */
        get: function () {
            return this._getOption('dropDownButtonTemplate');
        },
        set: function (value) {
            this._setOption('dropDownButtonTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxColorBoxComponent.prototype, "editAlphaChannel", {
        /**
         * Specifies whether or not the widget value includes the alpha channel component.
         */
        get: function () {
            return this._getOption('editAlphaChannel');
        },
        set: function (value) {
            this._setOption('editAlphaChannel', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxColorBoxComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxColorBoxComponent.prototype, "fieldTemplate", {
        /**
         * Specifies a custom template for the input field. Must contain the TextBox widget.
         */
        get: function () {
            return this._getOption('fieldTemplate');
        },
        set: function (value) {
            this._setOption('fieldTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxColorBoxComponent.prototype, "focusStateEnabled", {
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
    Object.defineProperty(DxColorBoxComponent.prototype, "height", {
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
    Object.defineProperty(DxColorBoxComponent.prototype, "hint", {
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
    Object.defineProperty(DxColorBoxComponent.prototype, "hoverStateEnabled", {
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
    Object.defineProperty(DxColorBoxComponent.prototype, "inputAttr", {
        /**
         * Specifies the attributes to be passed on to the underlying HTML element.
         */
        get: function () {
            return this._getOption('inputAttr');
        },
        set: function (value) {
            this._setOption('inputAttr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxColorBoxComponent.prototype, "isValid", {
        /**
         * Specifies whether the editor's value is valid.
         */
        get: function () {
            return this._getOption('isValid');
        },
        set: function (value) {
            this._setOption('isValid', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxColorBoxComponent.prototype, "keyStep", {
        /**
         * Specifies the size of a step by which a handle is moved using a keyboard shortcut.
         */
        get: function () {
            return this._getOption('keyStep');
        },
        set: function (value) {
            this._setOption('keyStep', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxColorBoxComponent.prototype, "name", {
        /**
         * The value to be assigned to the `name` attribute of the underlying HTML element.
         */
        get: function () {
            return this._getOption('name');
        },
        set: function (value) {
            this._setOption('name', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxColorBoxComponent.prototype, "opened", {
        /**
         * Specifies whether or not the drop-down editor is displayed.
         */
        get: function () {
            return this._getOption('opened');
        },
        set: function (value) {
            this._setOption('opened', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxColorBoxComponent.prototype, "placeholder", {
        /**
         * The text displayed by the widget when the widget value is empty.
         */
        get: function () {
            return this._getOption('placeholder');
        },
        set: function (value) {
            this._setOption('placeholder', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxColorBoxComponent.prototype, "readOnly", {
        /**
         * A Boolean value specifying whether or not the widget is read-only.
         */
        get: function () {
            return this._getOption('readOnly');
        },
        set: function (value) {
            this._setOption('readOnly', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxColorBoxComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxColorBoxComponent.prototype, "tabIndex", {
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
    Object.defineProperty(DxColorBoxComponent.prototype, "text", {
        /**
         * The read-only option that holds the text displayed by the widget input element.
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
    Object.defineProperty(DxColorBoxComponent.prototype, "validationError", {
        /**
         * Specifies information on the validation error when using a custom validation engine. Should be changed at runtime along with the isValid option.
         */
        get: function () {
            return this._getOption('validationError');
        },
        set: function (value) {
            this._setOption('validationError', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxColorBoxComponent.prototype, "validationMessageMode", {
        /**
         * Specifies how the message about the validation rules that are not satisfied by this editor's value is displayed.
         */
        get: function () {
            return this._getOption('validationMessageMode');
        },
        set: function (value) {
            this._setOption('validationMessageMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxColorBoxComponent.prototype, "value", {
        /**
         * Specifies the currently selected value.
         */
        get: function () {
            return this._getOption('value');
        },
        set: function (value) {
            this._setOption('value', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxColorBoxComponent.prototype, "visible", {
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
    Object.defineProperty(DxColorBoxComponent.prototype, "width", {
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
    DxColorBoxComponent.prototype.change = function (_) { };
    DxColorBoxComponent.prototype._createInstance = function (element, options) {
        var widget = new color_box_1.default(element, options);
        if (this.validator) {
            this.validator.createInstance(element);
        }
        return widget;
    };
    DxColorBoxComponent.prototype.writeValue = function (value) {
        this.value = value;
    };
    DxColorBoxComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    DxColorBoxComponent.prototype.registerOnChange = function (fn) { this.change = fn; };
    DxColorBoxComponent.prototype.registerOnTouched = function (fn) { this.touched = fn; };
    DxColorBoxComponent.prototype._createWidget = function (element) {
        var _this = this;
        _super.prototype._createWidget.call(this, element);
        this.instance.on('focusOut', function (e) {
            _this.eventHelper.fireNgEvent('onBlur', [e]);
        });
    };
    DxColorBoxComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxColorBoxComponent.prototype.ngAfterContentInit = function () {
        if (this.validator) {
            this.validator.renderOnViewInit = false;
        }
    };
    DxColorBoxComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-color-box',
                    template: '',
                    providers: [
                        template_host_1.DxTemplateHost,
                        watcher_helper_1.WatcherHelper,
                        CUSTOM_VALUE_ACCESSOR_PROVIDER,
                        nested_option_1.NestedOptionHost
                    ]
                },] },
    ];
    /** @nocollapse */
    DxColorBoxComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: nested_option_1.NestedOptionHost, },
    ]; };
    DxColorBoxComponent.propDecorators = {
        'validator': [{ type: core_1.ContentChild, args: [validator_1.DxValidatorComponent,] },],
        'acceptCustomValue': [{ type: core_1.Input },],
        'accessKey': [{ type: core_1.Input },],
        'activeStateEnabled': [{ type: core_1.Input },],
        'applyButtonText': [{ type: core_1.Input },],
        'applyValueMode': [{ type: core_1.Input },],
        'attr': [{ type: core_1.Input },],
        'cancelButtonText': [{ type: core_1.Input },],
        'deferRendering': [{ type: core_1.Input },],
        'disabled': [{ type: core_1.Input },],
        'dropDownButtonTemplate': [{ type: core_1.Input },],
        'editAlphaChannel': [{ type: core_1.Input },],
        'elementAttr': [{ type: core_1.Input },],
        'fieldTemplate': [{ type: core_1.Input },],
        'focusStateEnabled': [{ type: core_1.Input },],
        'height': [{ type: core_1.Input },],
        'hint': [{ type: core_1.Input },],
        'hoverStateEnabled': [{ type: core_1.Input },],
        'inputAttr': [{ type: core_1.Input },],
        'isValid': [{ type: core_1.Input },],
        'keyStep': [{ type: core_1.Input },],
        'name': [{ type: core_1.Input },],
        'opened': [{ type: core_1.Input },],
        'placeholder': [{ type: core_1.Input },],
        'readOnly': [{ type: core_1.Input },],
        'rtlEnabled': [{ type: core_1.Input },],
        'tabIndex': [{ type: core_1.Input },],
        'text': [{ type: core_1.Input },],
        'validationError': [{ type: core_1.Input },],
        'validationMessageMode': [{ type: core_1.Input },],
        'value': [{ type: core_1.Input },],
        'visible': [{ type: core_1.Input },],
        'width': [{ type: core_1.Input },],
        'onChange': [{ type: core_1.Output },],
        'onClosed': [{ type: core_1.Output },],
        'onCopy': [{ type: core_1.Output },],
        'onCut': [{ type: core_1.Output },],
        'onDisposing': [{ type: core_1.Output },],
        'onEnterKey': [{ type: core_1.Output },],
        'onFocusIn': [{ type: core_1.Output },],
        'onFocusOut': [{ type: core_1.Output },],
        'onInitialized': [{ type: core_1.Output },],
        'onInput': [{ type: core_1.Output },],
        'onKeyDown': [{ type: core_1.Output },],
        'onKeyPress': [{ type: core_1.Output },],
        'onKeyUp': [{ type: core_1.Output },],
        'onOpened': [{ type: core_1.Output },],
        'onOptionChanged': [{ type: core_1.Output },],
        'onPaste': [{ type: core_1.Output },],
        'onValueChanged': [{ type: core_1.Output },],
        'acceptCustomValueChange': [{ type: core_1.Output },],
        'accessKeyChange': [{ type: core_1.Output },],
        'activeStateEnabledChange': [{ type: core_1.Output },],
        'applyButtonTextChange': [{ type: core_1.Output },],
        'applyValueModeChange': [{ type: core_1.Output },],
        'attrChange': [{ type: core_1.Output },],
        'cancelButtonTextChange': [{ type: core_1.Output },],
        'deferRenderingChange': [{ type: core_1.Output },],
        'disabledChange': [{ type: core_1.Output },],
        'dropDownButtonTemplateChange': [{ type: core_1.Output },],
        'editAlphaChannelChange': [{ type: core_1.Output },],
        'elementAttrChange': [{ type: core_1.Output },],
        'fieldTemplateChange': [{ type: core_1.Output },],
        'focusStateEnabledChange': [{ type: core_1.Output },],
        'heightChange': [{ type: core_1.Output },],
        'hintChange': [{ type: core_1.Output },],
        'hoverStateEnabledChange': [{ type: core_1.Output },],
        'inputAttrChange': [{ type: core_1.Output },],
        'isValidChange': [{ type: core_1.Output },],
        'keyStepChange': [{ type: core_1.Output },],
        'nameChange': [{ type: core_1.Output },],
        'openedChange': [{ type: core_1.Output },],
        'placeholderChange': [{ type: core_1.Output },],
        'readOnlyChange': [{ type: core_1.Output },],
        'rtlEnabledChange': [{ type: core_1.Output },],
        'tabIndexChange': [{ type: core_1.Output },],
        'textChange': [{ type: core_1.Output },],
        'validationErrorChange': [{ type: core_1.Output },],
        'validationMessageModeChange': [{ type: core_1.Output },],
        'valueChange': [{ type: core_1.Output },],
        'visibleChange': [{ type: core_1.Output },],
        'widthChange': [{ type: core_1.Output },],
        'onBlur': [{ type: core_1.Output },],
        'change': [{ type: core_1.HostListener, args: ['valueChange', ['$event'],] },],
        'touched': [{ type: core_1.HostListener, args: ['onBlur', ['$event'],] },],
    };
    return DxColorBoxComponent;
}(component_1.DxComponent));
exports.DxColorBoxComponent = DxColorBoxComponent;
var DxColorBoxModule = (function () {
    function DxColorBoxModule() {
    }
    DxColorBoxModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        template_1.DxTemplateModule
                    ],
                    declarations: [
                        DxColorBoxComponent
                    ],
                    exports: [
                        DxColorBoxComponent,
                        template_1.DxTemplateModule
                    ],
                },] },
    ];
    /** @nocollapse */
    DxColorBoxModule.ctorParameters = function () { return []; };
    return DxColorBoxModule;
}());
exports.DxColorBoxModule = DxColorBoxModule;
//# sourceMappingURL=color-box.js.map