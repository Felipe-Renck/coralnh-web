"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dxToNgEventNames = {};
var NgEventsStrategy = (function () {
    function NgEventsStrategy(component, ngZone) {
        this.component = component;
        this.ngZone = ngZone;
        this.subscriptions = {};
    }
    NgEventsStrategy.prototype.hasEvent = function (name) {
        return this.getEmitter(name).observers.length;
    };
    NgEventsStrategy.prototype.fireEvent = function (name, args) {
        var _this = this;
        this.ngZone.run(function () {
            _this.getEmitter(name).next(args && args[0]);
        });
    };
    NgEventsStrategy.prototype.on = function (name, handler) {
        var eventSubscriptions = this.subscriptions[name] || [], subcription = this.getEmitter(name).subscribe(handler.bind(this.component.instance)), unsubscribe = subcription.unsubscribe.bind(subcription);
        eventSubscriptions.push({ handler: handler, unsubscribe: unsubscribe });
        this.subscriptions[name] = eventSubscriptions;
    };
    NgEventsStrategy.prototype.off = function (name, handler) {
        var eventSubscriptions = this.subscriptions[name] || [];
        if (handler) {
            eventSubscriptions.some(function (subscription, i) {
                if (subscription.handler === handler) {
                    subscription.unsubscribe();
                    eventSubscriptions.splice(i, 1);
                    return true;
                }
            });
        }
        else {
            eventSubscriptions.forEach(function (subscription) {
                subscription.unsubscribe();
            });
            eventSubscriptions.splice(0, eventSubscriptions.length);
        }
    };
    NgEventsStrategy.prototype.dispose = function () { };
    NgEventsStrategy.prototype.getEmitter = function (eventName) {
        var ngEventName = dxToNgEventNames[eventName];
        if (!this.component[ngEventName]) {
            this.component[ngEventName] = new core_1.EventEmitter();
        }
        return this.component[ngEventName];
    };
    return NgEventsStrategy;
}());
exports.NgEventsStrategy = NgEventsStrategy;
var events = [];
var onStableSubscription = null;
var createOnStableSubscription = function (ngZone, fireNgEvent) {
    if (onStableSubscription) {
        return;
    }
    onStableSubscription = ngZone.onStable.subscribe(function () {
        onStableSubscription.unsubscribe();
        onStableSubscription = null;
        ngZone.run(function () {
            events.forEach(function (event) {
                var value = event.context.component[event.name];
                fireNgEvent.call(event.context, event.name + 'Change', [value]);
            });
        });
        events = [];
    });
};
var EmitterHelper = (function () {
    function EmitterHelper(ngZone, component) {
        this.component = component;
        this.strategy = new NgEventsStrategy(component, ngZone);
        createOnStableSubscription(ngZone, this.fireNgEvent);
    }
    EmitterHelper.prototype.fireNgEvent = function (eventName, eventArgs) {
        var emitter = this.component[eventName];
        if (emitter) {
            emitter.next(eventArgs && eventArgs[0]);
        }
    };
    EmitterHelper.prototype.createEmitter = function (ngEventName, dxEventName) {
        this.component[ngEventName] = new core_1.EventEmitter();
        if (dxEventName) {
            dxToNgEventNames[dxEventName] = ngEventName;
        }
    };
    EmitterHelper.prototype.rememberEvent = function (name) {
        events.push({ name: name, context: this });
    };
    return EmitterHelper;
}());
exports.EmitterHelper = EmitterHelper;
//# sourceMappingURL=events-strategy.js.map