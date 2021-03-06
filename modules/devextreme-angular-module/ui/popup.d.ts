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
import DxPopup from 'devextreme/ui/popup';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
import { DxiToolbarItemComponent } from './nested/toolbar-item-dxi';
/**
 * The Popup widget is a pop-up window overlaying the current view.
 */
export declare class DxPopupComponent extends DxComponent implements OnDestroy, OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxPopup;
    /**
     * Specifies the shortcut key that sets focus on the widget.
     */
    accessKey: string;
    /**
     * Configures widget visibility animations. This object contains two fields: show and hide.
     */
    animation: any;
    /**
     * Use the toolbarItems option instead.
     */
    buttons: Array<any>;
    /**
     * A Boolean value specifying whether or not the widget is closed if a user presses the Back hardware button.
     */
    closeOnBackButton: boolean;
    /**
     * Specifies whether to close the widget if a user clicks outside it.
     */
    closeOnOutsideClick: boolean | Function;
    /**
     * Specifies a custom template for the widget content.
     */
    contentTemplate: any;
    /**
     * Specifies whether widget content is rendered when the widget is shown or when rendering the widget.
     */
    deferRendering: boolean;
    /**
     * Specifies whether the widget responds to user interaction.
     */
    disabled: boolean;
    /**
     * Specifies whether or not to allow a user to drag the popup window.
     */
    dragEnabled: boolean;
    /**
     * Specifies the attributes to be attached to the widget's root element.
     */
    elementAttr: any;
    /**
     * Specifies whether the widget can be focused using keyboard navigation.
     */
    focusStateEnabled: boolean;
    /**
     * A Boolean value specifying whether or not to display the widget in full-screen mode.
     */
    fullScreen: boolean;
    /**
     * Specifies the widget's height in pixels.
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
     * Specifies the maximum height the widget can reach while resizing.
     */
    maxHeight: number | Function | string;
    /**
     * Specifies the maximum width the widget can reach while resizing.
     */
    maxWidth: number | Function | string;
    /**
     * Specifies the minimum height the widget can reach while resizing.
     */
    minHeight: number | Function | string;
    /**
     * Specifies the minimum width the widget can reach while resizing.
     */
    minWidth: number | Function | string;
    /**
     * An object defining widget positioning options.
     */
    position: DevExpress.positionConfig;
    /**
     * Specifies whether or not an end user can resize the widget.
     */
    resizeEnabled: boolean;
    /**
     * Switches the widget to a right-to-left representation.
     */
    rtlEnabled: boolean;
    /**
     * A Boolean value specifying whether or not the main screen is inactive while the widget is active.
     */
    shading: boolean;
    /**
     * Specifies the shading color.
     */
    shadingColor: string;
    /**
     * Specifies whether or not the widget displays the Close button.
     */
    showCloseButton: boolean;
    /**
     * A Boolean value specifying whether or not to display the title in the popup window.
     */
    showTitle: boolean;
    /**
     * Specifies the number of the element when the Tab key is used for navigating.
     */
    tabIndex: number;
    /**
     * The title in the overlay window.
     */
    title: string;
    /**
     * Specifies a custom template for the widget title. Does not apply if the title is defined.
     */
    titleTemplate: any;
    /**
     * Specifies items displayed on the top or bottom toolbar of the popup window.
     */
    toolbarItems: Array<any | {
        disabled?: boolean;
        html?: string;
        location?: string;
        options?: any;
        template?: any;
        text?: string;
        toolbar?: string;
        visible?: boolean;
        widget?: string;
    }>;
    /**
     * A Boolean value specifying whether or not the widget is visible.
     */
    visible: boolean;
    /**
     * Specifies the widget's width in pixels.
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
     * A handler for the hidden event.
     */
    onHidden: EventEmitter<any>;
    /**
     * A handler for the hiding event.
     */
    onHiding: EventEmitter<any>;
    /**
     * A handler for the initialized event. Executed only once, after the widget is initialized.
     */
    onInitialized: EventEmitter<any>;
    /**
     * A handler for the optionChanged event. Executed after an option of the widget is changed.
     */
    onOptionChanged: EventEmitter<any>;
    /**
     * A handler for the resize event.
     */
    onResize: EventEmitter<any>;
    /**
     * A handler for the resizeEnd event.
     */
    onResizeEnd: EventEmitter<any>;
    /**
     * A handler for the resizeStart event.
     */
    onResizeStart: EventEmitter<any>;
    /**
     * A handler for the showing event.
     */
    onShowing: EventEmitter<any>;
    /**
     * A handler for the shown event.
     */
    onShown: EventEmitter<any>;
    /**
     * A handler for the titleRendered event.
     */
    onTitleRendered: EventEmitter<any>;
    /**
     * A handler for the accessKeyChange event.
     */
    accessKeyChange: EventEmitter<string>;
    /**
     * A handler for the animationChange event.
     */
    animationChange: EventEmitter<any>;
    /**
     * A handler for the buttonsChange event.
     */
    buttonsChange: EventEmitter<Array<any>>;
    /**
     * A handler for the closeOnBackButtonChange event.
     */
    closeOnBackButtonChange: EventEmitter<boolean>;
    /**
     * A handler for the closeOnOutsideClickChange event.
     */
    closeOnOutsideClickChange: EventEmitter<boolean | Function>;
    /**
     * A handler for the contentTemplateChange event.
     */
    contentTemplateChange: EventEmitter<any>;
    /**
     * A handler for the deferRenderingChange event.
     */
    deferRenderingChange: EventEmitter<boolean>;
    /**
     * A handler for the disabledChange event.
     */
    disabledChange: EventEmitter<boolean>;
    /**
     * A handler for the dragEnabledChange event.
     */
    dragEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the elementAttrChange event.
     */
    elementAttrChange: EventEmitter<any>;
    /**
     * A handler for the focusStateEnabledChange event.
     */
    focusStateEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the fullScreenChange event.
     */
    fullScreenChange: EventEmitter<boolean>;
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
     * A handler for the maxHeightChange event.
     */
    maxHeightChange: EventEmitter<number | Function | string>;
    /**
     * A handler for the maxWidthChange event.
     */
    maxWidthChange: EventEmitter<number | Function | string>;
    /**
     * A handler for the minHeightChange event.
     */
    minHeightChange: EventEmitter<number | Function | string>;
    /**
     * A handler for the minWidthChange event.
     */
    minWidthChange: EventEmitter<number | Function | string>;
    /**
     * A handler for the positionChange event.
     */
    positionChange: EventEmitter<DevExpress.positionConfig>;
    /**
     * A handler for the resizeEnabledChange event.
     */
    resizeEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the rtlEnabledChange event.
     */
    rtlEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the shadingChange event.
     */
    shadingChange: EventEmitter<boolean>;
    /**
     * A handler for the shadingColorChange event.
     */
    shadingColorChange: EventEmitter<string>;
    /**
     * A handler for the showCloseButtonChange event.
     */
    showCloseButtonChange: EventEmitter<boolean>;
    /**
     * A handler for the showTitleChange event.
     */
    showTitleChange: EventEmitter<boolean>;
    /**
     * A handler for the tabIndexChange event.
     */
    tabIndexChange: EventEmitter<number>;
    /**
     * A handler for the titleChange event.
     */
    titleChange: EventEmitter<string>;
    /**
     * A handler for the titleTemplateChange event.
     */
    titleTemplateChange: EventEmitter<any>;
    /**
     * A handler for the toolbarItemsChange event.
     */
    toolbarItemsChange: EventEmitter<Array<any | {
        disabled?: boolean;
        html?: string;
        location?: string;
        options?: any;
        template?: any;
        text?: string;
        toolbar?: string;
        visible?: boolean;
        widget?: string;
    }>>;
    /**
     * A handler for the visibleChange event.
     */
    visibleChange: EventEmitter<boolean>;
    /**
     * A handler for the widthChange event.
     */
    widthChange: EventEmitter<number | Function | string>;
    toolbarItemsChildren: QueryList<DxiToolbarItemComponent>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper, optionHost: NestedOptionHost);
    protected _createInstance(element: any, options: any): DxPopup;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    setupChanges(prop: string, changes: SimpleChanges): void;
    ngDoCheck(): void;
    _setOption(name: string, value: any): void;
}
export declare class DxPopupModule {
}
