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
import DxVectorMap from 'devextreme/viz/vector_map';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
import { DxiLayerComponent } from './nested/layer-dxi';
import { DxiLegendComponent } from './nested/legend-dxi';
import { DxiMarkerComponent } from './nested/marker-dxi';
/**
 * The VectorMap is a widget that visualizes geographical locations. This widget represents a geographical map that contains areas and markers. Areas embody continents and countries. Markers flag specific points on the map, for example, towns, cities or capitals.
 */
export declare class DxVectorMapComponent extends DxComponent implements OnDestroy, OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxVectorMap;
    /**
     * Use the "area" type element of the layers array.
     */
    areaSettings: any;
    /**
     * Specifies the options for the map background.
     */
    background: any;
    /**
     * Specifies the positioning of a map in geographical coordinates.
     */
    bounds: Array<number>;
    /**
     * Specifies the geographical coordinates of the center for a map.
     */
    center: Array<number>;
    /**
     * Specifies the options of the control bar.
     */
    controlBar: any;
    /**
     * Specifies the attributes to be attached to the widget's root element.
     */
    elementAttr: any;
    /**
     * Configures the exporting and printing features.
     */
    export: any;
    /**
     * Specifies options for VectorMap widget layers.
     */
    layers: Array<any | {
        borderColor?: string;
        borderWidth?: number;
        color?: string;
        colorGroupingField?: string;
        colorGroups?: Array<number>;
        customize?: Function;
        data?: any | DevExpress.data.DataSource | DevExpress.data.DataSourceOptions;
        dataField?: string;
        dataSource?: any | DevExpress.data.DataSource | DevExpress.data.DataSourceOptions | string;
        elementType?: string;
        hoveredBorderColor?: string;
        hoveredBorderWidth?: number;
        hoveredColor?: string;
        hoverEnabled?: boolean;
        label?: {
            dataField?: string;
            enabled?: boolean;
            font?: DevExpress.viz.Font;
        };
        maxSize?: number;
        minSize?: number;
        name?: string;
        opacity?: number;
        palette?: string | Array<string>;
        paletteSize?: number;
        selectedBorderColor?: string;
        selectedBorderWidth?: number;
        selectedColor?: string;
        selectionMode?: string;
        size?: number;
        sizeGroupingField?: string;
        sizeGroups?: Array<number>;
        type?: string;
    }>;
    /**
     * Configures map legends.
     */
    legends: Array<any | {
        backgroundColor?: string;
        border?: {
            color?: string;
            cornerRadius?: number;
            dashStyle?: string;
            opacity?: number;
            visible?: boolean;
            width?: number;
        };
        columnCount?: number;
        columnItemSpacing?: number;
        customizeHint?: Function;
        customizeText?: Function;
        font?: DevExpress.viz.Font;
        horizontalAlignment?: string;
        itemsAlignment?: string;
        itemTextPosition?: string;
        margin?: number | {
            bottom?: number;
            left?: number;
            right?: number;
            top?: number;
        };
        markerColor?: string;
        markerShape?: string;
        markerSize?: number;
        orientation?: string;
        paddingLeftRight?: number;
        paddingTopBottom?: number;
        rowCount?: number;
        rowItemSpacing?: number;
        source?: {
            grouping?: string;
            layer?: string;
        };
        verticalAlignment?: string;
        visible?: boolean;
    }>;
    /**
     * Configures the loading indicator.
     */
    loadingIndicator: any;
    /**
     * Use the layers.dataSource option instead.
     */
    mapData: string | Array<string>;
    /**
     * Use the layers.dataSource option instead.
     */
    markers: string | Array<any | {
        attributes?: any;
        coordinates?: Array<number>;
        text?: string;
        url?: string;
        value?: number;
        values?: Array<number>;
    }>;
    /**
     * Use the "marker" type element of the layers array.
     */
    markerSettings: any;
    /**
     * Specifies a map's maximum zoom factor.
     */
    maxZoomFactor: number;
    /**
     * Disables the panning capability.
     */
    panningEnabled: boolean;
    /**
     * Notifies the widget that it is embedded into an HTML page that uses a tag modifying the path.
     */
    pathModified: boolean;
    /**
     * Specifies the map projection.
     */
    projection: any;
    /**
     * Specifies whether to redraw the widget when the size of the parent browser window changes or a mobile device rotates.
     */
    redrawOnResize: boolean;
    /**
     * Switches the widget to a right-to-left representation.
     */
    rtlEnabled: boolean;
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
     * Specifies whether the map should respond to touch gestures.
     */
    touchEnabled: boolean;
    /**
     * Specifies whether or not the map should respond when a user rolls the mouse wheel.
     */
    wheelEnabled: boolean;
    /**
     * Specifies a number that is used to zoom a map initially.
     */
    zoomFactor: number;
    /**
     * Disables the zooming capability.
     */
    zoomingEnabled: boolean;
    /**
     * Use the onClick option instead.
     */
    onAreaClick: EventEmitter<any>;
    /**
     * Use the onSelectionChanged option instead.
     */
    onAreaSelectionChanged: EventEmitter<any>;
    /**
     * A handler for the centerChanged event.
     */
    onCenterChanged: EventEmitter<any>;
    /**
     * A handler for the click event.
     */
    onClick: EventEmitter<any>;
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
     * Use the onClick option instead.
     */
    onMarkerClick: EventEmitter<any>;
    /**
     * Use the onSelecitonChanged option instead.
     */
    onMarkerSelectionChanged: EventEmitter<any>;
    /**
     * A handler for the optionChanged event. Executed after an option of the widget is changed.
     */
    onOptionChanged: EventEmitter<any>;
    /**
     * A handler for the selectionChanged event.
     */
    onSelectionChanged: EventEmitter<any>;
    /**
     * A handler for the tooltipHidden event.
     */
    onTooltipHidden: EventEmitter<any>;
    /**
     * A handler for the tooltipShown event.
     */
    onTooltipShown: EventEmitter<any>;
    /**
     * A handler for the zoomFactorChanged event.
     */
    onZoomFactorChanged: EventEmitter<any>;
    /**
     * A handler for the areaSettingsChange event.
     */
    areaSettingsChange: EventEmitter<any>;
    /**
     * A handler for the backgroundChange event.
     */
    backgroundChange: EventEmitter<any>;
    /**
     * A handler for the boundsChange event.
     */
    boundsChange: EventEmitter<Array<number>>;
    /**
     * A handler for the centerChange event.
     */
    centerChange: EventEmitter<Array<number>>;
    /**
     * A handler for the controlBarChange event.
     */
    controlBarChange: EventEmitter<any>;
    /**
     * A handler for the elementAttrChange event.
     */
    elementAttrChange: EventEmitter<any>;
    /**
     * A handler for the exportChange event.
     */
    exportChange: EventEmitter<any>;
    /**
     * A handler for the layersChange event.
     */
    layersChange: EventEmitter<Array<any | {
        borderColor?: string;
        borderWidth?: number;
        color?: string;
        colorGroupingField?: string;
        colorGroups?: Array<number>;
        customize?: Function;
        data?: any | DevExpress.data.DataSource | DevExpress.data.DataSourceOptions;
        dataField?: string;
        dataSource?: any | DevExpress.data.DataSource | DevExpress.data.DataSourceOptions | string;
        elementType?: string;
        hoveredBorderColor?: string;
        hoveredBorderWidth?: number;
        hoveredColor?: string;
        hoverEnabled?: boolean;
        label?: {
            dataField?: string;
            enabled?: boolean;
            font?: DevExpress.viz.Font;
        };
        maxSize?: number;
        minSize?: number;
        name?: string;
        opacity?: number;
        palette?: string | Array<string>;
        paletteSize?: number;
        selectedBorderColor?: string;
        selectedBorderWidth?: number;
        selectedColor?: string;
        selectionMode?: string;
        size?: number;
        sizeGroupingField?: string;
        sizeGroups?: Array<number>;
        type?: string;
    }>>;
    /**
     * A handler for the legendsChange event.
     */
    legendsChange: EventEmitter<Array<any | {
        backgroundColor?: string;
        border?: {
            color?: string;
            cornerRadius?: number;
            dashStyle?: string;
            opacity?: number;
            visible?: boolean;
            width?: number;
        };
        columnCount?: number;
        columnItemSpacing?: number;
        customizeHint?: Function;
        customizeText?: Function;
        font?: DevExpress.viz.Font;
        horizontalAlignment?: string;
        itemsAlignment?: string;
        itemTextPosition?: string;
        margin?: number | {
            bottom?: number;
            left?: number;
            right?: number;
            top?: number;
        };
        markerColor?: string;
        markerShape?: string;
        markerSize?: number;
        orientation?: string;
        paddingLeftRight?: number;
        paddingTopBottom?: number;
        rowCount?: number;
        rowItemSpacing?: number;
        source?: {
            grouping?: string;
            layer?: string;
        };
        verticalAlignment?: string;
        visible?: boolean;
    }>>;
    /**
     * A handler for the loadingIndicatorChange event.
     */
    loadingIndicatorChange: EventEmitter<any>;
    /**
     * A handler for the mapDataChange event.
     */
    mapDataChange: EventEmitter<string | Array<string>>;
    /**
     * A handler for the markersChange event.
     */
    markersChange: EventEmitter<string | Array<any | {
        attributes?: any;
        coordinates?: Array<number>;
        text?: string;
        url?: string;
        value?: number;
        values?: Array<number>;
    }>>;
    /**
     * A handler for the markerSettingsChange event.
     */
    markerSettingsChange: EventEmitter<any>;
    /**
     * A handler for the maxZoomFactorChange event.
     */
    maxZoomFactorChange: EventEmitter<number>;
    /**
     * A handler for the panningEnabledChange event.
     */
    panningEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the pathModifiedChange event.
     */
    pathModifiedChange: EventEmitter<boolean>;
    /**
     * A handler for the projectionChange event.
     */
    projectionChange: EventEmitter<any>;
    /**
     * A handler for the redrawOnResizeChange event.
     */
    redrawOnResizeChange: EventEmitter<boolean>;
    /**
     * A handler for the rtlEnabledChange event.
     */
    rtlEnabledChange: EventEmitter<boolean>;
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
     * A handler for the touchEnabledChange event.
     */
    touchEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the wheelEnabledChange event.
     */
    wheelEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the zoomFactorChange event.
     */
    zoomFactorChange: EventEmitter<number>;
    /**
     * A handler for the zoomingEnabledChange event.
     */
    zoomingEnabledChange: EventEmitter<boolean>;
    layersChildren: QueryList<DxiLayerComponent>;
    legendsChildren: QueryList<DxiLegendComponent>;
    markersChildren: QueryList<DxiMarkerComponent>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper, optionHost: NestedOptionHost);
    protected _createInstance(element: any, options: any): DxVectorMap;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    setupChanges(prop: string, changes: SimpleChanges): void;
    ngDoCheck(): void;
    _setOption(name: string, value: any): void;
}
export declare class DxVectorMapModule {
}
