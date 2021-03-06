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
import { CollectionNestedOption } from '../../../core/nested-option';
import DevExpress from 'devextreme/bundles/dx.all';
export declare abstract class DxiContextMenuItem extends CollectionNestedOption {
    disabled: boolean;
    html: string;
    icon: string;
    iconSrc: string;
    template: any;
    text: string;
    title: string;
    visible: boolean;
    onClick: Function | string;
    type: string;
    baseSize: number | string;
    box: DevExpress.ui.dxBoxOptions;
    ratio: number;
    shrink: number;
    beginGroup: boolean;
    closeMenuOnClick: boolean;
    items: any | Array<any | DevExpress.ui.dxFormSimpleItem | DevExpress.ui.dxFormGroupItem | DevExpress.ui.dxFormTabbedItem | DevExpress.ui.dxFormEmptyItem>;
    selectable: boolean;
    selected: boolean;
    colSpan: number;
    cssClass: string;
    dataField: string;
    editorOptions: any;
    editorType: string;
    helpText: string;
    isRequired: boolean;
    itemType: string;
    label: any;
    name: string;
    validationRules: Array<DevExpress.ui.RequiredRule | DevExpress.ui.NumericRule | DevExpress.ui.RangeRule | DevExpress.ui.StringLengthRule | DevExpress.ui.CustomRule | DevExpress.ui.CompareRule | DevExpress.ui.PatternRule | DevExpress.ui.EmailRule>;
    visibleIndex: number;
    alignItemLabels: boolean;
    caption: string;
    colCount: number;
    colCountByScreen: any;
    tabPanelOptions: DevExpress.ui.dxTabPanelOptions;
    tabs: Array<any | {
        alignItemLabels?: boolean;
        badge?: string;
        colCount?: number;
        colCountByScreen?: {
            lg?: number;
            md?: number;
            sm?: number;
            xs?: number;
        };
        disabled?: boolean;
        icon?: string;
        items?: Array<DevExpress.ui.dxFormSimpleItem | DevExpress.ui.dxFormGroupItem | DevExpress.ui.dxFormTabbedItem | DevExpress.ui.dxFormEmptyItem>;
        tabTemplate?: any;
        template?: any;
        title?: string;
    }>;
    badge: string;
    tabTemplate: any;
    imageAlt: string;
    imageSrc: string;
    key: string;
    showChevron: boolean;
    titleTemplate: any;
    location: string | Array<any | {
        col?: number;
        colspan?: number;
        row?: number;
        rowspan?: number;
        screen?: string;
    }>;
    menuTemplate: any;
    heightRatio: number;
    widthRatio: number;
    locateInMenu: string;
    menuItemTemplate: any;
    options: any;
    showText: string;
    widget: string;
    expanded: boolean;
    hasItems: boolean;
    parentId: number | string;
}
