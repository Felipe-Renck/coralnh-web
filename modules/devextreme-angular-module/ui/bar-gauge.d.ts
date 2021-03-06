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
import DxBarGauge from 'devextreme/viz/bar_gauge';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
/**
 * The BarGauge widget contains several circular bars that each indicates a single value.
 */
export declare class DxBarGaugeComponent extends DxComponent implements OnDestroy, OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxBarGauge;
    /**
     * Specifies animation options.
     */
    animation: any;
    /**
     * Specifies a color for the remaining segment of the bar's track.
     */
    backgroundColor: string;
    /**
     * Specifies a distance between bars in pixels.
     */
    barSpacing: number;
    /**
     * Specifies a base value for bars.
     */
    baseValue: number;
    /**
     * Specifies the attributes to be attached to the widget's root element.
     */
    elementAttr: any;
    /**
     * Specifies an end value for the gauge's invisible scale.
     */
    endValue: number;
    /**
     * Configures the exporting and printing features.
     */
    export: any;
    /**
     * Defines the shape of the gauge's arc.
     */
    geometry: any;
    /**
     * Specifies the options of the labels that accompany gauge bars.
     */
    label: any;
    /**
     * Configures the loading indicator.
     */
    loadingIndicator: any;
    /**
     * Generates space around the widget.
     */
    margin: any;
    /**
     * Sets the name of the palette or an array of colors to be used for coloring the gauge range container.
     */
    palette: string | Array<string>;
    /**
     * Notifies the widget that it is embedded into an HTML page that uses a tag modifying the path.
     */
    pathModified: boolean;
    /**
     * Specifies whether to redraw the widget when the size of the parent browser window changes or a mobile device rotates.
     */
    redrawOnResize: boolean;
    /**
     * Defines the radius of the bar that is closest to the center relatively to the radius of the topmost bar.
     */
    relativeInnerRadius: number;
    /**
     * Switches the widget to a right-to-left representation.
     */
    rtlEnabled: boolean;
    /**
     * Specifies the widget's size in pixels.
     */
    size: any;
    /**
     * Specifies a start value for the gauge's invisible scale.
     */
    startValue: number;
    /**
     * Use the title.subtitle option instead.
     */
    subtitle: string | {
        font?: DevExpress.viz.Font;
        text?: string;
    };
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
     * Specifies the array of values to be indicated on a bar gauge.
     */
    values: Array<number>;
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
     * A handler for the backgroundColorChange event.
     */
    backgroundColorChange: EventEmitter<string>;
    /**
     * A handler for the barSpacingChange event.
     */
    barSpacingChange: EventEmitter<number>;
    /**
     * A handler for the baseValueChange event.
     */
    baseValueChange: EventEmitter<number>;
    /**
     * A handler for the elementAttrChange event.
     */
    elementAttrChange: EventEmitter<any>;
    /**
     * A handler for the endValueChange event.
     */
    endValueChange: EventEmitter<number>;
    /**
     * A handler for the exportChange event.
     */
    exportChange: EventEmitter<any>;
    /**
     * A handler for the geometryChange event.
     */
    geometryChange: EventEmitter<any>;
    /**
     * A handler for the labelChange event.
     */
    labelChange: EventEmitter<any>;
    /**
     * A handler for the loadingIndicatorChange event.
     */
    loadingIndicatorChange: EventEmitter<any>;
    /**
     * A handler for the marginChange event.
     */
    marginChange: EventEmitter<any>;
    /**
     * A handler for the paletteChange event.
     */
    paletteChange: EventEmitter<string | Array<string>>;
    /**
     * A handler for the pathModifiedChange event.
     */
    pathModifiedChange: EventEmitter<boolean>;
    /**
     * A handler for the redrawOnResizeChange event.
     */
    redrawOnResizeChange: EventEmitter<boolean>;
    /**
     * A handler for the relativeInnerRadiusChange event.
     */
    relativeInnerRadiusChange: EventEmitter<number>;
    /**
     * A handler for the rtlEnabledChange event.
     */
    rtlEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the sizeChange event.
     */
    sizeChange: EventEmitter<any>;
    /**
     * A handler for the startValueChange event.
     */
    startValueChange: EventEmitter<number>;
    /**
     * A handler for the subtitleChange event.
     */
    subtitleChange: EventEmitter<string | {
        font?: DevExpress.viz.Font;
        text?: string;
    }>;
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
     * A handler for the valuesChange event.
     */
    valuesChange: EventEmitter<Array<number>>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper, optionHost: NestedOptionHost);
    protected _createInstance(element: any, options: any): DxBarGauge;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    setupChanges(prop: string, changes: SimpleChanges): void;
    ngDoCheck(): void;
    _setOption(name: string, value: any): void;
}
export declare class DxBarGaugeModule {
}
