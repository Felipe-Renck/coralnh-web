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
var menu_1 = require("devextreme/ui/menu");
var component_1 = require("../core/component");
var template_host_1 = require("../core/template-host");
var template_1 = require("../core/template");
var nested_option_1 = require("../core/nested-option");
var watcher_helper_1 = require("../core/watcher-helper");
var iterable_differ_helper_1 = require("../core/iterable-differ-helper");
var animation_1 = require("./nested/animation");
var hide_1 = require("./nested/hide");
var show_1 = require("./nested/show");
var item_dxi_1 = require("./nested/item-dxi");
var show_first_submenu_mode_1 = require("./nested/show-first-submenu-mode");
var delay_1 = require("./nested/delay");
var show_submenu_mode_1 = require("./nested/show-submenu-mode");
var item_dxi_2 = require("./nested/item-dxi");
/**
 * The Menu widget is a panel with clickable items. A click on an item opens a drop-down menu, which can contain several submenus.
 */
var DxMenuComponent = (function (_super) {
    __extends(DxMenuComponent, _super);
    function DxMenuComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper) || this;
        _this._watcherHelper = _watcherHelper;
        _this._idh = _idh;
        _this._createEventEmitters([
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'itemClick', emit: 'onItemClick' },
            { subscribe: 'itemContextMenu', emit: 'onItemContextMenu' },
            { subscribe: 'itemRendered', emit: 'onItemRendered' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'selectionChanged', emit: 'onSelectionChanged' },
            { subscribe: 'submenuHidden', emit: 'onSubmenuHidden' },
            { subscribe: 'submenuHiding', emit: 'onSubmenuHiding' },
            { subscribe: 'submenuShowing', emit: 'onSubmenuShowing' },
            { subscribe: 'submenuShown', emit: 'onSubmenuShown' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'adaptivityEnabledChange' },
            { emit: 'animationChange' },
            { emit: 'cssClassChange' },
            { emit: 'dataSourceChange' },
            { emit: 'disabledChange' },
            { emit: 'disabledExprChange' },
            { emit: 'displayExprChange' },
            { emit: 'elementAttrChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'heightChange' },
            { emit: 'hideSubmenuOnMouseLeaveChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'itemsChange' },
            { emit: 'itemsExprChange' },
            { emit: 'itemTemplateChange' },
            { emit: 'orientationChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'selectByClickChange' },
            { emit: 'selectedExprChange' },
            { emit: 'selectedItemChange' },
            { emit: 'selectionByClickChange' },
            { emit: 'selectionModeChange' },
            { emit: 'showFirstSubmenuModeChange' },
            { emit: 'showSubmenuModeChange' },
            { emit: 'submenuDirectionChange' },
            { emit: 'tabIndexChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' }
        ]);
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxMenuComponent.prototype, "accessKey", {
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
    Object.defineProperty(DxMenuComponent.prototype, "activeStateEnabled", {
        /**
         * A Boolean value specifying whether or not the widget changes its state when interacting with a user.
         */
        get: function () {
            return this._getOption('activeStateEnabled');
        },
        set: function (value) {
            this._setOption('activeStateEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMenuComponent.prototype, "adaptivityEnabled", {
        /**
         * Specifies whether adaptive widget rendering is enabled on small screens. Applies only if the orientation is "horizontal".
         */
        get: function () {
            return this._getOption('adaptivityEnabled');
        },
        set: function (value) {
            this._setOption('adaptivityEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMenuComponent.prototype, "animation", {
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
    Object.defineProperty(DxMenuComponent.prototype, "cssClass", {
        /**
         * Specifies the name of the CSS class to be applied to the root menu level and all submenus.
         */
        get: function () {
            return this._getOption('cssClass');
        },
        set: function (value) {
            this._setOption('cssClass', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMenuComponent.prototype, "dataSource", {
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
    Object.defineProperty(DxMenuComponent.prototype, "disabled", {
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
    Object.defineProperty(DxMenuComponent.prototype, "disabledExpr", {
        /**
         * Specifies the name of the data source item field whose value defines whether or not the corresponding widget item is disabled.
         */
        get: function () {
            return this._getOption('disabledExpr');
        },
        set: function (value) {
            this._setOption('disabledExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMenuComponent.prototype, "displayExpr", {
        /**
         * Specifies the name of the data source item field whose value is displayed by the widget.
         */
        get: function () {
            return this._getOption('displayExpr');
        },
        set: function (value) {
            this._setOption('displayExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMenuComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxMenuComponent.prototype, "focusStateEnabled", {
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
    Object.defineProperty(DxMenuComponent.prototype, "height", {
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
    Object.defineProperty(DxMenuComponent.prototype, "hideSubmenuOnMouseLeave", {
        /**
         * Specifies whether or not the submenu is hidden when the mouse pointer leaves it.
         */
        get: function () {
            return this._getOption('hideSubmenuOnMouseLeave');
        },
        set: function (value) {
            this._setOption('hideSubmenuOnMouseLeave', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMenuComponent.prototype, "hint", {
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
    Object.defineProperty(DxMenuComponent.prototype, "hoverStateEnabled", {
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
    Object.defineProperty(DxMenuComponent.prototype, "items", {
        /**
         * Holds an array of menu items.
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
    Object.defineProperty(DxMenuComponent.prototype, "itemsExpr", {
        /**
         * Specifies which data field contains nested items.
         */
        get: function () {
            return this._getOption('itemsExpr');
        },
        set: function (value) {
            this._setOption('itemsExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMenuComponent.prototype, "itemTemplate", {
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
    Object.defineProperty(DxMenuComponent.prototype, "orientation", {
        /**
         * Specifies whether the menu has horizontal or vertical orientation.
         */
        get: function () {
            return this._getOption('orientation');
        },
        set: function (value) {
            this._setOption('orientation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMenuComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxMenuComponent.prototype, "selectByClick", {
        /**
         * Specifies whether or not an item becomes selected if a user clicks it.
         */
        get: function () {
            return this._getOption('selectByClick');
        },
        set: function (value) {
            this._setOption('selectByClick', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMenuComponent.prototype, "selectedExpr", {
        /**
         * Specifies the name of the data source item field whose value defines whether or not the corresponding widget items is selected.
         */
        get: function () {
            return this._getOption('selectedExpr');
        },
        set: function (value) {
            this._setOption('selectedExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMenuComponent.prototype, "selectedItem", {
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
    Object.defineProperty(DxMenuComponent.prototype, "selectionByClick", {
        /**
         * Use the selectByClick option instead.
         */
        get: function () {
            return this._getOption('selectionByClick');
        },
        set: function (value) {
            this._setOption('selectionByClick', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMenuComponent.prototype, "selectionMode", {
        /**
         * Specifies the selection mode supported by the menu.
         */
        get: function () {
            return this._getOption('selectionMode');
        },
        set: function (value) {
            this._setOption('selectionMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMenuComponent.prototype, "showFirstSubmenuMode", {
        /**
         * Specifies options for showing and hiding the first level submenu.
         */
        get: function () {
            return this._getOption('showFirstSubmenuMode');
        },
        set: function (value) {
            this._setOption('showFirstSubmenuMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMenuComponent.prototype, "showSubmenuMode", {
        /**
         * Specifies options of submenu showing and hiding.
         */
        get: function () {
            return this._getOption('showSubmenuMode');
        },
        set: function (value) {
            this._setOption('showSubmenuMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMenuComponent.prototype, "submenuDirection", {
        /**
         * Specifies the direction at which the submenus are displayed.
         */
        get: function () {
            return this._getOption('submenuDirection');
        },
        set: function (value) {
            this._setOption('submenuDirection', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxMenuComponent.prototype, "tabIndex", {
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
    Object.defineProperty(DxMenuComponent.prototype, "visible", {
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
    Object.defineProperty(DxMenuComponent.prototype, "width", {
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
    Object.defineProperty(DxMenuComponent.prototype, "itemsChildren", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this.setChildren('items', value);
        },
        enumerable: true,
        configurable: true
    });
    DxMenuComponent.prototype._createInstance = function (element, options) {
        return new menu_1.default(element, options);
    };
    DxMenuComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxMenuComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('dataSource', changes);
        this.setupChanges('items', changes);
    };
    DxMenuComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxMenuComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('items');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
    };
    DxMenuComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxMenuComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-menu',
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
    DxMenuComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: iterable_differ_helper_1.IterableDifferHelper, },
        { type: nested_option_1.NestedOptionHost, },
    ]; };
    DxMenuComponent.propDecorators = {
        'accessKey': [{ type: core_1.Input },],
        'activeStateEnabled': [{ type: core_1.Input },],
        'adaptivityEnabled': [{ type: core_1.Input },],
        'animation': [{ type: core_1.Input },],
        'cssClass': [{ type: core_1.Input },],
        'dataSource': [{ type: core_1.Input },],
        'disabled': [{ type: core_1.Input },],
        'disabledExpr': [{ type: core_1.Input },],
        'displayExpr': [{ type: core_1.Input },],
        'elementAttr': [{ type: core_1.Input },],
        'focusStateEnabled': [{ type: core_1.Input },],
        'height': [{ type: core_1.Input },],
        'hideSubmenuOnMouseLeave': [{ type: core_1.Input },],
        'hint': [{ type: core_1.Input },],
        'hoverStateEnabled': [{ type: core_1.Input },],
        'items': [{ type: core_1.Input },],
        'itemsExpr': [{ type: core_1.Input },],
        'itemTemplate': [{ type: core_1.Input },],
        'orientation': [{ type: core_1.Input },],
        'rtlEnabled': [{ type: core_1.Input },],
        'selectByClick': [{ type: core_1.Input },],
        'selectedExpr': [{ type: core_1.Input },],
        'selectedItem': [{ type: core_1.Input },],
        'selectionByClick': [{ type: core_1.Input },],
        'selectionMode': [{ type: core_1.Input },],
        'showFirstSubmenuMode': [{ type: core_1.Input },],
        'showSubmenuMode': [{ type: core_1.Input },],
        'submenuDirection': [{ type: core_1.Input },],
        'tabIndex': [{ type: core_1.Input },],
        'visible': [{ type: core_1.Input },],
        'width': [{ type: core_1.Input },],
        'onContentReady': [{ type: core_1.Output },],
        'onDisposing': [{ type: core_1.Output },],
        'onInitialized': [{ type: core_1.Output },],
        'onItemClick': [{ type: core_1.Output },],
        'onItemContextMenu': [{ type: core_1.Output },],
        'onItemRendered': [{ type: core_1.Output },],
        'onOptionChanged': [{ type: core_1.Output },],
        'onSelectionChanged': [{ type: core_1.Output },],
        'onSubmenuHidden': [{ type: core_1.Output },],
        'onSubmenuHiding': [{ type: core_1.Output },],
        'onSubmenuShowing': [{ type: core_1.Output },],
        'onSubmenuShown': [{ type: core_1.Output },],
        'accessKeyChange': [{ type: core_1.Output },],
        'activeStateEnabledChange': [{ type: core_1.Output },],
        'adaptivityEnabledChange': [{ type: core_1.Output },],
        'animationChange': [{ type: core_1.Output },],
        'cssClassChange': [{ type: core_1.Output },],
        'dataSourceChange': [{ type: core_1.Output },],
        'disabledChange': [{ type: core_1.Output },],
        'disabledExprChange': [{ type: core_1.Output },],
        'displayExprChange': [{ type: core_1.Output },],
        'elementAttrChange': [{ type: core_1.Output },],
        'focusStateEnabledChange': [{ type: core_1.Output },],
        'heightChange': [{ type: core_1.Output },],
        'hideSubmenuOnMouseLeaveChange': [{ type: core_1.Output },],
        'hintChange': [{ type: core_1.Output },],
        'hoverStateEnabledChange': [{ type: core_1.Output },],
        'itemsChange': [{ type: core_1.Output },],
        'itemsExprChange': [{ type: core_1.Output },],
        'itemTemplateChange': [{ type: core_1.Output },],
        'orientationChange': [{ type: core_1.Output },],
        'rtlEnabledChange': [{ type: core_1.Output },],
        'selectByClickChange': [{ type: core_1.Output },],
        'selectedExprChange': [{ type: core_1.Output },],
        'selectedItemChange': [{ type: core_1.Output },],
        'selectionByClickChange': [{ type: core_1.Output },],
        'selectionModeChange': [{ type: core_1.Output },],
        'showFirstSubmenuModeChange': [{ type: core_1.Output },],
        'showSubmenuModeChange': [{ type: core_1.Output },],
        'submenuDirectionChange': [{ type: core_1.Output },],
        'tabIndexChange': [{ type: core_1.Output },],
        'visibleChange': [{ type: core_1.Output },],
        'widthChange': [{ type: core_1.Output },],
        'itemsChildren': [{ type: core_1.ContentChildren, args: [item_dxi_2.DxiItemComponent,] },],
    };
    return DxMenuComponent;
}(component_1.DxComponent));
exports.DxMenuComponent = DxMenuComponent;
var DxMenuModule = (function () {
    function DxMenuModule() {
    }
    DxMenuModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        animation_1.DxoAnimationModule,
                        hide_1.DxoHideModule,
                        show_1.DxoShowModule,
                        item_dxi_1.DxiItemModule,
                        show_first_submenu_mode_1.DxoShowFirstSubmenuModeModule,
                        delay_1.DxoDelayModule,
                        show_submenu_mode_1.DxoShowSubmenuModeModule,
                        template_1.DxTemplateModule
                    ],
                    declarations: [
                        DxMenuComponent
                    ],
                    exports: [
                        DxMenuComponent,
                        animation_1.DxoAnimationModule,
                        hide_1.DxoHideModule,
                        show_1.DxoShowModule,
                        item_dxi_1.DxiItemModule,
                        show_first_submenu_mode_1.DxoShowFirstSubmenuModeModule,
                        delay_1.DxoDelayModule,
                        show_submenu_mode_1.DxoShowSubmenuModeModule,
                        template_1.DxTemplateModule
                    ],
                },] },
    ];
    /** @nocollapse */
    DxMenuModule.ctorParameters = function () { return []; };
    return DxMenuModule;
}());
exports.DxMenuModule = DxMenuModule;
//# sourceMappingURL=menu.js.map