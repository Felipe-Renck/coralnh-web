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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var template_1 = require("./template");
var utils_1 = require("./utils");
var events = require("devextreme/events");
var VISIBILITY_CHANGE_SELECTOR = 'dx-visibility-change-handler';
var BaseNestedOption = (function () {
    function BaseNestedOption() {
        this._initialOptions = {};
        this._collectionContainerImpl = new CollectionNestedOptionContainerImpl(this._setOption.bind(this), this._filterItems.bind(this));
    }
    BaseNestedOption.prototype._getOption = function (name) {
        if (this.isLinked) {
            return this.instance.option(this._fullOptionPath() + name);
        }
        else {
            return this._initialOptions[name];
        }
    };
    BaseNestedOption.prototype._setOption = function (name, value) {
        if (this.isLinked) {
            this.instance.option(this._fullOptionPath() + name, value);
        }
        else {
            this._initialOptions[name] = value;
        }
    };
    BaseNestedOption.prototype.setHost = function (host, optionPath) {
        this._host = host;
        this._hostOptionPath = optionPath;
    };
    BaseNestedOption.prototype.setChildren = function (propertyName, items) {
        return this._collectionContainerImpl.setChildren(propertyName, items);
    };
    BaseNestedOption.prototype._filterItems = function (items) {
        var _this = this;
        return items.filter(function (item) { return item !== _this; });
    };
    Object.defineProperty(BaseNestedOption.prototype, "instance", {
        get: function () {
            return this._host && this._host.instance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseNestedOption.prototype, "isLinked", {
        get: function () {
            return !!this.instance && this._host.isLinked;
        },
        enumerable: true,
        configurable: true
    });
    return BaseNestedOption;
}());
exports.BaseNestedOption = BaseNestedOption;
var CollectionNestedOptionContainerImpl = (function () {
    function CollectionNestedOptionContainerImpl(_setOption, _filterItems) {
        this._setOption = _setOption;
        this._filterItems = _filterItems;
        this._activatedQueries = {};
    }
    CollectionNestedOptionContainerImpl.prototype.setChildren = function (propertyName, items) {
        if (this._filterItems) {
            items = this._filterItems(items);
        }
        if (items.length) {
            this._activatedQueries[propertyName] = true;
        }
        if (this._activatedQueries[propertyName]) {
            var widgetItems = items.map(function (item, index) {
                item._index = index;
                return item._value;
            });
            this._setOption(propertyName, widgetItems);
        }
    };
    return CollectionNestedOptionContainerImpl;
}());
exports.CollectionNestedOptionContainerImpl = CollectionNestedOptionContainerImpl;
var NestedOption = (function (_super) {
    __extends(NestedOption, _super);
    function NestedOption() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NestedOption.prototype.setHost = function (host, optionPath) {
        _super.prototype.setHost.call(this, host, optionPath);
        this._host[this._optionPath] = this._initialOptions;
    };
    NestedOption.prototype._fullOptionPath = function () {
        return this._hostOptionPath() + this._optionPath + '.';
    };
    return NestedOption;
}(BaseNestedOption));
exports.NestedOption = NestedOption;
var CollectionNestedOption = (function (_super) {
    __extends(CollectionNestedOption, _super);
    function CollectionNestedOption() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CollectionNestedOption.prototype._fullOptionPath = function () {
        return this._hostOptionPath() + this._optionPath + '[' + this._index + ']' + '.';
    };
    Object.defineProperty(CollectionNestedOption.prototype, "_value", {
        get: function () {
            return this._initialOptions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CollectionNestedOption.prototype, "isLinked", {
        get: function () {
            return this._index !== undefined && !!this.instance;
        },
        enumerable: true,
        configurable: true
    });
    return CollectionNestedOption;
}(BaseNestedOption));
exports.CollectionNestedOption = CollectionNestedOption;
var triggerShownEvent = function (element) {
    var changeHandlers = [];
    if (utils_1.hasClass(element, VISIBILITY_CHANGE_SELECTOR)) {
        changeHandlers.push(element);
    }
    changeHandlers.push.apply(changeHandlers, element.querySelectorAll('.' + VISIBILITY_CHANGE_SELECTOR));
    for (var i = 0; i < changeHandlers.length; i++) {
        events.triggerHandler(changeHandlers[i], 'dxshown');
    }
};
function extractTemplate(option, element) {
    if (!option.template === undefined || !element.nativeElement.hasChildNodes()) {
        return;
    }
    var childNodes = [].slice.call(element.nativeElement.childNodes);
    var userContent = childNodes.filter(function (n) {
        if (n.tagName) {
            var tagNamePrefix = n.tagName.toLowerCase().substr(0, 3);
            return !(tagNamePrefix === 'dxi' || tagNamePrefix === 'dxo');
        }
        else {
            return n.nodeName !== '#comment' && n.textContent.replace(/\s/g, '').length;
        }
    });
    if (!userContent.length) {
        return;
    }
    option.template = {
        render: function (renderData) {
            var result = element.nativeElement;
            utils_1.addClass(result, template_1.DX_TEMPLATE_WRAPPER_CLASS);
            if (renderData.container) {
                var container = utils_1.getElement(renderData.container);
                var resultInContainer = container.contains(element.nativeElement);
                container.appendChild(element.nativeElement);
                if (!resultInContainer) {
                    var resultInBody = document.body.contains(container);
                    if (resultInBody) {
                        triggerShownEvent(result);
                    }
                }
            }
            return result;
        }
    };
}
exports.extractTemplate = extractTemplate;
var NestedOptionHost = (function () {
    function NestedOptionHost() {
    }
    NestedOptionHost.prototype.setHost = function (host, optionPath) {
        this._host = host;
        this._optionPath = optionPath || (function () { return ''; });
    };
    NestedOptionHost.prototype.setNestedOption = function (nestedOption) {
        nestedOption.setHost(this._host, this._optionPath);
    };
    return NestedOptionHost;
}());
exports.NestedOptionHost = NestedOptionHost;
//# sourceMappingURL=nested-option.js.map