/**
 * DevExtreme (core/utils/size.js)
 * Version: 17.2.5
 * Build date: Tue Jan 23 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
"use strict";
var getSizeByStyles = function(elementStyles, styles) {
    var result = 0;
    styles.forEach(function(style) {
        result += parseFloat(elementStyles[style]) || 0
    });
    return result
};
var getElementBoxParams = function(name, elementStyles) {
    var beforeName = "width" === name ? "Left" : "Top";
    var afterName = "width" === name ? "Right" : "Bottom";
    return {
        padding: getSizeByStyles(elementStyles, ["padding" + beforeName, "padding" + afterName]),
        border: getSizeByStyles(elementStyles, ["border" + beforeName + "Width", "border" + afterName + "Width"]),
        margin: getSizeByStyles(elementStyles, ["margin" + beforeName, "margin" + afterName])
    }
};
var getBoxSizingOffset = function(name, elementStyles, boxParams) {
    var size = elementStyles[name];
    if ("border-box" === elementStyles.boxSizing && size.length && "%" !== size[size.length - 1]) {
        return boxParams.border + boxParams.padding
    }
    return 0
};
var getSize = function(element, name, include) {
    var elementStyles = window.getComputedStyle(element);
    var boxParams = getElementBoxParams(name, elementStyles);
    var clientRect = element.getClientRects().length;
    var boundingClientRect = element.getBoundingClientRect()[name];
    var result = clientRect ? boundingClientRect : 0;
    if (result <= 0) {
        result = parseFloat(elementStyles[name] || element.style[name]) || 0;
        result -= getBoxSizingOffset(name, elementStyles, boxParams)
    } else {
        result -= boxParams.padding + boxParams.border
    }
    if (include.paddings) {
        result += boxParams.padding
    }
    if (include.borders) {
        result += boxParams.border
    }
    if (include.margins) {
        result += boxParams.margin
    }
    return result
};
exports.getSize = getSize;
exports.getElementBoxParams = getElementBoxParams;
