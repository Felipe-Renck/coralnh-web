/**
* DevExtreme (ui/text_area.d.ts)
* Version: 17.2.5
* Build date: Tue Jan 23 2018
*
* Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
import DevExpress from '../bundles/dx.all';

declare global {
interface JQuery {
    dxTextArea(): JQuery;
    dxTextArea(options: "instance"): DevExpress.ui.dxTextArea;
    dxTextArea(options: string): any;
    dxTextArea(options: string, ...params: any[]): any;
    dxTextArea(options: DevExpress.ui.dxTextAreaOptions): JQuery;
}
}
export default DevExpress.ui.dxTextArea;