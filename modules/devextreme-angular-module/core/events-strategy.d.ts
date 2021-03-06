/*!
 * devextreme-angular
 * Version: 17.2.5
 * Build date: Wed Jan 24 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
import { NgZone } from '@angular/core';
import { DxComponent } from './component';
export declare class NgEventsStrategy {
    private component;
    private ngZone;
    private subscriptions;
    constructor(component: DxComponent, ngZone: NgZone);
    hasEvent(name: string): number;
    fireEvent(name: any, args: any): void;
    on(name: any, handler: any): void;
    off(name: any, handler: any): void;
    dispose(): void;
    private getEmitter(eventName);
}
export declare class EmitterHelper {
    component: DxComponent;
    strategy: NgEventsStrategy;
    constructor(ngZone: NgZone, component: DxComponent);
    fireNgEvent(eventName: string, eventArgs: any): void;
    createEmitter(ngEventName: string, dxEventName: string): void;
    rememberEvent(name: string): void;
}
