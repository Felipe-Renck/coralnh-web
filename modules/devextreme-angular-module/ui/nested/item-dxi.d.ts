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
import { NestedOptionHost } from '../../core/nested-option';
import { DxTemplateDirective } from '../../core/template';
import { IDxTemplateHost, DxTemplateHost } from '../../core/template-host';
import { DxiContextMenuItem } from './base/context-menu-item-dxi';
import { DxiValidationRuleComponent } from './validation-rule-dxi';
import { DxiTabComponent } from './tab-dxi';
import { DxiLocationComponent } from './location-dxi';
export declare class DxiItemComponent extends DxiContextMenuItem implements AfterViewInit, IDxTemplateHost {
    private element;
    protected readonly _optionPath: string;
    itemsChildren: QueryList<DxiItemComponent>;
    validationRulesChildren: QueryList<DxiValidationRuleComponent>;
    tabsChildren: QueryList<DxiTabComponent>;
    locationChildren: QueryList<DxiLocationComponent>;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost, templateHost: DxTemplateHost, element: ElementRef);
    setTemplate(template: DxTemplateDirective): void;
    ngAfterViewInit(): void;
}
export declare class DxiItemModule {
}
