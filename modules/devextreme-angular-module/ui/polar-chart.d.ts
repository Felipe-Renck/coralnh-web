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
import DxPolarChart from 'devextreme/viz/polar_chart';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
import { DxiSeriesComponent } from './nested/series-dxi';
/**
 * The PolarChart is a widget that visualizes data in a polar coordinate system.
 */
export declare class DxPolarChartComponent extends DxComponent implements OnDestroy, OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxPolarChart;
    /**
     * Specifies adaptive layout options.
     */
    adaptiveLayout: any;
    /**
     * Specifies animation options.
     */
    animation: boolean | {
        duration?: number;
        easing?: string;
        enabled?: boolean;
        maxPointCountSupported?: number;
    };
    /**
     * Specifies argument axis options for the PolarChart widget.
     */
    argumentAxis: any;
    /**
     * Specifies a common bar width as a percentage from 0 to 1.
     */
    barWidth: number;
    /**
     * An object defining the configuration options that are common for all axes of the PolarChart widget.
     */
    commonAxisSettings: any;
    /**
     * An object defining the configuration options that are common for all series of the PolarChart widget.
     */
    commonSeriesSettings: any;
    /**
     * Specifies the color of the parent page element.
     */
    containerBackgroundColor: string;
    /**
     * Customizes the appearance of an individual point label.
     */
    customizeLabel: Function;
    /**
     * Customizes the appearance of an individual series point.
     */
    customizePoint: Function;
    /**
     * An object providing options for managing data from a data source.
     */
    dataPrepareSettings: any;
    /**
     * Specifies the widget's data origin.
     */
    dataSource: DevExpress.data.DataSource | DevExpress.data.DataSourceOptions | string | Array<any>;
    /**
     * Specifies the attributes to be attached to the widget's root element.
     */
    elementAttr: any;
    /**
     * Specifies whether or not all bars in a series must have the same angle, or may have different angles if any points in other series are missing.
     */
    equalBarWidth: boolean;
    /**
     * Configures the exporting and printing features.
     */
    export: any;
    /**
     * Specifies the options of a chart's legend.
     */
    legend: any;
    /**
     * Configures the loading indicator.
     */
    loadingIndicator: any;
    /**
     * Generates space around the widget.
     */
    margin: any;
    /**
     * Forces the widget to treat negative values as zeroes. Applies to stacked-like series only.
     */
    negativesAsZeroes: boolean;
    /**
     * Sets the name of the palette to be used in the chart. Alternatively, an array of colors can be set as a custom palette to be used within this chart.
     */
    palette: string | Array<string>;
    /**
     * Notifies the widget that it is embedded into an HTML page that uses a tag modifying the path.
     */
    pathModified: boolean;
    /**
     * Specifies whether a single point or multiple points can be selected in the chart.
     */
    pointSelectionMode: string;
    /**
     * Specifies whether to redraw the widget when the size of the parent browser window changes or a mobile device rotates.
     */
    redrawOnResize: boolean;
    /**
     * Specifies how the chart must behave when series point labels overlap.
     */
    resolveLabelOverlapping: string;
    /**
     * Switches the widget to a right-to-left representation.
     */
    rtlEnabled: boolean;
    /**
     * Specifies options for PolarChart widget series.
     */
    series: any | Array<any>;
    /**
     * Specifies whether a single series or multiple series can be selected in the chart.
     */
    seriesSelectionMode: string;
    /**
     * Defines options for the series template.
     */
    seriesTemplate: any;
    /**
     * Specifies the widget's size in pixels.
     */
    size: any;
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
     * Indicates whether or not to display a "spider web".
     */
    useSpiderWeb: boolean;
    /**
     * Specifies value axis options for the PolarChart widget.
     */
    valueAxis: any;
    /**
     * A handler for the argumentAxisClick event.
     */
    onArgumentAxisClick: EventEmitter<any>;
    /**
     * A handler for the disposing event. Executed when the widget is removed from the DOM using the remove(), empty(), or html() jQuery methods only.
     */
    onDisposing: EventEmitter<any>;
    /**
     * A handler for the done event.
     */
    onDone: EventEmitter<any>;
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
     * A handler for the legendClick event.
     */
    onLegendClick: EventEmitter<any>;
    /**
     * A handler for the optionChanged event. Executed after an option of the widget is changed.
     */
    onOptionChanged: EventEmitter<any>;
    /**
     * A handler for the pointClick event.
     */
    onPointClick: EventEmitter<any>;
    /**
     * A handler for the pointHoverChanged event.
     */
    onPointHoverChanged: EventEmitter<any>;
    /**
     * A handler for the pointSelectionChanged event.
     */
    onPointSelectionChanged: EventEmitter<any>;
    /**
     * A handler for the seriesClick event.
     */
    onSeriesClick: EventEmitter<any>;
    /**
     * A handler for the seriesHoverChanged event.
     */
    onSeriesHoverChanged: EventEmitter<any>;
    /**
     * A handler for the seriesSelectionChanged event.
     */
    onSeriesSelectionChanged: EventEmitter<any>;
    /**
     * A handler for the tooltipHidden event.
     */
    onTooltipHidden: EventEmitter<any>;
    /**
     * A handler for the tooltipShown event.
     */
    onTooltipShown: EventEmitter<any>;
    /**
     * A handler for the adaptiveLayoutChange event.
     */
    adaptiveLayoutChange: EventEmitter<any>;
    /**
     * A handler for the animationChange event.
     */
    animationChange: EventEmitter<boolean | {
        duration?: number;
        easing?: string;
        enabled?: boolean;
        maxPointCountSupported?: number;
    }>;
    /**
     * A handler for the argumentAxisChange event.
     */
    argumentAxisChange: EventEmitter<any>;
    /**
     * A handler for the barWidthChange event.
     */
    barWidthChange: EventEmitter<number>;
    /**
     * A handler for the commonAxisSettingsChange event.
     */
    commonAxisSettingsChange: EventEmitter<any>;
    /**
     * A handler for the commonSeriesSettingsChange event.
     */
    commonSeriesSettingsChange: EventEmitter<any>;
    /**
     * A handler for the containerBackgroundColorChange event.
     */
    containerBackgroundColorChange: EventEmitter<string>;
    /**
     * A handler for the customizeLabelChange event.
     */
    customizeLabelChange: EventEmitter<Function>;
    /**
     * A handler for the customizePointChange event.
     */
    customizePointChange: EventEmitter<Function>;
    /**
     * A handler for the dataPrepareSettingsChange event.
     */
    dataPrepareSettingsChange: EventEmitter<any>;
    /**
     * A handler for the dataSourceChange event.
     */
    dataSourceChange: EventEmitter<DevExpress.data.DataSource | DevExpress.data.DataSourceOptions | string | Array<any>>;
    /**
     * A handler for the elementAttrChange event.
     */
    elementAttrChange: EventEmitter<any>;
    /**
     * A handler for the equalBarWidthChange event.
     */
    equalBarWidthChange: EventEmitter<boolean>;
    /**
     * A handler for the exportChange event.
     */
    exportChange: EventEmitter<any>;
    /**
     * A handler for the legendChange event.
     */
    legendChange: EventEmitter<any>;
    /**
     * A handler for the loadingIndicatorChange event.
     */
    loadingIndicatorChange: EventEmitter<any>;
    /**
     * A handler for the marginChange event.
     */
    marginChange: EventEmitter<any>;
    /**
     * A handler for the negativesAsZeroesChange event.
     */
    negativesAsZeroesChange: EventEmitter<boolean>;
    /**
     * A handler for the paletteChange event.
     */
    paletteChange: EventEmitter<string | Array<string>>;
    /**
     * A handler for the pathModifiedChange event.
     */
    pathModifiedChange: EventEmitter<boolean>;
    /**
     * A handler for the pointSelectionModeChange event.
     */
    pointSelectionModeChange: EventEmitter<string>;
    /**
     * A handler for the redrawOnResizeChange event.
     */
    redrawOnResizeChange: EventEmitter<boolean>;
    /**
     * A handler for the resolveLabelOverlappingChange event.
     */
    resolveLabelOverlappingChange: EventEmitter<string>;
    /**
     * A handler for the rtlEnabledChange event.
     */
    rtlEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the seriesChange event.
     */
    seriesChange: EventEmitter<any | Array<any>>;
    /**
     * A handler for the seriesSelectionModeChange event.
     */
    seriesSelectionModeChange: EventEmitter<string>;
    /**
     * A handler for the seriesTemplateChange event.
     */
    seriesTemplateChange: EventEmitter<any>;
    /**
     * A handler for the sizeChange event.
     */
    sizeChange: EventEmitter<any>;
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
     * A handler for the useSpiderWebChange event.
     */
    useSpiderWebChange: EventEmitter<boolean>;
    /**
     * A handler for the valueAxisChange event.
     */
    valueAxisChange: EventEmitter<any>;
    seriesChildren: QueryList<DxiSeriesComponent>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper, optionHost: NestedOptionHost);
    protected _createInstance(element: any, options: any): DxPolarChart;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    setupChanges(prop: string, changes: SimpleChanges): void;
    ngDoCheck(): void;
    _setOption(name: string, value: any): void;
}
export declare class DxPolarChartModule {
}
