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
import { ElementRef, NgZone, QueryList, AfterViewInit, DoCheck, OnChanges, AfterContentChecked, SimpleChanges } from '@angular/core';
import { DxTemplateDirective } from './template';
import { IDxTemplateHost, DxTemplateHost } from './template-host';
import { EmitterHelper } from './events-strategy';
import { WatcherHelper } from './watcher-helper';
import { INestedOptionContainer, ICollectionNestedOption, ICollectionNestedOptionContainer } from './nested-option';
export declare abstract class DxComponent implements AfterViewInit, DoCheck, OnChanges, AfterContentChecked, INestedOptionContainer, ICollectionNestedOptionContainer, IDxTemplateHost {
    protected element: ElementRef;
    private ngZone;
    private watcherHelper;
    private _initialOptions;
    protected _optionsToUpdate: any;
    private _collectionContainerImpl;
    eventHelper: EmitterHelper;
    templates: DxTemplateDirective[];
    instance: any;
    isLinked: boolean;
    changedOptions: {};
    renderOnViewInit: boolean;
    widgetUpdateLocked: boolean;
    protected _events: {
        subscribe?: string;
        emit: string;
    }[];
    private _initTemplates();
    private _initOptions();
    protected _createEventEmitters(events: any): void;
    _shouldOptionChange(name: string, value: any): boolean;
    protected _getOption(name: string): any;
    lockWidgetUpdate(): void;
    protected _setOption(name: string, value: any): void;
    protected abstract _createInstance(element: any, options: any): any;
    protected _createWidget(element: any): void;
    protected _destroyWidget(): void;
    constructor(element: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, watcherHelper: WatcherHelper);
    ngAfterViewInit(): void;
    ngAfterContentChecked(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngDoCheck(): void;
    applyOptions(): void;
    setTemplate(template: DxTemplateDirective): void;
    setChildren<T extends ICollectionNestedOption>(propertyName: string, items: QueryList<T>): any;
}
export declare abstract class DxComponentExtension extends DxComponent {
    createInstance(element: any): void;
}
