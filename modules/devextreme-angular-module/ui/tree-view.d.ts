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
import { ElementRef, NgZone, OnDestroy, EventEmitter, OnChanges, DoCheck, SimpleChanges, QueryList } from '@angular/core';
import DevExpress from 'devextreme/bundles/dx.all';
import DxTreeView from 'devextreme/ui/tree_view';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
import { DxiItemComponent } from './nested/item-dxi';
/**
 * The TreeView widget is a tree-like representation of textual data.
 */
export declare class DxTreeViewComponent extends DxComponent implements OnDestroy, OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxTreeView;
    /**
     * Specifies the shortcut key that sets focus on the widget.
     */
    accessKey: string;
    /**
     * Specifies whether or not the widget changes its state when interacting with a user.
     */
    activeStateEnabled: boolean;
    /**
     * Specifies whether or not to animate item collapsing and expanding.
     */
    animationEnabled: boolean;
    /**
     * Allows you to load nodes manually.
     */
    createChildren: Function;
    /**
     * A data source used to fetch data to be displayed by the widget.
     */
    dataSource: DevExpress.data.DataSource | DevExpress.data.DataSourceOptions | string | Array<string | DevExpress.ui.CollectionWidgetItemTemplate>;
    /**
     * Specifies whether a nested or plain array is used as a data source.
     */
    dataStructure: string;
    /**
     * Specifies whether the widget responds to user interaction.
     */
    disabled: boolean;
    /**
     * Specifies the name of the data source item field whose value defines whether or not the corresponding widget item is disabled.
     */
    disabledExpr: Function | string;
    /**
     * Specifies the name of the data source item field whose value is displayed by the widget.
     */
    displayExpr: Function | string;
    /**
     * Specifies the attributes to be attached to the widget's root element.
     */
    elementAttr: any;
    /**
     * Specifies whether or not a user can expand all tree view items by the "*" hot key.
     */
    expandAllEnabled: boolean;
    /**
     * Specifies the name of the data source item field whose value defines whether or not the corresponding widget item is displayed expanded.
     */
    expandedExpr: Function | string;
    /**
     * Specifies whether or not all parent nodes of an initially expanded node are displayed expanded.
     */
    expandNodesRecursive: boolean;
    /**
     * Specifies whether the widget can be focused using keyboard navigation.
     */
    focusStateEnabled: boolean;
    /**
     * Specifies the name of the data source item field whose value defines whether or not the corresponding node includes child nodes.
     */
    hasItemsExpr: Function | string;
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
     * The time period in milliseconds before the onItemHold event is raised.
     */
    itemHoldTimeout: number;
    items: any | Array<any>;
    /**
     * Specifies which data field contains nested items.
     */
    itemsExpr: Function | string;
    /**
     * Specifies a custom template for items.
     */
    itemTemplate: any;
    /**
     * Specifies which data field provides keys for TreeView items.
     */
    keyExpr: Function | string;
    /**
     * The text or HTML markup displayed by the widget if the item collection is empty.
     */
    noDataText: string;
    /**
     * Specifies the name of the data source item field for holding the parent key of the corresponding node.
     */
    parentIdExpr: Function | string;
    /**
     * Specifies the parent ID value of the root item.
     */
    rootValue: any;
    /**
     * Switches the widget to a right-to-left representation.
     */
    rtlEnabled: boolean;
    /**
     * A string value specifying available scrolling directions.
     */
    scrollDirection: string;
    /**
     * Configures the search panel.
     */
    searchEditorOptions: DevExpress.ui.dxTextBoxOptions;
    /**
     * Specifies whether the search panel is visible.
     */
    searchEnabled: boolean;
    /**
     * Specifies a data object's field name or an expression whose value is compared to the search string.
     */
    searchExpr: Function | Array<Function>;
    /**
     * Specifies whether the widget finds entries that contain your search string or entries that only start with it.
     */
    searchMode: string;
    /**
     * Specifies a delay in milliseconds between when a user finishes typing, and the search is executed.
     */
    searchTimeout: number;
    /**
     * Specifies the current search string.
     */
    searchValue: string;
    /**
     * Use the showCheckBoxesMode options instead.
     */
    selectAllEnabled: boolean;
    /**
     * Specifies the text displayed at the "Select All" check box.
     */
    selectAllText: string;
    /**
     * Specifies whether or not an item becomes selected if a user clicks it.
     */
    selectByClick: boolean;
    /**
     * Specifies the name of the data source item field whose value defines whether or not the corresponding widget items is selected.
     */
    selectedExpr: Function | string;
    /**
     * Specifies item selection mode.
     */
    selectionMode: string;
    /**
     * Specifies whether or not to select nodes recursively.
     */
    selectNodesRecursive: boolean;
    /**
     * Use the showCheckBoxesMode options instead.
     */
    showCheckBoxes: boolean;
    /**
     * Specifies the current check boxes display mode.
     */
    showCheckBoxesMode: string;
    /**
     * Specifies the number of the element when the Tab key is used for navigating.
     */
    tabIndex: number;
    /**
     * Specifies if the virtual mode is enabled.
     */
    virtualModeEnabled: boolean;
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
     * A handler for the itemClick event.
     */
    onItemClick: EventEmitter<any>;
    /**
     * A handler for the itemCollapsed event.
     */
    onItemCollapsed: EventEmitter<any>;
    /**
     * A handler for the itemContextMenu event.
     */
    onItemContextMenu: EventEmitter<any>;
    /**
     * A handler for the itemExpanded event.
     */
    onItemExpanded: EventEmitter<any>;
    /**
     * A handler for the itemHold event.
     */
    onItemHold: EventEmitter<any>;
    /**
     * A handler for the itemRendered event.
     */
    onItemRendered: EventEmitter<any>;
    /**
     * Use the itemSelectionChanged event instead.
     */
    onItemSelected: EventEmitter<any>;
    /**
     * A handler for the itemSelectionChanged event.
     */
    onItemSelectionChanged: EventEmitter<any>;
    /**
     * A handler for the optionChanged event. Executed after an option of the widget is changed.
     */
    onOptionChanged: EventEmitter<any>;
    /**
     * A handler for the selectionChanged event. Raised after an item is selected or unselected.
     */
    onSelectionChanged: EventEmitter<any>;
    /**
     * A handler for the accessKeyChange event.
     */
    accessKeyChange: EventEmitter<string>;
    /**
     * A handler for the activeStateEnabledChange event.
     */
    activeStateEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the animationEnabledChange event.
     */
    animationEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the createChildrenChange event.
     */
    createChildrenChange: EventEmitter<Function>;
    /**
     * A handler for the dataSourceChange event.
     */
    dataSourceChange: EventEmitter<DevExpress.data.DataSource | DevExpress.data.DataSourceOptions | string | Array<string | DevExpress.ui.CollectionWidgetItemTemplate>>;
    /**
     * A handler for the dataStructureChange event.
     */
    dataStructureChange: EventEmitter<string>;
    /**
     * A handler for the disabledChange event.
     */
    disabledChange: EventEmitter<boolean>;
    /**
     * A handler for the disabledExprChange event.
     */
    disabledExprChange: EventEmitter<Function | string>;
    /**
     * A handler for the displayExprChange event.
     */
    displayExprChange: EventEmitter<Function | string>;
    /**
     * A handler for the elementAttrChange event.
     */
    elementAttrChange: EventEmitter<any>;
    /**
     * A handler for the expandAllEnabledChange event.
     */
    expandAllEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the expandedExprChange event.
     */
    expandedExprChange: EventEmitter<Function | string>;
    /**
     * A handler for the expandNodesRecursiveChange event.
     */
    expandNodesRecursiveChange: EventEmitter<boolean>;
    /**
     * A handler for the focusStateEnabledChange event.
     */
    focusStateEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the hasItemsExprChange event.
     */
    hasItemsExprChange: EventEmitter<Function | string>;
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
     * A handler for the itemHoldTimeoutChange event.
     */
    itemHoldTimeoutChange: EventEmitter<number>;
    /**
     * A handler for the itemsChange event.
     */
    itemsChange: EventEmitter<any | Array<any>>;
    /**
     * A handler for the itemsExprChange event.
     */
    itemsExprChange: EventEmitter<Function | string>;
    /**
     * A handler for the itemTemplateChange event.
     */
    itemTemplateChange: EventEmitter<any>;
    /**
     * A handler for the keyExprChange event.
     */
    keyExprChange: EventEmitter<Function | string>;
    /**
     * A handler for the noDataTextChange event.
     */
    noDataTextChange: EventEmitter<string>;
    /**
     * A handler for the parentIdExprChange event.
     */
    parentIdExprChange: EventEmitter<Function | string>;
    /**
     * A handler for the rootValueChange event.
     */
    rootValueChange: EventEmitter<any>;
    /**
     * A handler for the rtlEnabledChange event.
     */
    rtlEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the scrollDirectionChange event.
     */
    scrollDirectionChange: EventEmitter<string>;
    /**
     * A handler for the searchEditorOptionsChange event.
     */
    searchEditorOptionsChange: EventEmitter<DevExpress.ui.dxTextBoxOptions>;
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
     * A handler for the searchValueChange event.
     */
    searchValueChange: EventEmitter<string>;
    /**
     * A handler for the selectAllEnabledChange event.
     */
    selectAllEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the selectAllTextChange event.
     */
    selectAllTextChange: EventEmitter<string>;
    /**
     * A handler for the selectByClickChange event.
     */
    selectByClickChange: EventEmitter<boolean>;
    /**
     * A handler for the selectedExprChange event.
     */
    selectedExprChange: EventEmitter<Function | string>;
    /**
     * A handler for the selectionModeChange event.
     */
    selectionModeChange: EventEmitter<string>;
    /**
     * A handler for the selectNodesRecursiveChange event.
     */
    selectNodesRecursiveChange: EventEmitter<boolean>;
    /**
     * A handler for the showCheckBoxesChange event.
     */
    showCheckBoxesChange: EventEmitter<boolean>;
    /**
     * A handler for the showCheckBoxesModeChange event.
     */
    showCheckBoxesModeChange: EventEmitter<string>;
    /**
     * A handler for the tabIndexChange event.
     */
    tabIndexChange: EventEmitter<number>;
    /**
     * A handler for the virtualModeEnabledChange event.
     */
    virtualModeEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the visibleChange event.
     */
    visibleChange: EventEmitter<boolean>;
    /**
     * A handler for the widthChange event.
     */
    widthChange: EventEmitter<number | Function | string>;
    itemsChildren: QueryList<DxiItemComponent>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper, optionHost: NestedOptionHost);
    protected _createInstance(element: any, options: any): DxTreeView;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    setupChanges(prop: string, changes: SimpleChanges): void;
    ngDoCheck(): void;
    _setOption(name: string, value: any): void;
}
export declare class DxTreeViewModule {
}
