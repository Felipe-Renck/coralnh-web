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
import { ElementRef, NgZone, OnDestroy, EventEmitter, AfterContentInit, OnChanges, DoCheck, SimpleChanges, QueryList } from '@angular/core';
import DevExpress from 'devextreme/bundles/dx.all';
import DxTagBox from 'devextreme/ui/tag_box';
import { DxValidatorComponent } from './validator';
import { ControlValueAccessor } from '@angular/forms';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
import { DxiItemComponent } from './nested/item-dxi';
/**
 * The TagBox widget is an editor that allows an end user to select multiple items from a drop-down list.
 */
export declare class DxTagBoxComponent extends DxComponent implements OnDestroy, AfterContentInit, ControlValueAccessor, OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxTagBox;
    validator: DxValidatorComponent;
    /**
     * Specifies whether the widget allows a user to enter a custom value. Requires the onCustomItemCreating handler implementation.
     */
    acceptCustomValue: boolean;
    /**
     * Specifies the shortcut key that sets focus on the widget.
     */
    accessKey: string;
    /**
     * Specifies whether or not the widget changes its state when interacting with a user.
     */
    activeStateEnabled: boolean;
    /**
     * Specifies how the widget applies values.
     */
    applyValueMode: string;
    attr: any;
    /**
     * A data source used to fetch data to be displayed by the widget.
     */
    dataSource: DevExpress.data.DataSource | DevExpress.data.DataSourceOptions | string | Array<any>;
    /**
     * Specifies whether widget content is rendered when the widget is shown or when rendering the widget.
     */
    deferRendering: boolean;
    /**
     * Specifies whether the widget responds to user interaction.
     */
    disabled: boolean;
    /**
     * Specifies the name of the data source item field whose value is displayed by the widget.
     */
    displayExpr: Function | string;
    /**
     * Specifies a custom template for the drop-down button.
     */
    dropDownButtonTemplate: any;
    /**
     * Specifies the attributes to be attached to the widget's root element.
     */
    elementAttr: any;
    fieldEditEnabled: any;
    /**
     * Specifies a custom template for the text field. Must contain the TextBox widget.
     */
    fieldTemplate: any;
    /**
     * Specifies whether the widget can be focused using keyboard navigation.
     */
    focusStateEnabled: boolean;
    /**
     * Specifies whether data items should be grouped.
     */
    grouped: boolean;
    /**
     * Specifies a custom template for group captions.
     */
    groupTemplate: any;
    /**
     * Specifies the widget's height.
     */
    height: number | Function | string;
    /**
     * A Boolean value specifying whether or not to hide selected items.
     */
    hideSelectedItems: boolean;
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
     * An array of items displayed by the widget.
     */
    items: Array<any | {
        disabled?: boolean;
        html?: string;
        template?: any;
        text?: string;
        visible?: boolean;
    }>;
    /**
     * Specifies a custom template for items.
     */
    itemTemplate: any;
    /**
     * Specifies the limit on displayed tags. On exceeding it, the widget replaces all tags with a single multi-tag that displays the number of selected items.
     */
    maxDisplayedTags: number;
    /**
     * The minimum number of characters that must be entered into the text box to begin a search. Applies only if searchEnabled is true.
     */
    minSearchLength: number;
    /**
     * A Boolean value specifying whether or not the widget is multiline.
     */
    multiline: boolean;
    /**
     * The value to be assigned to the `name` attribute of the underlying HTML element.
     */
    name: string;
    /**
     * The text or HTML markup displayed by the widget if the item collection is empty.
     */
    noDataText: string;
    /**
     * Specifies whether or not the drop-down editor is displayed.
     */
    opened: boolean;
    /**
     * Use the DataSource paging opportunities instead.
     */
    pagingEnabled: boolean;
    /**
     * The text that is provided as a hint in the select box editor.
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
     * Specifies whether to allow searching.
     */
    searchEnabled: boolean;
    /**
     * Specifies the name of a data source item field or an expression whose value is compared to the search criterion.
     */
    searchExpr: Function | Array<Function>;
    /**
     * Specifies the binary operation used to filter data.
     */
    searchMode: string;
    /**
     * Specifies the time delay, in milliseconds, after the last character has been typed in, before a search is executed.
     */
    searchTimeout: number;
    /**
     * Specifies the mode in which all items are selected.
     */
    selectAllMode: string;
    /**
     * Gets the currently selected items.
     */
    selectedItems: Array<string | number | any>;
    /**
     * Specifies whether to display the Clear button in the widget.
     */
    showClearButton: boolean;
    /**
     * Specifies whether or not the widget displays unfiltered values until a user types a number of characters exceeding the minSearchLength option value.
     */
    showDataBeforeSearch: boolean;
    /**
     * Specifies whether the multi-tag is shown without ordinary tags.
     */
    showMultiTagOnly: boolean;
    /**
     * Specifies whether or not to display selection controls.
     */
    showSelectionControls: boolean;
    /**
     * Specifies the number of the element when the Tab key is used for navigating.
     */
    tabIndex: number;
    /**
     * Specifies a custom template for tags.
     */
    tagTemplate: any;
    /**
     * The read-only option that holds the text displayed by the widget input element.
     */
    text: string;
    /**
     * Specifies information on the validation error when using a custom validation engine. Should be changed at runtime along with the isValid option.
     */
    validationError: any;
    /**
     * Specifies how the message about the validation rules that are not satisfied by this editor's value is displayed.
     */
    validationMessageMode: string;
    /**
     * Specifies the selected items.
     */
    value: Array<string | number | any>;
    /**
     * Specifies which data field provides the widget's value. When this option is not set, the value is the entire data object.
     */
    valueExpr: Function | string;
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
     * A handler for the change event.
     */
    onChange: EventEmitter<any>;
    /**
     * A handler for the closed event.
     */
    onClosed: EventEmitter<any>;
    /**
     * A handler for the contentReady event. Executed when the widget's content is ready. This handler may be executed multiple times during the widget's lifetime depending on the number of times its content changes.
     */
    onContentReady: EventEmitter<any>;
    /**
     * A handler for the customItemCreating event. Executed when a user adds a custom item. Requires acceptCustomValue to be set to true.
     */
    onCustomItemCreating: EventEmitter<any>;
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
     * A handler for the itemClick event.
     */
    onItemClick: EventEmitter<any>;
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
     * A handler for the multiTagPreparing event. Executed before the multi-tag is rendered.
     */
    onMultiTagPreparing: EventEmitter<any>;
    /**
     * A handler for the opened event.
     */
    onOpened: EventEmitter<any>;
    /**
     * A handler for the optionChanged event. Executed after an option of the widget is changed.
     */
    onOptionChanged: EventEmitter<any>;
    /**
     * A handler for the selectAllValueChanged event.
     */
    onSelectAllValueChanged: EventEmitter<any>;
    /**
     * A handler for the selectionChanged event.
     */
    onSelectionChanged: EventEmitter<any>;
    /**
     * A handler for the valueChanged event.
     */
    onValueChanged: EventEmitter<any>;
    /**
     * A handler for the acceptCustomValueChange event.
     */
    acceptCustomValueChange: EventEmitter<boolean>;
    /**
     * A handler for the accessKeyChange event.
     */
    accessKeyChange: EventEmitter<string>;
    /**
     * A handler for the activeStateEnabledChange event.
     */
    activeStateEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the applyValueModeChange event.
     */
    applyValueModeChange: EventEmitter<string>;
    /**
     * A handler for the attrChange event.
     */
    attrChange: EventEmitter<any>;
    /**
     * A handler for the dataSourceChange event.
     */
    dataSourceChange: EventEmitter<DevExpress.data.DataSource | DevExpress.data.DataSourceOptions | string | Array<any>>;
    /**
     * A handler for the deferRenderingChange event.
     */
    deferRenderingChange: EventEmitter<boolean>;
    /**
     * A handler for the disabledChange event.
     */
    disabledChange: EventEmitter<boolean>;
    /**
     * A handler for the displayExprChange event.
     */
    displayExprChange: EventEmitter<Function | string>;
    /**
     * A handler for the dropDownButtonTemplateChange event.
     */
    dropDownButtonTemplateChange: EventEmitter<any>;
    /**
     * A handler for the elementAttrChange event.
     */
    elementAttrChange: EventEmitter<any>;
    /**
     * A handler for the fieldEditEnabledChange event.
     */
    fieldEditEnabledChange: EventEmitter<any>;
    /**
     * A handler for the fieldTemplateChange event.
     */
    fieldTemplateChange: EventEmitter<any>;
    /**
     * A handler for the focusStateEnabledChange event.
     */
    focusStateEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the groupedChange event.
     */
    groupedChange: EventEmitter<boolean>;
    /**
     * A handler for the groupTemplateChange event.
     */
    groupTemplateChange: EventEmitter<any>;
    /**
     * A handler for the heightChange event.
     */
    heightChange: EventEmitter<number | Function | string>;
    /**
     * A handler for the hideSelectedItemsChange event.
     */
    hideSelectedItemsChange: EventEmitter<boolean>;
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
     * A handler for the itemsChange event.
     */
    itemsChange: EventEmitter<Array<any | {
        disabled?: boolean;
        html?: string;
        template?: any;
        text?: string;
        visible?: boolean;
    }>>;
    /**
     * A handler for the itemTemplateChange event.
     */
    itemTemplateChange: EventEmitter<any>;
    /**
     * A handler for the maxDisplayedTagsChange event.
     */
    maxDisplayedTagsChange: EventEmitter<number>;
    /**
     * A handler for the minSearchLengthChange event.
     */
    minSearchLengthChange: EventEmitter<number>;
    /**
     * A handler for the multilineChange event.
     */
    multilineChange: EventEmitter<boolean>;
    /**
     * A handler for the nameChange event.
     */
    nameChange: EventEmitter<string>;
    /**
     * A handler for the noDataTextChange event.
     */
    noDataTextChange: EventEmitter<string>;
    /**
     * A handler for the openedChange event.
     */
    openedChange: EventEmitter<boolean>;
    /**
     * A handler for the pagingEnabledChange event.
     */
    pagingEnabledChange: EventEmitter<boolean>;
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
     * A handler for the searchEnabledChange event.
     */
    searchEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the searchExprChange event.
     */
    searchExprChange: EventEmitter<Function | Array<Function>>;
    /**
     * A handler for the searchModeChange event.
     */
    searchModeChange: EventEmitter<string>;
    /**
     * A handler for the searchTimeoutChange event.
     */
    searchTimeoutChange: EventEmitter<number>;
    /**
     * A handler for the selectAllModeChange event.
     */
    selectAllModeChange: EventEmitter<string>;
    /**
     * A handler for the selectedItemsChange event.
     */
    selectedItemsChange: EventEmitter<Array<string | number | any>>;
    /**
     * A handler for the showClearButtonChange event.
     */
    showClearButtonChange: EventEmitter<boolean>;
    /**
     * A handler for the showDataBeforeSearchChange event.
     */
    showDataBeforeSearchChange: EventEmitter<boolean>;
    /**
     * A handler for the showMultiTagOnlyChange event.
     */
    showMultiTagOnlyChange: EventEmitter<boolean>;
    /**
     * A handler for the showSelectionControlsChange event.
     */
    showSelectionControlsChange: EventEmitter<boolean>;
    /**
     * A handler for the tabIndexChange event.
     */
    tabIndexChange: EventEmitter<number>;
    /**
     * A handler for the tagTemplateChange event.
     */
    tagTemplateChange: EventEmitter<any>;
    /**
     * A handler for the textChange event.
     */
    textChange: EventEmitter<string>;
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
    valueChange: EventEmitter<Array<string | number | any>>;
    /**
     * A handler for the valueExprChange event.
     */
    valueExprChange: EventEmitter<Function | string>;
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
    itemsChildren: QueryList<DxiItemComponent>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper, optionHost: NestedOptionHost);
    protected _createInstance(element: any, options: any): DxTagBox;
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
export declare class DxTagBoxModule {
}
