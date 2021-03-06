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
import { NestedOption } from '../../core/nested-option';
export declare class DxoLabelComponent extends NestedOption {
    connectorColor: string;
    connectorWidth: number;
    customizeText: Function;
    font: DevExpress.viz.Font;
    format: DevExpress.ui.format | string;
    indent: number;
    precision: number;
    visible: boolean;
    horizontalAlignment: string;
    position: string;
    text: string;
    verticalAlignment: string;
    alignment: string;
    customizeHint: Function;
    displayMode: string;
    indentFromAxis: number;
    overlappingBehavior: string | {
        mode?: string;
        rotationAngle?: number;
        staggeringSpacing?: number;
    } | {
        hideFirstOrLast?: string;
        useAutoArrangement?: boolean;
    };
    rotationAngle: number;
    staggeringSpacing: number;
    argumentFormat: DevExpress.ui.format | string;
    argumentPrecision: number;
    backgroundColor: string;
    border: any;
    connector: any;
    horizontalOffset: number;
    percentPrecision: number;
    showForZeroValues: boolean;
    verticalOffset: number;
    hideFirstOrLast: string;
    indentFromTick: number;
    useRangeColors: boolean;
    location: string;
    showColon: boolean;
    radialOffset: number;
    topIndent: number;
    dataField: string;
    enabled: boolean;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoLabelModule {
}
