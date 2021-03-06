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
import DxGallery from 'devextreme/ui/gallery';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
import { DxiItemComponent } from './nested/item-dxi';
/**
 * The Gallery is a widget that displays a collection of images in a carousel. The widget is supplied with various navigation controls that allow a user to switch between images.
 */
export declare class DxGalleryComponent extends DxComponent implements OnDestroy, OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxGallery;
    /**
     * Specifies the shortcut key that sets focus on the widget.
     */
    accessKey: string;
    /**
     * The time, in milliseconds, spent on slide animation.
     */
    animationDuration: number;
    /**
     * Specifies whether or not to animate the displayed item change.
     */
    animationEnabled: boolean;
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
     * A Boolean value specifying whether or not to allow users to switch between items by clicking an indicator.
     */
    indicatorEnabled: boolean;
    /**
     * Specifies the width of an area used to display a single image.
     */
    initialItemWidth: number;
    /**
     * The time period in milliseconds before the onItemHold event is raised.
     */
    itemHoldTimeout: number;
    /**
     * An array of items displayed by the widget.
     */
    items: Array<string | any | {
        disabled?: boolean;
        html?: string;
        imageAlt?: string;
        imageSrc?: string;
        template?: any;
        text?: string;
    }>;
    /**
     * Specifies a custom template for items.
     */
    itemTemplate: any;
    /**
     * A Boolean value specifying whether or not to scroll back to the first item after the last item is swiped.
     */
    loop: boolean;
    /**
     * Switches the widget to a right-to-left representation.
     */
    rtlEnabled: boolean;
    /**
     * The index of the currently active gallery item.
     */
    selectedIndex: number;
    /**
     * The selected item object.
     */
    selectedItem: any;
    /**
     * A Boolean value specifying whether or not to display an indicator that points to the selected gallery item.
     */
    showIndicator: boolean;
    /**
     * A Boolean value that specifies the availability of the "Forward" and "Back" navigation buttons.
     */
    showNavButtons: boolean;
    /**
     * The time interval in milliseconds, after which the gallery switches to the next item.
     */
    slideshowDelay: number;
    /**
     * Specifies if the widget stretches images to fit the total gallery width.
     */
    stretchImages: boolean;
    /**
     * A Boolean value specifying whether or not to allow users to switch between items by swiping.
     */
    swipeEnabled: boolean;
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
     * Specifies whether or not to display parts of previous and next images along the sides of the current image.
     */
    wrapAround: boolean;
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
     * A handler for the itemHold event.
     */
    onItemHold: EventEmitter<any>;
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
     * A handler for the accessKeyChange event.
     */
    accessKeyChange: EventEmitter<string>;
    /**
     * A handler for the animationDurationChange event.
     */
    animationDurationChange: EventEmitter<number>;
    /**
     * A handler for the animationEnabledChange event.
     */
    animationEnabledChange: EventEmitter<boolean>;
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
     * A handler for the indicatorEnabledChange event.
     */
    indicatorEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the initialItemWidthChange event.
     */
    initialItemWidthChange: EventEmitter<number>;
    /**
     * A handler for the itemHoldTimeoutChange event.
     */
    itemHoldTimeoutChange: EventEmitter<number>;
    /**
     * A handler for the itemsChange event.
     */
    itemsChange: EventEmitter<Array<string | any | {
        disabled?: boolean;
        html?: string;
        imageAlt?: string;
        imageSrc?: string;
        template?: any;
        text?: string;
    }>>;
    /**
     * A handler for the itemTemplateChange event.
     */
    itemTemplateChange: EventEmitter<any>;
    /**
     * A handler for the loopChange event.
     */
    loopChange: EventEmitter<boolean>;
    /**
     * A handler for the rtlEnabledChange event.
     */
    rtlEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the selectedIndexChange event.
     */
    selectedIndexChange: EventEmitter<number>;
    /**
     * A handler for the selectedItemChange event.
     */
    selectedItemChange: EventEmitter<any>;
    /**
     * A handler for the showIndicatorChange event.
     */
    showIndicatorChange: EventEmitter<boolean>;
    /**
     * A handler for the showNavButtonsChange event.
     */
    showNavButtonsChange: EventEmitter<boolean>;
    /**
     * A handler for the slideshowDelayChange event.
     */
    slideshowDelayChange: EventEmitter<number>;
    /**
     * A handler for the stretchImagesChange event.
     */
    stretchImagesChange: EventEmitter<boolean>;
    /**
     * A handler for the swipeEnabledChange event.
     */
    swipeEnabledChange: EventEmitter<boolean>;
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
    /**
     * A handler for the wrapAroundChange event.
     */
    wrapAroundChange: EventEmitter<boolean>;
    itemsChildren: QueryList<DxiItemComponent>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper, optionHost: NestedOptionHost);
    protected _createInstance(element: any, options: any): DxGallery;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    setupChanges(prop: string, changes: SimpleChanges): void;
    ngDoCheck(): void;
    _setOption(name: string, value: any): void;
}
export declare class DxGalleryModule {
}
