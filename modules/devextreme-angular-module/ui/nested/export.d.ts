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
export declare class DxoExportComponent extends NestedOption {
    backgroundColor: string;
    enabled: boolean;
    fileName: string;
    formats: Array<string>;
    printingEnabled: boolean;
    proxyUrl: string;
    allowExportSelectedData: boolean;
    excelFilterEnabled: boolean;
    excelWrapTextEnabled: boolean;
    texts: any;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxoExportModule {
}
