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
import { NestedOption } from '../../../core/nested-option';
import DevExpress from 'devextreme/bundles/dx.all';
export declare abstract class DxoPopupOptions extends NestedOption {
    accessKey: string;
    animation: any;
    buttons: Array<any>;
    closeOnBackButton: boolean;
    closeOnOutsideClick: boolean | Function;
    contentTemplate: any;
    deferRendering: boolean;
    disabled: boolean;
    dragEnabled: boolean;
    elementAttr: any;
    focusStateEnabled: boolean;
    fullScreen: boolean;
    height: number | Function | string;
    hint: string;
    hoverStateEnabled: boolean;
    maxHeight: number | Function | string;
    maxWidth: number | Function | string;
    minHeight: number | Function | string;
    minWidth: number | Function | string;
    onContentReady: Function;
    onDisposing: Function;
    onHidden: Function;
    onHiding: Function;
    onInitialized: Function;
    onOptionChanged: Function;
    onResize: Function;
    onResizeEnd: Function;
    onResizeStart: Function;
    onShowing: Function;
    onShown: Function;
    onTitleRendered: Function;
    position: DevExpress.positionConfig;
    resizeEnabled: boolean;
    rtlEnabled: boolean;
    shading: boolean;
    shadingColor: string;
    showCloseButton: boolean;
    showTitle: boolean;
    tabIndex: number;
    title: string;
    titleTemplate: any;
    toolbarItems: Array<any | {
        disabled?: boolean;
        html?: string;
        location?: string;
        options?: any;
        template?: any;
        text?: string;
        toolbar?: string;
        visible?: boolean;
        widget?: string;
    }>;
    visible: boolean;
    width: number | Function | string;
}
