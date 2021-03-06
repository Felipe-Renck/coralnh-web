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
export declare class DxoTooltipComponent extends NestedOption {
    arrowLength: number;
    border: any;
    color: string;
    container: Element | JQuery;
    customizeTooltip: Function;
    enabled: boolean;
    font: DevExpress.viz.Font;
    format: DevExpress.ui.format | string;
    opacity: number;
    paddingLeftRight: number;
    paddingTopBottom: number;
    precision: number;
    shadow: any;
    zIndex: number;
    horizontalAlignment: string;
    verticalAlignment: string;
    argumentFormat: DevExpress.ui.format | string;
    argumentPrecision: number;
    location: string;
    percentPrecision: number;
    shared: boolean;
    isShown: boolean;
    text: string;
    position: string;
    showMode: string;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoTooltipModule {
}
