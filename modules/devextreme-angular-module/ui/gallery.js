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
var core_1 = require("@angular/core");
var gallery_1 = require("devextreme/ui/gallery");
var component_1 = require("../core/component");
var template_host_1 = require("../core/template-host");
var template_1 = require("../core/template");
var nested_option_1 = require("../core/nested-option");
var watcher_helper_1 = require("../core/watcher-helper");
var iterable_differ_helper_1 = require("../core/iterable-differ-helper");
var item_dxi_1 = require("./nested/item-dxi");
var item_dxi_2 = require("./nested/item-dxi");
/**
 * The Gallery is a widget that displays a collection of images in a carousel. The widget is supplied with various navigation controls that allow a user to switch between images.
 */
var DxGalleryComponent = (function (_super) {
    __extends(DxGalleryComponent, _super);
    function DxGalleryComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper) || this;
        _this._watcherHelper = _watcherHelper;
        _this._idh = _idh;
        _this._createEventEmitters([
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'itemClick', emit: 'onItemClick' },
            { subscribe: 'itemContextMenu', emit: 'onItemContextMenu' },
            { subscribe: 'itemHold', emit: 'onItemHold' },
            { subscribe: 'itemRendered', emit: 'onItemRendered' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'selectionChanged', emit: 'onSelectionChanged' },
            { emit: 'accessKeyChange' },
            { emit: 'animationDurationChange' },
            { emit: 'animationEnabledChange' },
            { emit: 'dataSourceChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'indicatorEnabledChange' },
            { emit: 'initialItemWidthChange' },
            { emit: 'itemHoldTimeoutChange' },
            { emit: 'itemsChange' },
            { emit: 'itemTemplateChange' },
            { emit: 'loopChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'selectedIndexChange' },
            { emit: 'selectedItemChange' },
            { emit: 'showIndicatorChange' },
            { emit: 'showNavButtonsChange' },
            { emit: 'slideshowDelayChange' },
            { emit: 'stretchImagesChange' },
            { emit: 'swipeEnabledChange' },
            { emit: 'tabIndexChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' },
            { emit: 'wrapAroundChange' }
        ]);
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxGalleryComponent.prototype, "accessKey", {
        /**
         * Specifies the shortcut key that sets focus on the widget.
         */
        get: function () {
            return this._getOption('accessKey');
        },
        set: function (value) {
            this._setOption('accessKey', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "animationDuration", {
        /**
         * The time, in milliseconds, spent on slide animation.
         */
        get: function () {
            return this._getOption('animationDuration');
        },
        set: function (value) {
            this._setOption('animationDuration', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "animationEnabled", {
        /**
         * Specifies whether or not to animate the displayed item change.
         */
        get: function () {
            return this._getOption('animationEnabled');
        },
        set: function (value) {
            this._setOption('animationEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "dataSource", {
        /**
         * A data source used to fetch data to be displayed by the widget.
         */
        get: function () {
            return this._getOption('dataSource');
        },
        set: function (value) {
            this._setOption('dataSource', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "disabled", {
        /**
         * Specifies whether the widget responds to user interaction.
         */
        get: function () {
            return this._getOption('disabled');
        },
        set: function (value) {
            this._setOption('disabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "elementAttr", {
        /**
         * Specifies the attributes to be attached to the widget's root element.
         */
        get: function () {
            return this._getOption('elementAttr');
        },
        set: function (value) {
            this._setOption('elementAttr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "focusStateEnabled", {
        /**
         * Specifies whether the widget can be focused using keyboard navigation.
         */
        get: function () {
            return this._getOption('focusStateEnabled');
        },
        set: function (value) {
            this._setOption('focusStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "height", {
        /**
         * Specifies the widget's height.
         */
        get: function () {
            return this._getOption('height');
        },
        set: function (value) {
            this._setOption('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "hint", {
        /**
         * Specifies text for a hint that appears when a user pauses on the widget.
         */
        get: function () {
            return this._getOption('hint');
        },
        set: function (value) {
            this._setOption('hint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "hoverStateEnabled", {
        /**
         * Specifies whether the widget changes its state when a user pauses on it.
         */
        get: function () {
            return this._getOption('hoverStateEnabled');
        },
        set: function (value) {
            this._setOption('hoverStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "indicatorEnabled", {
        /**
         * A Boolean value specifying whether or not to allow users to switch between items by clicking an indicator.
         */
        get: function () {
            return this._getOption('indicatorEnabled');
        },
        set: function (value) {
            this._setOption('indicatorEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "initialItemWidth", {
        /**
         * Specifies the width of an area used to display a single image.
         */
        get: function () {
            return this._getOption('initialItemWidth');
        },
        set: function (value) {
            this._setOption('initialItemWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "itemHoldTimeout", {
        /**
         * The time period in milliseconds before the onItemHold event is raised.
         */
        get: function () {
            return this._getOption('itemHoldTimeout');
        },
        set: function (value) {
            this._setOption('itemHoldTimeout', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "items", {
        /**
         * An array of items displayed by the widget.
         */
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this._setOption('items', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "itemTemplate", {
        /**
         * Specifies a custom template for items.
         */
        get: function () {
            return this._getOption('itemTemplate');
        },
        set: function (value) {
            this._setOption('itemTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "loop", {
        /**
         * A Boolean value specifying whether or not to scroll back to the first item after the last item is swiped.
         */
        get: function () {
            return this._getOption('loop');
        },
        set: function (value) {
            this._setOption('loop', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "rtlEnabled", {
        /**
         * Switches the widget to a right-to-left representation.
         */
        get: function () {
            return this._getOption('rtlEnabled');
        },
        set: function (value) {
            this._setOption('rtlEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "selectedIndex", {
        /**
         * The index of the currently active gallery item.
         */
        get: function () {
            return this._getOption('selectedIndex');
        },
        set: function (value) {
            this._setOption('selectedIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "selectedItem", {
        /**
         * The selected item object.
         */
        get: function () {
            return this._getOption('selectedItem');
        },
        set: function (value) {
            this._setOption('selectedItem', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "showIndicator", {
        /**
         * A Boolean value specifying whether or not to display an indicator that points to the selected gallery item.
         */
        get: function () {
            return this._getOption('showIndicator');
        },
        set: function (value) {
            this._setOption('showIndicator', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "showNavButtons", {
        /**
         * A Boolean value that specifies the availability of the "Forward" and "Back" navigation buttons.
         */
        get: function () {
            return this._getOption('showNavButtons');
        },
        set: function (value) {
            this._setOption('showNavButtons', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "slideshowDelay", {
        /**
         * The time interval in milliseconds, after which the gallery switches to the next item.
         */
        get: function () {
            return this._getOption('slideshowDelay');
        },
        set: function (value) {
            this._setOption('slideshowDelay', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "stretchImages", {
        /**
         * Specifies if the widget stretches images to fit the total gallery width.
         */
        get: function () {
            return this._getOption('stretchImages');
        },
        set: function (value) {
            this._setOption('stretchImages', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "swipeEnabled", {
        /**
         * A Boolean value specifying whether or not to allow users to switch between items by swiping.
         */
        get: function () {
            return this._getOption('swipeEnabled');
        },
        set: function (value) {
            this._setOption('swipeEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "tabIndex", {
        /**
         * Specifies the number of the element when the Tab key is used for navigating.
         */
        get: function () {
            return this._getOption('tabIndex');
        },
        set: function (value) {
            this._setOption('tabIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "visible", {
        /**
         * Specifies whether the widget is visible.
         */
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "width", {
        /**
         * Specifies the widget's width.
         */
        get: function () {
            return this._getOption('width');
        },
        set: function (value) {
            this._setOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "wrapAround", {
        /**
         * Specifies whether or not to display parts of previous and next images along the sides of the current image.
         */
        get: function () {
            return this._getOption('wrapAround');
        },
        set: function (value) {
            this._setOption('wrapAround', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxGalleryComponent.prototype, "itemsChildren", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this.setChildren('items', value);
        },
        enumerable: true,
        configurable: true
    });
    DxGalleryComponent.prototype._createInstance = function (element, options) {
        return new gallery_1.default(element, options);
    };
    DxGalleryComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxGalleryComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('dataSource', changes);
        this.setupChanges('items', changes);
    };
    DxGalleryComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxGalleryComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('items');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
    };
    DxGalleryComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxGalleryComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-gallery',
                    template: '',
                    providers: [
                        template_host_1.DxTemplateHost,
                        watcher_helper_1.WatcherHelper,
                        nested_option_1.NestedOptionHost,
                        iterable_differ_helper_1.IterableDifferHelper
                    ]
                },] },
    ];
    /** @nocollapse */
    DxGalleryComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: iterable_differ_helper_1.IterableDifferHelper, },
        { type: nested_option_1.NestedOptionHost, },
    ]; };
    DxGalleryComponent.propDecorators = {
        'accessKey': [{ type: core_1.Input },],
        'animationDuration': [{ type: core_1.Input },],
        'animationEnabled': [{ type: core_1.Input },],
        'dataSource': [{ type: core_1.Input },],
        'disabled': [{ type: core_1.Input },],
        'elementAttr': [{ type: core_1.Input },],
        'focusStateEnabled': [{ type: core_1.Input },],
        'height': [{ type: core_1.Input },],
        'hint': [{ type: core_1.Input },],
        'hoverStateEnabled': [{ type: core_1.Input },],
        'indicatorEnabled': [{ type: core_1.Input },],
        'initialItemWidth': [{ type: core_1.Input },],
        'itemHoldTimeout': [{ type: core_1.Input },],
        'items': [{ type: core_1.Input },],
        'itemTemplate': [{ type: core_1.Input },],
        'loop': [{ type: core_1.Input },],
        'rtlEnabled': [{ type: core_1.Input },],
        'selectedIndex': [{ type: core_1.Input },],
        'selectedItem': [{ type: core_1.Input },],
        'showIndicator': [{ type: core_1.Input },],
        'showNavButtons': [{ type: core_1.Input },],
        'slideshowDelay': [{ type: core_1.Input },],
        'stretchImages': [{ type: core_1.Input },],
        'swipeEnabled': [{ type: core_1.Input },],
        'tabIndex': [{ type: core_1.Input },],
        'visible': [{ type: core_1.Input },],
        'width': [{ type: core_1.Input },],
        'wrapAround': [{ type: core_1.Input },],
        'onContentReady': [{ type: core_1.Output },],
        'onDisposing': [{ type: core_1.Output },],
        'onInitialized': [{ type: core_1.Output },],
        'onItemClick': [{ type: core_1.Output },],
        'onItemContextMenu': [{ type: core_1.Output },],
        'onItemHold': [{ type: core_1.Output },],
        'onItemRendered': [{ type: core_1.Output },],
        'onOptionChanged': [{ type: core_1.Output },],
        'onSelectionChanged': [{ type: core_1.Output },],
        'accessKeyChange': [{ type: core_1.Output },],
        'animationDurationChange': [{ type: core_1.Output },],
        'animationEnabledChange': [{ type: core_1.Output },],
        'dataSourceChange': [{ type: core_1.Output },],
        'disabledChange': [{ type: core_1.Output },],
        'elementAttrChange': [{ type: core_1.Output },],
        'focusStateEnabledChange': [{ type: core_1.Output },],
        'heightChange': [{ type: core_1.Output },],
        'hintChange': [{ type: core_1.Output },],
        'hoverStateEnabledChange': [{ type: core_1.Output },],
        'indicatorEnabledChange': [{ type: core_1.Output },],
        'initialItemWidthChange': [{ type: core_1.Output },],
        'itemHoldTimeoutChange': [{ type: core_1.Output },],
        'itemsChange': [{ type: core_1.Output },],
        'itemTemplateChange': [{ type: core_1.Output },],
        'loopChange': [{ type: core_1.Output },],
        'rtlEnabledChange': [{ type: core_1.Output },],
        'selectedIndexChange': [{ type: core_1.Output },],
        'selectedItemChange': [{ type: core_1.Output },],
        'showIndicatorChange': [{ type: core_1.Output },],
        'showNavButtonsChange': [{ type: core_1.Output },],
        'slideshowDelayChange': [{ type: core_1.Output },],
        'stretchImagesChange': [{ type: core_1.Output },],
        'swipeEnabledChange': [{ type: core_1.Output },],
        'tabIndexChange': [{ type: core_1.Output },],
        'visibleChange': [{ type: core_1.Output },],
        'widthChange': [{ type: core_1.Output },],
        'wrapAroundChange': [{ type: core_1.Output },],
        'itemsChildren': [{ type: core_1.ContentChildren, args: [item_dxi_2.DxiItemComponent,] },],
    };
    return DxGalleryComponent;
}(component_1.DxComponent));
exports.DxGalleryComponent = DxGalleryComponent;
var DxGalleryModule = (function () {
    function DxGalleryModule() {
    }
    DxGalleryModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        item_dxi_1.DxiItemModule,
                        template_1.DxTemplateModule
                    ],
                    declarations: [
                        DxGalleryComponent
                    ],
                    exports: [
                        DxGalleryComponent,
                        item_dxi_1.DxiItemModule,
                        template_1.DxTemplateModule
                    ],
                },] },
    ];
    /** @nocollapse */
    DxGalleryModule.ctorParameters = function () { return []; };
    return DxGalleryModule;
}());
exports.DxGalleryModule = DxGalleryModule;
//# sourceMappingURL=gallery.js.map