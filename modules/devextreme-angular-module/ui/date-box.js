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
var date_box_1 = require("devextreme/ui/date_box");
var validator_1 = require("./validator");
var forms_1 = require("@angular/forms");
var component_1 = require("../core/component");
var template_host_1 = require("../core/template-host");
var template_1 = require("../core/template");
var nested_option_1 = require("../core/nested-option");
var watcher_helper_1 = require("../core/watcher-helper");
var iterable_differ_helper_1 = require("../core/iterable-differ-helper");
var display_format_1 = require("./nested/display-format");
var CUSTOM_VALUE_ACCESSOR_PROVIDER = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return DxDateBoxComponent; }),
    multi: true
};
/**
 * The DateBox is a widget that displays date and time in a specified format, and enables a user to pick or type in the required date/time value.
 */
var DxDateBoxComponent = (function (_super) {
    __extends(DxDateBoxComponent, _super);
    function DxDateBoxComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper) || this;
        _this._watcherHelper = _watcherHelper;
        _this._idh = _idh;
        _this.touched = function () { };
        _this._createEventEmitters([
            { subscribe: 'change', emit: 'onChange' },
            { subscribe: 'closed', emit: 'onClosed' },
            { subscribe: 'contentReady', emit: 'onContentReady' },
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
            { emit: 'adaptivityEnabledChange' },
            { emit: 'applyButtonTextChange' },
            { emit: 'applyValueModeChange' },
            { emit: 'attrChange' },
            { emit: 'cancelButtonTextChange' },
            { emit: 'dateOutOfRangeMessageChange' },
            { emit: 'dateSerializationFormatChange' },
            { emit: 'deferRenderingChange' },
            { emit: 'disabledChange' },
            { emit: 'disabledDatesChange' },
            { emit: 'displayFormatChange' },
            { emit: 'dropDownButtonTemplateChange' },
            { emit: 'elementAttrChange' },
            { emit: 'fieldEditEnabledChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'formatChange' },
            { emit: 'formatStringChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'inputAttrChange' },
            { emit: 'intervalChange' },
            { emit: 'invalidDateMessageChange' },
            { emit: 'isValidChange' },
            { emit: 'maxChange' },
            { emit: 'maxLengthChange' },
            { emit: 'maxZoomLevelChange' },
            { emit: 'minChange' },
            { emit: 'minZoomLevelChange' },
            { emit: 'nameChange' },
            { emit: 'openedChange' },
            { emit: 'pickerTypeChange' },
            { emit: 'placeholderChange' },
            { emit: 'readOnlyChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'showClearButtonChange' },
            { emit: 'spellcheckChange' },
            { emit: 'tabIndexChange' },
            { emit: 'textChange' },
            { emit: 'typeChange' },
            { emit: 'useCalendarChange' },
            { emit: 'useNativeChange' },
            { emit: 'validationErrorChange' },
            { emit: 'validationMessageModeChange' },
            { emit: 'valueChange' },
            { emit: 'valueChangeEventChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' },
            { emit: 'onBlur' }
        ]);
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxDateBoxComponent.prototype, "acceptCustomValue", {
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
    Object.defineProperty(DxDateBoxComponent.prototype, "accessKey", {
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
    Object.defineProperty(DxDateBoxComponent.prototype, "activeStateEnabled", {
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
    Object.defineProperty(DxDateBoxComponent.prototype, "adaptivityEnabled", {
        /**
         * Specifies whether or not adaptive widget rendering is enabled on a small screen.
         */
        get: function () {
            return this._getOption('adaptivityEnabled');
        },
        set: function (value) {
            this._setOption('adaptivityEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "applyButtonText", {
        /**
         * The text displayed on the Apply button.
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
    Object.defineProperty(DxDateBoxComponent.prototype, "applyValueMode", {
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
    Object.defineProperty(DxDateBoxComponent.prototype, "attr", {
        get: function () {
            return this._getOption('attr');
        },
        set: function (value) {
            this._setOption('attr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "cancelButtonText", {
        /**
         * The text displayed on the Cancel button.
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
    Object.defineProperty(DxDateBoxComponent.prototype, "dateOutOfRangeMessage", {
        /**
         * Specifies the message displayed if the specified date is later than the max value or earlier than the min value.
         */
        get: function () {
            return this._getOption('dateOutOfRangeMessage');
        },
        set: function (value) {
            this._setOption('dateOutOfRangeMessage', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "dateSerializationFormat", {
        /**
         * Specifies the date-time value serialization format. Use it only if you do not specify the value at design time.
         */
        get: function () {
            return this._getOption('dateSerializationFormat');
        },
        set: function (value) {
            this._setOption('dateSerializationFormat', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "deferRendering", {
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
    Object.defineProperty(DxDateBoxComponent.prototype, "disabled", {
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
    Object.defineProperty(DxDateBoxComponent.prototype, "disabledDates", {
        /**
         * Specifies dates to be disabled. Applies only if pickerType is "calendar".
         */
        get: function () {
            return this._getOption('disabledDates');
        },
        set: function (value) {
            this._setOption('disabledDates', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "displayFormat", {
        /**
         * Specifies the date display format. Ignored if the pickerType option is 'native'
         */
        get: function () {
            return this._getOption('displayFormat');
        },
        set: function (value) {
            this._setOption('displayFormat', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "dropDownButtonTemplate", {
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
    Object.defineProperty(DxDateBoxComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxDateBoxComponent.prototype, "fieldEditEnabled", {
        get: function () {
            return this._getOption('fieldEditEnabled');
        },
        set: function (value) {
            this._setOption('fieldEditEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "focusStateEnabled", {
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
    Object.defineProperty(DxDateBoxComponent.prototype, "format", {
        get: function () {
            return this._getOption('format');
        },
        set: function (value) {
            this._setOption('format', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "formatString", {
        get: function () {
            return this._getOption('formatString');
        },
        set: function (value) {
            this._setOption('formatString', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "height", {
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
    Object.defineProperty(DxDateBoxComponent.prototype, "hint", {
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
    Object.defineProperty(DxDateBoxComponent.prototype, "hoverStateEnabled", {
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
    Object.defineProperty(DxDateBoxComponent.prototype, "inputAttr", {
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
    Object.defineProperty(DxDateBoxComponent.prototype, "interval", {
        /**
         * Specifies the interval between neighboring values in the popup list in minutes.
         */
        get: function () {
            return this._getOption('interval');
        },
        set: function (value) {
            this._setOption('interval', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "invalidDateMessage", {
        /**
         * Specifies the message displayed if the typed value is not a valid date or time.
         */
        get: function () {
            return this._getOption('invalidDateMessage');
        },
        set: function (value) {
            this._setOption('invalidDateMessage', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "isValid", {
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
    Object.defineProperty(DxDateBoxComponent.prototype, "max", {
        /**
         * The last date that can be selected within the widget.
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
    Object.defineProperty(DxDateBoxComponent.prototype, "maxLength", {
        /**
         * Specifies the maximum number of characters you can enter into the textbox.
         */
        get: function () {
            return this._getOption('maxLength');
        },
        set: function (value) {
            this._setOption('maxLength', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "maxZoomLevel", {
        /**
         * Specifies the maximum zoom level of a calendar, which is used to pick the date.
         */
        get: function () {
            return this._getOption('maxZoomLevel');
        },
        set: function (value) {
            this._setOption('maxZoomLevel', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "min", {
        /**
         * The minimum date that can be selected within the widget.
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
    Object.defineProperty(DxDateBoxComponent.prototype, "minZoomLevel", {
        /**
         * Specifies the minimal zoom level of a calendar, which is used to pick the date.
         */
        get: function () {
            return this._getOption('minZoomLevel');
        },
        set: function (value) {
            this._setOption('minZoomLevel', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "name", {
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
    Object.defineProperty(DxDateBoxComponent.prototype, "opened", {
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
    Object.defineProperty(DxDateBoxComponent.prototype, "pickerType", {
        /**
         * Specifies the type of the date/time picker.
         */
        get: function () {
            return this._getOption('pickerType');
        },
        set: function (value) {
            this._setOption('pickerType', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "placeholder", {
        /**
         * Specifies a placeholder for the input field.
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
    Object.defineProperty(DxDateBoxComponent.prototype, "readOnly", {
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
    Object.defineProperty(DxDateBoxComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxDateBoxComponent.prototype, "showClearButton", {
        /**
         * Specifies whether to display the Clear button in the widget.
         */
        get: function () {
            return this._getOption('showClearButton');
        },
        set: function (value) {
            this._setOption('showClearButton', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "spellcheck", {
        /**
         * Specifies whether or not the widget checks the inner text for spelling mistakes.
         */
        get: function () {
            return this._getOption('spellcheck');
        },
        set: function (value) {
            this._setOption('spellcheck', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "tabIndex", {
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
    Object.defineProperty(DxDateBoxComponent.prototype, "text", {
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
    Object.defineProperty(DxDateBoxComponent.prototype, "type", {
        /**
         * A format used to display date/time information.
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
    Object.defineProperty(DxDateBoxComponent.prototype, "useCalendar", {
        /**
         * Use the pickerType option instead.
         */
        get: function () {
            return this._getOption('useCalendar');
        },
        set: function (value) {
            this._setOption('useCalendar', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "useNative", {
        /**
         * Use the pickerType option instead.
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
    Object.defineProperty(DxDateBoxComponent.prototype, "validationError", {
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
    Object.defineProperty(DxDateBoxComponent.prototype, "validationMessageMode", {
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
    Object.defineProperty(DxDateBoxComponent.prototype, "value", {
        /**
         * An object or a value specifying the date and time currently selected using the date box.
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
    Object.defineProperty(DxDateBoxComponent.prototype, "valueChangeEvent", {
        /**
         * Specifies DOM event names that update a widget's value.
         */
        get: function () {
            return this._getOption('valueChangeEvent');
        },
        set: function (value) {
            this._setOption('valueChangeEvent', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxDateBoxComponent.prototype, "visible", {
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
    Object.defineProperty(DxDateBoxComponent.prototype, "width", {
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
    DxDateBoxComponent.prototype.change = function (_) { };
    DxDateBoxComponent.prototype._createInstance = function (element, options) {
        var widget = new date_box_1.default(element, options);
        if (this.validator) {
            this.validator.createInstance(element);
        }
        return widget;
    };
    DxDateBoxComponent.prototype.writeValue = function (value) {
        this.value = value;
    };
    DxDateBoxComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    DxDateBoxComponent.prototype.registerOnChange = function (fn) { this.change = fn; };
    DxDateBoxComponent.prototype.registerOnTouched = function (fn) { this.touched = fn; };
    DxDateBoxComponent.prototype._createWidget = function (element) {
        var _this = this;
        _super.prototype._createWidget.call(this, element);
        this.instance.on('focusOut', function (e) {
            _this.eventHelper.fireNgEvent('onBlur', [e]);
        });
    };
    DxDateBoxComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxDateBoxComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('disabledDates', changes);
    };
    DxDateBoxComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxDateBoxComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('disabledDates');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
    };
    DxDateBoxComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxDateBoxComponent.prototype.ngAfterContentInit = function () {
        if (this.validator) {
            this.validator.renderOnViewInit = false;
        }
    };
    DxDateBoxComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-date-box',
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
    DxDateBoxComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: iterable_differ_helper_1.IterableDifferHelper, },
        { type: nested_option_1.NestedOptionHost, },
    ]; };
    DxDateBoxComponent.propDecorators = {
        'validator': [{ type: core_1.ContentChild, args: [validator_1.DxValidatorComponent,] },],
        'acceptCustomValue': [{ type: core_1.Input },],
        'accessKey': [{ type: core_1.Input },],
        'activeStateEnabled': [{ type: core_1.Input },],
        'adaptivityEnabled': [{ type: core_1.Input },],
        'applyButtonText': [{ type: core_1.Input },],
        'applyValueMode': [{ type: core_1.Input },],
        'attr': [{ type: core_1.Input },],
        'cancelButtonText': [{ type: core_1.Input },],
        'dateOutOfRangeMessage': [{ type: core_1.Input },],
        'dateSerializationFormat': [{ type: core_1.Input },],
        'deferRendering': [{ type: core_1.Input },],
        'disabled': [{ type: core_1.Input },],
        'disabledDates': [{ type: core_1.Input },],
        'displayFormat': [{ type: core_1.Input },],
        'dropDownButtonTemplate': [{ type: core_1.Input },],
        'elementAttr': [{ type: core_1.Input },],
        'fieldEditEnabled': [{ type: core_1.Input },],
        'focusStateEnabled': [{ type: core_1.Input },],
        'format': [{ type: core_1.Input },],
        'formatString': [{ type: core_1.Input },],
        'height': [{ type: core_1.Input },],
        'hint': [{ type: core_1.Input },],
        'hoverStateEnabled': [{ type: core_1.Input },],
        'inputAttr': [{ type: core_1.Input },],
        'interval': [{ type: core_1.Input },],
        'invalidDateMessage': [{ type: core_1.Input },],
        'isValid': [{ type: core_1.Input },],
        'max': [{ type: core_1.Input },],
        'maxLength': [{ type: core_1.Input },],
        'maxZoomLevel': [{ type: core_1.Input },],
        'min': [{ type: core_1.Input },],
        'minZoomLevel': [{ type: core_1.Input },],
        'name': [{ type: core_1.Input },],
        'opened': [{ type: core_1.Input },],
        'pickerType': [{ type: core_1.Input },],
        'placeholder': [{ type: core_1.Input },],
        'readOnly': [{ type: core_1.Input },],
        'rtlEnabled': [{ type: core_1.Input },],
        'showClearButton': [{ type: core_1.Input },],
        'spellcheck': [{ type: core_1.Input },],
        'tabIndex': [{ type: core_1.Input },],
        'text': [{ type: core_1.Input },],
        'type': [{ type: core_1.Input },],
        'useCalendar': [{ type: core_1.Input },],
        'useNative': [{ type: core_1.Input },],
        'validationError': [{ type: core_1.Input },],
        'validationMessageMode': [{ type: core_1.Input },],
        'value': [{ type: core_1.Input },],
        'valueChangeEvent': [{ type: core_1.Input },],
        'visible': [{ type: core_1.Input },],
        'width': [{ type: core_1.Input },],
        'onChange': [{ type: core_1.Output },],
        'onClosed': [{ type: core_1.Output },],
        'onContentReady': [{ type: core_1.Output },],
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
        'adaptivityEnabledChange': [{ type: core_1.Output },],
        'applyButtonTextChange': [{ type: core_1.Output },],
        'applyValueModeChange': [{ type: core_1.Output },],
        'attrChange': [{ type: core_1.Output },],
        'cancelButtonTextChange': [{ type: core_1.Output },],
        'dateOutOfRangeMessageChange': [{ type: core_1.Output },],
        'dateSerializationFormatChange': [{ type: core_1.Output },],
        'deferRenderingChange': [{ type: core_1.Output },],
        'disabledChange': [{ type: core_1.Output },],
        'disabledDatesChange': [{ type: core_1.Output },],
        'displayFormatChange': [{ type: core_1.Output },],
        'dropDownButtonTemplateChange': [{ type: core_1.Output },],
        'elementAttrChange': [{ type: core_1.Output },],
        'fieldEditEnabledChange': [{ type: core_1.Output },],
        'focusStateEnabledChange': [{ type: core_1.Output },],
        'formatChange': [{ type: core_1.Output },],
        'formatStringChange': [{ type: core_1.Output },],
        'heightChange': [{ type: core_1.Output },],
        'hintChange': [{ type: core_1.Output },],
        'hoverStateEnabledChange': [{ type: core_1.Output },],
        'inputAttrChange': [{ type: core_1.Output },],
        'intervalChange': [{ type: core_1.Output },],
        'invalidDateMessageChange': [{ type: core_1.Output },],
        'isValidChange': [{ type: core_1.Output },],
        'maxChange': [{ type: core_1.Output },],
        'maxLengthChange': [{ type: core_1.Output },],
        'maxZoomLevelChange': [{ type: core_1.Output },],
        'minChange': [{ type: core_1.Output },],
        'minZoomLevelChange': [{ type: core_1.Output },],
        'nameChange': [{ type: core_1.Output },],
        'openedChange': [{ type: core_1.Output },],
        'pickerTypeChange': [{ type: core_1.Output },],
        'placeholderChange': [{ type: core_1.Output },],
        'readOnlyChange': [{ type: core_1.Output },],
        'rtlEnabledChange': [{ type: core_1.Output },],
        'showClearButtonChange': [{ type: core_1.Output },],
        'spellcheckChange': [{ type: core_1.Output },],
        'tabIndexChange': [{ type: core_1.Output },],
        'textChange': [{ type: core_1.Output },],
        'typeChange': [{ type: core_1.Output },],
        'useCalendarChange': [{ type: core_1.Output },],
        'useNativeChange': [{ type: core_1.Output },],
        'validationErrorChange': [{ type: core_1.Output },],
        'validationMessageModeChange': [{ type: core_1.Output },],
        'valueChange': [{ type: core_1.Output },],
        'valueChangeEventChange': [{ type: core_1.Output },],
        'visibleChange': [{ type: core_1.Output },],
        'widthChange': [{ type: core_1.Output },],
        'onBlur': [{ type: core_1.Output },],
        'change': [{ type: core_1.HostListener, args: ['valueChange', ['$event'],] },],
        'touched': [{ type: core_1.HostListener, args: ['onBlur', ['$event'],] },],
    };
    return DxDateBoxComponent;
}(component_1.DxComponent));
exports.DxDateBoxComponent = DxDateBoxComponent;
var DxDateBoxModule = (function () {
    function DxDateBoxModule() {
    }
    DxDateBoxModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        display_format_1.DxoDisplayFormatModule,
                        template_1.DxTemplateModule
                    ],
                    declarations: [
                        DxDateBoxComponent
                    ],
                    exports: [
                        DxDateBoxComponent,
                        display_format_1.DxoDisplayFormatModule,
                        template_1.DxTemplateModule
                    ],
                },] },
    ];
    /** @nocollapse */
    DxDateBoxModule.ctorParameters = function () { return []; };
    return DxDateBoxModule;
}());
exports.DxDateBoxModule = DxDateBoxModule;
//# sourceMappingURL=date-box.js.map