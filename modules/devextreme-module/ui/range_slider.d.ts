/**
* DevExtreme (ui/range_slider.d.ts)
* Version: 17.2.5
* Build date: Tue Jan 23 2018
*
* Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
import DevExpress from '../bundles/dx.all';

declare global {
interface JQuery {
    dxRangeSlider(): JQuery;
    dxRangeSlider(options: "instance"): DevExpress.ui.dxRangeSlider;
    dxRangeSlider(options: string): any;
    dxRangeSlider(options: string, ...params: any[]): any;
    dxRangeSlider(options: DevExpress.ui.dxRangeSliderOptions): JQuery;
}
}
export default DevExpress.ui.dxRangeSlider;