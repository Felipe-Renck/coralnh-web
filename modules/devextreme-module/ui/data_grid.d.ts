/**
* DevExtreme (ui/data_grid.d.ts)
* Version: 17.2.5
* Build date: Tue Jan 23 2018
*
* Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
import DevExpress from '../bundles/dx.all';

declare global {
interface JQuery {
    dxDataGrid(): JQuery;
    dxDataGrid(options: "instance"): DevExpress.ui.dxDataGrid;
    dxDataGrid(options: string): any;
    dxDataGrid(options: string, ...params: any[]): any;
    dxDataGrid(options: DevExpress.ui.dxDataGridOptions): JQuery;
}
}
export default DevExpress.ui.dxDataGrid;