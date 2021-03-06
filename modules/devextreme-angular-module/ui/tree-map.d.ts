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
import DxTreeMap from 'devextreme/viz/tree_map';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
/**
 * The TreeMap is a widget that displays hierarchical data by using nested rectangles.
 */
export declare class DxTreeMapComponent extends DxComponent implements OnDestroy, OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxTreeMap;
    /**
     * Specifies the name of the data source field that provides nested items for a group. Applies to hierarchical data sources only.
     */
    childrenField: string;
    /**
     * Specifies the name of the data source field that provides colors for tiles.
     */
    colorField: string;
    /**
     * Manages the color settings.
     */
    colorizer: any;
    /**
     * Specifies the origin of data for the widget.
     */
    dataSource: DevExpress.data.DataSource | DevExpress.data.DataSourceOptions | string | Array<any>;
    /**
     * Specifies the attributes to be attached to the widget's root element.
     */
    elementAttr: any;
    /**
     * Configures the exporting and printing features.
     */
    export: any;
    /**
     * Configures groups.
     */
    group: any;
    /**
     * Specifies whether tiles and groups change their style when a user pauses on them.
     */
    hoverEnabled: boolean;
    /**
     * Specifies the name of the data source field that provides IDs for items. Applies to plain data sources only.
     */
    idField: string;
    /**
     * Specifies whether the user will interact with a single tile or its group.
     */
    interactWithGroup: boolean;
    /**
     * Specifies the name of the data source field that provides texts for tile and group labels.
     */
    labelField: string;
    /**
     * Specifies the layout algorithm.
     */
    layoutAlgorithm: Function | string;
    /**
     * Specifies the direction in which the items will be laid out.
     */
    layoutDirection: string;
    /**
     * Configures the loading indicator.
     */
    loadingIndicator: any;
    /**
     * Specifies how many hierarchical levels must be visualized.
     */
    maxDepth: number;
    /**
     * Specifies the name of the data source field that provides parent IDs for items. Applies to plain data sources only.
     */
    parentField: string;
    /**
     * Notifies the widget that it is embedded into an HTML page that uses a tag modifying the path.
     */
    pathModified: boolean;
    /**
     * Specifies whether to redraw the widget when the size of the parent browser window changes or a mobile device rotates.
     */
    redrawOnResize: boolean;
    /**
     * Decides whether those labels that overflow their tile/group should be hidden or truncated with ellipsis.
     */
    resolveLabelOverflow: string;
    /**
     * Switches the widget to a right-to-left representation.
     */
    rtlEnabled: boolean;
    /**
     * Specifies whether a single or multiple nodes can be in the selected state simultaneously.
     */
    selectionMode: string;
    /**
     * Specifies the widget's size in pixels.
     */
    size: any;
    /**
     * Sets the name of the theme the widget uses.
     */
    theme: string;
    /**
     * Configures tiles.
     */
    tile: any;
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
     * Configures tooltips - small pop-up rectangles that display information about a data-visualizing widget element being pressed or hovered over with the mouse pointer.
     */
    tooltip: any;
    /**
     * Specifies the name of the data source field that provides values for tiles.
     */
    valueField: string;
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
     * A handler for the drill event.
     */
    onDrill: EventEmitter<any>;
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
     * A handler for the hoverChanged event.
     */
    onHoverChanged: EventEmitter<any>;
    /**
     * A handler for the incidentOccurred event. Executed when an error or warning appears in the widget.
     */
    onIncidentOccurred: EventEmitter<any>;
    /**
     * A handler for the initialized event. Executed only once, after the widget is initialized.
     */
    onInitialized: EventEmitter<any>;
    /**
     * A handler for the nodesInitialized event.
     */
    onNodesInitialized: EventEmitter<any>;
    /**
     * A handler for the nodesRendering event.
     */
    onNodesRendering: EventEmitter<any>;
    /**
     * A handler for the optionChanged event. Executed after an option of the widget is changed.
     */
    onOptionChanged: EventEmitter<any>;
    /**
     * A handler for the selectionChanged event.
     */
    onSelectionChanged: EventEmitter<any>;
    /**
     * A handler for the childrenFieldChange event.
     */
    childrenFieldChange: EventEmitter<string>;
    /**
     * A handler for the colorFieldChange event.
     */
    colorFieldChange: EventEmitter<string>;
    /**
     * A handler for the colorizerChange event.
     */
    colorizerChange: EventEmitter<any>;
    /**
     * A handler for the dataSourceChange event.
     */
    dataSourceChange: EventEmitter<DevExpress.data.DataSource | DevExpress.data.DataSourceOptions | string | Array<any>>;
    /**
     * A handler for the elementAttrChange event.
     */
    elementAttrChange: EventEmitter<any>;
    /**
     * A handler for the exportChange event.
     */
    exportChange: EventEmitter<any>;
    /**
     * A handler for the groupChange event.
     */
    groupChange: EventEmitter<any>;
    /**
     * A handler for the hoverEnabledChange event.
     */
    hoverEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the idFieldChange event.
     */
    idFieldChange: EventEmitter<string>;
    /**
     * A handler for the interactWithGroupChange event.
     */
    interactWithGroupChange: EventEmitter<boolean>;
    /**
     * A handler for the labelFieldChange event.
     */
    labelFieldChange: EventEmitter<string>;
    /**
     * A handler for the layoutAlgorithmChange event.
     */
    layoutAlgorithmChange: EventEmitter<Function | string>;
    /**
     * A handler for the layoutDirectionChange event.
     */
    layoutDirectionChange: EventEmitter<string>;
    /**
     * A handler for the loadingIndicatorChange event.
     */
    loadingIndicatorChange: EventEmitter<any>;
    /**
     * A handler for the maxDepthChange event.
     */
    maxDepthChange: EventEmitter<number>;
    /**
     * A handler for the parentFieldChange event.
     */
    parentFieldChange: EventEmitter<string>;
    /**
     * A handler for the pathModifiedChange event.
     */
    pathModifiedChange: EventEmitter<boolean>;
    /**
     * A handler for the redrawOnResizeChange event.
     */
    redrawOnResizeChange: EventEmitter<boolean>;
    /**
     * A handler for the resolveLabelOverflowChange event.
     */
    resolveLabelOverflowChange: EventEmitter<string>;
    /**
     * A handler for the rtlEnabledChange event.
     */
    rtlEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the selectionModeChange event.
     */
    selectionModeChange: EventEmitter<string>;
    /**
     * A handler for the sizeChange event.
     */
    sizeChange: EventEmitter<any>;
    /**
     * A handler for the themeChange event.
     */
    themeChange: EventEmitter<string>;
    /**
     * A handler for the tileChange event.
     */
    tileChange: EventEmitter<any>;
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
     * A handler for the valueFieldChange event.
     */
    valueFieldChange: EventEmitter<string>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper, optionHost: NestedOptionHost);
    protected _createInstance(element: any, options: any): DxTreeMap;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    setupChanges(prop: string, changes: SimpleChanges): void;
    ngDoCheck(): void;
    _setOption(name: string, value: any): void;
}
export declare class DxTreeMapModule {
}
