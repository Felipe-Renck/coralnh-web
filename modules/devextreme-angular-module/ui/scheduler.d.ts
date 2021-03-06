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
import DxScheduler from 'devextreme/ui/scheduler';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
import { IterableDifferHelper } from '../core/iterable-differ-helper';
import { DxiResourceComponent } from './nested/resource-dxi';
import { DxiViewComponent } from './nested/view-dxi';
/**
 * The Scheduler is a widget that represents scheduled data and allows a user to manage and edit it.
 */
export declare class DxSchedulerComponent extends DxComponent implements OnDestroy, OnChanges, DoCheck {
    private _watcherHelper;
    private _idh;
    instance: DxScheduler;
    /**
     * Specifies the shortcut key that sets focus on the widget.
     */
    accessKey: string;
    /**
     * Specifies the name of the data source item field whose value defines whether or not the corresponding appointment is an all-day appointment.
     */
    allDayExpr: string;
    /**
     * Specifies a custom template for appointments.
     */
    appointmentTemplate: any;
    /**
     * Specifies a custom template for appointment tooltips.
     */
    appointmentTooltipTemplate: any;
    /**
     * Specifies cell duration in minutes.
     */
    cellDuration: number;
    /**
     * Specifies whether or not an end-user can scroll the view in both directions at the same time.
     */
    crossScrollingEnabled: boolean;
    /**
     * Specifies a date displayed on the current scheduler view by default.
     */
    currentDate: Date | number | string;
    /**
     * Specifies the currently displayed view. Accepts the view's name or type.
     */
    currentView: string;
    /**
     * Specifies a custom template for table cells.
     */
    dataCellTemplate: any;
    /**
     * Specifies the origin of data for the widget.
     */
    dataSource: DevExpress.data.DataSource | DevExpress.data.DataSourceOptions | string | Array<DevExpress.ui.dxSchedulerAppointmentTemplate>;
    /**
     * Specifies a custom template for day scale items.
     */
    dateCellTemplate: any;
    /**
     * Specifies the date-time values' serialization format. Use it only if you do not specify the dataSource at design time.
     */
    dateSerializationFormat: string;
    /**
     * Specifies the name of the data source item field whose value holds the description of the corresponding appointment.
     */
    descriptionExpr: string;
    /**
     * Specifies whether the widget responds to user interaction.
     */
    disabled: boolean;
    /**
     * Specifies a custom template for appointments in the appointment collector's drop-down list.
     */
    dropDownAppointmentTemplate: any;
    /**
     * Specifies which editing operations an end-user can perform on appointments.
     */
    editing: boolean | {
        allowAdding?: boolean;
        allowDeleting?: boolean;
        allowDragging?: boolean;
        allowResizing?: boolean;
        allowUpdating?: boolean;
    };
    /**
     * Specifies the attributes to be attached to the widget's root element.
     */
    elementAttr: any;
    /**
     * Specifies the name of the data source item field that defines the ending of an appointment.
     */
    endDateExpr: string;
    /**
     * Specifies the name of the data source item field that defines the timezone of the appointment end date.
     */
    endDateTimeZoneExpr: string;
    /**
     * Specifies an end hour in the scheduler view's time interval.
     */
    endDayHour: number;
    /**
     * Specifies the first day of a week. Does not apply to the agenda view.
     */
    firstDayOfWeek: number | string;
    /**
     * Specifies whether the widget can be focused using keyboard navigation.
     */
    focusStateEnabled: boolean;
    /**
     * Specifies the resource kinds by which the scheduler's appointments are grouped in a timetable.
     */
    groups: Array<string>;
    /**
     * Specifies the widget's height.
     */
    height: number | Function | string;
    /**
     * Specifies text for a hint that appears when a user pauses on the widget.
     */
    hint: string;
    horizontalScrollingEnabled: any;
    /**
     * Specifies the time interval between when the date-time indicator changes its position, in milliseconds.
     */
    indicatorUpdateInterval: number;
    /**
     * The latest date the widget allows you to select.
     */
    max: Date | number | string;
    /**
     * Specifies the limit of full-sized appointments displayed per cell. In the "day", "week" and "workweek" views, this option applies only to all-day appointments.
     */
    maxAppointmentsPerCell: number | string;
    /**
     * The earliest date the widget allows you to select.
     */
    min: Date | number | string;
    /**
     * The text or HTML markup displayed by the widget if the item collection is empty. Available for the Agenda view only.
     */
    noDataText: string;
    /**
     * Specifies the edit mode for recurring appointments.
     */
    recurrenceEditMode: string;
    /**
     * Specifies the name of the data source item field that defines exceptions for the current recurring appointment.
     */
    recurrenceExceptionExpr: string;
    /**
     * Specifies the name of the data source item field that defines a recurrence rule for generating recurring appointments.
     */
    recurrenceRuleExpr: string;
    /**
     * Specifies whether filtering is performed on the server or client side.
     */
    remoteFiltering: boolean;
    /**
     * Specifies a custom template for resource headers.
     */
    resourceCellTemplate: any;
    /**
     * Specifies an array of resources available in the scheduler.
     */
    resources: Array<any | {
        allowMultiple?: boolean;
        colorExpr?: string;
        dataSource?: DevExpress.data.DataSource | DevExpress.data.DataSourceOptions | string | Array<any>;
        displayExpr?: Function | string;
        field?: string;
        fieldExpr?: string;
        label?: string;
        mainColor?: boolean;
        useColorAsDefault?: boolean;
        valueExpr?: Function | string;
    }>;
    /**
     * Switches the widget to a right-to-left representation.
     */
    rtlEnabled: boolean;
    /**
     * Specifies whether to apply shading to cover the timetable up to the current time.
     */
    shadeUntilCurrentTime: boolean;
    /**
     * Specifies the "All-day" panel's visibility. Setting this option to false hides the panel along with the all-day appointments.
     */
    showAllDayPanel: boolean;
    /**
     * Specifies the current date-time indicator's visibility.
     */
    showCurrentTimeIndicator: boolean;
    /**
     * Specifies the name of the data source item field that defines the start of an appointment.
     */
    startDateExpr: string;
    /**
     * Specifies the name of the data source item field that defines the timezone of the appointment start date.
     */
    startDateTimeZoneExpr: string;
    /**
     * Specifies a start hour in the scheduler view's time interval.
     */
    startDayHour: number;
    /**
     * Specifies the number of the element when the Tab key is used for navigating.
     */
    tabIndex: number;
    /**
     * Specifies the name of the data source item field that holds the subject of an appointment.
     */
    textExpr: string;
    /**
     * Specifies a custom template for time scale items.
     */
    timeCellTemplate: any;
    /**
     * Specifies the timezone of the widget.
     */
    timeZone: string;
    /**
     * Specifies whether a user can switch views using tabs or a drop-down menu.
     */
    useDropDownViewSwitcher: boolean;
    /**
     * Configures individual views.
     */
    views: string | Array<string | {
        agendaDuration?: number;
        appointmentTemplate?: any;
        appointmentTooltipTemplate?: any;
        cellDuration?: number;
        dataCellTemplate?: any;
        dateCellTemplate?: any;
        dropDownAppointmentTemplate?: any;
        endDayHour?: number;
        firstDayOfWeek?: number | string;
        groups?: Array<string>;
        intervalCount?: number;
        maxAppointmentsPerCell?: number | string;
        name?: string;
        resourceCellTemplate?: any;
        startDate?: Date | number | string;
        startDayHour?: number;
        timeCellTemplate?: any;
        type?: string;
    }>;
    /**
     * Specifies whether the widget is visible.
     */
    visible: boolean;
    /**
     * Specifies the widget's width.
     */
    width: number | Function | string;
    /**
     * A handler for the appointmentAdded event.
     */
    onAppointmentAdded: EventEmitter<any>;
    /**
     * A handler for the AppointmentAdding event.
     */
    onAppointmentAdding: EventEmitter<any>;
    /**
     * A handler for the appointmentClick event.
     */
    onAppointmentClick: EventEmitter<any>;
    /**
     * A handler for the appointmentDblClick event.
     */
    onAppointmentDblClick: EventEmitter<any>;
    /**
     * A handler for the appointmentDeleted event.
     */
    onAppointmentDeleted: EventEmitter<any>;
    /**
     * A handler for the AppointmentDeleting event.
     */
    onAppointmentDeleting: EventEmitter<any>;
    /**
     * A handler for the appointmentFormCreated event.
     */
    onAppointmentFormCreated: EventEmitter<any>;
    /**
     * A handler for the appointmentRendered event.
     */
    onAppointmentRendered: EventEmitter<any>;
    /**
     * A handler for the appointmentUpdated event.
     */
    onAppointmentUpdated: EventEmitter<any>;
    /**
     * A handler for the AppointmentUpdating event.
     */
    onAppointmentUpdating: EventEmitter<any>;
    /**
     * A handler for the cellClick event.
     */
    onCellClick: EventEmitter<any>;
    /**
     * A handler for the contentReady event. Executed when the widget's content is ready. This handler may be executed multiple times during the widget's lifetime depending on the number of times its content changes.
     */
    onContentReady: EventEmitter<any>;
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
     * A handler for the accessKeyChange event.
     */
    accessKeyChange: EventEmitter<string>;
    /**
     * A handler for the allDayExprChange event.
     */
    allDayExprChange: EventEmitter<string>;
    /**
     * A handler for the appointmentTemplateChange event.
     */
    appointmentTemplateChange: EventEmitter<any>;
    /**
     * A handler for the appointmentTooltipTemplateChange event.
     */
    appointmentTooltipTemplateChange: EventEmitter<any>;
    /**
     * A handler for the cellDurationChange event.
     */
    cellDurationChange: EventEmitter<number>;
    /**
     * A handler for the crossScrollingEnabledChange event.
     */
    crossScrollingEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the currentDateChange event.
     */
    currentDateChange: EventEmitter<Date | number | string>;
    /**
     * A handler for the currentViewChange event.
     */
    currentViewChange: EventEmitter<string>;
    /**
     * A handler for the dataCellTemplateChange event.
     */
    dataCellTemplateChange: EventEmitter<any>;
    /**
     * A handler for the dataSourceChange event.
     */
    dataSourceChange: EventEmitter<DevExpress.data.DataSource | DevExpress.data.DataSourceOptions | string | Array<DevExpress.ui.dxSchedulerAppointmentTemplate>>;
    /**
     * A handler for the dateCellTemplateChange event.
     */
    dateCellTemplateChange: EventEmitter<any>;
    /**
     * A handler for the dateSerializationFormatChange event.
     */
    dateSerializationFormatChange: EventEmitter<string>;
    /**
     * A handler for the descriptionExprChange event.
     */
    descriptionExprChange: EventEmitter<string>;
    /**
     * A handler for the disabledChange event.
     */
    disabledChange: EventEmitter<boolean>;
    /**
     * A handler for the dropDownAppointmentTemplateChange event.
     */
    dropDownAppointmentTemplateChange: EventEmitter<any>;
    /**
     * A handler for the editingChange event.
     */
    editingChange: EventEmitter<boolean | {
        allowAdding?: boolean;
        allowDeleting?: boolean;
        allowDragging?: boolean;
        allowResizing?: boolean;
        allowUpdating?: boolean;
    }>;
    /**
     * A handler for the elementAttrChange event.
     */
    elementAttrChange: EventEmitter<any>;
    /**
     * A handler for the endDateExprChange event.
     */
    endDateExprChange: EventEmitter<string>;
    /**
     * A handler for the endDateTimeZoneExprChange event.
     */
    endDateTimeZoneExprChange: EventEmitter<string>;
    /**
     * A handler for the endDayHourChange event.
     */
    endDayHourChange: EventEmitter<number>;
    /**
     * A handler for the firstDayOfWeekChange event.
     */
    firstDayOfWeekChange: EventEmitter<number | string>;
    /**
     * A handler for the focusStateEnabledChange event.
     */
    focusStateEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the groupsChange event.
     */
    groupsChange: EventEmitter<Array<string>>;
    /**
     * A handler for the heightChange event.
     */
    heightChange: EventEmitter<number | Function | string>;
    /**
     * A handler for the hintChange event.
     */
    hintChange: EventEmitter<string>;
    /**
     * A handler for the horizontalScrollingEnabledChange event.
     */
    horizontalScrollingEnabledChange: EventEmitter<any>;
    /**
     * A handler for the indicatorUpdateIntervalChange event.
     */
    indicatorUpdateIntervalChange: EventEmitter<number>;
    /**
     * A handler for the maxChange event.
     */
    maxChange: EventEmitter<Date | number | string>;
    /**
     * A handler for the maxAppointmentsPerCellChange event.
     */
    maxAppointmentsPerCellChange: EventEmitter<number | string>;
    /**
     * A handler for the minChange event.
     */
    minChange: EventEmitter<Date | number | string>;
    /**
     * A handler for the noDataTextChange event.
     */
    noDataTextChange: EventEmitter<string>;
    /**
     * A handler for the recurrenceEditModeChange event.
     */
    recurrenceEditModeChange: EventEmitter<string>;
    /**
     * A handler for the recurrenceExceptionExprChange event.
     */
    recurrenceExceptionExprChange: EventEmitter<string>;
    /**
     * A handler for the recurrenceRuleExprChange event.
     */
    recurrenceRuleExprChange: EventEmitter<string>;
    /**
     * A handler for the remoteFilteringChange event.
     */
    remoteFilteringChange: EventEmitter<boolean>;
    /**
     * A handler for the resourceCellTemplateChange event.
     */
    resourceCellTemplateChange: EventEmitter<any>;
    /**
     * A handler for the resourcesChange event.
     */
    resourcesChange: EventEmitter<Array<any | {
        allowMultiple?: boolean;
        colorExpr?: string;
        dataSource?: DevExpress.data.DataSource | DevExpress.data.DataSourceOptions | string | Array<any>;
        displayExpr?: Function | string;
        field?: string;
        fieldExpr?: string;
        label?: string;
        mainColor?: boolean;
        useColorAsDefault?: boolean;
        valueExpr?: Function | string;
    }>>;
    /**
     * A handler for the rtlEnabledChange event.
     */
    rtlEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the shadeUntilCurrentTimeChange event.
     */
    shadeUntilCurrentTimeChange: EventEmitter<boolean>;
    /**
     * A handler for the showAllDayPanelChange event.
     */
    showAllDayPanelChange: EventEmitter<boolean>;
    /**
     * A handler for the showCurrentTimeIndicatorChange event.
     */
    showCurrentTimeIndicatorChange: EventEmitter<boolean>;
    /**
     * A handler for the startDateExprChange event.
     */
    startDateExprChange: EventEmitter<string>;
    /**
     * A handler for the startDateTimeZoneExprChange event.
     */
    startDateTimeZoneExprChange: EventEmitter<string>;
    /**
     * A handler for the startDayHourChange event.
     */
    startDayHourChange: EventEmitter<number>;
    /**
     * A handler for the tabIndexChange event.
     */
    tabIndexChange: EventEmitter<number>;
    /**
     * A handler for the textExprChange event.
     */
    textExprChange: EventEmitter<string>;
    /**
     * A handler for the timeCellTemplateChange event.
     */
    timeCellTemplateChange: EventEmitter<any>;
    /**
     * A handler for the timeZoneChange event.
     */
    timeZoneChange: EventEmitter<string>;
    /**
     * A handler for the useDropDownViewSwitcherChange event.
     */
    useDropDownViewSwitcherChange: EventEmitter<boolean>;
    /**
     * A handler for the viewsChange event.
     */
    viewsChange: EventEmitter<string | Array<string | {
        agendaDuration?: number;
        appointmentTemplate?: any;
        appointmentTooltipTemplate?: any;
        cellDuration?: number;
        dataCellTemplate?: any;
        dateCellTemplate?: any;
        dropDownAppointmentTemplate?: any;
        endDayHour?: number;
        firstDayOfWeek?: number | string;
        groups?: Array<string>;
        intervalCount?: number;
        maxAppointmentsPerCell?: number | string;
        name?: string;
        resourceCellTemplate?: any;
        startDate?: Date | number | string;
        startDayHour?: number;
        timeCellTemplate?: any;
        type?: string;
    }>>;
    /**
     * A handler for the visibleChange event.
     */
    visibleChange: EventEmitter<boolean>;
    /**
     * A handler for the widthChange event.
     */
    widthChange: EventEmitter<number | Function | string>;
    resourcesChildren: QueryList<DxiResourceComponent>;
    viewsChildren: QueryList<DxiViewComponent>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, _idh: IterableDifferHelper, optionHost: NestedOptionHost);
    protected _createInstance(element: any, options: any): DxScheduler;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    setupChanges(prop: string, changes: SimpleChanges): void;
    ngDoCheck(): void;
    _setOption(name: string, value: any): void;
}
export declare class DxSchedulerModule {
}
