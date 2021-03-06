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
import DxList from 'devextreme/ui/list';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
import { DxiItemComponent } from './nested/item-dxi';
import { DxiMenuItemComponent } from './nested/menu-item-dxi';
/**
 * The List is a widget that represents a collection of items in a scrollable list.
 */
export declare class DxListComponent extends DxComponent implements OnDestroy, OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxList;
    /**
     * Specifies the shortcut key that sets focus on the widget.
     */
    accessKey: string;
    /**
     * Specifies whether or not the widget changes its state when interacting with a user.
     */
    activeStateEnabled: boolean;
    /**
     * Specifies whether or not an end user can delete list items.
     */
    allowItemDeleting: boolean;
    /**
     * Specifies whether or not an end user can reorder list items.
     */
    allowItemReordering: boolean;
    autoPagingEnabled: any;
    /**
     * A Boolean value specifying whether to enable or disable the bounce-back effect.
     */
    bounceEnabled: boolean;
    /**
     * Specifies whether or not an end-user can collapse groups.
     */
    collapsibleGroups: boolean;
    /**
     * A data source used to fetch data to be displayed by the widget.
     */
    dataSource: DevExpress.data.DataSource | DevExpress.data.DataSourceOptions | string | Array<string | DevExpress.ui.CollectionWidgetItemTemplate>;
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
     * Specifies text for a hint that appears when a user pauses on the widget.
     */
    hint: string;
    /**
     * Specifies whether the widget changes its state when a user pauses on it.
     */
    hoverStateEnabled: boolean;
    /**
     * Specifies whether or not to show the loading panel when the DataSource bound to the widget is loading data.
     */
    indicateLoading: boolean;
    /**
     * Specifies the way a user can delete items from the list.
     */
    itemDeleteMode: string;
    /**
     * The time period in milliseconds before the onItemHold event is raised.
     */
    itemHoldTimeout: number;
    /**
     * An array of items displayed by the widget.
     */
    items: Array<string | any | {
        badge?: string;
        disabled?: boolean;
        html?: string;
        key?: string;
        showChevron?: boolean;
        template?: any;
        text?: string;
        visible?: boolean;
    }>;
    /**
     * Specifies a custom template for items.
     */
    itemTemplate: any;
    /**
     * Specifies which data field provides keys for widget items.
     */
    keyExpr: Function | string;
    /**
     * Specifies the array of items for a context menu called for a list item.
     */
    menuItems: Array<any | {
        action?: Function;
        text?: string;
    }>;
    /**
     * Specifies whether an item context menu is shown when a user holds or swipes an item.
     */
    menuMode: string;
    /**
     * The text displayed on the button used to load the next page from the data source.
     */
    nextButtonText: string;
    /**
     * The text or HTML markup displayed by the widget if the item collection is empty.
     */
    noDataText: string;
    /**
     * Specifies the text shown in the pullDown panel, which is displayed when the list is scrolled to the bottom.
     */
    pageLoadingText: string;
    /**
     * Specifies whether the next page is loaded when a user scrolls the widget to the bottom or when the "next" button is clicked.
     */
    pageLoadMode: string;
    /**
     * Specifies the text displayed in the pullDown panel when the list is pulled below the refresh threshold.
     */
    pulledDownText: string;
    /**
     * Specifies the text shown in the pullDown panel while the list is being pulled down to the refresh threshold.
     */
    pullingDownText: string;
    /**
     * A Boolean value specifying whether or not the widget supports the "pull down to refresh" gesture.
     */
    pullRefreshEnabled: boolean;
    /**
     * Specifies the text displayed in the pullDown panel while the list is being refreshed.
     */
    refreshingText: string;
    /**
     * Switches the widget to a right-to-left representation.
     */
    rtlEnabled: boolean;
    /**
     * A Boolean value specifying if the list is scrolled by content.
     */
    scrollByContent: boolean;
    /**
     * A Boolean value specifying if the list is scrolled using the scrollbar.
     */
    scrollByThumb: boolean;
    /**
     * A Boolean value specifying whether to enable or disable list scrolling.
     */
    scrollingEnabled: boolean;
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
     * Specifies the mode in which all items are selected.
     */
    selectAllMode: string;
    /**
     * Specifies an array of currently selected item keys.
     */
    selectedItemKeys: Array<any>;
    /**
     * An array of currently selected item objects.
     */
    selectedItems: Array<any>;
    /**
     * Specifies item selection mode.
     */
    selectionMode: string;
    showNextButton: any;
    /**
     * Specifies when the widget shows the scrollbar.
     */
    showScrollbar: string;
    /**
     * Specifies whether or not to display controls used to select list items.
     */
    showSelectionControls: boolean;
    /**
     * Specifies the number of the element when the Tab key is used for navigating.
     */
    tabIndex: number;
    /**
     * Specifies whether or not the widget uses native scrolling.
     */
    useNativeScrolling: boolean;
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
     * A handler for the groupRendered event.
     */
    onGroupRendered: EventEmitter<any>;
    /**
     * A handler for the initialized event. Executed only once, after the widget is initialized.
     */
    onInitialized: EventEmitter<any>;
    /**
     * A handler for the itemClick event.
     */
    onItemClick: EventEmitter<any>;
    /**
     * A handler for the itemContextMenu event.
     */
    onItemContextMenu: EventEmitter<any>;
    /**
     * A handler for the itemDeleted event.
     */
    onItemDeleted: EventEmitter<any>;
    /**
     * A handler for the itemDeleting event. Executed before an item is deleted from the data source.
     */
    onItemDeleting: EventEmitter<any>;
    /**
     * A handler for the itemHold event.
     */
    onItemHold: EventEmitter<any>;
    /**
     * A handler for the itemRendered event.
     */
    onItemRendered: EventEmitter<any>;
    /**
     * A handler for the itemReordered event.
     */
    onItemReordered: EventEmitter<any>;
    /**
     * A handler for the itemSwipe event.
     */
    onItemSwipe: EventEmitter<any>;
    /**
     * A handler for the optionChanged event. Executed after an option of the widget is changed.
     */
    onOptionChanged: EventEmitter<any>;
    /**
     * A handler for the pageLoading event.
     */
    onPageLoading: EventEmitter<any>;
    /**
     * A handler for the pullRefresh event.
     */
    onPullRefresh: EventEmitter<any>;
    /**
     * A handler for the scroll event.
     */
    onScroll: EventEmitter<any>;
    /**
     * A handler for the selectAllValueChanged event.
     */
    onSelectAllValueChanged: EventEmitter<any>;
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
     * A handler for the allowItemDeletingChange event.
     */
    allowItemDeletingChange: EventEmitter<boolean>;
    /**
     * A handler for the allowItemReorderingChange event.
     */
    allowItemReorderingChange: EventEmitter<boolean>;
    /**
     * A handler for the autoPagingEnabledChange event.
     */
    autoPagingEnabledChange: EventEmitter<any>;
    /**
     * A handler for the bounceEnabledChange event.
     */
    bounceEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the collapsibleGroupsChange event.
     */
    collapsibleGroupsChange: EventEmitter<boolean>;
    /**
     * A handler for the dataSourceChange event.
     */
    dataSourceChange: EventEmitter<DevExpress.data.DataSource | DevExpress.data.DataSourceOptions | string | Array<string | DevExpress.ui.CollectionWidgetItemTemplate>>;
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
     * A handler for the hintChange event.
     */
    hintChange: EventEmitter<string>;
    /**
     * A handler for the hoverStateEnabledChange event.
     */
    hoverStateEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the indicateLoadingChange event.
     */
    indicateLoadingChange: EventEmitter<boolean>;
    /**
     * A handler for the itemDeleteModeChange event.
     */
    itemDeleteModeChange: EventEmitter<string>;
    /**
     * A handler for the itemHoldTimeoutChange event.
     */
    itemHoldTimeoutChange: EventEmitter<number>;
    /**
     * A handler for the itemsChange event.
     */
    itemsChange: EventEmitter<Array<string | any | {
        badge?: string;
        disabled?: boolean;
        html?: string;
        key?: string;
        showChevron?: boolean;
        template?: any;
        text?: string;
        visible?: boolean;
    }>>;
    /**
     * A handler for the itemTemplateChange event.
     */
    itemTemplateChange: EventEmitter<any>;
    /**
     * A handler for the keyExprChange event.
     */
    keyExprChange: EventEmitter<Function | string>;
    /**
     * A handler for the menuItemsChange event.
     */
    menuItemsChange: EventEmitter<Array<any | {
        action?: Function;
        text?: string;
    }>>;
    /**
     * A handler for the menuModeChange event.
     */
    menuModeChange: EventEmitter<string>;
    /**
     * A handler for the nextButtonTextChange event.
     */
    nextButtonTextChange: EventEmitter<string>;
    /**
     * A handler for the noDataTextChange event.
     */
    noDataTextChange: EventEmitter<string>;
    /**
     * A handler for the pageLoadingTextChange event.
     */
    pageLoadingTextChange: EventEmitter<string>;
    /**
     * A handler for the pageLoadModeChange event.
     */
    pageLoadModeChange: EventEmitter<string>;
    /**
     * A handler for the pulledDownTextChange event.
     */
    pulledDownTextChange: EventEmitter<string>;
    /**
     * A handler for the pullingDownTextChange event.
     */
    pullingDownTextChange: EventEmitter<string>;
    /**
     * A handler for the pullRefreshEnabledChange event.
     */
    pullRefreshEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the refreshingTextChange event.
     */
    refreshingTextChange: EventEmitter<string>;
    /**
     * A handler for the rtlEnabledChange event.
     */
    rtlEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the scrollByContentChange event.
     */
    scrollByContentChange: EventEmitter<boolean>;
    /**
     * A handler for the scrollByThumbChange event.
     */
    scrollByThumbChange: EventEmitter<boolean>;
    /**
     * A handler for the scrollingEnabledChange event.
     */
    scrollingEnabledChange: EventEmitter<boolean>;
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
     * A handler for the selectAllModeChange event.
     */
    selectAllModeChange: EventEmitter<string>;
    /**
     * A handler for the selectedItemKeysChange event.
     */
    selectedItemKeysChange: EventEmitter<Array<any>>;
    /**
     * A handler for the selectedItemsChange event.
     */
    selectedItemsChange: EventEmitter<Array<any>>;
    /**
     * A handler for the selectionModeChange event.
     */
    selectionModeChange: EventEmitter<string>;
    /**
     * A handler for the showNextButtonChange event.
     */
    showNextButtonChange: EventEmitter<any>;
    /**
     * A handler for the showScrollbarChange event.
     */
    showScrollbarChange: EventEmitter<string>;
    /**
     * A handler for the showSelectionControlsChange event.
     */
    showSelectionControlsChange: EventEmitter<boolean>;
    /**
     * A handler for the tabIndexChange event.
     */
    tabIndexChange: EventEmitter<number>;
    /**
     * A handler for the useNativeScrollingChange event.
     */
    useNativeScrollingChange: EventEmitter<boolean>;
    /**
     * A handler for the visibleChange event.
     */
    visibleChange: EventEmitter<boolean>;
    /**
     * A handler for the widthChange event.
     */
    widthChange: EventEmitter<number | Function | string>;
    itemsChildren: QueryList<DxiItemComponent>;
    menuItemsChildren: QueryList<DxiMenuItemComponent>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper, optionHost: NestedOptionHost);
    protected _createInstance(element: any, options: any): DxList;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    setupChanges(prop: string, changes: SimpleChanges): void;
    ngDoCheck(): void;
    _setOption(name: string, value: any): void;
}
export declare class DxListModule {
}
