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
import { TemplateRef, ViewContainerRef, NgZone } from '@angular/core';
import { DxTemplateHost } from './template-host';
export declare const DX_TEMPLATE_WRAPPER_CLASS = "dx-template-wrapper";
export declare class RenderData {
    model: any;
    index: number;
    container: any;
}
export declare class DxTemplateDirective {
    private templateRef;
    private viewContainerRef;
    private ngZone;
    dxTemplateOf: any;
    name: string;
    constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef, templateHost: DxTemplateHost, ngZone: NgZone);
    render(renderData: RenderData): any[];
}
export declare class DxTemplateModule {
}
