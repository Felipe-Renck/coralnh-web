/**
 * DevExtreme (viz/vector_map/event_emitter.js)
 * Version: 17.2.5
 * Build date: Tue Jan 23 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
"use strict";
var Callbacks = require("../../core/utils/callbacks");
var eventEmitterMethods = {
    _initEvents: function() {
        var i, names = this._eventNames,
            ii = names.length,
            events = this._events = {};
        for (i = 0; i < ii; ++i) {
            events[names[i]] = Callbacks()
        }
    },
    _disposeEvents: function() {
        var name, events = this._events;
        for (name in events) {
            events[name].empty()
        }
        this._events = null
    },
    on: function(handlers) {
        var name, events = this._events;
        for (name in handlers) {
            events[name].add(handlers[name])
        }
        return dispose;

        function dispose() {
            for (name in handlers) {
                events[name].remove(handlers[name])
            }
        }
    },
    _fire: function(name, arg) {
        this._events[name].fire(arg)
    }
};
exports.makeEventEmitter = function(target) {
    var name, proto = target.prototype;
    for (name in eventEmitterMethods) {
        proto[name] = eventEmitterMethods[name]
    }
};
