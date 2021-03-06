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
import DxChart from 'devextreme/viz/chart';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
import { DxiPaneComponent } from './nested/pane-dxi';
import { DxiSeriesComponent } from './nested/series-dxi';
import { DxiValueAxisComponent } from './nested/value-axis-dxi';
/**
 * The Chart is a widget that visualizes data from a local or remote storage using a great variety of series types along with different interactive elements, such as tooltips, crosshair pointer, legend, etc.
 */
export declare class DxChartComponent extends DxComponent implements OnDestroy, OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxChart;
    /**
     * Specifies adaptive layout options.
     */
    adaptiveLayout: any;
    /**
     * Specifies whether or not to adjust the value axis when zooming the widget.
     */
    adjustOnZoom: boolean;
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
     * Configures the argument axis.
     */
    argumentAxis: any;
    /**
     * Controls the width of bars in the widget. Applies only to bar-like series and when the equalBarWidth option is true.
     */
    barWidth: number;
    /**
     * Defines common settings for both the argument and value axis in a chart.
     */
    commonAxisSettings: any;
    /**
     * Defines common settings for all panes in a chart.
     */
    commonPaneSettings: any;
    /**
     * Specifies settings common for all series in the chart.
     */
    commonSeriesSettings: any;
    /**
     * Colors the background of the chart container.
     */
    containerBackgroundColor: string;
    /**
     * Configures the crosshair feature.
     */
    crosshair: any;
    /**
     * Customizes the appearance of an individual point label.
     */
    customizeLabel: Function;
    /**
     * Customizes the appearance of an individual series point.
     */
    customizePoint: Function;
    /**
     * Processes data before visualizing it.
     */
    dataPrepareSettings: any;
    /**
     * Specifies the widget's data origin.
     */
    dataSource: DevExpress.data.DataSource | DevExpress.data.DataSourceOptions | string | Array<any>;
    /**
     * Specifies which pane should be used by default.
     */
    defaultPane: string;
    /**
     * Specifies the attributes to be attached to the widget's root element.
     */
    elementAttr: any;
    /**
     * Specifies whether all bars should have equal width, even if some values are missing from a series. Applies only to bar-like series.
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
     * Specifies a coefficient determining the diameter of the largest bubble.
     */
    maxBubbleSize: number;
    /**
     * Specifies the diameter of the smallest bubble measured in pixels.
     */
    minBubbleSize: number;
    /**
     * Forces the widget to treat negative values as zeroes. Applies to stacked-like series only.
     */
    negativesAsZeroes: boolean;
    /**
     * Sets the name of the palette to be used in the chart. Alternatively, an array of colors can be set as a custom palette to be used within this chart.
     */
    palette: string | Array<string>;
    /**
     * Declares a collection of panes.
     */
    panes: Array<any | {
        backgroundColor?: string;
        border?: {
            bottom?: boolean;
            color?: string;
            dashStyle?: string;
            left?: boolean;
            opacity?: number;
            right?: boolean;
            top?: boolean;
            visible?: boolean;
            width?: number;
        };
        name?: string;
    }>;
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
     * Swaps the axes around making the value axis horizontal and the argument axis vertical.
     */
    rotated: boolean;
    /**
     * Switches the widget to a right-to-left representation.
     */
    rtlEnabled: boolean;
    /**
     * Specifies the settings of the scroll bar.
     */
    scrollBar: any;
    /**
     * Enables scrolling in your chart.
     */
    scrollingMode: string;
    /**
     * Specifies options for Chart widget series.
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
     * Indicates whether or not to synchronize value axes when they are displayed on a single pane.
     */
    synchronizeMultiAxes: boolean;
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
     * Specifies whether or not to filter the series points depending on their quantity.
     */
    useAggregation: boolean;
    /**
     * Configures the value axis.
     */
    valueAxis: Array<any | {
        allowDecimals?: boolean;
        autoBreaksEnabled?: boolean;
        axisDivisionFactor?: number;
        breaks?: Array<DevExpress.viz.ScaleBreak | {
            endValue?: Date | number | string;
            startValue?: Date | number | string;
        }>;
        breakStyle?: {
            color?: string;
            line?: string;
            width?: number;
        };
        categories?: Array<number | string | Date>;
        color?: string;
        constantLines?: Array<any | {
            color?: string;
            dashStyle?: string;
            label?: {
                font?: DevExpress.viz.Font;
                horizontalAlignment?: string;
                position?: string;
                text?: string;
                verticalAlignment?: string;
                visible?: boolean;
            };
            paddingLeftRight?: number;
            paddingTopBottom?: number;
            value?: Date | number | string;
            width?: number;
        }>;
        constantLineStyle?: {
            color?: string;
            dashStyle?: string;
            label?: {
                font?: DevExpress.viz.Font;
                horizontalAlignment?: string;
                position?: string;
                verticalAlignment?: string;
                visible?: boolean;
            };
            paddingLeftRight?: number;
            paddingTopBottom?: number;
            width?: number;
        };
        discreteAxisDivisionMode?: string;
        endOnTick?: boolean;
        grid?: {
            color?: string;
            opacity?: number;
            visible?: boolean;
            width?: number;
        };
        inverted?: boolean;
        label?: {
            alignment?: string;
            customizeHint?: Function;
            customizeText?: Function;
            displayMode?: string;
            font?: DevExpress.viz.Font;
            format?: DevExpress.ui.format | string;
            indentFromAxis?: number;
            overlappingBehavior?: string | {
                mode?: string;
                rotationAngle?: number;
                staggeringSpacing?: number;
            };
            precision?: number;
            rotationAngle?: number;
            staggeringSpacing?: number;
            visible?: boolean;
        };
        logarithmBase?: number;
        max?: Date | number | string;
        maxAutoBreakCount?: number;
        maxValueMargin?: number;
        min?: Date | number | string;
        minorGrid?: {
            color?: string;
            opacity?: number;
            visible?: boolean;
            width?: number;
        };
        minorTick?: {
            color?: string;
            length?: number;
            opacity?: number;
            visible?: boolean;
            width?: number;
        };
        minorTickCount?: number;
        minorTickInterval?: number | string | {
            days?: number;
            hours?: number;
            milliseconds?: number;
            minutes?: number;
            months?: number;
            quarters?: number;
            seconds?: number;
            weeks?: number;
            years?: number;
        };
        minValueMargin?: number;
        multipleAxesSpacing?: number;
        name?: string;
        opacity?: number;
        pane?: string;
        placeholderSize?: number;
        position?: string;
        setTicksAtUnitBeginning?: boolean;
        showZero?: boolean;
        strips?: Array<any | {
            color?: string;
            endValue?: Date | number | string;
            label?: {
                font?: DevExpress.viz.Font;
                horizontalAlignment?: string;
                text?: string;
                verticalAlignment?: string;
            };
            paddingLeftRight?: number;
            paddingTopBottom?: number;
            startValue?: Date | number | string;
        }>;
        stripStyle?: {
            label?: {
                font?: DevExpress.viz.Font;
                horizontalAlignment?: string;
                verticalAlignment?: string;
            };
            paddingLeftRight?: number;
            paddingTopBottom?: number;
        };
        synchronizedValue?: number;
        tick?: {
            color?: string;
            length?: number;
            opacity?: number;
            visible?: boolean;
            width?: number;
        };
        tickInterval?: number | string | {
            days?: number;
            hours?: number;
            milliseconds?: number;
            minutes?: number;
            months?: number;
            quarters?: number;
            seconds?: number;
            weeks?: number;
            years?: number;
        };
        title?: string | {
            font?: DevExpress.viz.Font;
            margin?: number;
            text?: string;
        };
        type?: string;
        valueMarginsEnabled?: boolean;
        valueType?: string;
        visible?: boolean;
        width?: number;
    }>;
    /**
     * Enables zooming in your chart.
     */
    zoomingMode: string;
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
     * A handler for the zoomEnd event.
     */
    onZoomEnd: EventEmitter<any>;
    /**
     * A handler for the zoomStart event.
     */
    onZoomStart: EventEmitter<any>;
    /**
     * A handler for the adaptiveLayoutChange event.
     */
    adaptiveLayoutChange: EventEmitter<any>;
    /**
     * A handler for the adjustOnZoomChange event.
     */
    adjustOnZoomChange: EventEmitter<boolean>;
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
     * A handler for the commonPaneSettingsChange event.
     */
    commonPaneSettingsChange: EventEmitter<any>;
    /**
     * A handler for the commonSeriesSettingsChange event.
     */
    commonSeriesSettingsChange: EventEmitter<any>;
    /**
     * A handler for the containerBackgroundColorChange event.
     */
    containerBackgroundColorChange: EventEmitter<string>;
    /**
     * A handler for the crosshairChange event.
     */
    crosshairChange: EventEmitter<any>;
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
     * A handler for the defaultPaneChange event.
     */
    defaultPaneChange: EventEmitter<string>;
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
     * A handler for the maxBubbleSizeChange event.
     */
    maxBubbleSizeChange: EventEmitter<number>;
    /**
     * A handler for the minBubbleSizeChange event.
     */
    minBubbleSizeChange: EventEmitter<number>;
    /**
     * A handler for the negativesAsZeroesChange event.
     */
    negativesAsZeroesChange: EventEmitter<boolean>;
    /**
     * A handler for the paletteChange event.
     */
    paletteChange: EventEmitter<string | Array<string>>;
    /**
     * A handler for the panesChange event.
     */
    panesChange: EventEmitter<Array<any | {
        backgroundColor?: string;
        border?: {
            bottom?: boolean;
            color?: string;
            dashStyle?: string;
            left?: boolean;
            opacity?: number;
            right?: boolean;
            top?: boolean;
            visible?: boolean;
            width?: number;
        };
        name?: string;
    }>>;
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
     * A handler for the rotatedChange event.
     */
    rotatedChange: EventEmitter<boolean>;
    /**
     * A handler for the rtlEnabledChange event.
     */
    rtlEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the scrollBarChange event.
     */
    scrollBarChange: EventEmitter<any>;
    /**
     * A handler for the scrollingModeChange event.
     */
    scrollingModeChange: EventEmitter<string>;
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
     * A handler for the synchronizeMultiAxesChange event.
     */
    synchronizeMultiAxesChange: EventEmitter<boolean>;
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
     * A handler for the useAggregationChange event.
     */
    useAggregationChange: EventEmitter<boolean>;
    /**
     * A handler for the valueAxisChange event.
     */
    valueAxisChange: EventEmitter<Array<any | {
        allowDecimals?: boolean;
        autoBreaksEnabled?: boolean;
        axisDivisionFactor?: number;
        breaks?: Array<DevExpress.viz.ScaleBreak | {
            endValue?: Date | number | string;
            startValue?: Date | number | string;
        }>;
        breakStyle?: {
            color?: string;
            line?: string;
            width?: number;
        };
        categories?: Array<number | string | Date>;
        color?: string;
        constantLines?: Array<any | {
            color?: string;
            dashStyle?: string;
            label?: {
                font?: DevExpress.viz.Font;
                horizontalAlignment?: string;
                position?: string;
                text?: string;
                verticalAlignment?: string;
                visible?: boolean;
            };
            paddingLeftRight?: number;
            paddingTopBottom?: number;
            value?: Date | number | string;
            width?: number;
        }>;
        constantLineStyle?: {
            color?: string;
            dashStyle?: string;
            label?: {
                font?: DevExpress.viz.Font;
                horizontalAlignment?: string;
                position?: string;
                verticalAlignment?: string;
                visible?: boolean;
            };
            paddingLeftRight?: number;
            paddingTopBottom?: number;
            width?: number;
        };
        discreteAxisDivisionMode?: string;
        endOnTick?: boolean;
        grid?: {
            color?: string;
            opacity?: number;
            visible?: boolean;
            width?: number;
        };
        inverted?: boolean;
        label?: {
            alignment?: string;
            customizeHint?: Function;
            customizeText?: Function;
            displayMode?: string;
            font?: DevExpress.viz.Font;
            format?: DevExpress.ui.format | string;
            indentFromAxis?: number;
            overlappingBehavior?: string | {
                mode?: string;
                rotationAngle?: number;
                staggeringSpacing?: number;
            };
            precision?: number;
            rotationAngle?: number;
            staggeringSpacing?: number;
            visible?: boolean;
        };
        logarithmBase?: number;
        max?: Date | number | string;
        maxAutoBreakCount?: number;
        maxValueMargin?: number;
        min?: Date | number | string;
        minorGrid?: {
            color?: string;
            opacity?: number;
            visible?: boolean;
            width?: number;
        };
        minorTick?: {
            color?: string;
            length?: number;
            opacity?: number;
            visible?: boolean;
            width?: number;
        };
        minorTickCount?: number;
        minorTickInterval?: number | string | {
            days?: number;
            hours?: number;
            milliseconds?: number;
            minutes?: number;
            months?: number;
            quarters?: number;
            seconds?: number;
            weeks?: number;
            years?: number;
        };
        minValueMargin?: number;
        multipleAxesSpacing?: number;
        name?: string;
        opacity?: number;
        pane?: string;
        placeholderSize?: number;
        position?: string;
        setTicksAtUnitBeginning?: boolean;
        showZero?: boolean;
        strips?: Array<any | {
            color?: string;
            endValue?: Date | number | string;
            label?: {
                font?: DevExpress.viz.Font;
                horizontalAlignment?: string;
                text?: string;
                verticalAlignment?: string;
            };
            paddingLeftRight?: number;
            paddingTopBottom?: number;
            startValue?: Date | number | string;
        }>;
        stripStyle?: {
            label?: {
                font?: DevExpress.viz.Font;
                horizontalAlignment?: string;
                verticalAlignment?: string;
            };
            paddingLeftRight?: number;
            paddingTopBottom?: number;
        };
        synchronizedValue?: number;
        tick?: {
            color?: string;
            length?: number;
            opacity?: number;
            visible?: boolean;
            width?: number;
        };
        tickInterval?: number | string | {
            days?: number;
            hours?: number;
            milliseconds?: number;
            minutes?: number;
            months?: number;
            quarters?: number;
            seconds?: number;
            weeks?: number;
            years?: number;
        };
        title?: string | {
            font?: DevExpress.viz.Font;
            margin?: number;
            text?: string;
        };
        type?: string;
        valueMarginsEnabled?: boolean;
        valueType?: string;
        visible?: boolean;
        width?: number;
    }>>;
    /**
     * A handler for the zoomingModeChange event.
     */
    zoomingModeChange: EventEmitter<string>;
    panesChildren: QueryList<DxiPaneComponent>;
    seriesChildren: QueryList<DxiSeriesComponent>;
    valueAxisChildren: QueryList<DxiValueAxisComponent>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper, optionHost: NestedOptionHost);
    protected _createInstance(element: any, options: any): DxChart;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    setupChanges(prop: string, changes: SimpleChanges): void;
    ngDoCheck(): void;
    _setOption(name: string, value: any): void;
}
export declare class DxChartModule {
}
