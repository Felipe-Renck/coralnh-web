/**
* DevExtreme (viz/circular_gauge.d.ts)
* Version: 17.2.5
* Build date: Tue Jan 23 2018
*
* Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
import DevExpress from '../bundles/dx.all';

declare global {
interface JQuery {
    dxCircularGauge(): JQuery;
    dxCircularGauge(options: "instance"): DevExpress.viz.dxCircularGauge;
    dxCircularGauge(options: string): any;
    dxCircularGauge(options: string, ...params: any[]): any;
    dxCircularGauge(options: DevExpress.viz.gauges.dxCircularGaugeOptions): JQuery;
}
}
export default DevExpress.viz.dxCircularGauge;