/**
 * DevExtreme (events/pointer.js)
 * Version: 17.2.5
 * Build date: Tue Jan 23 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
"use strict";
var support = require("../core/utils/support"),
    each = require("../core/utils/iterator").each,
    devices = require("../core/devices"),
    registerEvent = require("./core/event_registrator"),
    TouchStrategy = require("./pointer/touch"),
    MsPointerStrategy = require("./pointer/mspointer"),
    MouseStrategy = require("./pointer/mouse"),
    MouseAndTouchStrategy = require("./pointer/mouse_and_touch");
var EventStrategy = function() {
    if (support.pointerEvents) {
        return MsPointerStrategy
    }
    var device = devices.real();
    if (support.touch && !(device.tablet || device.phone)) {
        return MouseAndTouchStrategy
    }
    if (support.touch) {
        return TouchStrategy
    }
    return MouseStrategy
}();
each(EventStrategy.map, function(pointerEvent, originalEvents) {
    registerEvent(pointerEvent, new EventStrategy(pointerEvent, originalEvents))
});
module.exports = {
    down: "dxpointerdown",
    up: "dxpointerup",
    move: "dxpointermove",
    cancel: "dxpointercancel",
    enter: "dxpointerenter",
    leave: "dxpointerleave",
    over: "dxpointerover",
    out: "dxpointerout"
};
