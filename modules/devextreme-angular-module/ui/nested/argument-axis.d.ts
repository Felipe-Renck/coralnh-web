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
import { DxiBreakComponent } from './break-dxi';
import { DxiConstantLineComponent } from './constant-line-dxi';
import { DxiStripComponent } from './strip-dxi';
export declare class DxoArgumentAxisComponent extends NestedOption {
    allowDecimals: boolean;
    argumentType: string;
    axisDivisionFactor: number;
    breaks: Array<DevExpress.viz.ScaleBreak | {
        endValue?: Date | number | string;
        startValue?: Date | number | string;
    }>;
    breakStyle: any;
    categories: Array<number | string | Date>;
    color: string;
    constantLines: Array<any | {
        color?: string;
        dashStyle?: string;
        label?: {
            font?: DevExpress.viz.Font;
            horizontalAlignment?: string;
            position?: string;
            text?: string;
            verticalAlignment?: string;
            visible?: boolean;
        };
        paddingLeftRight?: number;
        paddingTopBottom?: number;
        value?: Date | number | string;
        width?: number;
    } | {
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
    holidays: Array<Date | string | number>;
    hoverMode: string;
    inverted: boolean;
    label: any;
    logarithmBase: number;
    max: Date | number | string;
    maxValueMargin: number;
    min: Date | number | string;
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
    placeholderSize: number;
    position: string;
    setTicksAtUnitBeginning: boolean;
    singleWorkdays: Array<Date | string | number>;
    strips: Array<any | {
        color?: string;
        endValue?: Date | number | string;
        label?: {
            font?: DevExpress.viz.Font;
            horizontalAlignment?: string;
            text?: string;
            verticalAlignment?: string;
        };
        paddingLeftRight?: number;
        paddingTopBottom?: number;
        startValue?: Date | number | string;
    } | {
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
    title: string | {
        font?: DevExpress.viz.Font;
        margin?: number;
        text?: string;
    };
    type: string;
    valueMarginsEnabled: boolean;
    visible: boolean;
    width: number;
    workdaysOnly: boolean;
    workWeek: Array<number>;
    firstPointOnStartAngle: boolean;
    originValue: number;
    period: number;
    startAngle: number;
    protected readonly _optionPath: string;
    breaksChildren: QueryList<DxiBreakComponent>;
    constantLinesChildren: QueryList<DxiConstantLineComponent>;
    stripsChildren: QueryList<DxiStripComponent>;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoArgumentAxisModule {
}
