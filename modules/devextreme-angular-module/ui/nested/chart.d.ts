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
import { NestedOption } from '../../core/nested-option';
import { DxiSeriesComponent } from './series-dxi';
export declare class DxoChartComponent extends NestedOption {
    barWidth: number;
    bottomIndent: number;
    commonSeriesSettings: any;
    dataPrepareSettings: any;
    equalBarWidth: boolean;
    negativesAsZeroes: boolean;
    palette: string | Array<string>;
    series: any | Array<any>;
    seriesTemplate: any;
    topIndent: number;
    useAggregation: boolean;
    valueAxis: any;
    protected readonly _optionPath: string;
    seriesChildren: QueryList<DxiSeriesComponent>;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoChartModule {
}