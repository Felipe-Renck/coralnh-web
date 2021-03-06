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
import { ElementRef, NgZone, OnDestroy, EventEmitter, AfterContentInit, OnChanges, DoCheck, SimpleChanges } from '@angular/core';
import DxFileUploader from 'devextreme/ui/file_uploader';
import { DxValidatorComponent } from './validator';
import { ControlValueAccessor } from '@angular/forms';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
/**
 * The FileUploader widget enables an end user to upload files to the server. An end user can select files in the file explorer or drag and drop files to the FileUploader area on the page.
 */
export declare class DxFileUploaderComponent extends DxComponent implements OnDestroy, AfterContentInit, ControlValueAccessor, OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxFileUploader;
    validator: DxValidatorComponent;
    /**
     * Specifies a file type or several types accepted by the widget.
     */
    accept: string;
    /**
     * Specifies the shortcut key that sets focus on the widget.
     */
    accessKey: string;
    /**
     * Specifies whether or not the widget changes its state when interacting with a user.
     */
    activeStateEnabled: boolean;
    /**
     * Specifies if an end user can remove a file from the selection and interrupt uploading.
     */
    allowCanceling: boolean;
    buttonText: any;
    /**
     * Specifies whether the widget responds to user interaction.
     */
    disabled: boolean;
    /**
     * Specifies the attributes to be attached to the widget's root element.
     */
    elementAttr: any;
    /**
     * Specifies whether the widget can be focused using keyboard navigation.
     */
    focusStateEnabled: boolean;
    /**
     * Specifies the widget's height.
     */
    height: number | Function | string;
    /**
     * Specifies text for a hint that appears when a user pauses on the widget.
     */
    hint: string;
    /**
     * Specifies whether the widget changes its state when a user pauses on it.
     */
    hoverStateEnabled: boolean;
    /**
     * Specifies whether the editor's value is valid.
     */
    isValid: boolean;
    /**
     * Specifies the text displayed on the area to which an end-user can drop a file.
     */
    labelText: string;
    /**
     * Specifies whether the widget enables an end-user to select a single file or multiple files.
     */
    multiple: boolean;
    /**
     * Specifies the value passed to the name attribute of the underlying input element.
     */
    name: string;
    /**
     * Gets the current progress in percentages.
     */
    progress: number;
    /**
     * A Boolean value specifying whether or not the widget is read-only.
     */
    readOnly: boolean;
    /**
     * The message displayed by the widget when it is ready to upload the specified files.
     */
    readyToUploadMessage: string;
    /**
     * Switches the widget to a right-to-left representation.
     */
    rtlEnabled: boolean;
    /**
     * The text displayed on the button that opens the file browser.
     */
    selectButtonText: string;
    /**
     * Specifies whether or not the widget displays the list of selected files.
     */
    showFileList: boolean;
    /**
     * Specifies the number of the element when the Tab key is used for navigating.
     */
    tabIndex: number;
    /**
     * The text displayed on the button that starts uploading.
     */
    uploadButtonText: string;
    /**
     * The message displayed by the widget when uploading is finished.
     */
    uploadedMessage: string;
    /**
     * The message displayed by the widget on uploading failure.
     */
    uploadFailedMessage: string;
    /**
     * Specifies headers for the upload request.
     */
    uploadHeaders: any;
    /**
     * Specifies the method for the upload request.
     */
    uploadMethod: string;
    /**
     * Specifies how the widget uploads files.
     */
    uploadMode: string;
    /**
     * Specifies a target Url for the upload request.
     */
    uploadUrl: string;
    /**
     * Specifies information on the validation error when using a custom validation engine. Should be changed at runtime along with the isValid option.
     */
    validationError: any;
    /**
     * Specifies a File instance representing the selected file. Read-only when uploadMode is "useForm".
     */
    value: Array<any>;
    values: any;
    /**
     * Specifies whether the widget is visible.
     */
    visible: boolean;
    /**
     * Specifies the widget's width.
     */
    width: number | Function | string;
    /**
     * A handler for the contentReady event. Executed when the widget's content is ready. This handler may be executed multiple times during the widget's lifetime depending on the number of times its content changes.
     */
    onContentReady: EventEmitter<any>;
    /**
     * A handler for the disposing event. Executed when the widget is removed from the DOM using the remove(), empty(), or html() jQuery methods only.
     */
    onDisposing: EventEmitter<any>;
    /**
     * A handler for the initialized event. Executed only once, after the widget is initialized.
     */
    onInitialized: EventEmitter<any>;
    /**
     * A handler for the optionChanged event. Executed after an option of the widget is changed.
     */
    onOptionChanged: EventEmitter<any>;
    /**
     * A handler for the uploaded event.
     */
    onProgress: EventEmitter<any>;
    /**
     * A handler for the uploadAborted event.
     */
    onUploadAborted: EventEmitter<any>;
    /**
     * A handler for the uploaded event.
     */
    onUploaded: EventEmitter<any>;
    /**
     * A handler for the uploadError event.
     */
    onUploadError: EventEmitter<any>;
    /**
     * A handler for the uploadStarted event.
     */
    onUploadStarted: EventEmitter<any>;
    /**
     * A handler for the valueChanged event.
     */
    onValueChanged: EventEmitter<any>;
    /**
     * A handler for the acceptChange event.
     */
    acceptChange: EventEmitter<string>;
    /**
     * A handler for the accessKeyChange event.
     */
    accessKeyChange: EventEmitter<string>;
    /**
     * A handler for the activeStateEnabledChange event.
     */
    activeStateEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the allowCancelingChange event.
     */
    allowCancelingChange: EventEmitter<boolean>;
    /**
     * A handler for the buttonTextChange event.
     */
    buttonTextChange: EventEmitter<any>;
    /**
     * A handler for the disabledChange event.
     */
    disabledChange: EventEmitter<boolean>;
    /**
     * A handler for the elementAttrChange event.
     */
    elementAttrChange: EventEmitter<any>;
    /**
     * A handler for the focusStateEnabledChange event.
     */
    focusStateEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the heightChange event.
     */
    heightChange: EventEmitter<number | Function | string>;
    /**
     * A handler for the hintChange event.
     */
    hintChange: EventEmitter<string>;
    /**
     * A handler for the hoverStateEnabledChange event.
     */
    hoverStateEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the isValidChange event.
     */
    isValidChange: EventEmitter<boolean>;
    /**
     * A handler for the labelTextChange event.
     */
    labelTextChange: EventEmitter<string>;
    /**
     * A handler for the multipleChange event.
     */
    multipleChange: EventEmitter<boolean>;
    /**
     * A handler for the nameChange event.
     */
    nameChange: EventEmitter<string>;
    /**
     * A handler for the progressChange event.
     */
    progressChange: EventEmitter<number>;
    /**
     * A handler for the readOnlyChange event.
     */
    readOnlyChange: EventEmitter<boolean>;
    /**
     * A handler for the readyToUploadMessageChange event.
     */
    readyToUploadMessageChange: EventEmitter<string>;
    /**
     * A handler for the rtlEnabledChange event.
     */
    rtlEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the selectButtonTextChange event.
     */
    selectButtonTextChange: EventEmitter<string>;
    /**
     * A handler for the showFileListChange event.
     */
    showFileListChange: EventEmitter<boolean>;
    /**
     * A handler for the tabIndexChange event.
     */
    tabIndexChange: EventEmitter<number>;
    /**
     * A handler for the uploadButtonTextChange event.
     */
    uploadButtonTextChange: EventEmitter<string>;
    /**
     * A handler for the uploadedMessageChange event.
     */
    uploadedMessageChange: EventEmitter<string>;
    /**
     * A handler for the uploadFailedMessageChange event.
     */
    uploadFailedMessageChange: EventEmitter<string>;
    /**
     * A handler for the uploadHeadersChange event.
     */
    uploadHeadersChange: EventEmitter<any>;
    /**
     * A handler for the uploadMethodChange event.
     */
    uploadMethodChange: EventEmitter<string>;
    /**
     * A handler for the uploadModeChange event.
     */
    uploadModeChange: EventEmitter<string>;
    /**
     * A handler for the uploadUrlChange event.
     */
    uploadUrlChange: EventEmitter<string>;
    /**
     * A handler for the validationErrorChange event.
     */
    validationErrorChange: EventEmitter<any>;
    /**
     * A handler for the valueChange event.
     */
    valueChange: EventEmitter<Array<any>>;
    /**
     * A handler for the valuesChange event.
     */
    valuesChange: EventEmitter<any>;
    /**
     * A handler for the visibleChange event.
     */
    visibleChange: EventEmitter<boolean>;
    /**
     * A handler for the widthChange event.
     */
    widthChange: EventEmitter<number | Function | string>;
    onBlur: EventEmitter<any>;
    change(_: any): void;
    touched: () => void;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper, optionHost: NestedOptionHost);
    protected _createInstance(element: any, options: any): DxFileUploader;
    writeValue(value: any): void;
    setDisabledState(isDisabled: boolean): void;
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: () => void): void;
    _createWidget(element: any): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    setupChanges(prop: string, changes: SimpleChanges): void;
    ngDoCheck(): void;
    _setOption(name: string, value: any): void;
    ngAfterContentInit(): void;
}
export declare class DxFileUploaderModule {
}
