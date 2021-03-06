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
import { ElementRef, AfterViewInit, QueryList } from '@angular/core';
import DevExpress from 'devextreme/bundles/dx.all';
import { NestedOptionHost } from '../../core/nested-option';
import { DxTemplateDirective } from '../../core/template';
import { IDxTemplateHost, DxTemplateHost } from '../../core/template-host';
import { CollectionNestedOption } from '../../core/nested-option';
import { DxiItemComponent } from './item-dxi';
export declare class DxiTabComponent extends CollectionNestedOption implements AfterViewInit, IDxTemplateHost {
    private element;
    alignItemLabels: boolean;
    badge: string;
    colCount: number;
    colCountByScreen: any;
    disabled: boolean;
    icon: string;
    items: Array<DevExpress.ui.dxFormSimpleItem | DevExpress.ui.dxFormGroupItem | DevExpress.ui.dxFormTabbedItem | DevExpress.ui.dxFormEmptyItem>;
    tabTemplate: any;
    template: any;
    title: string;
    protected readonly _optionPath: string;
    itemsChildren: QueryList<DxiItemComponent>;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost, templateHost: DxTemplateHost, element: ElementRef);
    setTemplate(template: DxTemplateDirective): void;
    ngAfterViewInit(): void;
}
export declare class DxiTabModule {
}
