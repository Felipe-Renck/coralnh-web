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
import { DxiConstantLineComponent } from './constant-line-dxi';
import { DxiStripComponent } from './strip-dxi';
export declare class DxoValueAxisComponent extends NestedOption {
    allowDecimals: boolean;
    axisDivisionFactor: number;
    categories: Array<number | string | Date>;
    color: string;
    constantLines: Array<any | {
        color?: string;
        dashStyle?: string;
        label?: {
            font?: DevExpress.viz.Font;
            text?: string;
            visible?: boolean;
        };
        value?: Date | number | string;
        width?: number;
    }>;
    constantLineStyle: any;
    discreteAxisDivisionMode: string;
    endOnTick: boolean;
    grid: any;
    inverted: boolean;
    label: any;
    logarithmBase: number;
    maxValueMargin: number;
    minorGrid: any;
    minorTick: any;
    minorTickCount: number;
    minorTickInterval: number | string | {
        days?: number;
        hours?: number;
        milliseconds?: number;
        minutes?: number;
        months?: number;
        quarters?: number;
        seconds?: number;
        weeks?: number;
        years?: number;
    };
    minValueMargin: number;
    opacity: number;
    setTicksAtUnitBeginning: boolean;
    showZero: boolean;
    strips: Array<any | {
        color?: string;
        endValue?: Date | number | string;
        label?: {
            font?: DevExpress.viz.Font;
            text?: string;
        };
        startValue?: Date | number | string;
    }>;
    stripStyle: any;
    tick: any;
    tickInterval: number | string | {
        days?: number;
        hours?: number;
        milliseconds?: number;
        minutes?: number;
        months?: number;
        quarters?: number;
        seconds?: number;
        weeks?: number;
        years?: number;
    };
    type: string;
    valueMarginsEnabled: boolean;
    valueType: string;
    visible: boolean;
    width: number;
    max: number;
    min: number;
    protected readonly _optionPath: string;
    constantLinesChildren: QueryList<DxiConstantLineComponent>;
    stripsChildren: QueryList<DxiStripComponent>;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoValueAxisModule {
}
