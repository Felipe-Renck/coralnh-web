/**
* DevExtreme (ui/drop_down_box.d.ts)
* Version: 17.2.5
* Build date: Tue Jan 23 2018
*
* Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
import DevExpress from '../bundles/dx.all';

declare global {
interface JQuery {
    dxDropDownBox(): JQuery;
    dxDropDownBox(options: "instance"): DevExpress.ui.dxDropDownBox;
    dxDropDownBox(options: string): any;
    dxDropDownBox(options: string, ...params: any[]): any;
    dxDropDownBox(options: DevExpress.ui.dxDropDownBoxOptions): JQuery;
}
}
export default DevExpress.ui.dxDropDownBox;