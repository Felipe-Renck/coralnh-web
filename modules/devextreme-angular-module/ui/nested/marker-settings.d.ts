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
import { NestedOptionHost } from '../../core/nested-option';
import { NestedOption } from '../../core/nested-option';
export declare class DxoMarkerSettingsComponent extends NestedOption {
    borderColor: string;
    borderWidth: number;
    color: string;
    colorGroupingField: string;
    colorGroups: Array<number>;
    customize: Function;
    hoveredBorderColor: string;
    hoveredBorderWidth: number;
    hoveredColor: string;
    hoverEnabled: boolean;
    label: any;
    maxSize: number;
    minSize: number;
    opacity: number;
    palette: string | Array<string>;
    selectedBorderColor: string;
    selectedBorderWidth: number;
    selectedColor: string;
    selectionMode: string;
    size: number;
    sizeGroupingField: string;
    sizeGroups: Array<number>;
    type: string;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoMarkerSettingsModule {
}