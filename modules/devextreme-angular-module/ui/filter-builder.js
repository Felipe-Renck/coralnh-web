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
var filter_builder_1 = require("devextreme/ui/filter_builder");
var validator_1 = require("./validator");
var forms_1 = require("@angular/forms");
var component_1 = require("../core/component");
var template_host_1 = require("../core/template-host");
var template_1 = require("../core/template");
var nested_option_1 = require("../core/nested-option");
var watcher_helper_1 = require("../core/watcher-helper");
var iterable_differ_helper_1 = require("../core/iterable-differ-helper");
var field_dxi_1 = require("./nested/field-dxi");
var format_1 = require("./nested/format");
var lookup_1 = require("./nested/lookup");
var filter_operation_descriptions_1 = require("./nested/filter-operation-descriptions");
var group_operation_descriptions_1 = require("./nested/group-operation-descriptions");
var field_dxi_2 = require("./nested/field-dxi");
var CUSTOM_VALUE_ACCESSOR_PROVIDER = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return DxFilterBuilderComponent; }),
    multi: true
};
/**
 * The FilterBuilder widget allows a user to build complex filter expressions with an unlimited number of filter conditions, combined by logical operations using the UI.
 */
var DxFilterBuilderComponent = (function (_super) {
    __extends(DxFilterBuilderComponent, _super);
    function DxFilterBuilderComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper) || this;
        _this._watcherHelper = _watcherHelper;
        _this._idh = _idh;
        _this.touched = function () { };
        _this._createEventEmitters([
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'editorPrepared', emit: 'onEditorPrepared' },
            { subscribe: 'editorPreparing', emit: 'onEditorPreparing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'valueChanged', emit: 'onValueChanged' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'allowHierarchicalFieldsChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'fieldsChange' },
            { emit: 'filterOperationDescriptionsChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'groupOperationDescriptionsChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'tabIndexChange' },
            { emit: 'valueChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' },
            { emit: 'onBlur' }
        ]);
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxFilterBuilderComponent.prototype, "accessKey", {
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
    Object.defineProperty(DxFilterBuilderComponent.prototype, "activeStateEnabled", {
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
    Object.defineProperty(DxFilterBuilderComponent.prototype, "allowHierarchicalFields", {
        /**
         * Specifies whether the widget can display hierarchical data fields.
         */
        get: function () {
            return this._getOption('allowHierarchicalFields');
        },
        set: function (value) {
            this._setOption('allowHierarchicalFields', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFilterBuilderComponent.prototype, "disabled", {
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
    Object.defineProperty(DxFilterBuilderComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxFilterBuilderComponent.prototype, "fields", {
        /**
         * Configures fields.
         */
        get: function () {
            return this._getOption('fields');
        },
        set: function (value) {
            this._setOption('fields', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFilterBuilderComponent.prototype, "filterOperationDescriptions", {
        /**
         * Specifies filter operation descriptions.
         */
        get: function () {
            return this._getOption('filterOperationDescriptions');
        },
        set: function (value) {
            this._setOption('filterOperationDescriptions', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFilterBuilderComponent.prototype, "focusStateEnabled", {
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
    Object.defineProperty(DxFilterBuilderComponent.prototype, "groupOperationDescriptions", {
        /**
         * Specifies group operation descriptions.
         */
        get: function () {
            return this._getOption('groupOperationDescriptions');
        },
        set: function (value) {
            this._setOption('groupOperationDescriptions', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFilterBuilderComponent.prototype, "height", {
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
    Object.defineProperty(DxFilterBuilderComponent.prototype, "hint", {
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
    Object.defineProperty(DxFilterBuilderComponent.prototype, "hoverStateEnabled", {
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
    Object.defineProperty(DxFilterBuilderComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxFilterBuilderComponent.prototype, "tabIndex", {
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
    Object.defineProperty(DxFilterBuilderComponent.prototype, "value", {
        /**
         * Specifies the current filter expression.
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
    Object.defineProperty(DxFilterBuilderComponent.prototype, "visible", {
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
    Object.defineProperty(DxFilterBuilderComponent.prototype, "width", {
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
    DxFilterBuilderComponent.prototype.change = function (_) { };
    Object.defineProperty(DxFilterBuilderComponent.prototype, "fieldsChildren", {
        get: function () {
            return this._getOption('fields');
        },
        set: function (value) {
            this.setChildren('fields', value);
        },
        enumerable: true,
        configurable: true
    });
    DxFilterBuilderComponent.prototype._createInstance = function (element, options) {
        var widget = new filter_builder_1.default(element, options);
        if (this.validator) {
            this.validator.createInstance(element);
        }
        return widget;
    };
    DxFilterBuilderComponent.prototype.writeValue = function (value) {
        this.value = value;
    };
    DxFilterBuilderComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    DxFilterBuilderComponent.prototype.registerOnChange = function (fn) { this.change = fn; };
    DxFilterBuilderComponent.prototype.registerOnTouched = function (fn) { this.touched = fn; };
    DxFilterBuilderComponent.prototype._createWidget = function (element) {
        var _this = this;
        _super.prototype._createWidget.call(this, element);
        this.instance.on('focusOut', function (e) {
            _this.eventHelper.fireNgEvent('onBlur', [e]);
        });
    };
    DxFilterBuilderComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxFilterBuilderComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('fields', changes);
    };
    DxFilterBuilderComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxFilterBuilderComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('fields');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
    };
    DxFilterBuilderComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxFilterBuilderComponent.prototype.ngAfterContentInit = function () {
        if (this.validator) {
            this.validator.renderOnViewInit = false;
        }
    };
    DxFilterBuilderComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-filter-builder',
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
    DxFilterBuilderComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: iterable_differ_helper_1.IterableDifferHelper, },
        { type: nested_option_1.NestedOptionHost, },
    ]; };
    DxFilterBuilderComponent.propDecorators = {
        'validator': [{ type: core_1.ContentChild, args: [validator_1.DxValidatorComponent,] },],
        'accessKey': [{ type: core_1.Input },],
        'activeStateEnabled': [{ type: core_1.Input },],
        'allowHierarchicalFields': [{ type: core_1.Input },],
        'disabled': [{ type: core_1.Input },],
        'elementAttr': [{ type: core_1.Input },],
        'fields': [{ type: core_1.Input },],
        'filterOperationDescriptions': [{ type: core_1.Input },],
        'focusStateEnabled': [{ type: core_1.Input },],
        'groupOperationDescriptions': [{ type: core_1.Input },],
        'height': [{ type: core_1.Input },],
        'hint': [{ type: core_1.Input },],
        'hoverStateEnabled': [{ type: core_1.Input },],
        'rtlEnabled': [{ type: core_1.Input },],
        'tabIndex': [{ type: core_1.Input },],
        'value': [{ type: core_1.Input },],
        'visible': [{ type: core_1.Input },],
        'width': [{ type: core_1.Input },],
        'onDisposing': [{ type: core_1.Output },],
        'onEditorPrepared': [{ type: core_1.Output },],
        'onEditorPreparing': [{ type: core_1.Output },],
        'onInitialized': [{ type: core_1.Output },],
        'onOptionChanged': [{ type: core_1.Output },],
        'onValueChanged': [{ type: core_1.Output },],
        'accessKeyChange': [{ type: core_1.Output },],
        'activeStateEnabledChange': [{ type: core_1.Output },],
        'allowHierarchicalFieldsChange': [{ type: core_1.Output },],
        'disabledChange': [{ type: core_1.Output },],
        'elementAttrChange': [{ type: core_1.Output },],
        'fieldsChange': [{ type: core_1.Output },],
        'filterOperationDescriptionsChange': [{ type: core_1.Output },],
        'focusStateEnabledChange': [{ type: core_1.Output },],
        'groupOperationDescriptionsChange': [{ type: core_1.Output },],
        'heightChange': [{ type: core_1.Output },],
        'hintChange': [{ type: core_1.Output },],
        'hoverStateEnabledChange': [{ type: core_1.Output },],
        'rtlEnabledChange': [{ type: core_1.Output },],
        'tabIndexChange': [{ type: core_1.Output },],
        'valueChange': [{ type: core_1.Output },],
        'visibleChange': [{ type: core_1.Output },],
        'widthChange': [{ type: core_1.Output },],
        'onBlur': [{ type: core_1.Output },],
        'change': [{ type: core_1.HostListener, args: ['valueChange', ['$event'],] },],
        'touched': [{ type: core_1.HostListener, args: ['onBlur', ['$event'],] },],
        'fieldsChildren': [{ type: core_1.ContentChildren, args: [field_dxi_2.DxiFieldComponent,] },],
    };
    return DxFilterBuilderComponent;
}(component_1.DxComponent));
exports.DxFilterBuilderComponent = DxFilterBuilderComponent;
var DxFilterBuilderModule = (function () {
    function DxFilterBuilderModule() {
    }
    DxFilterBuilderModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        field_dxi_1.DxiFieldModule,
                        format_1.DxoFormatModule,
                        lookup_1.DxoLookupModule,
                        filter_operation_descriptions_1.DxoFilterOperationDescriptionsModule,
                        group_operation_descriptions_1.DxoGroupOperationDescriptionsModule,
                        template_1.DxTemplateModule
                    ],
                    declarations: [
                        DxFilterBuilderComponent
                    ],
                    exports: [
                        DxFilterBuilderComponent,
                        field_dxi_1.DxiFieldModule,
                        format_1.DxoFormatModule,
                        lookup_1.DxoLookupModule,
                        filter_operation_descriptions_1.DxoFilterOperationDescriptionsModule,
                        group_operation_descriptions_1.DxoGroupOperationDescriptionsModule,
                        template_1.DxTemplateModule
                    ],
                },] },
    ];
    /** @nocollapse */
    DxFilterBuilderModule.ctorParameters = function () { return []; };
    return DxFilterBuilderModule;
}());
exports.DxFilterBuilderModule = DxFilterBuilderModule;
//# sourceMappingURL=filter-builder.js.map