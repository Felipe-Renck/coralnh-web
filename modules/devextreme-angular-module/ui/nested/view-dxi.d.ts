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
import { CollectionNestedOption } from '../../core/nested-option';
export declare class DxiViewComponent extends CollectionNestedOption {
    agendaDuration: number;
    appointmentTemplate: any;
    appointmentTooltipTemplate: any;
    cellDuration: number;
    dataCellTemplate: any;
    dateCellTemplate: any;
    dropDownAppointmentTemplate: any;
    endDayHour: number;
    firstDayOfWeek: number | string;
    groups: Array<string>;
    intervalCount: number;
    maxAppointmentsPerCell: number | string;
    name: string;
    resourceCellTemplate: any;
    startDate: Date | number | string;
    startDayHour: number;
    timeCellTemplate: any;
    type: string;
    protected readonly _optionPath: string;
    constructor(parentOptionHost: NestedOptionHost, optionHost: NestedOptionHost);
}
export declare class DxiViewModule {
}
