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
import DxFunnel from 'devextreme/viz/funnel';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
/**
 * The Funnel is a widget that visualizes a value at different stages. It helps assess value changes throughout these stages and identify potential issues. The Funnel widget conveys information using different interactive elements (tooltips, labels, legend) and enables you to create not only a funnel, but also a pyramid chart.
 */
export declare class DxFunnelComponent extends DxComponent implements OnDestroy, OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxFunnel;
    /**
     * Specifies adaptive layout options.
     */
    adaptiveLayout: any;
    /**
     * Specifies the algorithm for building the funnel.
     */
    algorithm: string;
    /**
     * Specifies which data source field provides arguments for funnel items. The argument identifies a funnel item and represents it on the legend.
     */
    argumentField: string;
    /**
     * Specifies which data source field provides colors for funnel items. If this field is absent, the palette provides the colors.
     */
    colorField: string;
    /**
     * Specifies the widget's data origin.
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
     * Specifies whether funnel items change their style when a user pauses on them.
     */
    hoverEnabled: boolean;
    /**
     * Turns the funnel upside down.
     */
    inverted: boolean;
    /**
     * Configures funnel items' appearance.
     */
    item: any;
    /**
     * Configures funnel item labels.
     */
    label: any;
    /**
     * Configures the legend.
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
     * Specifies the ratio between the height of the neck and that of the whole funnel. Accepts values from 0 to 1. Applies only if the algorithm is "dynamicHeight".
     */
    neckHeight: number;
    /**
     * Specifies the ratio between the width of the neck and that of the whole funnel. Accepts values from 0 to 1. Applies only if the algorithm is "dynamicHeight".
     */
    neckWidth: number;
    /**
     * Sets the palette to be used for colorizing funnel items.
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
     * Switches the widget to a right-to-left representation.
     */
    rtlEnabled: boolean;
    /**
     * Specifies whether a single or multiple funnel items can be in the selected state at a time. Assigning "none" disables the selection feature.
     */
    selectionMode: string;
    /**
     * Specifies the widget's size in pixels.
     */
    size: any;
    /**
     * Specifies whether to sort funnel items.
     */
    sortData: boolean;
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
     * Configures tooltips - small pop-up rectangles that display information about a data-visualizing widget element being pressed or hovered over with the mouse pointer.
     */
    tooltip: any;
    /**
     * Specifies which data source field provides values for funnel items. The value defines a funnel item's area.
     */
    valueField: string;
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
     * A handler for the hoverChanged event. Executed after a funnel item's hover state is changed in the UI or programmatically.
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
     * A handler for the itemClick event. Executed when a user clicks a funnel item.
     */
    onItemClick: EventEmitter<any>;
    /**
     * A handler for the legendClick event. Executed when a user clicks a legend item.
     */
    onLegendClick: EventEmitter<any>;
    /**
     * A handler for the optionChanged event. Executed after an option of the widget is changed.
     */
    onOptionChanged: EventEmitter<any>;
    /**
     * A handler for the selectionChanged event. Executed after a funnel item's selection state is changed in the UI or programmatically.
     */
    onSelectionChanged: EventEmitter<any>;
    /**
     * A handler for the adaptiveLayoutChange event.
     */
    adaptiveLayoutChange: EventEmitter<any>;
    /**
     * A handler for the algorithmChange event.
     */
    algorithmChange: EventEmitter<string>;
    /**
     * A handler for the argumentFieldChange event.
     */
    argumentFieldChange: EventEmitter<string>;
    /**
     * A handler for the colorFieldChange event.
     */
    colorFieldChange: EventEmitter<string>;
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
     * A handler for the hoverEnabledChange event.
     */
    hoverEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the invertedChange event.
     */
    invertedChange: EventEmitter<boolean>;
    /**
     * A handler for the itemChange event.
     */
    itemChange: EventEmitter<any>;
    /**
     * A handler for the labelChange event.
     */
    labelChange: EventEmitter<any>;
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
     * A handler for the neckHeightChange event.
     */
    neckHeightChange: EventEmitter<number>;
    /**
     * A handler for the neckWidthChange event.
     */
    neckWidthChange: EventEmitter<number>;
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
     * A handler for the sortDataChange event.
     */
    sortDataChange: EventEmitter<boolean>;
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
     * A handler for the valueFieldChange event.
     */
    valueFieldChange: EventEmitter<string>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper, optionHost: NestedOptionHost);
    protected _createInstance(element: any, options: any): DxFunnel;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    setupChanges(prop: string, changes: SimpleChanges): void;
    ngDoCheck(): void;
    _setOption(name: string, value: any): void;
}
export declare class DxFunnelModule {
}
