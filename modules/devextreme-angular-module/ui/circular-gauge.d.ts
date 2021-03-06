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
import { ElementRef, NgZone, OnDestroy, EventEmitter, OnChanges, DoCheck, SimpleChanges } from '@angular/core';
import DevExpress from 'devextreme/bundles/dx.all';
import DxCircularGauge from 'devextreme/viz/circular_gauge';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
/**
 * The CircularGauge is a widget that indicates values on a circular numeric scale.
 */
export declare class DxCircularGaugeComponent extends DxComponent implements OnDestroy, OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxCircularGauge;
    /**
     * Specifies animation options.
     */
    animation: any;
    /**
     * Specifies the color of the parent page element.
     */
    containerBackgroundColor: string;
    /**
     * Specifies the attributes to be attached to the widget's root element.
     */
    elementAttr: any;
    /**
     * Configures the exporting and printing features.
     */
    export: any;
    /**
     * Specifies the options required to set the geometry of the CircularGauge widget.
     */
    geometry: any;
    /**
     * Configures the loading indicator.
     */
    loadingIndicator: any;
    /**
     * Generates space around the widget.
     */
    margin: any;
    /**
     * Notifies the widget that it is embedded into an HTML page that uses a tag modifying the path.
     */
    pathModified: boolean;
    /**
     * Specifies gauge range container options.
     */
    rangeContainer: any;
    /**
     * Specifies whether to redraw the widget when the size of the parent browser window changes or a mobile device rotates.
     */
    redrawOnResize: boolean;
    /**
     * Switches the widget to a right-to-left representation.
     */
    rtlEnabled: boolean;
    /**
     * Specifies a gauge's scale options.
     */
    scale: any;
    /**
     * Specifies the widget's size in pixels.
     */
    size: any;
    /**
     * Use the title.subtitle option instead.
     */
    subtitle: string | {
        font?: DevExpress.viz.Font;
        text?: string;
    };
    /**
     * Specifies the appearance options of subvalue indicators.
     */
    subvalueIndicator: any;
    /**
     * Specifies a set of subvalues to be designated by the subvalue indicators.
     */
    subvalues: Array<number>;
    /**
     * Sets the name of the theme the widget uses.
     */
    theme: string;
    /**
     * Configures the widget's title.
     */
    title: string | {
        font?: DevExpress.viz.Font;
        horizontalAlignment?: string;
        margin?: number | {
            bottom?: number;
            left?: number;
            right?: number;
            top?: number;
        };
        placeholderSize?: number;
        position?: string;
        subtitle?: string | {
            font?: DevExpress.viz.Font;
            text?: string;
        };
        text?: string;
        verticalAlignment?: string;
    };
    /**
     * Configures tooltips.
     */
    tooltip: any;
    /**
     * Specifies the main value on a gauge.
     */
    value: number;
    /**
     * Specifies the appearance options of the value indicator.
     */
    valueIndicator: any;
    /**
     * A handler for the disposing event. Executed when the widget is removed from the DOM using the remove(), empty(), or html() jQuery methods only.
     */
    onDisposing: EventEmitter<any>;
    /**
     * A handler for the drawn event. Executed when the widget has finished drawing itself.
     */
    onDrawn: EventEmitter<any>;
    /**
     * A handler for the exported event. Executed after data from the widget is exported.
     */
    onExported: EventEmitter<any>;
    /**
     * A handler for the exporting event. Executed before data from the widget is exported.
     */
    onExporting: EventEmitter<any>;
    /**
     * A handler for the fileSaving event. Executed before a file with exported data is saved on the user's local storage.
     */
    onFileSaving: EventEmitter<any>;
    /**
     * A handler for the incidentOccurred event. Executed when an error or warning appears in the widget.
     */
    onIncidentOccurred: EventEmitter<any>;
    /**
     * A handler for the initialized event. Executed only once, after the widget is initialized.
     */
    onInitialized: EventEmitter<any>;
    /**
     * A handler for the optionChanged event. Executed after an option of the widget is changed.
     */
    onOptionChanged: EventEmitter<any>;
    /**
     * A handler for the tooltipHidden event.
     */
    onTooltipHidden: EventEmitter<any>;
    /**
     * A handler for the tooltipShown event.
     */
    onTooltipShown: EventEmitter<any>;
    /**
     * A handler for the animationChange event.
     */
    animationChange: EventEmitter<any>;
    /**
     * A handler for the containerBackgroundColorChange event.
     */
    containerBackgroundColorChange: EventEmitter<string>;
    /**
     * A handler for the elementAttrChange event.
     */
    elementAttrChange: EventEmitter<any>;
    /**
     * A handler for the exportChange event.
     */
    exportChange: EventEmitter<any>;
    /**
     * A handler for the geometryChange event.
     */
    geometryChange: EventEmitter<any>;
    /**
     * A handler for the loadingIndicatorChange event.
     */
    loadingIndicatorChange: EventEmitter<any>;
    /**
     * A handler for the marginChange event.
     */
    marginChange: EventEmitter<any>;
    /**
     * A handler for the pathModifiedChange event.
     */
    pathModifiedChange: EventEmitter<boolean>;
    /**
     * A handler for the rangeContainerChange event.
     */
    rangeContainerChange: EventEmitter<any>;
    /**
     * A handler for the redrawOnResizeChange event.
     */
    redrawOnResizeChange: EventEmitter<boolean>;
    /**
     * A handler for the rtlEnabledChange event.
     */
    rtlEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the scaleChange event.
     */
    scaleChange: EventEmitter<any>;
    /**
     * A handler for the sizeChange event.
     */
    sizeChange: EventEmitter<any>;
    /**
     * A handler for the subtitleChange event.
     */
    subtitleChange: EventEmitter<string | {
        font?: DevExpress.viz.Font;
        text?: string;
    }>;
    /**
     * A handler for the subvalueIndicatorChange event.
     */
    subvalueIndicatorChange: EventEmitter<any>;
    /**
     * A handler for the subvaluesChange event.
     */
    subvaluesChange: EventEmitter<Array<number>>;
    /**
     * A handler for the themeChange event.
     */
    themeChange: EventEmitter<string>;
    /**
     * A handler for the titleChange event.
     */
    titleChange: EventEmitter<string | {
        font?: DevExpress.viz.Font;
        horizontalAlignment?: string;
        margin?: number | {
            bottom?: number;
            left?: number;
            right?: number;
            top?: number;
        };
        placeholderSize?: number;
        position?: string;
        subtitle?: string | {
            font?: DevExpress.viz.Font;
            text?: string;
        };
        text?: string;
        verticalAlignment?: string;
    }>;
    /**
     * A handler for the tooltipChange event.
     */
    tooltipChange: EventEmitter<any>;
    /**
     * A handler for the valueChange event.
     */
    valueChange: EventEmitter<number>;
    /**
     * A handler for the valueIndicatorChange event.
     */
    valueIndicatorChange: EventEmitter<any>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper, optionHost: NestedOptionHost);
    protected _createInstance(element: any, options: any): DxCircularGauge;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    setupChanges(prop: string, changes: SimpleChanges): void;
    ngDoCheck(): void;
    _setOption(name: string, value: any): void;
}
export declare class DxCircularGaugeModule {
}
