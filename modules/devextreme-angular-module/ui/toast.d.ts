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
import { ElementRef, NgZone, OnDestroy, EventEmitter } from '@angular/core';
import DevExpress from 'devextreme/bundles/dx.all';
import DxToast from 'devextreme/ui/toast';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
/**
 * The Toast is a widget that provides pop-up notifications.
 */
export declare class DxToastComponent extends DxComponent implements OnDestroy {
    instance: DxToast;
    /**
     * Specifies the shortcut key that sets focus on the widget.
     */
    accessKey: string;
    /**
     * Configures widget visibility animations. This object contains two fields: show and hide.
     */
    animation: any;
    /**
     * A Boolean value specifying whether or not the widget is closed if a user presses the Back hardware button.
     */
    closeOnBackButton: boolean;
    /**
     * A Boolean value specifying whether or not the toast is closed if a user clicks it.
     */
    closeOnClick: boolean;
    /**
     * Specifies whether to close the widget if a user clicks outside it.
     */
    closeOnOutsideClick: boolean | Function;
    /**
     * A Boolean value specifying whether or not the toast is closed if a user swipes it out of the screen boundaries.
     */
    closeOnSwipe: boolean;
    /**
     * Specifies a custom template for the widget content.
     */
    contentTemplate: any;
    /**
     * Specifies whether widget content is rendered when the widget is shown or when rendering the widget.
     */
    deferRendering: boolean;
    /**
     * The time span in milliseconds during which the Toast widget is visible.
     */
    displayTime: number;
    /**
     * Specifies the attributes to be attached to the widget's root element.
     */
    elementAttr: any;
    /**
     * Specifies whether the widget can be focused using keyboard navigation.
     */
    focusStateEnabled: boolean;
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
     * The Toast message text.
     */
    message: string;
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
    position: DevExpress.positionConfig | string;
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
     * Specifies the number of the element when the Tab key is used for navigating.
     */
    tabIndex: number;
    /**
     * Specifies the Toast widget type.
     */
    type: string;
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
     * A handler for the showing event.
     */
    onShowing: EventEmitter<any>;
    /**
     * A handler for the shown event.
     */
    onShown: EventEmitter<any>;
    /**
     * A handler for the accessKeyChange event.
     */
    accessKeyChange: EventEmitter<string>;
    /**
     * A handler for the animationChange event.
     */
    animationChange: EventEmitter<any>;
    /**
     * A handler for the closeOnBackButtonChange event.
     */
    closeOnBackButtonChange: EventEmitter<boolean>;
    /**
     * A handler for the closeOnClickChange event.
     */
    closeOnClickChange: EventEmitter<boolean>;
    /**
     * A handler for the closeOnOutsideClickChange event.
     */
    closeOnOutsideClickChange: EventEmitter<boolean | Function>;
    /**
     * A handler for the closeOnSwipeChange event.
     */
    closeOnSwipeChange: EventEmitter<boolean>;
    /**
     * A handler for the contentTemplateChange event.
     */
    contentTemplateChange: EventEmitter<any>;
    /**
     * A handler for the deferRenderingChange event.
     */
    deferRenderingChange: EventEmitter<boolean>;
    /**
     * A handler for the displayTimeChange event.
     */
    displayTimeChange: EventEmitter<number>;
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
     * A handler for the maxHeightChange event.
     */
    maxHeightChange: EventEmitter<number | Function | string>;
    /**
     * A handler for the maxWidthChange event.
     */
    maxWidthChange: EventEmitter<number | Function | string>;
    /**
     * A handler for the messageChange event.
     */
    messageChange: EventEmitter<string>;
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
    positionChange: EventEmitter<DevExpress.positionConfig | string>;
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
     * A handler for the tabIndexChange event.
     */
    tabIndexChange: EventEmitter<number>;
    /**
     * A handler for the typeChange event.
     */
    typeChange: EventEmitter<string>;
    /**
     * A handler for the visibleChange event.
     */
    visibleChange: EventEmitter<boolean>;
    /**
     * A handler for the widthChange event.
     */
    widthChange: EventEmitter<number | Function | string>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, optionHost: NestedOptionHost);
    protected _createInstance(element: any, options: any): DxToast;
    ngOnDestroy(): void;
}
export declare class DxToastModule {
}
