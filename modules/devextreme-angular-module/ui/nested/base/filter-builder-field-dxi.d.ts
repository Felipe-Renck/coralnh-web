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
export declare abstract class DxiFilterBuilderField extends CollectionNestedOption {
    caption: string;
    customizeText: Function;
    dataField: string;
    dataType: string;
    editorOptions: any;
    editorTemplate: any;
    falseText: string;
    filterOperations: string | Array<string>;
    format: DevExpress.ui.format | string;
    lookup: any;
    trueText: string;
    allowCrossGroupCalculation: boolean;
    allowExpandAll: boolean;
    allowFiltering: boolean;
    allowSorting: boolean;
    allowSortingBySummary: boolean;
    area: string;
    areaIndex: number;
    calculateCustomSummary: Function;
    calculateSummaryValue: Function;
    displayFolder: string;
    expanded: boolean;
    filterType: string;
    filterValues: Array<any>;
    groupIndex: number;
    groupInterval: number | string;
    groupName: string;
    headerFilter: any;
    isMeasure: boolean;
    precision: number;
    runningTotal: string;
    selector: Function;
    showGrandTotals: boolean;
    showTotals: boolean;
    showValues: boolean;
    sortBy: string;
    sortBySummaryField: string;
    sortBySummaryPath: Array<number | string>;
    sortingMethod: Function;
    sortOrder: string;
    summaryDisplayMode: string;
    summaryType: string;
    visible: boolean;
    width: number;
    wordWrapEnabled: boolean;
}
