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
import { QueryList } from '@angular/core';
import DevExpress from 'devextreme/bundles/dx.all';
import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
import { DxiGroupItemComponent } from './group-item-dxi';
import { DxiTotalItemComponent } from './total-item-dxi';
export declare class DxoSummaryComponent extends NestedOption {
    calculateCustomSummary: Function;
    groupItems: Array<any | {
        alignByColumn?: boolean;
        column?: string;
        customizeText?: Function;
        displayFormat?: string;
        name?: string;
        precision?: number;
        showInColumn?: string;
        showInGroupFooter?: boolean;
        skipEmptyValues?: boolean;
        summaryType?: string;
        valueFormat?: DevExpress.ui.format | string;
    }>;
    skipEmptyValues: boolean;
    texts: any;
    totalItems: Array<any | {
        alignment?: string;
        column?: string;
        cssClass?: string;
        customizeText?: Function;
        displayFormat?: string;
        name?: string;
        precision?: number;
        showInColumn?: string;
        skipEmptyValues?: boolean;
        summaryType?: string;
        valueFormat?: DevExpress.ui.format | string;
    }>;
    protected readonly _optionPath: string;
    groupItemsChildren: QueryList<DxiGroupItemComponent>;
    totalItemsChildren: QueryList<DxiTotalItemComponent>;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoSummaryModule {
}
