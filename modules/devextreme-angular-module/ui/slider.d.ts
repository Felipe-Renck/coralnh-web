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
import DxSlider from 'devextreme/ui/slider';
import { DxValidatorComponent } from './validator';
import { ControlValueAccessor } from '@angular/forms';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
/**
 * The Slider is a widget that allows an end user to set a numeric value on a continuous range of possible values.
 */
export declare class DxSliderComponent extends DxComponent implements OnDestroy, AfterContentInit, ControlValueAccessor {
    instance: DxSlider;
    validator: DxValidatorComponent;
    /**
     * Specifies the shortcut key that sets focus on the widget.
     */
    accessKey: string;
    /**
     * Specifies whether or not the widget changes its state when interacting with a user.
     */
    activeStateEnabled: boolean;
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
     * Specifies the step by which a handle moves when a user presses Page Up or Page Down.
     */
    keyStep: number;
    /**
     * Configures the labels displayed at the min and max values.
     */
    label: any;
    /**
     * The maximum value the widget can accept.
     */
    max: number;
    /**
     * The minimum value the widget can accept.
     */
    min: number;
    /**
     * The value to be assigned to the `name` attribute of the underlying HTML element.
     */
    name: string;
    /**
     * A Boolean value specifying whether or not the widget is read-only.
     */
    readOnly: boolean;
    /**
     * Switches the widget to a right-to-left representation.
     */
    rtlEnabled: boolean;
    /**
     * Specifies whether to highlight the selected range.
     */
    showRange: boolean;
    /**
     * Specifies the step by which the widget's value changes when a user drags a handler.
     */
    step: number;
    /**
     * Specifies the number of the element when the Tab key is used for navigating.
     */
    tabIndex: number;
    /**
     * Configures a tooltip.
     */
    tooltip: any;
    /**
     * Specifies information on the validation error when using a custom validation engine. Should be changed at runtime along with the isValid option.
     */
    validationError: any;
    /**
     * Specifies how the message about the validation rules that are not satisfied by this editor's value is displayed.
     */
    validationMessageMode: string;
    /**
     * The current slider value.
     */
    value: number;
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
     * A handler for the keyStepChange event.
     */
    keyStepChange: EventEmitter<number>;
    /**
     * A handler for the labelChange event.
     */
    labelChange: EventEmitter<any>;
    /**
     * A handler for the maxChange event.
     */
    maxChange: EventEmitter<number>;
    /**
     * A handler for the minChange event.
     */
    minChange: EventEmitter<number>;
    /**
     * A handler for the nameChange event.
     */
    nameChange: EventEmitter<string>;
    /**
     * A handler for the readOnlyChange event.
     */
    readOnlyChange: EventEmitter<boolean>;
    /**
     * A handler for the rtlEnabledChange event.
     */
    rtlEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the showRangeChange event.
     */
    showRangeChange: EventEmitter<boolean>;
    /**
     * A handler for the stepChange event.
     */
    stepChange: EventEmitter<number>;
    /**
     * A handler for the tabIndexChange event.
     */
    tabIndexChange: EventEmitter<number>;
    /**
     * A handler for the tooltipChange event.
     */
    tooltipChange: EventEmitter<any>;
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
    valueChange: EventEmitter<number>;
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
    protected _createInstance(element: any, options: any): DxSlider;
    writeValue(value: any): void;
    setDisabledState(isDisabled: boolean): void;
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: () => void): void;
    _createWidget(element: any): void;
    ngOnDestroy(): void;
    ngAfterContentInit(): void;
}
export declare class DxSliderModule {
}
