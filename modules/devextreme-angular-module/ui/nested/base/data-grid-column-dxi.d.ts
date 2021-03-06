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
import { CollectionNestedOption } from '../../../core/nested-option';
import DevExpress from 'devextreme/bundles/dx.all';
export declare abstract class DxiDataGridColumn extends CollectionNestedOption {
    alignment: string;
    allowEditing: boolean;
    allowExporting: boolean;
    allowFiltering: boolean;
    allowFixing: boolean;
    allowGrouping: boolean;
    allowHeaderFiltering: boolean;
    allowHiding: boolean;
    allowReordering: boolean;
    allowResizing: boolean;
    allowSearch: boolean;
    allowSorting: boolean;
    autoExpandGroup: boolean;
    calculateCellValue: Function;
    calculateDisplayValue: Function | string;
    calculateFilterExpression: Function;
    calculateGroupValue: Function | string;
    calculateSortValue: Function | string;
    caption: string;
    cellTemplate: any;
    columns: any | Array<any>;
    cssClass: string;
    customizeText: Function;
    dataField: string;
    dataType: string;
    editCellTemplate: any;
    editorOptions: any;
    encodeHtml: boolean;
    falseText: string;
    filterOperations: string | Array<string>;
    filterType: string;
    filterValue: any;
    filterValues: Array<any>;
    fixed: boolean;
    fixedPosition: string;
    format: DevExpress.ui.format | string;
    formItem: DevExpress.ui.dxFormSimpleItem;
    groupCellTemplate: any;
    groupIndex: number;
    headerCellTemplate: any;
    headerFilter: any;
    hidingPriority: number;
    isBand: boolean;
    lookup: any;
    minWidth: number;
    name: string;
    ownerBand: number;
    precision: number;
    selectedFilterOperation: string;
    setCellValue: Function;
    showEditorAlways: boolean;
    showInColumnChooser: boolean;
    showWhenGrouped: boolean;
    sortIndex: number;
    sortingMethod: Function;
    sortOrder: string;
    trueText: string;
    validationRules: Array<DevExpress.ui.RequiredRule | DevExpress.ui.NumericRule | DevExpress.ui.RangeRule | DevExpress.ui.StringLengthRule | DevExpress.ui.CustomRule | DevExpress.ui.CompareRule | DevExpress.ui.PatternRule | DevExpress.ui.EmailRule>;
    visible: boolean;
    visibleIndex: number;
    width: number | string;
}
