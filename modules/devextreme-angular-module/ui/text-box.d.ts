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
import { ElementRef, NgZone, OnDestroy, EventEmitter, AfterContentInit } from '@angular/core';
import DxTextBox from 'devextreme/ui/text_box';
import { DxValidatorComponent } from './validator';
import { ControlValueAccessor } from '@angular/forms';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
/**
 * The TextBox is a widget that enables a user to enter and edit a single line of text.
 */
export declare class DxTextBoxComponent extends DxComponent implements OnDestroy, AfterContentInit, ControlValueAccessor {
    instance: DxTextBox;
    validator: DxValidatorComponent;
    /**
     * Specifies the shortcut key that sets focus on the widget.
     */
    accessKey: string;
    /**
     * Specifies whether or not the widget changes its state when interacting with a user.
     */
    activeStateEnabled: boolean;
    attr: any;
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
     * Specifies the attributes to be passed on to the underlying HTML element.
     */
    inputAttr: any;
    /**
     * Specifies whether the editor's value is valid.
     */
    isValid: boolean;
    /**
     * The editor mask that specifies the format of the entered string.
     */
    mask: string;
    /**
     * Specifies a mask placeholder character.
     */
    maskChar: string;
    /**
     * A message displayed when the entered text does not match the specified pattern.
     */
    maskInvalidMessage: string;
    /**
     * Specifies custom mask rules.
     */
    maskRules: any;
    /**
     * Specifies the maximum number of characters you can enter into the textbox.
     */
    maxLength: number | string;
    /**
     * The "mode" attribute value of the actual HTML input element representing the text box.
     */
    mode: string;
    /**
     * The value to be assigned to the `name` attribute of the underlying HTML element.
     */
    name: string;
    /**
     * The text displayed by the widget when the widget value is empty.
     */
    placeholder: string;
    /**
     * A Boolean value specifying whether or not the widget is read-only.
     */
    readOnly: boolean;
    /**
     * Switches the widget to a right-to-left representation.
     */
    rtlEnabled: boolean;
    /**
     * Specifies whether to display the Clear button in the widget.
     */
    showClearButton: boolean;
    /**
     * Specifies when the widget shows the mask. Applies only if useMaskedValue is true.
     */
    showMaskMode: string;
    /**
     * Specifies whether or not the widget checks the inner text for spelling mistakes.
     */
    spellcheck: boolean;
    /**
     * Specifies the number of the element when the Tab key is used for navigating.
     */
    tabIndex: number;
    /**
     * The read-only option that holds the text displayed by the widget input element.
     */
    text: string;
    /**
     * Specifies whether the value should contain mask characters or not.
     */
    useMaskedValue: boolean;
    /**
     * Specifies information on the validation error when using a custom validation engine. Should be changed at runtime along with the isValid option.
     */
    validationError: any;
    /**
     * Specifies how the message about the validation rules that are not satisfied by this editor's value is displayed.
     */
    validationMessageMode: string;
    /**
     * Specifies a value the widget displays.
     */
    value: string;
    /**
     * Specifies DOM event names that update a widget's value.
     */
    valueChangeEvent: string;
    /**
     * Specifies whether the widget is visible.
     */
    visible: boolean;
    /**
     * Specifies the widget's width.
     */
    width: number | Function | string;
    /**
     * A handler for the change event.
     */
    onChange: EventEmitter<any>;
    /**
     * A handler for the contentReady event. Executed when the widget's content is ready. This handler may be executed multiple times during the widget's lifetime depending on the number of times its content changes.
     */
    onContentReady: EventEmitter<any>;
    /**
     * A handler for the copy event.
     */
    onCopy: EventEmitter<any>;
    /**
     * A handler for the cut event.
     */
    onCut: EventEmitter<any>;
    /**
     * A handler for the disposing event. Executed when the widget is removed from the DOM using the remove(), empty(), or html() jQuery methods only.
     */
    onDisposing: EventEmitter<any>;
    /**
     * A handler for the enterKey event.
     */
    onEnterKey: EventEmitter<any>;
    /**
     * A handler for the focusIn event.
     */
    onFocusIn: EventEmitter<any>;
    /**
     * A handler for the focusOut event.
     */
    onFocusOut: EventEmitter<any>;
    /**
     * A handler for the initialized event. Executed only once, after the widget is initialized.
     */
    onInitialized: EventEmitter<any>;
    /**
     * A handler for the input event.
     */
    onInput: EventEmitter<any>;
    /**
     * A handler for the keyDown event.
     */
    onKeyDown: EventEmitter<any>;
    /**
     * A handler for the keyPress event.
     */
    onKeyPress: EventEmitter<any>;
    /**
     * A handler for the keyUp event.
     */
    onKeyUp: EventEmitter<any>;
    /**
     * A handler for the optionChanged event. Executed after an option of the widget is changed.
     */
    onOptionChanged: EventEmitter<any>;
    /**
     * A handler for the paste event.
     */
    onPaste: EventEmitter<any>;
    /**
     * A handler for the valueChanged event.
     */
    onValueChanged: EventEmitter<any>;
    /**
     * A handler for the accessKeyChange event.
     */
    accessKeyChange: EventEmitter<string>;
    /**
     * A handler for the activeStateEnabledChange event.
     */
    activeStateEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the attrChange event.
     */
    attrChange: EventEmitter<any>;
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
     * A handler for the inputAttrChange event.
     */
    inputAttrChange: EventEmitter<any>;
    /**
     * A handler for the isValidChange event.
     */
    isValidChange: EventEmitter<boolean>;
    /**
     * A handler for the maskChange event.
     */
    maskChange: EventEmitter<string>;
    /**
     * A handler for the maskCharChange event.
     */
    maskCharChange: EventEmitter<string>;
    /**
     * A handler for the maskInvalidMessageChange event.
     */
    maskInvalidMessageChange: EventEmitter<string>;
    /**
     * A handler for the maskRulesChange event.
     */
    maskRulesChange: EventEmitter<any>;
    /**
     * A handler for the maxLengthChange event.
     */
    maxLengthChange: EventEmitter<number | string>;
    /**
     * A handler for the modeChange event.
     */
    modeChange: EventEmitter<string>;
    /**
     * A handler for the nameChange event.
     */
    nameChange: EventEmitter<string>;
    /**
     * A handler for the placeholderChange event.
     */
    placeholderChange: EventEmitter<string>;
    /**
     * A handler for the readOnlyChange event.
     */
    readOnlyChange: EventEmitter<boolean>;
    /**
     * A handler for the rtlEnabledChange event.
     */
    rtlEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the showClearButtonChange event.
     */
    showClearButtonChange: EventEmitter<boolean>;
    /**
     * A handler for the showMaskModeChange event.
     */
    showMaskModeChange: EventEmitter<string>;
    /**
     * A handler for the spellcheckChange event.
     */
    spellcheckChange: EventEmitter<boolean>;
    /**
     * A handler for the tabIndexChange event.
     */
    tabIndexChange: EventEmitter<number>;
    /**
     * A handler for the textChange event.
     */
    textChange: EventEmitter<string>;
    /**
     * A handler for the useMaskedValueChange event.
     */
    useMaskedValueChange: EventEmitter<boolean>;
    /**
     * A handler for the validationErrorChange event.
     */
    validationErrorChange: EventEmitter<any>;
    /**
     * A handler for the validationMessageModeChange event.
     */
    validationMessageModeChange: EventEmitter<string>;
    /**
     * A handler for the valueChange event.
     */
    valueChange: EventEmitter<string>;
    /**
     * A handler for the valueChangeEventChange event.
     */
    valueChangeEventChange: EventEmitter<string>;
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
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, optionHost: NestedOptionHost);
    protected _createInstance(element: any, options: any): DxTextBox;
    writeValue(value: any): void;
    setDisabledState(isDisabled: boolean): void;
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: () => void): void;
    _createWidget(element: any): void;
    ngOnDestroy(): void;
    ngAfterContentInit(): void;
}
export declare class DxTextBoxModule {
}
