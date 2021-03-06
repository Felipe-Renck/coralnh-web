/**
 * DevExtreme (animation/frame.js)
 * Version: 17.2.5
 * Build date: Tue Jan 23 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
"use strict";
var FRAME_ANIMATION_STEP_TIME = 1e3 / 60,
    request = function(callback) {
        return this.setTimeout(callback, FRAME_ANIMATION_STEP_TIME)
    },
    cancel = function(requestID) {
        this.clearTimeout(requestID)
    },
    nativeRequest = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame,
    nativeCancel = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame;
if (nativeRequest && nativeCancel) {
    request = nativeRequest;
    cancel = nativeCancel
}
if (nativeRequest && !nativeCancel) {
    var canceledRequests = {};
    request = function(callback) {
        var requestId = nativeRequest.call(window, function() {
            try {
                if (requestId in canceledRequests) {
                    return
                }
                callback.apply(this, arguments)
            } finally {
                delete canceledRequests[requestId]
            }
        });
        return requestId
    };
    cancel = function(requestId) {
        canceledRequests[requestId] = true
    }
}
exports.requestAnimationFrame = request.bind(window);
exports.cancelAnimationFrame = cancel.bind(window);
