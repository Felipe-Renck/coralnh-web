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
import DxTreeList from 'devextreme/ui/tree_list';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
import { DxiColumnComponent } from './nested/column-dxi';
/**
 * The TreeList is a widget that represents data from a local or remote source in the form of a multi-column tree view. This widget offers such features as sorting, filtering, editing, selection, etc.
 */
export declare class DxTreeListComponent extends DxComponent implements OnDestroy, OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxTreeList;
    /**
     * Specifies the shortcut key that sets focus on the widget.
     */
    accessKey: string;
    /**
     * Specifies whether or not the widget changes its state when interacting with a user.
     */
    activeStateEnabled: boolean;
    /**
     * Specifies whether a user can reorder columns.
     */
    allowColumnReordering: boolean;
    /**
     * Specifies whether a user can resize columns.
     */
    allowColumnResizing: boolean;
    /**
     * Specifies whether all rows are expanded initially.
     */
    autoExpandAll: boolean;
    /**
     * Specifies whether data should be cached.
     */
    cacheEnabled: boolean;
    /**
     * Enables a hint that appears when a user hovers the mouse pointer over a cell with truncated content.
     */
    cellHintEnabled: boolean;
    /**
     * Specifies whether columns should adjust their widths to the content.
     */
    columnAutoWidth: boolean;
    /**
     * Configures the column chooser.
     */
    columnChooser: any;
    /**
     * Configures column fixing.
     */
    columnFixing: any;
    /**
     * Specifies whether the widget should hide columns to adapt to the screen or container size. Ignored if allowColumnResizing is true and columnResizingMode is "widget".
     */
    columnHidingEnabled: boolean;
    /**
     * Specifies the minimum width of columns.
     */
    columnMinWidth: number;
    /**
     * Specifies how the widget resizes columns. Applies only if allowColumnResizing is true.
     */
    columnResizingMode: string;
    /**
     * Configures columns.
     */
    columns: any | Array<any>;
    /**
     * Customizes columns after they are created.
     */
    customizeColumns: Function;
    /**
     * Specifies the origin of data for the widget.
     */
    dataSource: DevExpress.data.DataSource | DevExpress.data.DataSourceOptions | string | Array<any>;
    /**
     * Notifies the widget of your data structure.
     */
    dataStructure: string;
    /**
     * Specifies date-time values' serialization format. Use it only if you do not specify the dataSource at design time.
     */
    dateSerializationFormat: string;
    /**
     * Specifies whether the widget responds to user interaction.
     */
    disabled: boolean;
    /**
     * Configures editing.
     */
    editing: any;
    /**
     * Specifies the attributes to be attached to the widget's root element.
     */
    elementAttr: any;
    /**
     * Indicates whether to show the error row.
     */
    errorRowEnabled: boolean;
    /**
     * Specifies keys of the initially expanded rows.
     */
    expandedRowKeys: Array<any>;
    /**
     * Specifies whether nodes appear expanded or collapsed after filtering is applied.
     */
    expandNodesOnFiltering: boolean;
    /**
     * Configures the filter row.
     */
    filterRow: any;
    /**
     * Specifies whether the widget can be focused using keyboard navigation.
     */
    focusStateEnabled: boolean;
    /**
     * Specifies which data field defines whether the node has children.
     */
    hasItemsExpr: Function | string;
    /**
     * Configures the header filter feature.
     */
    headerFilter: any;
    /**
     * Specifies the widget's height.
     */
    height: number | Function | string;
    /**
     * Specifies text for a hint that appears when a user pauses on the widget.
     */
    hint: string;
    /**
     * Specifies whether the widget changes its state when a user pauses on it.
     */
    hoverStateEnabled: boolean;
    /**
     * Specifies which data field contains nested items. Set this option when your data has a hierarchical structure.
     */
    itemsExpr: Function | string;
    /**
     * Specifies which data field provides keys for nodes.
     */
    keyExpr: Function | string;
    /**
     * Configures the load panel.
     */
    loadPanel: any;
    /**
     * Specifies text shown when the widget does not display any data.
     */
    noDataText: string;
    /**
     * Specifies which data field provides parent keys.
     */
    parentIdExpr: Function | string;
    /**
     * Specifies what operations are performed on the server.
     */
    remoteOperations: string | {
        filtering?: boolean;
        grouping?: boolean;
        sorting?: boolean;
    };
    /**
     * Specifies the root node's identifier. Applies if dataStructure is 'plain'.
     */
    rootValue: any;
    /**
     * Specifies whether rows should be shaded differently.
     */
    rowAlternationEnabled: boolean;
    /**
     * Switches the widget to a right-to-left representation.
     */
    rtlEnabled: boolean;
    /**
     * Configures scrolling.
     */
    scrolling: any;
    /**
     * Configures the search panel.
     */
    searchPanel: any;
    /**
     * Specifies the keys of rows that must be selected initially.
     */
    selectedRowKeys: Array<any>;
    /**
     * Configures runtime selection.
     */
    selection: any;
    /**
     * Specifies whether the outer borders of the widget are visible.
     */
    showBorders: boolean;
    /**
     * Specifies whether column headers are visible.
     */
    showColumnHeaders: boolean;
    /**
     * Specifies whether vertical lines that separate one column from another are visible.
     */
    showColumnLines: boolean;
    /**
     * Specifies whether horizontal lines that separate one row from another are visible.
     */
    showRowLines: boolean;
    /**
     * Configures runtime sorting.
     */
    sorting: any;
    /**
     * Specifies the number of the element when the Tab key is used for navigating.
     */
    tabIndex: number;
    /**
     * Specifies whether to enable two-way data binding.
     */
    twoWayBindingEnabled: boolean;
    /**
     * Specifies whether the widget is visible.
     */
    visible: boolean;
    /**
     * Specifies the widget's width.
     */
    width: number | Function | string;
    /**
     * Specifies whether text that does not fit into a column should be wrapped.
     */
    wordWrapEnabled: boolean;
    /**
     * A handler for the adaptiveDetailRowPreparing event. Executed before an adaptive detail row is rendered.
     */
    onAdaptiveDetailRowPreparing: EventEmitter<any>;
    /**
     * A handler for the cellClick event. Executed after a user clicks a cell.
     */
    onCellClick: EventEmitter<any>;
    /**
     * A handler for the cellHoverChanged event. Executed after the pointer enters or leaves a cell.
     */
    onCellHoverChanged: EventEmitter<any>;
    /**
     * A handler for the cellPrepared event. Executed after the widget creates a cell.
     */
    onCellPrepared: EventEmitter<any>;
    /**
     * A handler for the contentReady event. Executed when the widget's content is ready. This handler may be executed multiple times during the widget's lifetime depending on the number of times its content changes.
     */
    onContentReady: EventEmitter<any>;
    /**
     * A handler for the contextMenuPreparing event. Executed before a context menu is rendered.
     */
    onContextMenuPreparing: EventEmitter<any>;
    /**
     * A handler for the dataErrorOccurred event. Executed when an error occurs in the data source.
     */
    onDataErrorOccurred: EventEmitter<any>;
    /**
     * A handler for the disposing event. Executed when the widget is removed from the DOM using the remove(), empty(), or html() jQuery methods only.
     */
    onDisposing: EventEmitter<any>;
    /**
     * A handler for editingStart. Executed before a cell or row switches to the editing state.
     */
    onEditingStart: EventEmitter<any>;
    /**
     * A handler for the editorPrepared event. Executed after an editor is created.
     */
    onEditorPrepared: EventEmitter<any>;
    /**
     * A handler for the editorPreparing event. Executed before an editor is created.
     */
    onEditorPreparing: EventEmitter<any>;
    /**
     * A handler for the initialized event. Executed only once, after the widget is initialized.
     */
    onInitialized: EventEmitter<any>;
    /**
     * A handler for the initNewRow event. Executed before a new row is added to the widget.
     */
    onInitNewRow: EventEmitter<any>;
    /**
     * A handler for the keyDown event. Executed when the widget is in focus and a key has been pressed down.
     */
    onKeyDown: EventEmitter<any>;
    /**
     * A handler for the nodesInitialized event. Executed after all nodes in the widget are initialized.
     */
    onNodesInitialized: EventEmitter<any>;
    /**
     * A handler for the optionChanged event. Executed after an option of the widget is changed.
     */
    onOptionChanged: EventEmitter<any>;
    /**
     * A handler for the rowClick event. Executed when a user clicks a row.
     */
    onRowClick: EventEmitter<any>;
    /**
     * A handler for the rowCollapsed event. Executed after a row is collapsed.
     */
    onRowCollapsed: EventEmitter<any>;
    /**
     * A handler for the rowCollapsing event. Executed before a row is collapsed.
     */
    onRowCollapsing: EventEmitter<any>;
    /**
     * A handler for the rowExpanded event. Executed after a row is expanded.
     */
    onRowExpanded: EventEmitter<any>;
    /**
     * A handler for the rowExpanding event. Executed before a row is expanded.
     */
    onRowExpanding: EventEmitter<any>;
    /**
     * A handler for the rowInserted event. Executed after a new row has been inserted into the data source.
     */
    onRowInserted: EventEmitter<any>;
    /**
     * A handler for the rowInserting event. Executed before a new row is inserted into the data source.
     */
    onRowInserting: EventEmitter<any>;
    /**
     * A handler for the rowPrepared event. Executed after the widget creates a row.
     */
    onRowPrepared: EventEmitter<any>;
    /**
     * A handler for the rowRemoved event. Executed after a row has been removed from the data source.
     */
    onRowRemoved: EventEmitter<any>;
    /**
     * A handler for the rowRemoving event. Executed before a row is removed from the data source.
     */
    onRowRemoving: EventEmitter<any>;
    /**
     * A handler for the rowUpdated event. Executed after a row has been updated in the data source.
     */
    onRowUpdated: EventEmitter<any>;
    /**
     * A handler for the rowUpdating event. Executed before a row is updated in the data source.
     */
    onRowUpdating: EventEmitter<any>;
    /**
     * A handler for the rowValidating event. Executed after cells in a row are validated against validation rules.
     */
    onRowValidating: EventEmitter<any>;
    /**
     * A handler for the selectionChanged event. Executed after selecting a row or clearing its selection.
     */
    onSelectionChanged: EventEmitter<any>;
    /**
     * A handler for the toolbarPreparing event. Executed before the toolbar is created.
     */
    onToolbarPreparing: EventEmitter<any>;
    /**
     * A handler for the accessKeyChange event.
     */
    accessKeyChange: EventEmitter<string>;
    /**
     * A handler for the activeStateEnabledChange event.
     */
    activeStateEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the allowColumnReorderingChange event.
     */
    allowColumnReorderingChange: EventEmitter<boolean>;
    /**
     * A handler for the allowColumnResizingChange event.
     */
    allowColumnResizingChange: EventEmitter<boolean>;
    /**
     * A handler for the autoExpandAllChange event.
     */
    autoExpandAllChange: EventEmitter<boolean>;
    /**
     * A handler for the cacheEnabledChange event.
     */
    cacheEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the cellHintEnabledChange event.
     */
    cellHintEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the columnAutoWidthChange event.
     */
    columnAutoWidthChange: EventEmitter<boolean>;
    /**
     * A handler for the columnChooserChange event.
     */
    columnChooserChange: EventEmitter<any>;
    /**
     * A handler for the columnFixingChange event.
     */
    columnFixingChange: EventEmitter<any>;
    /**
     * A handler for the columnHidingEnabledChange event.
     */
    columnHidingEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the columnMinWidthChange event.
     */
    columnMinWidthChange: EventEmitter<number>;
    /**
     * A handler for the columnResizingModeChange event.
     */
    columnResizingModeChange: EventEmitter<string>;
    /**
     * A handler for the columnsChange event.
     */
    columnsChange: EventEmitter<any | Array<any>>;
    /**
     * A handler for the customizeColumnsChange event.
     */
    customizeColumnsChange: EventEmitter<Function>;
    /**
     * A handler for the dataSourceChange event.
     */
    dataSourceChange: EventEmitter<DevExpress.data.DataSource | DevExpress.data.DataSourceOptions | string | Array<any>>;
    /**
     * A handler for the dataStructureChange event.
     */
    dataStructureChange: EventEmitter<string>;
    /**
     * A handler for the dateSerializationFormatChange event.
     */
    dateSerializationFormatChange: EventEmitter<string>;
    /**
     * A handler for the disabledChange event.
     */
    disabledChange: EventEmitter<boolean>;
    /**
     * A handler for the editingChange event.
     */
    editingChange: EventEmitter<any>;
    /**
     * A handler for the elementAttrChange event.
     */
    elementAttrChange: EventEmitter<any>;
    /**
     * A handler for the errorRowEnabledChange event.
     */
    errorRowEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the expandedRowKeysChange event.
     */
    expandedRowKeysChange: EventEmitter<Array<any>>;
    /**
     * A handler for the expandNodesOnFilteringChange event.
     */
    expandNodesOnFilteringChange: EventEmitter<boolean>;
    /**
     * A handler for the filterRowChange event.
     */
    filterRowChange: EventEmitter<any>;
    /**
     * A handler for the focusStateEnabledChange event.
     */
    focusStateEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the hasItemsExprChange event.
     */
    hasItemsExprChange: EventEmitter<Function | string>;
    /**
     * A handler for the headerFilterChange event.
     */
    headerFilterChange: EventEmitter<any>;
    /**
     * A handler for the heightChange event.
     */
    heightChange: EventEmitter<number | Function | string>;
    /**
     * A handler for the hintChange event.
     */
    hintChange: EventEmitter<string>;
    /**
     * A handler for the hoverStateEnabledChange event.
     */
    hoverStateEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the itemsExprChange event.
     */
    itemsExprChange: EventEmitter<Function | string>;
    /**
     * A handler for the keyExprChange event.
     */
    keyExprChange: EventEmitter<Function | string>;
    /**
     * A handler for the loadPanelChange event.
     */
    loadPanelChange: EventEmitter<any>;
    /**
     * A handler for the noDataTextChange event.
     */
    noDataTextChange: EventEmitter<string>;
    /**
     * A handler for the parentIdExprChange event.
     */
    parentIdExprChange: EventEmitter<Function | string>;
    /**
     * A handler for the remoteOperationsChange event.
     */
    remoteOperationsChange: EventEmitter<string | {
        filtering?: boolean;
        grouping?: boolean;
        sorting?: boolean;
    }>;
    /**
     * A handler for the rootValueChange event.
     */
    rootValueChange: EventEmitter<any>;
    /**
     * A handler for the rowAlternationEnabledChange event.
     */
    rowAlternationEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the rtlEnabledChange event.
     */
    rtlEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the scrollingChange event.
     */
    scrollingChange: EventEmitter<any>;
    /**
     * A handler for the searchPanelChange event.
     */
    searchPanelChange: EventEmitter<any>;
    /**
     * A handler for the selectedRowKeysChange event.
     */
    selectedRowKeysChange: EventEmitter<Array<any>>;
    /**
     * A handler for the selectionChange event.
     */
    selectionChange: EventEmitter<any>;
    /**
     * A handler for the showBordersChange event.
     */
    showBordersChange: EventEmitter<boolean>;
    /**
     * A handler for the showColumnHeadersChange event.
     */
    showColumnHeadersChange: EventEmitter<boolean>;
    /**
     * A handler for the showColumnLinesChange event.
     */
    showColumnLinesChange: EventEmitter<boolean>;
    /**
     * A handler for the showRowLinesChange event.
     */
    showRowLinesChange: EventEmitter<boolean>;
    /**
     * A handler for the sortingChange event.
     */
    sortingChange: EventEmitter<any>;
    /**
     * A handler for the tabIndexChange event.
     */
    tabIndexChange: EventEmitter<number>;
    /**
     * A handler for the twoWayBindingEnabledChange event.
     */
    twoWayBindingEnabledChange: EventEmitter<boolean>;
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
    columnsChildren: QueryList<DxiColumnComponent>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper, optionHost: NestedOptionHost);
    protected _createInstance(element: any, options: any): DxTreeList;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    setupChanges(prop: string, changes: SimpleChanges): void;
    ngDoCheck(): void;
    _setOption(name: string, value: any): void;
}
export declare class DxTreeListModule {
}
