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
import DxMenu from 'devextreme/ui/menu';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
import { DxiItemComponent } from './nested/item-dxi';
/**
 * The Menu widget is a panel with clickable items. A click on an item opens a drop-down menu, which can contain several submenus.
 */
export declare class DxMenuComponent extends DxComponent implements OnDestroy, OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxMenu;
    /**
     * Specifies the shortcut key that sets focus on the widget.
     */
    accessKey: string;
    /**
     * A Boolean value specifying whether or not the widget changes its state when interacting with a user.
     */
    activeStateEnabled: boolean;
    /**
     * Specifies whether adaptive widget rendering is enabled on small screens. Applies only if the orientation is "horizontal".
     */
    adaptivityEnabled: boolean;
    /**
     * Configures widget visibility animations. This object contains two fields: show and hide.
     */
    animation: any;
    /**
     * Specifies the name of the CSS class to be applied to the root menu level and all submenus.
     */
    cssClass: string;
    /**
     * A data source used to fetch data to be displayed by the widget.
     */
    dataSource: DevExpress.data.DataSource | DevExpress.data.DataSourceOptions | string | Array<string | DevExpress.ui.CollectionWidgetItemTemplate>;
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
     * Specifies whether the widget can be focused using keyboard navigation.
     */
    focusStateEnabled: boolean;
    /**
     * Specifies the widget's height.
     */
    height: number | Function | string;
    /**
     * Specifies whether or not the submenu is hidden when the mouse pointer leaves it.
     */
    hideSubmenuOnMouseLeave: boolean;
    /**
     * Specifies text for a hint that appears when a user pauses on the widget.
     */
    hint: string;
    /**
     * Specifies whether the widget changes its state when a user pauses on it.
     */
    hoverStateEnabled: boolean;
    /**
     * Holds an array of menu items.
     */
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
     * Specifies whether the menu has horizontal or vertical orientation.
     */
    orientation: string;
    /**
     * Switches the widget to a right-to-left representation.
     */
    rtlEnabled: boolean;
    /**
     * Specifies whether or not an item becomes selected if a user clicks it.
     */
    selectByClick: boolean;
    /**
     * Specifies the name of the data source item field whose value defines whether or not the corresponding widget items is selected.
     */
    selectedExpr: Function | string;
    /**
     * The selected item object.
     */
    selectedItem: any;
    /**
     * Use the selectByClick option instead.
     */
    selectionByClick: boolean;
    /**
     * Specifies the selection mode supported by the menu.
     */
    selectionMode: string;
    /**
     * Specifies options for showing and hiding the first level submenu.
     */
    showFirstSubmenuMode: string | {
        delay?: number | {
            hide?: number;
            show?: number;
        };
        name?: string;
    };
    /**
     * Specifies options of submenu showing and hiding.
     */
    showSubmenuMode: string | {
        delay?: number | {
            hide?: number;
            show?: number;
        };
        name?: string;
    };
    /**
     * Specifies the direction at which the submenus are displayed.
     */
    submenuDirection: string;
    /**
     * Specifies the number of the element when the Tab key is used for navigating.
     */
    tabIndex: number;
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
     * A handler for the itemContextMenu event.
     */
    onItemContextMenu: EventEmitter<any>;
    /**
     * A handler for the itemRendered event.
     */
    onItemRendered: EventEmitter<any>;
    /**
     * A handler for the optionChanged event. Executed after an option of the widget is changed.
     */
    onOptionChanged: EventEmitter<any>;
    /**
     * A handler for the selectionChanged event. Raised after an item is selected or unselected.
     */
    onSelectionChanged: EventEmitter<any>;
    /**
     * A handler for the submenuHidden event.
     */
    onSubmenuHidden: EventEmitter<any>;
    /**
     * A handler for the submenuHiding event.
     */
    onSubmenuHiding: EventEmitter<any>;
    /**
     * A handler for the submenuShowing event.
     */
    onSubmenuShowing: EventEmitter<any>;
    /**
     * A handler for the submenuShown event.
     */
    onSubmenuShown: EventEmitter<any>;
    /**
     * A handler for the accessKeyChange event.
     */
    accessKeyChange: EventEmitter<string>;
    /**
     * A handler for the activeStateEnabledChange event.
     */
    activeStateEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the adaptivityEnabledChange event.
     */
    adaptivityEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the animationChange event.
     */
    animationChange: EventEmitter<any>;
    /**
     * A handler for the cssClassChange event.
     */
    cssClassChange: EventEmitter<string>;
    /**
     * A handler for the dataSourceChange event.
     */
    dataSourceChange: EventEmitter<DevExpress.data.DataSource | DevExpress.data.DataSourceOptions | string | Array<string | DevExpress.ui.CollectionWidgetItemTemplate>>;
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
     * A handler for the focusStateEnabledChange event.
     */
    focusStateEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the heightChange event.
     */
    heightChange: EventEmitter<number | Function | string>;
    /**
     * A handler for the hideSubmenuOnMouseLeaveChange event.
     */
    hideSubmenuOnMouseLeaveChange: EventEmitter<boolean>;
    /**
     * A handler for the hintChange event.
     */
    hintChange: EventEmitter<string>;
    /**
     * A handler for the hoverStateEnabledChange event.
     */
    hoverStateEnabledChange: EventEmitter<boolean>;
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
     * A handler for the orientationChange event.
     */
    orientationChange: EventEmitter<string>;
    /**
     * A handler for the rtlEnabledChange event.
     */
    rtlEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the selectByClickChange event.
     */
    selectByClickChange: EventEmitter<boolean>;
    /**
     * A handler for the selectedExprChange event.
     */
    selectedExprChange: EventEmitter<Function | string>;
    /**
     * A handler for the selectedItemChange event.
     */
    selectedItemChange: EventEmitter<any>;
    /**
     * A handler for the selectionByClickChange event.
     */
    selectionByClickChange: EventEmitter<boolean>;
    /**
     * A handler for the selectionModeChange event.
     */
    selectionModeChange: EventEmitter<string>;
    /**
     * A handler for the showFirstSubmenuModeChange event.
     */
    showFirstSubmenuModeChange: EventEmitter<string | {
        delay?: number | {
            hide?: number;
            show?: number;
        };
        name?: string;
    }>;
    /**
     * A handler for the showSubmenuModeChange event.
     */
    showSubmenuModeChange: EventEmitter<string | {
        delay?: number | {
            hide?: number;
            show?: number;
        };
        name?: string;
    }>;
    /**
     * A handler for the submenuDirectionChange event.
     */
    submenuDirectionChange: EventEmitter<string>;
    /**
     * A handler for the tabIndexChange event.
     */
    tabIndexChange: EventEmitter<number>;
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
    protected _createInstance(element: any, options: any): DxMenu;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    setupChanges(prop: string, changes: SimpleChanges): void;
    ngDoCheck(): void;
    _setOption(name: string, value: any): void;
}
export declare class DxMenuModule {
}
