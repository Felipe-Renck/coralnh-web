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
import DxScrollView from 'devextreme/ui/scroll_view';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
/**
 * The ScrollView is a widget that enables a user to scroll its content.
 */
export declare class DxScrollViewComponent extends DxComponent implements OnDestroy {
    instance: DxScrollView;
    /**
     * A Boolean value specifying whether to enable or disable the bounce-back effect.
     */
    bounceEnabled: boolean;
    /**
     * A string value specifying the available scrolling directions.
     */
    direction: string;
    /**
     * A Boolean value specifying whether or not the widget can respond to user interaction.
     */
    disabled: boolean;
    /**
     * Specifies the attributes to be attached to the widget's root element.
     */
    elementAttr: any;
    /**
     * Specifies the widget's height.
     */
    height: number | Function | string;
    /**
     * Specifies the text shown in the pullDown panel when pulling the content down lowers the refresh threshold.
     */
    pulledDownText: string;
    /**
     * Specifies the text shown in the pullDown panel while pulling the content down to the refresh threshold.
     */
    pullingDownText: string;
    /**
     * Specifies the text shown in the pullDown panel displayed when content is scrolled to the bottom.
     */
    reachBottomText: string;
    /**
     * Specifies the text shown in the pullDown panel displayed when the content is being refreshed.
     */
    refreshingText: string;
    /**
     * Switches the widget to a right-to-left representation.
     */
    rtlEnabled: boolean;
    /**
     * A Boolean value specifying whether or not an end-user can scroll the widget content swiping it up or down. Applies only if useNative is false
     */
    scrollByContent: boolean;
    /**
     * A Boolean value specifying whether or not an end-user can scroll the widget content using the scrollbar.
     */
    scrollByThumb: boolean;
    /**
     * Specifies when the widget shows the scrollbar.
     */
    showScrollbar: string;
    /**
     * Indicates whether to use native or simulated scrolling.
     */
    useNative: boolean;
    /**
     * Specifies the widget's width.
     */
    width: number | Function | string;
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
     * A handler for the pullDown event.
     */
    onPullDown: EventEmitter<any>;
    /**
     * A handler for the reachBottom event.
     */
    onReachBottom: EventEmitter<any>;
    /**
     * A handler for the scroll event.
     */
    onScroll: EventEmitter<any>;
    /**
     * A handler for the update event.
     */
    onUpdated: EventEmitter<any>;
    /**
     * A handler for the bounceEnabledChange event.
     */
    bounceEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the directionChange event.
     */
    directionChange: EventEmitter<string>;
    /**
     * A handler for the disabledChange event.
     */
    disabledChange: EventEmitter<boolean>;
    /**
     * A handler for the elementAttrChange event.
     */
    elementAttrChange: EventEmitter<any>;
    /**
     * A handler for the heightChange event.
     */
    heightChange: EventEmitter<number | Function | string>;
    /**
     * A handler for the pulledDownTextChange event.
     */
    pulledDownTextChange: EventEmitter<string>;
    /**
     * A handler for the pullingDownTextChange event.
     */
    pullingDownTextChange: EventEmitter<string>;
    /**
     * A handler for the reachBottomTextChange event.
     */
    reachBottomTextChange: EventEmitter<string>;
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
     * A handler for the showScrollbarChange event.
     */
    showScrollbarChange: EventEmitter<string>;
    /**
     * A handler for the useNativeChange event.
     */
    useNativeChange: EventEmitter<boolean>;
    /**
     * A handler for the widthChange event.
     */
    widthChange: EventEmitter<number | Function | string>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, optionHost: NestedOptionHost);
    protected _createInstance(element: any, options: any): DxScrollView;
    ngOnDestroy(): void;
}
export declare class DxScrollViewModule {
}
