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
var events_strategy_1 = require("./events-strategy");
var events = require("devextreme/events");
var utils_1 = require("./utils");
var nested_option_1 = require("./nested-option");
var DxComponent = (function () {
    function DxComponent(element, ngZone, templateHost, watcherHelper) {
        this.element = element;
        this.ngZone = ngZone;
        this.watcherHelper = watcherHelper;
        this._initialOptions = {};
        this._optionsToUpdate = {};
        this.isLinked = true;
        this.changedOptions = {};
        this.renderOnViewInit = true;
        this.widgetUpdateLocked = false;
        this.templates = [];
        templateHost.setHost(this);
        this._collectionContainerImpl = new nested_option_1.CollectionNestedOptionContainerImpl(this._setOption.bind(this));
        this.eventHelper = new events_strategy_1.EmitterHelper(this.ngZone, this);
    }
    DxComponent.prototype._initTemplates = function () {
        if (this.templates.length) {
            var initialTemplates_1 = {};
            this.templates.forEach(function (template) {
                initialTemplates_1[template.name] = template;
            });
            this._initialOptions.integrationOptions.templates = initialTemplates_1;
        }
    };
    DxComponent.prototype._initOptions = function () {
        this._initialOptions.eventsStrategy = this.eventHelper.strategy;
        this._initialOptions.integrationOptions.watchMethod = this.watcherHelper.getWatchMethod();
    };
    DxComponent.prototype._createEventEmitters = function (events) {
        var _this = this;
        events.forEach(function (event) {
            _this.eventHelper.createEmitter(event.emit, event.subscribe);
        });
    };
    DxComponent.prototype._shouldOptionChange = function (name, value) {
        if (this.changedOptions.hasOwnProperty(name)) {
            var prevValue = this.changedOptions[name];
            delete this.changedOptions[name];
            return value !== prevValue;
        }
        return true;
    };
    DxComponent.prototype._getOption = function (name) {
        return this.instance ?
            this.instance.option(name) :
            this._initialOptions[name];
    };
    DxComponent.prototype.lockWidgetUpdate = function () {
        if (!this.widgetUpdateLocked && this.instance) {
            this.instance.beginUpdate();
            this.widgetUpdateLocked = true;
        }
    };
    DxComponent.prototype._setOption = function (name, value) {
        this.lockWidgetUpdate();
        if (!this._shouldOptionChange(name, value)) {
            return;
        }
        if (this.instance) {
            this.instance.option(name, value);
        }
        else {
            this._initialOptions[name] = value;
        }
    };
    DxComponent.prototype._createWidget = function (element) {
        var _this = this;
        this._initialOptions.integrationOptions = {};
        this._initTemplates();
        this._initOptions();
        var optionChangeHandler = function (e) {
            _this.eventHelper.rememberEvent(e.name);
        };
        this._initialOptions.onInitializing = function () {
            this.on('optionChanged', optionChangeHandler);
        };
        this.instance = this._createInstance(element, this._initialOptions);
        this._initialOptions = {};
        this.instance.off('optionChanged', optionChangeHandler);
        this.instance.on('optionChanged', function (e) {
            _this.changedOptions[e.name] = e.value;
            _this.eventHelper.fireNgEvent(e.name + 'Change', [e.value]);
        });
    };
    DxComponent.prototype._destroyWidget = function () {
        if (this.instance) {
            var element = this.instance.element();
            events.triggerHandler(element, { type: 'dxremove', _angularIntegration: true });
            this.instance.dispose();
            utils_1.removeElement(element);
        }
    };
    DxComponent.prototype.ngAfterViewInit = function () {
        if (this.renderOnViewInit) {
            this._createWidget(this.element.nativeElement);
        }
    };
    DxComponent.prototype.ngAfterContentChecked = function () {
        this.applyOptions();
        if (this.widgetUpdateLocked) {
            this.widgetUpdateLocked = false;
            this.instance.endUpdate();
        }
    };
    DxComponent.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            var change = changes[key];
            if (change.currentValue !== this[key]) {
                this._optionsToUpdate[key] = changes[key].currentValue;
            }
        }
    };
    DxComponent.prototype.ngDoCheck = function () {
        this.applyOptions();
    };
    DxComponent.prototype.applyOptions = function () {
        if (Object.keys(this._optionsToUpdate).length) {
            if (this.instance) {
                this.instance.option(this._optionsToUpdate);
            }
            this._optionsToUpdate = {};
        }
    };
    DxComponent.prototype.setTemplate = function (template) {
        this.templates.push(template);
    };
    DxComponent.prototype.setChildren = function (propertyName, items) {
        return this._collectionContainerImpl.setChildren(propertyName, items);
    };
    return DxComponent;
}());
exports.DxComponent = DxComponent;
var DxComponentExtension = (function (_super) {
    __extends(DxComponentExtension, _super);
    function DxComponentExtension() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DxComponentExtension.prototype.createInstance = function (element) {
        this._createWidget(element);
    };
    return DxComponentExtension;
}(DxComponent));
exports.DxComponentExtension = DxComponentExtension;
//# sourceMappingURL=component.js.map