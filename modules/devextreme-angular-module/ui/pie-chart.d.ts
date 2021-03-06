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
import DxPieChart from 'devextreme/viz/pie_chart';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
import { DxiSeriesComponent } from './nested/series-dxi';
/**
 * The PieChart is a widget that visualizes data as a circle divided into sectors that each represents a portion of the whole.
 */
export declare class DxPieChartComponent extends DxComponent implements OnDestroy, OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxPieChart;
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
     * An object defining the configuration options that are common for all series of the PieChart widget.
     */
    commonSeriesSettings: any;
    /**
     * Customizes the appearance of an individual point label.
     */
    customizeLabel: Function;
    /**
     * Customizes the appearance of an individual series point.
     */
    customizePoint: Function;
    /**
     * Specifies the widget's data origin.
     */
    dataSource: DevExpress.data.DataSource | DevExpress.data.DataSourceOptions | string | Array<any>;
    /**
     * Specifies the diameter of the pie.
     */
    diameter: number;
    /**
     * Specifies the attributes to be attached to the widget's root element.
     */
    elementAttr: any;
    /**
     * Configures the exporting and printing features.
     */
    export: any;
    /**
     * Specifies the fraction of the inner radius relative to the total radius in the series of the 'doughnut' type. The value should be between 0 and 1.
     */
    innerRadius: number;
    /**
     * Specifies PieChart legend options.
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
     * Specifies the minimum diameter of the pie.
     */
    minDiameter: number;
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
     * Specifies how a chart must behave when point labels overlap.
     */
    resolveLabelOverlapping: string;
    /**
     * Switches the widget to a right-to-left representation.
     */
    rtlEnabled: boolean;
    /**
     * Specifies the direction that the pie chart segments will occupy.
     */
    segmentsDirection: string;
    /**
     * Specifies options for the series of the PieChart widget.
     */
    series: any | Array<any>;
    /**
     * Defines options for the series template.
     */
    seriesTemplate: any;
    /**
     * Specifies the widget's size in pixels.
     */
    size: any;
    /**
     * Allows you to display several adjoining pies in the same size.
     */
    sizeGroup: string;
    /**
     * Specifies the angle in arc degrees from which the first segment of a pie chart should start.
     */
    startAngle: number;
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
     * Specifies the type of the pie chart series.
     */
    type: string;
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
     * A handler for the commonSeriesSettingsChange event.
     */
    commonSeriesSettingsChange: EventEmitter<any>;
    /**
     * A handler for the customizeLabelChange event.
     */
    customizeLabelChange: EventEmitter<Function>;
    /**
     * A handler for the customizePointChange event.
     */
    customizePointChange: EventEmitter<Function>;
    /**
     * A handler for the dataSourceChange event.
     */
    dataSourceChange: EventEmitter<DevExpress.data.DataSource | DevExpress.data.DataSourceOptions | string | Array<any>>;
    /**
     * A handler for the diameterChange event.
     */
    diameterChange: EventEmitter<number>;
    /**
     * A handler for the elementAttrChange event.
     */
    elementAttrChange: EventEmitter<any>;
    /**
     * A handler for the exportChange event.
     */
    exportChange: EventEmitter<any>;
    /**
     * A handler for the innerRadiusChange event.
     */
    innerRadiusChange: EventEmitter<number>;
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
     * A handler for the minDiameterChange event.
     */
    minDiameterChange: EventEmitter<number>;
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
     * A handler for the segmentsDirectionChange event.
     */
    segmentsDirectionChange: EventEmitter<string>;
    /**
     * A handler for the seriesChange event.
     */
    seriesChange: EventEmitter<any | Array<any>>;
    /**
     * A handler for the seriesTemplateChange event.
     */
    seriesTemplateChange: EventEmitter<any>;
    /**
     * A handler for the sizeChange event.
     */
    sizeChange: EventEmitter<any>;
    /**
     * A handler for the sizeGroupChange event.
     */
    sizeGroupChange: EventEmitter<string>;
    /**
     * A handler for the startAngleChange event.
     */
    startAngleChange: EventEmitter<number>;
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
     * A handler for the typeChange event.
     */
    typeChange: EventEmitter<string>;
    seriesChildren: QueryList<DxiSeriesComponent>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper, optionHost: NestedOptionHost);
    protected _createInstance(element: any, options: any): DxPieChart;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    setupChanges(prop: string, changes: SimpleChanges): void;
    ngDoCheck(): void;
    _setOption(name: string, value: any): void;
}
export declare class DxPieChartModule {
}
