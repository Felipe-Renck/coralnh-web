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
import { NestedOptionHost } from '../../core/nested-option';
import { DxoPivotGridDataSource } from './base/pivot-grid-data-source';
import { DxiFieldComponent } from './field-dxi';
export declare class DxoDataSourceComponent extends DxoPivotGridDataSource {
    protected readonly _optionPath: string;
    fieldsChildren: QueryList<DxiFieldComponent>;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoDataSourceModule {
}
