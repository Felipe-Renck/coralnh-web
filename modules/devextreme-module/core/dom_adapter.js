/**
 * DevExtreme (core/dom_adapter.js)
 * Version: 17.2.5
 * Build date: Tue Jan 23 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
"use strict";
module.exports = {
    createElement: function(tagName, text, context) {
        context = context || document;
        if ("#text" === tagName) {
            return context.createTextNode(text)
        }
        return context.createElement("string" === typeof tagName ? tagName : "div")
    },
    removeElement: function(element) {
        var parentNode = element && element.parentNode;
        if (parentNode) {
            parentNode.removeChild(element)
        }
    },
    insertElement: function(parentElement, newElement, nextSiblingElement) {
        if (parentElement && newElement && parentElement !== newElement) {
            if (nextSiblingElement) {
                parentElement.insertBefore(newElement, nextSiblingElement)
            } else {
                parentElement.appendChild(newElement)
            }
        }
    },
    setAttribute: function(element, name, value) {
        element.setAttribute(name, value)
    },
    removeAttribute: function(element, name) {
        element.removeAttribute(name)
    },
    setProperty: function(element, name, value) {
        element[name] = value
    },
    setEvent: function(element, name, value) {
        element.addEventListener(name, value)
    },
    setText: function(element, text) {
        if (element) {
            element.textContent = text
        }
    },
    setClass: function(element, className, isAdd) {
        if (1 === element.nodeType) {
            if (element.classList) {
                if (isAdd) {
                    element.classList.add(className)
                } else {
                    element.classList.remove(className)
                }
            } else {
                var classNames = element.className.split(" ");
                var classIndex = classNames.indexOf(className);
                if (isAdd && classIndex < 0) {
                    element.className = element.className ? element.className + " " + className : className
                }
                if (!isAdd && classIndex >= 0) {
                    classNames.splice(classIndex, 1);
                    element.className = classNames.join(" ")
                }
            }
        }
    },
    setStyle: function(element, name, value) {
        element.style[name] = value || ""
    }
};
