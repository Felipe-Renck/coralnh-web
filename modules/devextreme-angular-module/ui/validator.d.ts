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
import { ElementRef, NgZone, OnDestroy, EventEmitter, OnChanges, DoCheck, SimpleChanges, QueryList } from '@angular/core';
import DevExpress from 'devextreme/bundles/dx.all';
import DxValidator from 'devextreme/ui/validator';
import { DxComponentExtension } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
import { DxiValidationRuleComponent } from './nested/validation-rule-dxi';
/**
 * A widget that is used to validate the associated DevExtreme editors against the defined validation rules.
 */
export declare class DxValidatorComponent extends DxComponentExtension implements OnDestroy, OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxValidator;
    /**
     * An object that specifies what and when to validate, and how to apply the validation result.
     */
    adapter: any;
    /**
     * Specifies the attributes to be attached to the widget's root element.
     */
    elementAttr: any;
    /**
     * Specifies the widget's height.
     */
    height: number | Function | string;
    /**
     * Specifies the editor name to be used in the validation default messages.
     */
    name: string;
    /**
     * Specifies the validation group the editor will be related to.
     */
    validationGroup: string;
    /**
     * An array of validation rules to be checked for the editor with which the dxValidator object is associated.
     */
    validationRules: Array<DevExpress.ui.RequiredRule | DevExpress.ui.NumericRule | DevExpress.ui.RangeRule | DevExpress.ui.StringLengthRule | DevExpress.ui.CustomRule | DevExpress.ui.CompareRule | DevExpress.ui.PatternRule | DevExpress.ui.EmailRule>;
    /**
     * Specifies the widget's width.
     */
    width: number | Function | string;
    /**
     * A handler for the disposing event. Executed when the widget is removed from the DOM using the remove(), empty(), or html() jQuery methods only.
     */
    onDisposing: EventEmitter<any>;
    /**
     * A handler for the initialized event. Executed only once, after the widget is initialized.
     */
    onInitialized: EventEmitter<any>;
    /**
     * A handler for the optionChanged event. Executed after an option of the widget is changed.
     */
    onOptionChanged: EventEmitter<any>;
    /**
     * A handler for the validated event.
     */
    onValidated: EventEmitter<any>;
    /**
     * A handler for the adapterChange event.
     */
    adapterChange: EventEmitter<any>;
    /**
     * A handler for the elementAttrChange event.
     */
    elementAttrChange: EventEmitter<any>;
    /**
     * A handler for the heightChange event.
     */
    heightChange: EventEmitter<number | Function | string>;
    /**
     * A handler for the nameChange event.
     */
    nameChange: EventEmitter<string>;
    /**
     * A handler for the validationGroupChange event.
     */
    validationGroupChange: EventEmitter<string>;
    /**
     * A handler for the validationRulesChange event.
     */
    validationRulesChange: EventEmitter<Array<DevExpress.ui.RequiredRule | DevExpress.ui.NumericRule | DevExpress.ui.RangeRule | DevExpress.ui.StringLengthRule | DevExpress.ui.CustomRule | DevExpress.ui.CompareRule | DevExpress.ui.PatternRule | DevExpress.ui.EmailRule>>;
    /**
     * A handler for the widthChange event.
     */
    widthChange: EventEmitter<number | Function | string>;
    validationRulesChildren: QueryList<DxiValidationRuleComponent>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper, optionHost: NestedOptionHost);
    protected _createInstance(element: any, options: any): DxValidator;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    setupChanges(prop: string, changes: SimpleChanges): void;
    ngDoCheck(): void;
    _setOption(name: string, value: any): void;
}
export declare class DxValidatorModule {
}
