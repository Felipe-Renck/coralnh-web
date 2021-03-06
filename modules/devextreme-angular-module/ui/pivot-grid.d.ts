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
import DxPivotGrid from 'devextreme/ui/pivot_grid';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
/**
 * The PivotGrid is a widget that allows you to display and analyze multi-dimensional data from a local storage or an OLAP cube.
 */
export declare class DxPivotGridComponent extends DxComponent implements OnDestroy, OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxPivotGrid;
    /**
     * Allows an end-user to expand/collapse all header items within a header level.
     */
    allowExpandAll: boolean;
    /**
     * Allows a user to filter fields by selecting or deselecting values in the popup menu.
     */
    allowFiltering: boolean;
    /**
     * Allows an end-user to change sorting options.
     */
    allowSorting: boolean;
    /**
     * Allows an end-user to sort columns by summary values.
     */
    allowSortingBySummary: boolean;
    /**
     * Specifies the area to which data field headers must belong.
     */
    dataFieldArea: string;
    /**
     * Specifies a data source for the pivot grid.
     */
    dataSource: DevExpress.data.PivotGridDataSource | DevExpress.data.PivotGridDataSourceOptions | Array<any>;
    /**
     * Specifies whether the widget responds to user interaction.
     */
    disabled: boolean;
    /**
     * Specifies the attributes to be attached to the widget's root element.
     */
    elementAttr: any;
    /**
     * Configures client-side exporting.
     */
    export: any;
    /**
     * The Field Chooser configuration options.
     */
    fieldChooser: any;
    /**
     * Configures the field panel.
     */
    fieldPanel: any;
    /**
     * Configures the header filter feature.
     */
    headerFilter: any;
    /**
     * Specifies the widget's height.
     */
    height: number | Function | string;
    /**
     * Specifies whether or not to hide rows and columns with no data.
     */
    hideEmptySummaryCells: boolean;
    /**
     * Specifies text for a hint that appears when a user pauses on the widget.
     */
    hint: string;
    /**
     * Specifies options configuring the load panel.
     */
    loadPanel: any;
    /**
     * Specifies the layout of items in the row header.
     */
    rowHeaderLayout: string;
    /**
     * Switches the widget to a right-to-left representation.
     */
    rtlEnabled: boolean;
    /**
     * A configuration object specifying scrolling options.
     */
    scrolling: any;
    /**
     * Specifies whether the outer borders of the grid are visible or not.
     */
    showBorders: boolean;
    /**
     * Specifies whether to display the Grand Total column.
     */
    showColumnGrandTotals: boolean;
    /**
     * Specifies whether to display the Total columns.
     */
    showColumnTotals: boolean;
    /**
     * Specifies whether to display the Grand Total row.
     */
    showRowGrandTotals: boolean;
    /**
     * Specifies whether to display the Total rows. Applies only if rowHeaderLayout is "standard".
     */
    showRowTotals: boolean;
    /**
     * Specifies where to show the total rows or columns. Applies only if rowHeaderLayout is "standard".
     */
    showTotalsPrior: string;
    /**
     * A configuration object specifying options related to state storing.
     */
    stateStoring: any;
    /**
     * Specifies the number of the element when the Tab key is used for navigating.
     */
    tabIndex: number;
    /**
     * Strings that can be changed or localized in the PivotGrid widget.
     */
    texts: any;
    useNativeScrolling: boolean | string;
    /**
     * Specifies whether the widget is visible.
     */
    visible: boolean;
    /**
     * Specifies the widget's width.
     */
    width: number | Function | string;
    /**
     * Specifies whether long text in header items should be wrapped.
     */
    wordWrapEnabled: boolean;
    /**
     * A handler for the cellClick event.
     */
    onCellClick: EventEmitter<any>;
    /**
     * A handler for the cellPrepared event.
     */
    onCellPrepared: EventEmitter<any>;
    /**
     * A handler for the contentReady event. Executed when the widget's content is ready. This handler may be executed multiple times during the widget's lifetime depending on the number of times its content changes.
     */
    onContentReady: EventEmitter<any>;
    /**
     * A handler for the contextMenuPreparing event.
     */
    onContextMenuPreparing: EventEmitter<any>;
    /**
     * A handler for the disposing event. Executed when the widget is removed from the DOM using the remove(), empty(), or html() jQuery methods only.
     */
    onDisposing: EventEmitter<any>;
    /**
     * A handler for the exported event.
     */
    onExported: EventEmitter<any>;
    /**
     * A handler for the exporting event.
     */
    onExporting: EventEmitter<any>;
    /**
     * A handler for the fileSaving event.
     */
    onFileSaving: EventEmitter<any>;
    /**
     * A handler for the initialized event. Executed only once, after the widget is initialized.
     */
    onInitialized: EventEmitter<any>;
    /**
     * A handler for the optionChanged event. Executed after an option of the widget is changed.
     */
    onOptionChanged: EventEmitter<any>;
    /**
     * A handler for the allowExpandAllChange event.
     */
    allowExpandAllChange: EventEmitter<boolean>;
    /**
     * A handler for the allowFilteringChange event.
     */
    allowFilteringChange: EventEmitter<boolean>;
    /**
     * A handler for the allowSortingChange event.
     */
    allowSortingChange: EventEmitter<boolean>;
    /**
     * A handler for the allowSortingBySummaryChange event.
     */
    allowSortingBySummaryChange: EventEmitter<boolean>;
    /**
     * A handler for the dataFieldAreaChange event.
     */
    dataFieldAreaChange: EventEmitter<string>;
    /**
     * A handler for the dataSourceChange event.
     */
    dataSourceChange: EventEmitter<DevExpress.data.PivotGridDataSource | DevExpress.data.PivotGridDataSourceOptions | Array<any>>;
    /**
     * A handler for the disabledChange event.
     */
    disabledChange: EventEmitter<boolean>;
    /**
     * A handler for the elementAttrChange event.
     */
    elementAttrChange: EventEmitter<any>;
    /**
     * A handler for the exportChange event.
     */
    exportChange: EventEmitter<any>;
    /**
     * A handler for the fieldChooserChange event.
     */
    fieldChooserChange: EventEmitter<any>;
    /**
     * A handler for the fieldPanelChange event.
     */
    fieldPanelChange: EventEmitter<any>;
    /**
     * A handler for the headerFilterChange event.
     */
    headerFilterChange: EventEmitter<any>;
    /**
     * A handler for the heightChange event.
     */
    heightChange: EventEmitter<number | Function | string>;
    /**
     * A handler for the hideEmptySummaryCellsChange event.
     */
    hideEmptySummaryCellsChange: EventEmitter<boolean>;
    /**
     * A handler for the hintChange event.
     */
    hintChange: EventEmitter<string>;
    /**
     * A handler for the loadPanelChange event.
     */
    loadPanelChange: EventEmitter<any>;
    /**
     * A handler for the rowHeaderLayoutChange event.
     */
    rowHeaderLayoutChange: EventEmitter<string>;
    /**
     * A handler for the rtlEnabledChange event.
     */
    rtlEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the scrollingChange event.
     */
    scrollingChange: EventEmitter<any>;
    /**
     * A handler for the showBordersChange event.
     */
    showBordersChange: EventEmitter<boolean>;
    /**
     * A handler for the showColumnGrandTotalsChange event.
     */
    showColumnGrandTotalsChange: EventEmitter<boolean>;
    /**
     * A handler for the showColumnTotalsChange event.
     */
    showColumnTotalsChange: EventEmitter<boolean>;
    /**
     * A handler for the showRowGrandTotalsChange event.
     */
    showRowGrandTotalsChange: EventEmitter<boolean>;
    /**
     * A handler for the showRowTotalsChange event.
     */
    showRowTotalsChange: EventEmitter<boolean>;
    /**
     * A handler for the showTotalsPriorChange event.
     */
    showTotalsPriorChange: EventEmitter<string>;
    /**
     * A handler for the stateStoringChange event.
     */
    stateStoringChange: EventEmitter<any>;
    /**
     * A handler for the tabIndexChange event.
     */
    tabIndexChange: EventEmitter<number>;
    /**
     * A handler for the textsChange event.
     */
    textsChange: EventEmitter<any>;
    /**
     * A handler for the useNativeScrollingChange event.
     */
    useNativeScrollingChange: EventEmitter<boolean | string>;
    /**
     * A handler for the visibleChange event.
     */
    visibleChange: EventEmitter<boolean>;
    /**
     * A handler for the widthChange event.
     */
    widthChange: EventEmitter<number | Function | string>;
    /**
     * A handler for the wordWrapEnabledChange event.
     */
    wordWrapEnabledChange: EventEmitter<boolean>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper, optionHost: NestedOptionHost);
    protected _createInstance(element: any, options: any): DxPivotGrid;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    setupChanges(prop: string, changes: SimpleChanges): void;
    ngDoCheck(): void;
    _setOption(name: string, value: any): void;
}
export declare class DxPivotGridModule {
}
