/**
* DevExtreme (viz/vector_map.d.ts)
* Version: 17.2.5
* Build date: Tue Jan 23 2018
*
* Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
import DevExpress from '../bundles/dx.all';

declare global {
interface JQuery {
    dxVectorMap(): JQuery;
    dxVectorMap(options: "instance"): DevExpress.viz.dxVectorMap;
    dxVectorMap(options: string): any;
    dxVectorMap(options: string, ...params: any[]): any;
    dxVectorMap(options: DevExpress.viz.map.dxVectorMapOptions): JQuery;
}
}
export default DevExpress.viz.dxVectorMap;