/**
* DevExtreme (viz/bullet.d.ts)
* Version: 17.2.5
* Build date: Tue Jan 23 2018
*
* Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
import DevExpress from '../bundles/dx.all';

declare global {
interface JQuery {
    dxBullet(): JQuery;
    dxBullet(options: "instance"): DevExpress.viz.dxBullet;
    dxBullet(options: string): any;
    dxBullet(options: string, ...params: any[]): any;
    dxBullet(options: DevExpress.viz.sparklines.dxBulletOptions): JQuery;
}
}
export default DevExpress.viz.dxBullet;