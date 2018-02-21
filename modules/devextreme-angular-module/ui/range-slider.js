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
var range_slider_1 = require("devextreme/ui/range_slider");
var validator_1 = require("./validator");
var forms_1 = require("@angular/forms");
var component_1 = require("../core/component");
var template_host_1 = require("../core/template-host");
var template_1 = require("../core/template");
var nested_option_1 = require("../core/nested-option");
var watcher_helper_1 = require("../core/watcher-helper");
var iterable_differ_helper_1 = require("../core/iterable-differ-helper");
var label_1 = require("./nested/label");
var format_1 = require("./nested/format");
var tooltip_1 = require("./nested/tooltip");
var CUSTOM_VALUE_ACCESSOR_PROVIDER = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return DxRangeSliderComponent; }),
    multi: true
};
/**
 * The RangeSlider is a widget that allows an end user to choose a range of numeric values.
 */
var DxRangeSliderComponent = (function (_super) {
    __extends(DxRangeSliderComponent, _super);
    function DxRangeSliderComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper) || this;
        _this._watcherHelper = _watcherHelper;
        _this._idh = _idh;
        _this.touched = function () { };
        _this._createEventEmitters([
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'valueChanged', emit: 'onValueChanged' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'endChange' },
            { emit: 'endNameChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'isValidChange' },
            { emit: 'keyStepChange' },
            { emit: 'labelChange' },
            { emit: 'maxChange' },
            { emit: 'minChange' },
            { emit: 'readOnlyChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'showRangeChange' },
            { emit: 'startChange' },
            { emit: 'startNameChange' },
            { emit: 'stepChange' },
            { emit: 'tabIndexChange' },
            { emit: 'tooltipChange' },
            { emit: 'validationErrorChange' },
            { emit: 'validationMessageModeChange' },
            { emit: 'valueChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' },
            { emit: 'onBlur' }
        ]);
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxRangeSliderComponent.prototype, "accessKey", {
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
    Object.defineProperty(DxRangeSliderComponent.prototype, "activeStateEnabled", {
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
    Object.defineProperty(DxRangeSliderComponent.prototype, "disabled", {
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
    Object.defineProperty(DxRangeSliderComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxRangeSliderComponent.prototype, "end", {
        /**
         * The right edge of the interval currently selected using the range slider.
         */
        get: function () {
            return this._getOption('end');
        },
        set: function (value) {
            this._setOption('end', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSliderComponent.prototype, "endName", {
        /**
         * The value to be assigned to the name attribute of the underlying `` element.
         */
        get: function () {
            return this._getOption('endName');
        },
        set: function (value) {
            this._setOption('endName', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSliderComponent.prototype, "focusStateEnabled", {
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
    Object.defineProperty(DxRangeSliderComponent.prototype, "height", {
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
    Object.defineProperty(DxRangeSliderComponent.prototype, "hint", {
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
    Object.defineProperty(DxRangeSliderComponent.prototype, "hoverStateEnabled", {
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
    Object.defineProperty(DxRangeSliderComponent.prototype, "isValid", {
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
    Object.defineProperty(DxRangeSliderComponent.prototype, "keyStep", {
        /**
         * Specifies the step by which a handle moves when a user presses Page Up or Page Down.
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
    Object.defineProperty(DxRangeSliderComponent.prototype, "label", {
        /**
         * Configures the labels displayed at the min and max values.
         */
        get: function () {
            return this._getOption('label');
        },
        set: function (value) {
            this._setOption('label', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSliderComponent.prototype, "max", {
        /**
         * The maximum value the widget can accept.
         */
        get: function () {
            return this._getOption('max');
        },
        set: function (value) {
            this._setOption('max', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSliderComponent.prototype, "min", {
        /**
         * The minimum value the widget can accept.
         */
        get: function () {
            return this._getOption('min');
        },
        set: function (value) {
            this._setOption('min', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSliderComponent.prototype, "readOnly", {
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
    Object.defineProperty(DxRangeSliderComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxRangeSliderComponent.prototype, "showRange", {
        /**
         * Specifies whether to highlight the selected range.
         */
        get: function () {
            return this._getOption('showRange');
        },
        set: function (value) {
            this._setOption('showRange', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSliderComponent.prototype, "start", {
        /**
         * The left edge of the interval currently selected using the range slider.
         */
        get: function () {
            return this._getOption('start');
        },
        set: function (value) {
            this._setOption('start', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSliderComponent.prototype, "startName", {
        /**
         * The value to be assigned to the name attribute of the underlying `` element.
         */
        get: function () {
            return this._getOption('startName');
        },
        set: function (value) {
            this._setOption('startName', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSliderComponent.prototype, "step", {
        /**
         * Specifies the step by which the widget's value changes when a user drags a handler.
         */
        get: function () {
            return this._getOption('step');
        },
        set: function (value) {
            this._setOption('step', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSliderComponent.prototype, "tabIndex", {
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
    Object.defineProperty(DxRangeSliderComponent.prototype, "tooltip", {
        /**
         * Configures a tooltip.
         */
        get: function () {
            return this._getOption('tooltip');
        },
        set: function (value) {
            this._setOption('tooltip', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxRangeSliderComponent.prototype, "validationError", {
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
    Object.defineProperty(DxRangeSliderComponent.prototype, "validationMessageMode", {
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
    Object.defineProperty(DxRangeSliderComponent.prototype, "value", {
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
    Object.defineProperty(DxRangeSliderComponent.prototype, "visible", {
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
    Object.defineProperty(DxRangeSliderComponent.prototype, "width", {
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
    DxRangeSliderComponent.prototype.change = function (_) { };
    DxRangeSliderComponent.prototype._createInstance = function (element, options) {
        var widget = new range_slider_1.default(element, options);
        if (this.validator) {
            this.validator.createInstance(element);
        }
        return widget;
    };
    DxRangeSliderComponent.prototype.writeValue = function (value) {
        this.value = value;
    };
    DxRangeSliderComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    DxRangeSliderComponent.prototype.registerOnChange = function (fn) { this.change = fn; };
    DxRangeSliderComponent.prototype.registerOnTouched = function (fn) { this.touched = fn; };
    DxRangeSliderComponent.prototype._createWidget = function (element) {
        var _this = this;
        _super.prototype._createWidget.call(this, element);
        this.instance.on('focusOut', function (e) {
            _this.eventHelper.fireNgEvent('onBlur', [e]);
        });
    };
    DxRangeSliderComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxRangeSliderComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('value', changes);
    };
    DxRangeSliderComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxRangeSliderComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('value');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
    };
    DxRangeSliderComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxRangeSliderComponent.prototype.ngAfterContentInit = function () {
        if (this.validator) {
            this.validator.renderOnViewInit = false;
        }
    };
    DxRangeSliderComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-range-slider',
                    template: '',
                    providers: [
                        template_host_1.DxTemplateHost,
                        watcher_helper_1.WatcherHelper,
                        CUSTOM_VALUE_ACCESSOR_PROVIDER,
                        nested_option_1.NestedOptionHost,
                        iterable_differ_helper_1.IterableDifferHelper
                    ]
                },] },
    ];
    /** @nocollapse */
    DxRangeSliderComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: iterable_differ_helper_1.IterableDifferHelper, },
        { type: nested_option_1.NestedOptionHost, },
    ]; };
    DxRangeSliderComponent.propDecorators = {
        'validator': [{ type: core_1.ContentChild, args: [validator_1.DxValidatorComponent,] },],
        'accessKey': [{ type: core_1.Input },],
        'activeStateEnabled': [{ type: core_1.Input },],
        'disabled': [{ type: core_1.Input },],
        'elementAttr': [{ type: core_1.Input },],
        'end': [{ type: core_1.Input },],
        'endName': [{ type: core_1.Input },],
        'focusStateEnabled': [{ type: core_1.Input },],
        'height': [{ type: core_1.Input },],
        'hint': [{ type: core_1.Input },],
        'hoverStateEnabled': [{ type: core_1.Input },],
        'isValid': [{ type: core_1.Input },],
        'keyStep': [{ type: core_1.Input },],
        'label': [{ type: core_1.Input },],
        'max': [{ type: core_1.Input },],
        'min': [{ type: core_1.Input },],
        'readOnly': [{ type: core_1.Input },],
        'rtlEnabled': [{ type: core_1.Input },],
        'showRange': [{ type: core_1.Input },],
        'start': [{ type: core_1.Input },],
        'startName': [{ type: core_1.Input },],
        'step': [{ type: core_1.Input },],
        'tabIndex': [{ type: core_1.Input },],
        'tooltip': [{ type: core_1.Input },],
        'validationError': [{ type: core_1.Input },],
        'validationMessageMode': [{ type: core_1.Input },],
        'value': [{ type: core_1.Input },],
        'visible': [{ type: core_1.Input },],
        'width': [{ type: core_1.Input },],
        'onContentReady': [{ type: core_1.Output },],
        'onDisposing': [{ type: core_1.Output },],
        'onInitialized': [{ type: core_1.Output },],
        'onOptionChanged': [{ type: core_1.Output },],
        'onValueChanged': [{ type: core_1.Output },],
        'accessKeyChange': [{ type: core_1.Output },],
        'activeStateEnabledChange': [{ type: core_1.Output },],
        'disabledChange': [{ type: core_1.Output },],
        'elementAttrChange': [{ type: core_1.Output },],
        'endChange': [{ type: core_1.Output },],
        'endNameChange': [{ type: core_1.Output },],
        'focusStateEnabledChange': [{ type: core_1.Output },],
        'heightChange': [{ type: core_1.Output },],
        'hintChange': [{ type: core_1.Output },],
        'hoverStateEnabledChange': [{ type: core_1.Output },],
        'isValidChange': [{ type: core_1.Output },],
        'keyStepChange': [{ type: core_1.Output },],
        'labelChange': [{ type: core_1.Output },],
        'maxChange': [{ type: core_1.Output },],
        'minChange': [{ type: core_1.Output },],
        'readOnlyChange': [{ type: core_1.Output },],
        'rtlEnabledChange': [{ type: core_1.Output },],
        'showRangeChange': [{ type: core_1.Output },],
        'startChange': [{ type: core_1.Output },],
        'startNameChange': [{ type: core_1.Output },],
        'stepChange': [{ type: core_1.Output },],
        'tabIndexChange': [{ type: core_1.Output },],
        'tooltipChange': [{ type: core_1.Output },],
        'validationErrorChange': [{ type: core_1.Output },],
        'validationMessageModeChange': [{ type: core_1.Output },],
        'valueChange': [{ type: core_1.Output },],
        'visibleChange': [{ type: core_1.Output },],
        'widthChange': [{ type: core_1.Output },],
        'onBlur': [{ type: core_1.Output },],
        'change': [{ type: core_1.HostListener, args: ['valueChange', ['$event'],] },],
        'touched': [{ type: core_1.HostListener, args: ['onBlur', ['$event'],] },],
    };
    return DxRangeSliderComponent;
}(component_1.DxComponent));
exports.DxRangeSliderComponent = DxRangeSliderComponent;
var DxRangeSliderModule = (function () {
    function DxRangeSliderModule() {
    }
    DxRangeSliderModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        label_1.DxoLabelModule,
                        format_1.DxoFormatModule,
                        tooltip_1.DxoTooltipModule,
                        template_1.DxTemplateModule
                    ],
                    declarations: [
                        DxRangeSliderComponent
                    ],
                    exports: [
                        DxRangeSliderComponent,
                        label_1.DxoLabelModule,
                        format_1.DxoFormatModule,
                        tooltip_1.DxoTooltipModule,
                        template_1.DxTemplateModule
                    ],
                },] },
    ];
    /** @nocollapse */
    DxRangeSliderModule.ctorParameters = function () { return []; };
    return DxRangeSliderModule;
}());
exports.DxRangeSliderModule = DxRangeSliderModule;
//# sourceMappingURL=range-slider.js.map