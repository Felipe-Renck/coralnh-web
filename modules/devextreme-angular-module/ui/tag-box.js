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
var tag_box_1 = require("devextreme/ui/tag_box");
var validator_1 = require("./validator");
var forms_1 = require("@angular/forms");
var component_1 = require("../core/component");
var template_host_1 = require("../core/template-host");
var template_1 = require("../core/template");
var nested_option_1 = require("../core/nested-option");
var watcher_helper_1 = require("../core/watcher-helper");
var iterable_differ_helper_1 = require("../core/iterable-differ-helper");
var item_dxi_1 = require("./nested/item-dxi");
var item_dxi_2 = require("./nested/item-dxi");
var CUSTOM_VALUE_ACCESSOR_PROVIDER = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return DxTagBoxComponent; }),
    multi: true
};
/**
 * The TagBox widget is an editor that allows an end user to select multiple items from a drop-down list.
 */
var DxTagBoxComponent = (function (_super) {
    __extends(DxTagBoxComponent, _super);
    function DxTagBoxComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper) || this;
        _this._watcherHelper = _watcherHelper;
        _this._idh = _idh;
        _this.touched = function () { };
        _this._createEventEmitters([
            { subscribe: 'change', emit: 'onChange' },
            { subscribe: 'closed', emit: 'onClosed' },
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'customItemCreating', emit: 'onCustomItemCreating' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'enterKey', emit: 'onEnterKey' },
            { subscribe: 'focusIn', emit: 'onFocusIn' },
            { subscribe: 'focusOut', emit: 'onFocusOut' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'input', emit: 'onInput' },
            { subscribe: 'itemClick', emit: 'onItemClick' },
            { subscribe: 'keyDown', emit: 'onKeyDown' },
            { subscribe: 'keyPress', emit: 'onKeyPress' },
            { subscribe: 'keyUp', emit: 'onKeyUp' },
            { subscribe: 'multiTagPreparing', emit: 'onMultiTagPreparing' },
            { subscribe: 'opened', emit: 'onOpened' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'selectAllValueChanged', emit: 'onSelectAllValueChanged' },
            { subscribe: 'selectionChanged', emit: 'onSelectionChanged' },
            { subscribe: 'valueChanged', emit: 'onValueChanged' },
            { emit: 'acceptCustomValueChange' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'applyValueModeChange' },
            { emit: 'attrChange' },
            { emit: 'dataSourceChange' },
            { emit: 'deferRenderingChange' },
            { emit: 'disabledChange' },
            { emit: 'displayExprChange' },
            { emit: 'dropDownButtonTemplateChange' },
            { emit: 'elementAttrChange' },
            { emit: 'fieldEditEnabledChange' },
            { emit: 'fieldTemplateChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'groupedChange' },
            { emit: 'groupTemplateChange' },
            { emit: 'heightChange' },
            { emit: 'hideSelectedItemsChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'inputAttrChange' },
            { emit: 'isValidChange' },
            { emit: 'itemsChange' },
            { emit: 'itemTemplateChange' },
            { emit: 'maxDisplayedTagsChange' },
            { emit: 'minSearchLengthChange' },
            { emit: 'multilineChange' },
            { emit: 'nameChange' },
            { emit: 'noDataTextChange' },
            { emit: 'openedChange' },
            { emit: 'pagingEnabledChange' },
            { emit: 'placeholderChange' },
            { emit: 'readOnlyChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'searchEnabledChange' },
            { emit: 'searchExprChange' },
            { emit: 'searchModeChange' },
            { emit: 'searchTimeoutChange' },
            { emit: 'selectAllModeChange' },
            { emit: 'selectedItemsChange' },
            { emit: 'showClearButtonChange' },
            { emit: 'showDataBeforeSearchChange' },
            { emit: 'showMultiTagOnlyChange' },
            { emit: 'showSelectionControlsChange' },
            { emit: 'tabIndexChange' },
            { emit: 'tagTemplateChange' },
            { emit: 'textChange' },
            { emit: 'validationErrorChange' },
            { emit: 'validationMessageModeChange' },
            { emit: 'valueChange' },
            { emit: 'valueExprChange' },
            { emit: 'valuesChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' },
            { emit: 'onBlur' }
        ]);
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxTagBoxComponent.prototype, "acceptCustomValue", {
        /**
         * Specifies whether the widget allows a user to enter a custom value. Requires the onCustomItemCreating handler implementation.
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
    Object.defineProperty(DxTagBoxComponent.prototype, "accessKey", {
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
    Object.defineProperty(DxTagBoxComponent.prototype, "activeStateEnabled", {
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
    Object.defineProperty(DxTagBoxComponent.prototype, "applyValueMode", {
        /**
         * Specifies how the widget applies values.
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
    Object.defineProperty(DxTagBoxComponent.prototype, "attr", {
        get: function () {
            return this._getOption('attr');
        },
        set: function (value) {
            this._setOption('attr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "dataSource", {
        /**
         * A data source used to fetch data to be displayed by the widget.
         */
        get: function () {
            return this._getOption('dataSource');
        },
        set: function (value) {
            this._setOption('dataSource', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "deferRendering", {
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
    Object.defineProperty(DxTagBoxComponent.prototype, "disabled", {
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
    Object.defineProperty(DxTagBoxComponent.prototype, "displayExpr", {
        /**
         * Specifies the name of the data source item field whose value is displayed by the widget.
         */
        get: function () {
            return this._getOption('displayExpr');
        },
        set: function (value) {
            this._setOption('displayExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "dropDownButtonTemplate", {
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
    Object.defineProperty(DxTagBoxComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxTagBoxComponent.prototype, "fieldEditEnabled", {
        get: function () {
            return this._getOption('fieldEditEnabled');
        },
        set: function (value) {
            this._setOption('fieldEditEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "fieldTemplate", {
        /**
         * Specifies a custom template for the text field. Must contain the TextBox widget.
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
    Object.defineProperty(DxTagBoxComponent.prototype, "focusStateEnabled", {
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
    Object.defineProperty(DxTagBoxComponent.prototype, "grouped", {
        /**
         * Specifies whether data items should be grouped.
         */
        get: function () {
            return this._getOption('grouped');
        },
        set: function (value) {
            this._setOption('grouped', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "groupTemplate", {
        /**
         * Specifies a custom template for group captions.
         */
        get: function () {
            return this._getOption('groupTemplate');
        },
        set: function (value) {
            this._setOption('groupTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "height", {
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
    Object.defineProperty(DxTagBoxComponent.prototype, "hideSelectedItems", {
        /**
         * A Boolean value specifying whether or not to hide selected items.
         */
        get: function () {
            return this._getOption('hideSelectedItems');
        },
        set: function (value) {
            this._setOption('hideSelectedItems', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "hint", {
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
    Object.defineProperty(DxTagBoxComponent.prototype, "hoverStateEnabled", {
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
    Object.defineProperty(DxTagBoxComponent.prototype, "inputAttr", {
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
    Object.defineProperty(DxTagBoxComponent.prototype, "isValid", {
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
    Object.defineProperty(DxTagBoxComponent.prototype, "items", {
        /**
         * An array of items displayed by the widget.
         */
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this._setOption('items', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "itemTemplate", {
        /**
         * Specifies a custom template for items.
         */
        get: function () {
            return this._getOption('itemTemplate');
        },
        set: function (value) {
            this._setOption('itemTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "maxDisplayedTags", {
        /**
         * Specifies the limit on displayed tags. On exceeding it, the widget replaces all tags with a single multi-tag that displays the number of selected items.
         */
        get: function () {
            return this._getOption('maxDisplayedTags');
        },
        set: function (value) {
            this._setOption('maxDisplayedTags', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "minSearchLength", {
        /**
         * The minimum number of characters that must be entered into the text box to begin a search. Applies only if searchEnabled is true.
         */
        get: function () {
            return this._getOption('minSearchLength');
        },
        set: function (value) {
            this._setOption('minSearchLength', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "multiline", {
        /**
         * A Boolean value specifying whether or not the widget is multiline.
         */
        get: function () {
            return this._getOption('multiline');
        },
        set: function (value) {
            this._setOption('multiline', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "name", {
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
    Object.defineProperty(DxTagBoxComponent.prototype, "noDataText", {
        /**
         * The text or HTML markup displayed by the widget if the item collection is empty.
         */
        get: function () {
            return this._getOption('noDataText');
        },
        set: function (value) {
            this._setOption('noDataText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "opened", {
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
    Object.defineProperty(DxTagBoxComponent.prototype, "pagingEnabled", {
        /**
         * Use the DataSource paging opportunities instead.
         */
        get: function () {
            return this._getOption('pagingEnabled');
        },
        set: function (value) {
            this._setOption('pagingEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "placeholder", {
        /**
         * The text that is provided as a hint in the select box editor.
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
    Object.defineProperty(DxTagBoxComponent.prototype, "readOnly", {
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
    Object.defineProperty(DxTagBoxComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxTagBoxComponent.prototype, "searchEnabled", {
        /**
         * Specifies whether to allow searching.
         */
        get: function () {
            return this._getOption('searchEnabled');
        },
        set: function (value) {
            this._setOption('searchEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "searchExpr", {
        /**
         * Specifies the name of a data source item field or an expression whose value is compared to the search criterion.
         */
        get: function () {
            return this._getOption('searchExpr');
        },
        set: function (value) {
            this._setOption('searchExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "searchMode", {
        /**
         * Specifies the binary operation used to filter data.
         */
        get: function () {
            return this._getOption('searchMode');
        },
        set: function (value) {
            this._setOption('searchMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "searchTimeout", {
        /**
         * Specifies the time delay, in milliseconds, after the last character has been typed in, before a search is executed.
         */
        get: function () {
            return this._getOption('searchTimeout');
        },
        set: function (value) {
            this._setOption('searchTimeout', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "selectAllMode", {
        /**
         * Specifies the mode in which all items are selected.
         */
        get: function () {
            return this._getOption('selectAllMode');
        },
        set: function (value) {
            this._setOption('selectAllMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "selectedItems", {
        /**
         * Gets the currently selected items.
         */
        get: function () {
            return this._getOption('selectedItems');
        },
        set: function (value) {
            this._setOption('selectedItems', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "showClearButton", {
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
    Object.defineProperty(DxTagBoxComponent.prototype, "showDataBeforeSearch", {
        /**
         * Specifies whether or not the widget displays unfiltered values until a user types a number of characters exceeding the minSearchLength option value.
         */
        get: function () {
            return this._getOption('showDataBeforeSearch');
        },
        set: function (value) {
            this._setOption('showDataBeforeSearch', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "showMultiTagOnly", {
        /**
         * Specifies whether the multi-tag is shown without ordinary tags.
         */
        get: function () {
            return this._getOption('showMultiTagOnly');
        },
        set: function (value) {
            this._setOption('showMultiTagOnly', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "showSelectionControls", {
        /**
         * Specifies whether or not to display selection controls.
         */
        get: function () {
            return this._getOption('showSelectionControls');
        },
        set: function (value) {
            this._setOption('showSelectionControls', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "tabIndex", {
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
    Object.defineProperty(DxTagBoxComponent.prototype, "tagTemplate", {
        /**
         * Specifies a custom template for tags.
         */
        get: function () {
            return this._getOption('tagTemplate');
        },
        set: function (value) {
            this._setOption('tagTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "text", {
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
    Object.defineProperty(DxTagBoxComponent.prototype, "validationError", {
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
    Object.defineProperty(DxTagBoxComponent.prototype, "validationMessageMode", {
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
    Object.defineProperty(DxTagBoxComponent.prototype, "value", {
        /**
         * Specifies the selected items.
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
    Object.defineProperty(DxTagBoxComponent.prototype, "valueExpr", {
        /**
         * Specifies which data field provides the widget's value. When this option is not set, the value is the entire data object.
         */
        get: function () {
            return this._getOption('valueExpr');
        },
        set: function (value) {
            this._setOption('valueExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "values", {
        get: function () {
            return this._getOption('values');
        },
        set: function (value) {
            this._setOption('values', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTagBoxComponent.prototype, "visible", {
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
    Object.defineProperty(DxTagBoxComponent.prototype, "width", {
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
    DxTagBoxComponent.prototype.change = function (_) { };
    Object.defineProperty(DxTagBoxComponent.prototype, "itemsChildren", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this.setChildren('items', value);
        },
        enumerable: true,
        configurable: true
    });
    DxTagBoxComponent.prototype._createInstance = function (element, options) {
        var widget = new tag_box_1.default(element, options);
        if (this.validator) {
            this.validator.createInstance(element);
        }
        return widget;
    };
    DxTagBoxComponent.prototype.writeValue = function (value) {
        this.value = value;
    };
    DxTagBoxComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    DxTagBoxComponent.prototype.registerOnChange = function (fn) { this.change = fn; };
    DxTagBoxComponent.prototype.registerOnTouched = function (fn) { this.touched = fn; };
    DxTagBoxComponent.prototype._createWidget = function (element) {
        var _this = this;
        _super.prototype._createWidget.call(this, element);
        this.instance.on('focusOut', function (e) {
            _this.eventHelper.fireNgEvent('onBlur', [e]);
        });
    };
    DxTagBoxComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxTagBoxComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('dataSource', changes);
        this.setupChanges('items', changes);
        this.setupChanges('searchExpr', changes);
        this.setupChanges('selectedItems', changes);
        this.setupChanges('value', changes);
    };
    DxTagBoxComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxTagBoxComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('items');
        this._idh.doCheck('searchExpr');
        this._idh.doCheck('selectedItems');
        this._idh.doCheck('value');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
    };
    DxTagBoxComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxTagBoxComponent.prototype.ngAfterContentInit = function () {
        if (this.validator) {
            this.validator.renderOnViewInit = false;
        }
    };
    DxTagBoxComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-tag-box',
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
    DxTagBoxComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: iterable_differ_helper_1.IterableDifferHelper, },
        { type: nested_option_1.NestedOptionHost, },
    ]; };
    DxTagBoxComponent.propDecorators = {
        'validator': [{ type: core_1.ContentChild, args: [validator_1.DxValidatorComponent,] },],
        'acceptCustomValue': [{ type: core_1.Input },],
        'accessKey': [{ type: core_1.Input },],
        'activeStateEnabled': [{ type: core_1.Input },],
        'applyValueMode': [{ type: core_1.Input },],
        'attr': [{ type: core_1.Input },],
        'dataSource': [{ type: core_1.Input },],
        'deferRendering': [{ type: core_1.Input },],
        'disabled': [{ type: core_1.Input },],
        'displayExpr': [{ type: core_1.Input },],
        'dropDownButtonTemplate': [{ type: core_1.Input },],
        'elementAttr': [{ type: core_1.Input },],
        'fieldEditEnabled': [{ type: core_1.Input },],
        'fieldTemplate': [{ type: core_1.Input },],
        'focusStateEnabled': [{ type: core_1.Input },],
        'grouped': [{ type: core_1.Input },],
        'groupTemplate': [{ type: core_1.Input },],
        'height': [{ type: core_1.Input },],
        'hideSelectedItems': [{ type: core_1.Input },],
        'hint': [{ type: core_1.Input },],
        'hoverStateEnabled': [{ type: core_1.Input },],
        'inputAttr': [{ type: core_1.Input },],
        'isValid': [{ type: core_1.Input },],
        'items': [{ type: core_1.Input },],
        'itemTemplate': [{ type: core_1.Input },],
        'maxDisplayedTags': [{ type: core_1.Input },],
        'minSearchLength': [{ type: core_1.Input },],
        'multiline': [{ type: core_1.Input },],
        'name': [{ type: core_1.Input },],
        'noDataText': [{ type: core_1.Input },],
        'opened': [{ type: core_1.Input },],
        'pagingEnabled': [{ type: core_1.Input },],
        'placeholder': [{ type: core_1.Input },],
        'readOnly': [{ type: core_1.Input },],
        'rtlEnabled': [{ type: core_1.Input },],
        'searchEnabled': [{ type: core_1.Input },],
        'searchExpr': [{ type: core_1.Input },],
        'searchMode': [{ type: core_1.Input },],
        'searchTimeout': [{ type: core_1.Input },],
        'selectAllMode': [{ type: core_1.Input },],
        'selectedItems': [{ type: core_1.Input },],
        'showClearButton': [{ type: core_1.Input },],
        'showDataBeforeSearch': [{ type: core_1.Input },],
        'showMultiTagOnly': [{ type: core_1.Input },],
        'showSelectionControls': [{ type: core_1.Input },],
        'tabIndex': [{ type: core_1.Input },],
        'tagTemplate': [{ type: core_1.Input },],
        'text': [{ type: core_1.Input },],
        'validationError': [{ type: core_1.Input },],
        'validationMessageMode': [{ type: core_1.Input },],
        'value': [{ type: core_1.Input },],
        'valueExpr': [{ type: core_1.Input },],
        'values': [{ type: core_1.Input },],
        'visible': [{ type: core_1.Input },],
        'width': [{ type: core_1.Input },],
        'onChange': [{ type: core_1.Output },],
        'onClosed': [{ type: core_1.Output },],
        'onContentReady': [{ type: core_1.Output },],
        'onCustomItemCreating': [{ type: core_1.Output },],
        'onDisposing': [{ type: core_1.Output },],
        'onEnterKey': [{ type: core_1.Output },],
        'onFocusIn': [{ type: core_1.Output },],
        'onFocusOut': [{ type: core_1.Output },],
        'onInitialized': [{ type: core_1.Output },],
        'onInput': [{ type: core_1.Output },],
        'onItemClick': [{ type: core_1.Output },],
        'onKeyDown': [{ type: core_1.Output },],
        'onKeyPress': [{ type: core_1.Output },],
        'onKeyUp': [{ type: core_1.Output },],
        'onMultiTagPreparing': [{ type: core_1.Output },],
        'onOpened': [{ type: core_1.Output },],
        'onOptionChanged': [{ type: core_1.Output },],
        'onSelectAllValueChanged': [{ type: core_1.Output },],
        'onSelectionChanged': [{ type: core_1.Output },],
        'onValueChanged': [{ type: core_1.Output },],
        'acceptCustomValueChange': [{ type: core_1.Output },],
        'accessKeyChange': [{ type: core_1.Output },],
        'activeStateEnabledChange': [{ type: core_1.Output },],
        'applyValueModeChange': [{ type: core_1.Output },],
        'attrChange': [{ type: core_1.Output },],
        'dataSourceChange': [{ type: core_1.Output },],
        'deferRenderingChange': [{ type: core_1.Output },],
        'disabledChange': [{ type: core_1.Output },],
        'displayExprChange': [{ type: core_1.Output },],
        'dropDownButtonTemplateChange': [{ type: core_1.Output },],
        'elementAttrChange': [{ type: core_1.Output },],
        'fieldEditEnabledChange': [{ type: core_1.Output },],
        'fieldTemplateChange': [{ type: core_1.Output },],
        'focusStateEnabledChange': [{ type: core_1.Output },],
        'groupedChange': [{ type: core_1.Output },],
        'groupTemplateChange': [{ type: core_1.Output },],
        'heightChange': [{ type: core_1.Output },],
        'hideSelectedItemsChange': [{ type: core_1.Output },],
        'hintChange': [{ type: core_1.Output },],
        'hoverStateEnabledChange': [{ type: core_1.Output },],
        'inputAttrChange': [{ type: core_1.Output },],
        'isValidChange': [{ type: core_1.Output },],
        'itemsChange': [{ type: core_1.Output },],
        'itemTemplateChange': [{ type: core_1.Output },],
        'maxDisplayedTagsChange': [{ type: core_1.Output },],
        'minSearchLengthChange': [{ type: core_1.Output },],
        'multilineChange': [{ type: core_1.Output },],
        'nameChange': [{ type: core_1.Output },],
        'noDataTextChange': [{ type: core_1.Output },],
        'openedChange': [{ type: core_1.Output },],
        'pagingEnabledChange': [{ type: core_1.Output },],
        'placeholderChange': [{ type: core_1.Output },],
        'readOnlyChange': [{ type: core_1.Output },],
        'rtlEnabledChange': [{ type: core_1.Output },],
        'searchEnabledChange': [{ type: core_1.Output },],
        'searchExprChange': [{ type: core_1.Output },],
        'searchModeChange': [{ type: core_1.Output },],
        'searchTimeoutChange': [{ type: core_1.Output },],
        'selectAllModeChange': [{ type: core_1.Output },],
        'selectedItemsChange': [{ type: core_1.Output },],
        'showClearButtonChange': [{ type: core_1.Output },],
        'showDataBeforeSearchChange': [{ type: core_1.Output },],
        'showMultiTagOnlyChange': [{ type: core_1.Output },],
        'showSelectionControlsChange': [{ type: core_1.Output },],
        'tabIndexChange': [{ type: core_1.Output },],
        'tagTemplateChange': [{ type: core_1.Output },],
        'textChange': [{ type: core_1.Output },],
        'validationErrorChange': [{ type: core_1.Output },],
        'validationMessageModeChange': [{ type: core_1.Output },],
        'valueChange': [{ type: core_1.Output },],
        'valueExprChange': [{ type: core_1.Output },],
        'valuesChange': [{ type: core_1.Output },],
        'visibleChange': [{ type: core_1.Output },],
        'widthChange': [{ type: core_1.Output },],
        'onBlur': [{ type: core_1.Output },],
        'change': [{ type: core_1.HostListener, args: ['valueChange', ['$event'],] },],
        'touched': [{ type: core_1.HostListener, args: ['onBlur', ['$event'],] },],
        'itemsChildren': [{ type: core_1.ContentChildren, args: [item_dxi_2.DxiItemComponent,] },],
    };
    return DxTagBoxComponent;
}(component_1.DxComponent));
exports.DxTagBoxComponent = DxTagBoxComponent;
var DxTagBoxModule = (function () {
    function DxTagBoxModule() {
    }
    DxTagBoxModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        item_dxi_1.DxiItemModule,
                        template_1.DxTemplateModule
                    ],
                    declarations: [
                        DxTagBoxComponent
                    ],
                    exports: [
                        DxTagBoxComponent,
                        item_dxi_1.DxiItemModule,
                        template_1.DxTemplateModule
                    ],
                },] },
    ];
    /** @nocollapse */
    DxTagBoxModule.ctorParameters = function () { return []; };
    return DxTagBoxModule;
}());
exports.DxTagBoxModule = DxTagBoxModule;
//# sourceMappingURL=tag-box.js.map