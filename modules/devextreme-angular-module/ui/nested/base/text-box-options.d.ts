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
import { NestedOption } from '../../../core/nested-option';
export declare abstract class DxoTextBoxOptions extends NestedOption {
    accessKey: string;
    activeStateEnabled: boolean;
    attr: any;
    disabled: boolean;
    elementAttr: any;
    focusStateEnabled: boolean;
    height: number | Function | string;
    hint: string;
    hoverStateEnabled: boolean;
    inputAttr: any;
    isValid: boolean;
    mask: string;
    maskChar: string;
    maskInvalidMessage: string;
    maskRules: any;
    maxLength: number | string;
    mode: string;
    name: string;
    onChange: Function;
    onContentReady: Function;
    onCopy: Function;
    onCut: Function;
    onDisposing: Function;
    onEnterKey: Function;
    onFocusIn: Function;
    onFocusOut: Function;
    onInitialized: Function;
    onInput: Function;
    onKeyDown: Function;
    onKeyPress: Function;
    onKeyUp: Function;
    onOptionChanged: Function;
    onPaste: Function;
    onValueChanged: Function;
    placeholder: string;
    readOnly: boolean;
    rtlEnabled: boolean;
    showClearButton: boolean;
    showMaskMode: string;
    spellcheck: boolean;
    tabIndex: number;
    text: string;
    useMaskedValue: boolean;
    validationError: any;
    validationMessageMode: string;
    value: string;
    valueChangeEvent: string;
    visible: boolean;
    width: number | Function | string;
}
