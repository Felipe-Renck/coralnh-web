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
export declare class DxoBehaviorComponent extends NestedOption {
    allowSlidersSwap: boolean;
    animationEnabled: boolean;
    callSelectedRangeChanged: string;
    callValueChanged: string;
    manualRangeSelectionEnabled: boolean;
    moveSelectedRangeByClick: boolean;
    snapToTicks: boolean;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoBehaviorModule {
}
