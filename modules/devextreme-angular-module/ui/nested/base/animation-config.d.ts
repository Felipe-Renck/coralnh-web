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
import { NestedOption } from '../../../core/nested-option';
import DevExpress from 'devextreme/bundles/dx.all';
export declare abstract class DxoAnimationConfig extends NestedOption {
    duration: number;
    easing: string;
    enabled: boolean;
    maxPointCountSupported: number;
    hide: DevExpress.animationConfig;
    show: DevExpress.animationConfig;
    complete: Function;
    delay: number;
    direction: string;
    from: any | number | string;
    staggerDelay: number;
    start: Function;
    to: any | number | string;
    type: string;
}
