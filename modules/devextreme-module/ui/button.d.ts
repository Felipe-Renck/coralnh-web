/**
* DevExtreme (ui/button.d.ts)
* Version: 17.2.5
* Build date: Tue Jan 23 2018
*
* Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
import DevExpress from '../bundles/dx.all';

declare global {
interface JQuery {
    dxButton(): JQuery;
    dxButton(options: "instance"): DevExpress.ui.dxButton;
    dxButton(options: string): any;
    dxButton(options: string, ...params: any[]): any;
    dxButton(options: DevExpress.ui.dxButtonOptions): JQuery;
}
}
export default DevExpress.ui.dxButton;