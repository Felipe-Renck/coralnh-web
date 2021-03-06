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
function addClass(element, name) {
    if (element.nodeType === 1) {
        if (element.classList) {
            element.classList.add(name);
        }
        else {
            element.className = element.className ? element.className + ' ' + name : name;
        }
    }
}
exports.addClass = addClass;
;
function hasClass(element, name) {
    var result;
    if (element.classList) {
        result = element.classList.contains(name);
    }
    else {
        result = element.className.split(' ').indexOf(name) >= 0;
    }
    return result;
}
exports.hasClass = hasClass;
;
function getElement(element) {
    return element.get ? element.get(0) : element;
}
exports.getElement = getElement;
;
function removeElement(element) {
    var node = getElement(element), parentNode = node && node.parentNode;
    if (parentNode) {
        parentNode.removeChild(node);
    }
}
exports.removeElement = removeElement;
;
//# sourceMappingURL=utils.js.map