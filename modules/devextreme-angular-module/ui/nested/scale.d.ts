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
export declare class DxoScaleComponent extends NestedOption {
    allowDecimals: boolean;
    customMinorTicks: Array<number>;
    customTicks: Array<number>;
    endValue: number | Date | string;
    hideFirstLabel: boolean;
    hideFirstTick: boolean;
    hideLastLabel: boolean;
    hideLastTick: boolean;
    label: any;
    majorTick: any;
    minorTick: any;
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
    orientation: string;
    startValue: number | Date | string;
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
    horizontalOrientation: string;
    verticalOrientation: string;
    breaks: Array<DevExpress.viz.ScaleBreak | {
        endValue?: Date | number | string;
        startValue?: Date | number | string;
    }>;
    breakStyle: any;
    categories: Array<number | string | Date>;
    endOnTick: boolean;
    holidays: Array<Date | string | number>;
    logarithmBase: number;
    majorTickInterval: number | string | {
        days?: number;
        hours?: number;
        milliseconds?: number;
        minutes?: number;
        months?: number;
        seconds?: number;
        years?: number;
    };
    marker: any;
    maxRange: number | string | {
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
    minorTickCount: number;
    minRange: number | string | {
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
    placeholderHeight: number;
    setTicksAtUnitBeginning: boolean;
    showCustomBoundaryTicks: boolean;
    showMinorTicks: boolean;
    singleWorkdays: Array<Date | string | number>;
    type: string;
    useTicksAutoArrangement: boolean;
    valueType: string;
    workdaysOnly: boolean;
    workWeek: Array<number>;
    protected readonly _optionPath: string;
    breaksChildren: QueryList<DxiBreakComponent>;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoScaleModule {
}
