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
var popover_1 = require("devextreme/ui/popover");
var component_1 = require("../core/component");
var template_host_1 = require("../core/template-host");
var template_1 = require("../core/template");
var nested_option_1 = require("../core/nested-option");
var watcher_helper_1 = require("../core/watcher-helper");
var iterable_differ_helper_1 = require("../core/iterable-differ-helper");
var animation_1 = require("./nested/animation");
var hide_1 = require("./nested/hide");
var show_1 = require("./nested/show");
var hide_event_1 = require("./nested/hide-event");
var position_1 = require("./nested/position");
var at_1 = require("./nested/at");
var boundary_offset_1 = require("./nested/boundary-offset");
var collision_1 = require("./nested/collision");
var my_1 = require("./nested/my");
var offset_1 = require("./nested/offset");
var show_event_1 = require("./nested/show-event");
var toolbar_item_dxi_1 = require("./nested/toolbar-item-dxi");
var toolbar_item_dxi_2 = require("./nested/toolbar-item-dxi");
/**
 * The Popover is a widget that shows notifications within a box with an arrow pointing to a specified UI element.
 */
var DxPopoverComponent = (function (_super) {
    __extends(DxPopoverComponent, _super);
    function DxPopoverComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper) || this;
        _this._watcherHelper = _watcherHelper;
        _this._idh = _idh;
        _this._createEventEmitters([
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'hidden', emit: 'onHidden' },
            { subscribe: 'hiding', emit: 'onHiding' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'showing', emit: 'onShowing' },
            { subscribe: 'shown', emit: 'onShown' },
            { subscribe: 'titleRendered', emit: 'onTitleRendered' },
            { emit: 'animationChange' },
            { emit: 'buttonsChange' },
            { emit: 'closeOnBackButtonChange' },
            { emit: 'closeOnOutsideClickChange' },
            { emit: 'contentTemplateChange' },
            { emit: 'deferRenderingChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'heightChange' },
            { emit: 'hideEventChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'maxHeightChange' },
            { emit: 'maxWidthChange' },
            { emit: 'minHeightChange' },
            { emit: 'minWidthChange' },
            { emit: 'positionChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'shadingChange' },
            { emit: 'shadingColorChange' },
            { emit: 'showCloseButtonChange' },
            { emit: 'showEventChange' },
            { emit: 'showTitleChange' },
            { emit: 'targetChange' },
            { emit: 'titleChange' },
            { emit: 'titleTemplateChange' },
            { emit: 'toolbarItemsChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' }
        ]);
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxPopoverComponent.prototype, "animation", {
        /**
         * Configures widget visibility animations. This object contains two fields: show and hide.
         */
        get: function () {
            return this._getOption('animation');
        },
        set: function (value) {
            this._setOption('animation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopoverComponent.prototype, "buttons", {
        /**
         * Use the toolbarItems option instead.
         */
        get: function () {
            return this._getOption('buttons');
        },
        set: function (value) {
            this._setOption('buttons', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopoverComponent.prototype, "closeOnBackButton", {
        /**
         * A Boolean value specifying whether or not the widget is closed if a user presses the Back hardware button.
         */
        get: function () {
            return this._getOption('closeOnBackButton');
        },
        set: function (value) {
            this._setOption('closeOnBackButton', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopoverComponent.prototype, "closeOnOutsideClick", {
        /**
         * A Boolean value specifying whether or not the widget is closed if a user clicks outside of the popover window and outside the target element.
         */
        get: function () {
            return this._getOption('closeOnOutsideClick');
        },
        set: function (value) {
            this._setOption('closeOnOutsideClick', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopoverComponent.prototype, "contentTemplate", {
        /**
         * Specifies a custom template for the widget content.
         */
        get: function () {
            return this._getOption('contentTemplate');
        },
        set: function (value) {
            this._setOption('contentTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopoverComponent.prototype, "deferRendering", {
        /**
         * Specifies whether widget content is rendered when the widget is shown or when rendering the widget.
         */
        get: function () {
            return this._getOption('deferRendering');
        },
        set: function (value) {
            this._setOption('deferRendering', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopoverComponent.prototype, "disabled", {
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
    Object.defineProperty(DxPopoverComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxPopoverComponent.prototype, "height", {
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
    Object.defineProperty(DxPopoverComponent.prototype, "hideEvent", {
        /**
         * Specifies options of popover hiding.
         */
        get: function () {
            return this._getOption('hideEvent');
        },
        set: function (value) {
            this._setOption('hideEvent', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopoverComponent.prototype, "hint", {
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
    Object.defineProperty(DxPopoverComponent.prototype, "hoverStateEnabled", {
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
    Object.defineProperty(DxPopoverComponent.prototype, "maxHeight", {
        /**
         * Specifies the maximum height the widget can reach while resizing.
         */
        get: function () {
            return this._getOption('maxHeight');
        },
        set: function (value) {
            this._setOption('maxHeight', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopoverComponent.prototype, "maxWidth", {
        /**
         * Specifies the maximum width the widget can reach while resizing.
         */
        get: function () {
            return this._getOption('maxWidth');
        },
        set: function (value) {
            this._setOption('maxWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopoverComponent.prototype, "minHeight", {
        /**
         * Specifies the minimum height the widget can reach while resizing.
         */
        get: function () {
            return this._getOption('minHeight');
        },
        set: function (value) {
            this._setOption('minHeight', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopoverComponent.prototype, "minWidth", {
        /**
         * Specifies the minimum width the widget can reach while resizing.
         */
        get: function () {
            return this._getOption('minWidth');
        },
        set: function (value) {
            this._setOption('minWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopoverComponent.prototype, "position", {
        /**
         * An object defining widget positioning options.
         */
        get: function () {
            return this._getOption('position');
        },
        set: function (value) {
            this._setOption('position', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopoverComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxPopoverComponent.prototype, "shading", {
        /**
         * A Boolean value specifying whether or not the main screen is inactive while the widget is active.
         */
        get: function () {
            return this._getOption('shading');
        },
        set: function (value) {
            this._setOption('shading', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopoverComponent.prototype, "shadingColor", {
        /**
         * Specifies the shading color.
         */
        get: function () {
            return this._getOption('shadingColor');
        },
        set: function (value) {
            this._setOption('shadingColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopoverComponent.prototype, "showCloseButton", {
        /**
         * Specifies whether or not the widget displays the Close button.
         */
        get: function () {
            return this._getOption('showCloseButton');
        },
        set: function (value) {
            this._setOption('showCloseButton', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopoverComponent.prototype, "showEvent", {
        /**
         * Specifies options for displaying the widget.
         */
        get: function () {
            return this._getOption('showEvent');
        },
        set: function (value) {
            this._setOption('showEvent', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopoverComponent.prototype, "showTitle", {
        /**
         * A Boolean value specifying whether or not to display the title in the overlay window.
         */
        get: function () {
            return this._getOption('showTitle');
        },
        set: function (value) {
            this._setOption('showTitle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopoverComponent.prototype, "target", {
        /**
         * The target element associated with a popover.
         */
        get: function () {
            return this._getOption('target');
        },
        set: function (value) {
            this._setOption('target', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopoverComponent.prototype, "title", {
        /**
         * The title in the overlay window.
         */
        get: function () {
            return this._getOption('title');
        },
        set: function (value) {
            this._setOption('title', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopoverComponent.prototype, "titleTemplate", {
        /**
         * Specifies a custom template for the widget title. Does not apply if the title is defined.
         */
        get: function () {
            return this._getOption('titleTemplate');
        },
        set: function (value) {
            this._setOption('titleTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopoverComponent.prototype, "toolbarItems", {
        /**
         * Specifies items displayed on the top or bottom toolbar of the popup window.
         */
        get: function () {
            return this._getOption('toolbarItems');
        },
        set: function (value) {
            this._setOption('toolbarItems', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPopoverComponent.prototype, "visible", {
        /**
         * A Boolean value specifying whether or not the widget is visible.
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
    Object.defineProperty(DxPopoverComponent.prototype, "width", {
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
    Object.defineProperty(DxPopoverComponent.prototype, "toolbarItemsChildren", {
        get: function () {
            return this._getOption('toolbarItems');
        },
        set: function (value) {
            this.setChildren('toolbarItems', value);
        },
        enumerable: true,
        configurable: true
    });
    DxPopoverComponent.prototype._createInstance = function (element, options) {
        return new popover_1.default(element, options);
    };
    DxPopoverComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxPopoverComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('buttons', changes);
        this.setupChanges('toolbarItems', changes);
    };
    DxPopoverComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxPopoverComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('buttons');
        this._idh.doCheck('toolbarItems');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
    };
    DxPopoverComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxPopoverComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-popover',
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
    DxPopoverComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: iterable_differ_helper_1.IterableDifferHelper, },
        { type: nested_option_1.NestedOptionHost, },
    ]; };
    DxPopoverComponent.propDecorators = {
        'animation': [{ type: core_1.Input },],
        'buttons': [{ type: core_1.Input },],
        'closeOnBackButton': [{ type: core_1.Input },],
        'closeOnOutsideClick': [{ type: core_1.Input },],
        'contentTemplate': [{ type: core_1.Input },],
        'deferRendering': [{ type: core_1.Input },],
        'disabled': [{ type: core_1.Input },],
        'elementAttr': [{ type: core_1.Input },],
        'height': [{ type: core_1.Input },],
        'hideEvent': [{ type: core_1.Input },],
        'hint': [{ type: core_1.Input },],
        'hoverStateEnabled': [{ type: core_1.Input },],
        'maxHeight': [{ type: core_1.Input },],
        'maxWidth': [{ type: core_1.Input },],
        'minHeight': [{ type: core_1.Input },],
        'minWidth': [{ type: core_1.Input },],
        'position': [{ type: core_1.Input },],
        'rtlEnabled': [{ type: core_1.Input },],
        'shading': [{ type: core_1.Input },],
        'shadingColor': [{ type: core_1.Input },],
        'showCloseButton': [{ type: core_1.Input },],
        'showEvent': [{ type: core_1.Input },],
        'showTitle': [{ type: core_1.Input },],
        'target': [{ type: core_1.Input },],
        'title': [{ type: core_1.Input },],
        'titleTemplate': [{ type: core_1.Input },],
        'toolbarItems': [{ type: core_1.Input },],
        'visible': [{ type: core_1.Input },],
        'width': [{ type: core_1.Input },],
        'onContentReady': [{ type: core_1.Output },],
        'onDisposing': [{ type: core_1.Output },],
        'onHidden': [{ type: core_1.Output },],
        'onHiding': [{ type: core_1.Output },],
        'onInitialized': [{ type: core_1.Output },],
        'onOptionChanged': [{ type: core_1.Output },],
        'onShowing': [{ type: core_1.Output },],
        'onShown': [{ type: core_1.Output },],
        'onTitleRendered': [{ type: core_1.Output },],
        'animationChange': [{ type: core_1.Output },],
        'buttonsChange': [{ type: core_1.Output },],
        'closeOnBackButtonChange': [{ type: core_1.Output },],
        'closeOnOutsideClickChange': [{ type: core_1.Output },],
        'contentTemplateChange': [{ type: core_1.Output },],
        'deferRenderingChange': [{ type: core_1.Output },],
        'disabledChange': [{ type: core_1.Output },],
        'elementAttrChange': [{ type: core_1.Output },],
        'heightChange': [{ type: core_1.Output },],
        'hideEventChange': [{ type: core_1.Output },],
        'hintChange': [{ type: core_1.Output },],
        'hoverStateEnabledChange': [{ type: core_1.Output },],
        'maxHeightChange': [{ type: core_1.Output },],
        'maxWidthChange': [{ type: core_1.Output },],
        'minHeightChange': [{ type: core_1.Output },],
        'minWidthChange': [{ type: core_1.Output },],
        'positionChange': [{ type: core_1.Output },],
        'rtlEnabledChange': [{ type: core_1.Output },],
        'shadingChange': [{ type: core_1.Output },],
        'shadingColorChange': [{ type: core_1.Output },],
        'showCloseButtonChange': [{ type: core_1.Output },],
        'showEventChange': [{ type: core_1.Output },],
        'showTitleChange': [{ type: core_1.Output },],
        'targetChange': [{ type: core_1.Output },],
        'titleChange': [{ type: core_1.Output },],
        'titleTemplateChange': [{ type: core_1.Output },],
        'toolbarItemsChange': [{ type: core_1.Output },],
        'visibleChange': [{ type: core_1.Output },],
        'widthChange': [{ type: core_1.Output },],
        'toolbarItemsChildren': [{ type: core_1.ContentChildren, args: [toolbar_item_dxi_2.DxiToolbarItemComponent,] },],
    };
    return DxPopoverComponent;
}(component_1.DxComponent));
exports.DxPopoverComponent = DxPopoverComponent;
var DxPopoverModule = (function () {
    function DxPopoverModule() {
    }
    DxPopoverModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        animation_1.DxoAnimationModule,
                        hide_1.DxoHideModule,
                        show_1.DxoShowModule,
                        hide_event_1.DxoHideEventModule,
                        position_1.DxoPositionModule,
                        at_1.DxoAtModule,
                        boundary_offset_1.DxoBoundaryOffsetModule,
                        collision_1.DxoCollisionModule,
                        my_1.DxoMyModule,
                        offset_1.DxoOffsetModule,
                        show_event_1.DxoShowEventModule,
                        toolbar_item_dxi_1.DxiToolbarItemModule,
                        template_1.DxTemplateModule
                    ],
                    declarations: [
                        DxPopoverComponent
                    ],
                    exports: [
                        DxPopoverComponent,
                        animation_1.DxoAnimationModule,
                        hide_1.DxoHideModule,
                        show_1.DxoShowModule,
                        hide_event_1.DxoHideEventModule,
                        position_1.DxoPositionModule,
                        at_1.DxoAtModule,
                        boundary_offset_1.DxoBoundaryOffsetModule,
                        collision_1.DxoCollisionModule,
                        my_1.DxoMyModule,
                        offset_1.DxoOffsetModule,
                        show_event_1.DxoShowEventModule,
                        toolbar_item_dxi_1.DxiToolbarItemModule,
                        template_1.DxTemplateModule
                    ],
                },] },
    ];
    /** @nocollapse */
    DxPopoverModule.ctorParameters = function () { return []; };
    return DxPopoverModule;
}());
exports.DxPopoverModule = DxPopoverModule;
//# sourceMappingURL=popover.js.map