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
import DxResizable from 'devextreme/ui/resizable';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
/**
 * The Resizable widget enables its content to be resizable in the UI.
 */
export declare class DxResizableComponent extends DxComponent implements OnDestroy {
    instance: DxResizable;
    /**
     * Specifies the attributes to be attached to the widget's root element.
     */
    elementAttr: any;
    /**
     * Specifies which borders of the widget element are used as a handle.
     */
    handles: string;
    /**
     * Specifies the widget's height.
     */
    height: number | Function | string;
    /**
     * Specifies the upper height boundary for resizing.
     */
    maxHeight: number;
    /**
     * Specifies the upper width boundary for resizing.
     */
    maxWidth: number;
    /**
     * Specifies the lower height boundary for resizing.
     */
    minHeight: number;
    /**
     * Specifies the lower width boundary for resizing.
     */
    minWidth: number;
    /**
     * Switches the widget to a right-to-left representation.
     */
    rtlEnabled: boolean;
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
     * A handler for the elementAttrChange event.
     */
    elementAttrChange: EventEmitter<any>;
    /**
     * A handler for the handlesChange event.
     */
    handlesChange: EventEmitter<string>;
    /**
     * A handler for the heightChange event.
     */
    heightChange: EventEmitter<number | Function | string>;
    /**
     * A handler for the maxHeightChange event.
     */
    maxHeightChange: EventEmitter<number>;
    /**
     * A handler for the maxWidthChange event.
     */
    maxWidthChange: EventEmitter<number>;
    /**
     * A handler for the minHeightChange event.
     */
    minHeightChange: EventEmitter<number>;
    /**
     * A handler for the minWidthChange event.
     */
    minWidthChange: EventEmitter<number>;
    /**
     * A handler for the rtlEnabledChange event.
     */
    rtlEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the widthChange event.
     */
    widthChange: EventEmitter<number | Function | string>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, optionHost: NestedOptionHost);
    protected _createInstance(element: any, options: any): DxResizable;
    ngOnDestroy(): void;
}
export declare class DxResizableModule {
}
