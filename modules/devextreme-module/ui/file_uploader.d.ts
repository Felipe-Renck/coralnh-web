/**
* DevExtreme (ui/file_uploader.d.ts)
* Version: 17.2.5
* Build date: Tue Jan 23 2018
*
* Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
import DevExpress from '../bundles/dx.all';

declare global {
interface JQuery {
    dxFileUploader(): JQuery;
    dxFileUploader(options: "instance"): DevExpress.ui.dxFileUploader;
    dxFileUploader(options: string): any;
    dxFileUploader(options: string, ...params: any[]): any;
    dxFileUploader(options: DevExpress.ui.dxFileUploaderOptions): JQuery;
}
}
export default DevExpress.ui.dxFileUploader;