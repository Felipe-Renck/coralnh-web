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
import { ElementRef, NgZone, OnDestroy, EventEmitter, AfterContentInit, OnChanges, DoCheck, SimpleChanges } from '@angular/core';
import DevExpress from 'devextreme/bundles/dx.all';
import DxRangeSelector from 'devextreme/viz/range_selector';
import { DxValidatorComponent } from './validator';
import { ControlValueAccessor } from '@angular/forms';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
/**
 * The RangeSelector is a widget that allows a user to select a range of values on a scale.
 */
export declare class DxRangeSelectorComponent extends DxComponent implements OnDestroy, AfterContentInit, ControlValueAccessor, OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxRangeSelector;
    validator: DxValidatorComponent;
    /**
     * Specifies the options for the range selector's background.
     */
    background: any;
    /**
     * Specifies the RangeSelector's behavior options.
     */
    behavior: any;
    /**
     * Specifies the options required to display a chart as the range selector's background.
     */
    chart: any;
    /**
     * Specifies the color of the parent page element.
     */
    containerBackgroundColor: string;
    /**
     * Specifies a data source for the scale values and for the chart at the background.
     */
    dataSource: DevExpress.data.DataSource | DevExpress.data.DataSourceOptions | string | Array<any>;
    /**
     * Specifies the data source field that provides data for the scale.
     */
    dataSourceField: string;
    /**
     * Specifies the attributes to be attached to the widget's root element.
     */
    elementAttr: any;
    /**
     * Configures the exporting and printing features.
     */
    export: any;
    /**
     * Range selector's indent options.
     */
    indent: any;
    /**
     * Configures the loading indicator.
     */
    loadingIndicator: any;
    /**
     * Generates space around the widget.
     */
    margin: any;
    /**
     * Notifies the widget that it is embedded into an HTML page that uses a tag modifying the path.
     */
    pathModified: boolean;
    /**
     * Specifies whether to redraw the widget when the size of the parent browser window changes or a mobile device rotates.
     */
    redrawOnResize: boolean;
    /**
     * Switches the widget to a right-to-left representation.
     */
    rtlEnabled: boolean;
    /**
     * Specifies options of the range selector's scale.
     */
    scale: any;
    /**
     * Use the value option instead.
     */
    selectedRange: any;
    /**
     * Specifies the color of the selected range.
     */
    selectedRangeColor: string;
    /**
     * Specifies range selector shutter options.
     */
    shutter: any;
    /**
     * Specifies the widget's size in pixels.
     */
    size: any;
    /**
     * Specifies the appearance of the range selector's slider handles.
     */
    sliderHandle: any;
    /**
     * Defines the options of the range selector slider markers.
     */
    sliderMarker: any;
    /**
     * Sets the name of the theme the widget uses.
     */
    theme: string;
    /**
     * Configures the widget's title.
     */
    title: string | {
        font?: DevExpress.viz.Font;
        horizontalAlignment?: string;
        margin?: number | {
            bottom?: number;
            left?: number;
            right?: number;
            top?: number;
        };
        placeholderSize?: number;
        subtitle?: string | {
            font?: DevExpress.viz.Font;
            text?: string;
        };
        text?: string;
        verticalAlignment?: string;
    };
    /**
     * The selected range, initial or current.
     */
    value: Array<number | string | Date>;
    /**
     * A handler for the disposing event. Executed when the widget is removed from the DOM using the remove(), empty(), or html() jQuery methods only.
     */
    onDisposing: EventEmitter<any>;
    /**
     * A handler for the drawn event. Executed when the widget has finished drawing itself.
     */
    onDrawn: EventEmitter<any>;
    /**
     * A handler for the exported event. Executed after data from the widget is exported.
     */
    onExported: EventEmitter<any>;
    /**
     * A handler for the exporting event. Executed before data from the widget is exported.
     */
    onExporting: EventEmitter<any>;
    /**
     * A handler for the fileSaving event. Executed before a file with exported data is saved on the user's local storage.
     */
    onFileSaving: EventEmitter<any>;
    /**
     * A handler for the incidentOccurred event. Executed when an error or warning appears in the widget.
     */
    onIncidentOccurred: EventEmitter<any>;
    /**
     * A handler for the initialized event. Executed only once, after the widget is initialized.
     */
    onInitialized: EventEmitter<any>;
    /**
     * A handler for the optionChanged event. Executed after an option of the widget is changed.
     */
    onOptionChanged: EventEmitter<any>;
    /**
     * Use the onValueChanged option instead.
     */
    onSelectedRangeChanged: EventEmitter<any>;
    /**
     * A handler for the valueChanged event.
     */
    onValueChanged: EventEmitter<any>;
    /**
     * A handler for the backgroundChange event.
     */
    backgroundChange: EventEmitter<any>;
    /**
     * A handler for the behaviorChange event.
     */
    behaviorChange: EventEmitter<any>;
    /**
     * A handler for the chartChange event.
     */
    chartChange: EventEmitter<any>;
    /**
     * A handler for the containerBackgroundColorChange event.
     */
    containerBackgroundColorChange: EventEmitter<string>;
    /**
     * A handler for the dataSourceChange event.
     */
    dataSourceChange: EventEmitter<DevExpress.data.DataSource | DevExpress.data.DataSourceOptions | string | Array<any>>;
    /**
     * A handler for the dataSourceFieldChange event.
     */
    dataSourceFieldChange: EventEmitter<string>;
    /**
     * A handler for the elementAttrChange event.
     */
    elementAttrChange: EventEmitter<any>;
    /**
     * A handler for the exportChange event.
     */
    exportChange: EventEmitter<any>;
    /**
     * A handler for the indentChange event.
     */
    indentChange: EventEmitter<any>;
    /**
     * A handler for the loadingIndicatorChange event.
     */
    loadingIndicatorChange: EventEmitter<any>;
    /**
     * A handler for the marginChange event.
     */
    marginChange: EventEmitter<any>;
    /**
     * A handler for the pathModifiedChange event.
     */
    pathModifiedChange: EventEmitter<boolean>;
    /**
     * A handler for the redrawOnResizeChange event.
     */
    redrawOnResizeChange: EventEmitter<boolean>;
    /**
     * A handler for the rtlEnabledChange event.
     */
    rtlEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the scaleChange event.
     */
    scaleChange: EventEmitter<any>;
    /**
     * A handler for the selectedRangeChange event.
     */
    selectedRangeChange: EventEmitter<any>;
    /**
     * A handler for the selectedRangeColorChange event.
     */
    selectedRangeColorChange: EventEmitter<string>;
    /**
     * A handler for the shutterChange event.
     */
    shutterChange: EventEmitter<any>;
    /**
     * A handler for the sizeChange event.
     */
    sizeChange: EventEmitter<any>;
    /**
     * A handler for the sliderHandleChange event.
     */
    sliderHandleChange: EventEmitter<any>;
    /**
     * A handler for the sliderMarkerChange event.
     */
    sliderMarkerChange: EventEmitter<any>;
    /**
     * A handler for the themeChange event.
     */
    themeChange: EventEmitter<string>;
    /**
     * A handler for the titleChange event.
     */
    titleChange: EventEmitter<string | {
        font?: DevExpress.viz.Font;
        horizontalAlignment?: string;
        margin?: number | {
            bottom?: number;
            left?: number;
            right?: number;
            top?: number;
        };
        placeholderSize?: number;
        subtitle?: string | {
            font?: DevExpress.viz.Font;
            text?: string;
        };
        text?: string;
        verticalAlignment?: string;
    }>;
    /**
     * A handler for the valueChange event.
     */
    valueChange: EventEmitter<Array<number | string | Date>>;
    onBlur: EventEmitter<any>;
    change(_: any): void;
    touched: () => void;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper, optionHost: NestedOptionHost);
    protected _createInstance(element: any, options: any): DxRangeSelector;
    writeValue(value: any): void;
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: () => void): void;
    _createWidget(element: any): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    setupChanges(prop: string, changes: SimpleChanges): void;
    ngDoCheck(): void;
    _setOption(name: string, value: any): void;
    ngAfterContentInit(): void;
}
export declare class DxRangeSelectorModule {
}
