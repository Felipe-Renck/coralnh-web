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
var file_uploader_1 = require("devextreme/ui/file_uploader");
var validator_1 = require("./validator");
var forms_1 = require("@angular/forms");
var component_1 = require("../core/component");
var template_host_1 = require("../core/template-host");
var template_1 = require("../core/template");
var nested_option_1 = require("../core/nested-option");
var watcher_helper_1 = require("../core/watcher-helper");
var iterable_differ_helper_1 = require("../core/iterable-differ-helper");
var CUSTOM_VALUE_ACCESSOR_PROVIDER = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return DxFileUploaderComponent; }),
    multi: true
};
/**
 * The FileUploader widget enables an end user to upload files to the server. An end user can select files in the file explorer or drag and drop files to the FileUploader area on the page.
 */
var DxFileUploaderComponent = (function (_super) {
    __extends(DxFileUploaderComponent, _super);
    function DxFileUploaderComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper) || this;
        _this._watcherHelper = _watcherHelper;
        _this._idh = _idh;
        _this.touched = function () { };
        _this._createEventEmitters([
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'progress', emit: 'onProgress' },
            { subscribe: 'uploadAborted', emit: 'onUploadAborted' },
            { subscribe: 'uploaded', emit: 'onUploaded' },
            { subscribe: 'uploadError', emit: 'onUploadError' },
            { subscribe: 'uploadStarted', emit: 'onUploadStarted' },
            { subscribe: 'valueChanged', emit: 'onValueChanged' },
            { emit: 'acceptChange' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'allowCancelingChange' },
            { emit: 'buttonTextChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'isValidChange' },
            { emit: 'labelTextChange' },
            { emit: 'multipleChange' },
            { emit: 'nameChange' },
            { emit: 'progressChange' },
            { emit: 'readOnlyChange' },
            { emit: 'readyToUploadMessageChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'selectButtonTextChange' },
            { emit: 'showFileListChange' },
            { emit: 'tabIndexChange' },
            { emit: 'uploadButtonTextChange' },
            { emit: 'uploadedMessageChange' },
            { emit: 'uploadFailedMessageChange' },
            { emit: 'uploadHeadersChange' },
            { emit: 'uploadMethodChange' },
            { emit: 'uploadModeChange' },
            { emit: 'uploadUrlChange' },
            { emit: 'validationErrorChange' },
            { emit: 'valueChange' },
            { emit: 'valuesChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' },
            { emit: 'onBlur' }
        ]);
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxFileUploaderComponent.prototype, "accept", {
        /**
         * Specifies a file type or several types accepted by the widget.
         */
        get: function () {
            return this._getOption('accept');
        },
        set: function (value) {
            this._setOption('accept', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "accessKey", {
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
    Object.defineProperty(DxFileUploaderComponent.prototype, "activeStateEnabled", {
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
    Object.defineProperty(DxFileUploaderComponent.prototype, "allowCanceling", {
        /**
         * Specifies if an end user can remove a file from the selection and interrupt uploading.
         */
        get: function () {
            return this._getOption('allowCanceling');
        },
        set: function (value) {
            this._setOption('allowCanceling', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "buttonText", {
        get: function () {
            return this._getOption('buttonText');
        },
        set: function (value) {
            this._setOption('buttonText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "disabled", {
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
    Object.defineProperty(DxFileUploaderComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxFileUploaderComponent.prototype, "focusStateEnabled", {
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
    Object.defineProperty(DxFileUploaderComponent.prototype, "height", {
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
    Object.defineProperty(DxFileUploaderComponent.prototype, "hint", {
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
    Object.defineProperty(DxFileUploaderComponent.prototype, "hoverStateEnabled", {
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
    Object.defineProperty(DxFileUploaderComponent.prototype, "isValid", {
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
    Object.defineProperty(DxFileUploaderComponent.prototype, "labelText", {
        /**
         * Specifies the text displayed on the area to which an end-user can drop a file.
         */
        get: function () {
            return this._getOption('labelText');
        },
        set: function (value) {
            this._setOption('labelText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "multiple", {
        /**
         * Specifies whether the widget enables an end-user to select a single file or multiple files.
         */
        get: function () {
            return this._getOption('multiple');
        },
        set: function (value) {
            this._setOption('multiple', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "name", {
        /**
         * Specifies the value passed to the name attribute of the underlying input element.
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
    Object.defineProperty(DxFileUploaderComponent.prototype, "progress", {
        /**
         * Gets the current progress in percentages.
         */
        get: function () {
            return this._getOption('progress');
        },
        set: function (value) {
            this._setOption('progress', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "readOnly", {
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
    Object.defineProperty(DxFileUploaderComponent.prototype, "readyToUploadMessage", {
        /**
         * The message displayed by the widget when it is ready to upload the specified files.
         */
        get: function () {
            return this._getOption('readyToUploadMessage');
        },
        set: function (value) {
            this._setOption('readyToUploadMessage', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxFileUploaderComponent.prototype, "selectButtonText", {
        /**
         * The text displayed on the button that opens the file browser.
         */
        get: function () {
            return this._getOption('selectButtonText');
        },
        set: function (value) {
            this._setOption('selectButtonText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "showFileList", {
        /**
         * Specifies whether or not the widget displays the list of selected files.
         */
        get: function () {
            return this._getOption('showFileList');
        },
        set: function (value) {
            this._setOption('showFileList', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "tabIndex", {
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
    Object.defineProperty(DxFileUploaderComponent.prototype, "uploadButtonText", {
        /**
         * The text displayed on the button that starts uploading.
         */
        get: function () {
            return this._getOption('uploadButtonText');
        },
        set: function (value) {
            this._setOption('uploadButtonText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "uploadedMessage", {
        /**
         * The message displayed by the widget when uploading is finished.
         */
        get: function () {
            return this._getOption('uploadedMessage');
        },
        set: function (value) {
            this._setOption('uploadedMessage', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "uploadFailedMessage", {
        /**
         * The message displayed by the widget on uploading failure.
         */
        get: function () {
            return this._getOption('uploadFailedMessage');
        },
        set: function (value) {
            this._setOption('uploadFailedMessage', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "uploadHeaders", {
        /**
         * Specifies headers for the upload request.
         */
        get: function () {
            return this._getOption('uploadHeaders');
        },
        set: function (value) {
            this._setOption('uploadHeaders', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "uploadMethod", {
        /**
         * Specifies the method for the upload request.
         */
        get: function () {
            return this._getOption('uploadMethod');
        },
        set: function (value) {
            this._setOption('uploadMethod', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "uploadMode", {
        /**
         * Specifies how the widget uploads files.
         */
        get: function () {
            return this._getOption('uploadMode');
        },
        set: function (value) {
            this._setOption('uploadMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "uploadUrl", {
        /**
         * Specifies a target Url for the upload request.
         */
        get: function () {
            return this._getOption('uploadUrl');
        },
        set: function (value) {
            this._setOption('uploadUrl', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "validationError", {
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
    Object.defineProperty(DxFileUploaderComponent.prototype, "value", {
        /**
         * Specifies a File instance representing the selected file. Read-only when uploadMode is "useForm".
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
    Object.defineProperty(DxFileUploaderComponent.prototype, "values", {
        get: function () {
            return this._getOption('values');
        },
        set: function (value) {
            this._setOption('values', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFileUploaderComponent.prototype, "visible", {
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
    Object.defineProperty(DxFileUploaderComponent.prototype, "width", {
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
    DxFileUploaderComponent.prototype.change = function (_) { };
    DxFileUploaderComponent.prototype._createInstance = function (element, options) {
        var widget = new file_uploader_1.default(element, options);
        if (this.validator) {
            this.validator.createInstance(element);
        }
        return widget;
    };
    DxFileUploaderComponent.prototype.writeValue = function (value) {
        this.value = value;
    };
    DxFileUploaderComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    DxFileUploaderComponent.prototype.registerOnChange = function (fn) { this.change = fn; };
    DxFileUploaderComponent.prototype.registerOnTouched = function (fn) { this.touched = fn; };
    DxFileUploaderComponent.prototype._createWidget = function (element) {
        var _this = this;
        _super.prototype._createWidget.call(this, element);
        this.instance.on('focusOut', function (e) {
            _this.eventHelper.fireNgEvent('onBlur', [e]);
        });
    };
    DxFileUploaderComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxFileUploaderComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('value', changes);
    };
    DxFileUploaderComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxFileUploaderComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('value');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
    };
    DxFileUploaderComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxFileUploaderComponent.prototype.ngAfterContentInit = function () {
        if (this.validator) {
            this.validator.renderOnViewInit = false;
        }
    };
    DxFileUploaderComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-file-uploader',
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
    DxFileUploaderComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: iterable_differ_helper_1.IterableDifferHelper, },
        { type: nested_option_1.NestedOptionHost, },
    ]; };
    DxFileUploaderComponent.propDecorators = {
        'validator': [{ type: core_1.ContentChild, args: [validator_1.DxValidatorComponent,] },],
        'accept': [{ type: core_1.Input },],
        'accessKey': [{ type: core_1.Input },],
        'activeStateEnabled': [{ type: core_1.Input },],
        'allowCanceling': [{ type: core_1.Input },],
        'buttonText': [{ type: core_1.Input },],
        'disabled': [{ type: core_1.Input },],
        'elementAttr': [{ type: core_1.Input },],
        'focusStateEnabled': [{ type: core_1.Input },],
        'height': [{ type: core_1.Input },],
        'hint': [{ type: core_1.Input },],
        'hoverStateEnabled': [{ type: core_1.Input },],
        'isValid': [{ type: core_1.Input },],
        'labelText': [{ type: core_1.Input },],
        'multiple': [{ type: core_1.Input },],
        'name': [{ type: core_1.Input },],
        'progress': [{ type: core_1.Input },],
        'readOnly': [{ type: core_1.Input },],
        'readyToUploadMessage': [{ type: core_1.Input },],
        'rtlEnabled': [{ type: core_1.Input },],
        'selectButtonText': [{ type: core_1.Input },],
        'showFileList': [{ type: core_1.Input },],
        'tabIndex': [{ type: core_1.Input },],
        'uploadButtonText': [{ type: core_1.Input },],
        'uploadedMessage': [{ type: core_1.Input },],
        'uploadFailedMessage': [{ type: core_1.Input },],
        'uploadHeaders': [{ type: core_1.Input },],
        'uploadMethod': [{ type: core_1.Input },],
        'uploadMode': [{ type: core_1.Input },],
        'uploadUrl': [{ type: core_1.Input },],
        'validationError': [{ type: core_1.Input },],
        'value': [{ type: core_1.Input },],
        'values': [{ type: core_1.Input },],
        'visible': [{ type: core_1.Input },],
        'width': [{ type: core_1.Input },],
        'onContentReady': [{ type: core_1.Output },],
        'onDisposing': [{ type: core_1.Output },],
        'onInitialized': [{ type: core_1.Output },],
        'onOptionChanged': [{ type: core_1.Output },],
        'onProgress': [{ type: core_1.Output },],
        'onUploadAborted': [{ type: core_1.Output },],
        'onUploaded': [{ type: core_1.Output },],
        'onUploadError': [{ type: core_1.Output },],
        'onUploadStarted': [{ type: core_1.Output },],
        'onValueChanged': [{ type: core_1.Output },],
        'acceptChange': [{ type: core_1.Output },],
        'accessKeyChange': [{ type: core_1.Output },],
        'activeStateEnabledChange': [{ type: core_1.Output },],
        'allowCancelingChange': [{ type: core_1.Output },],
        'buttonTextChange': [{ type: core_1.Output },],
        'disabledChange': [{ type: core_1.Output },],
        'elementAttrChange': [{ type: core_1.Output },],
        'focusStateEnabledChange': [{ type: core_1.Output },],
        'heightChange': [{ type: core_1.Output },],
        'hintChange': [{ type: core_1.Output },],
        'hoverStateEnabledChange': [{ type: core_1.Output },],
        'isValidChange': [{ type: core_1.Output },],
        'labelTextChange': [{ type: core_1.Output },],
        'multipleChange': [{ type: core_1.Output },],
        'nameChange': [{ type: core_1.Output },],
        'progressChange': [{ type: core_1.Output },],
        'readOnlyChange': [{ type: core_1.Output },],
        'readyToUploadMessageChange': [{ type: core_1.Output },],
        'rtlEnabledChange': [{ type: core_1.Output },],
        'selectButtonTextChange': [{ type: core_1.Output },],
        'showFileListChange': [{ type: core_1.Output },],
        'tabIndexChange': [{ type: core_1.Output },],
        'uploadButtonTextChange': [{ type: core_1.Output },],
        'uploadedMessageChange': [{ type: core_1.Output },],
        'uploadFailedMessageChange': [{ type: core_1.Output },],
        'uploadHeadersChange': [{ type: core_1.Output },],
        'uploadMethodChange': [{ type: core_1.Output },],
        'uploadModeChange': [{ type: core_1.Output },],
        'uploadUrlChange': [{ type: core_1.Output },],
        'validationErrorChange': [{ type: core_1.Output },],
        'valueChange': [{ type: core_1.Output },],
        'valuesChange': [{ type: core_1.Output },],
        'visibleChange': [{ type: core_1.Output },],
        'widthChange': [{ type: core_1.Output },],
        'onBlur': [{ type: core_1.Output },],
        'change': [{ type: core_1.HostListener, args: ['valueChange', ['$event'],] },],
        'touched': [{ type: core_1.HostListener, args: ['onBlur', ['$event'],] },],
    };
    return DxFileUploaderComponent;
}(component_1.DxComponent));
exports.DxFileUploaderComponent = DxFileUploaderComponent;
var DxFileUploaderModule = (function () {
    function DxFileUploaderModule() {
    }
    DxFileUploaderModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        template_1.DxTemplateModule
                    ],
                    declarations: [
                        DxFileUploaderComponent
                    ],
                    exports: [
                        DxFileUploaderComponent,
                        template_1.DxTemplateModule
                    ],
                },] },
    ];
    /** @nocollapse */
    DxFileUploaderModule.ctorParameters = function () { return []; };
    return DxFileUploaderModule;
}());
exports.DxFileUploaderModule = DxFileUploaderModule;
//# sourceMappingURL=file-uploader.js.map