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
import DevExpress from 'devextreme/bundles/dx.all';
import { NestedOptionHost } from '../../core/nested-option';
import { CollectionNestedOption } from '../../core/nested-option';
export declare class DxiTotalItemComponent extends CollectionNestedOption {
    alignment: string;
    column: string;
    cssClass: string;
    customizeText: Function;
    displayFormat: string;
    name: string;
    precision: number;
    showInColumn: string;
    skipEmptyValues: boolean;
    summaryType: string;
    valueFormat: DevExpress.ui.format | string;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxiTotalItemModule {
}
