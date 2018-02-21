/**
* DevExtreme (ui/panorama.d.ts)
* Version: 17.2.5
* Build date: Tue Jan 23 2018
*
* Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
import DevExpress from '../bundles/dx.all';

declare global {
interface JQuery {
    dxPanorama(): JQuery;
    dxPanorama(options: "instance"): DevExpress.ui.dxPanorama;
    dxPanorama(options: string): any;
    dxPanorama(options: string, ...params: any[]): any;
    dxPanorama(options: DevExpress.ui.dxPanoramaOptions): JQuery;
}
}
export default DevExpress.ui.dxPanorama;