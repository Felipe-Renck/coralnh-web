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
var tree_view_1 = require("devextreme/ui/tree_view");
var component_1 = require("../core/component");
var template_host_1 = require("../core/template-host");
var template_1 = require("../core/template");
var nested_option_1 = require("../core/nested-option");
var watcher_helper_1 = require("../core/watcher-helper");
var iterable_differ_helper_1 = require("../core/iterable-differ-helper");
var item_dxi_1 = require("./nested/item-dxi");
var search_editor_options_1 = require("./nested/search-editor-options");
var item_dxi_2 = require("./nested/item-dxi");
/**
 * The TreeView widget is a tree-like representation of textual data.
 */
var DxTreeViewComponent = (function (_super) {
    __extends(DxTreeViewComponent, _super);
    function DxTreeViewComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper) || this;
        _this._watcherHelper = _watcherHelper;
        _this._idh = _idh;
        _this._createEventEmitters([
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'itemClick', emit: 'onItemClick' },
            { subscribe: 'itemCollapsed', emit: 'onItemCollapsed' },
            { subscribe: 'itemContextMenu', emit: 'onItemContextMenu' },
            { subscribe: 'itemExpanded', emit: 'onItemExpanded' },
            { subscribe: 'itemHold', emit: 'onItemHold' },
            { subscribe: 'itemRendered', emit: 'onItemRendered' },
            { subscribe: 'itemSelected', emit: 'onItemSelected' },
            { subscribe: 'itemSelectionChanged', emit: 'onItemSelectionChanged' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'selectionChanged', emit: 'onSelectionChanged' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'animationEnabledChange' },
            { emit: 'createChildrenChange' },
            { emit: 'dataSourceChange' },
            { emit: 'dataStructureChange' },
            { emit: 'disabledChange' },
            { emit: 'disabledExprChange' },
            { emit: 'displayExprChange' },
            { emit: 'elementAttrChange' },
            { emit: 'expandAllEnabledChange' },
            { emit: 'expandedExprChange' },
            { emit: 'expandNodesRecursiveChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'hasItemsExprChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'itemHoldTimeoutChange' },
            { emit: 'itemsChange' },
            { emit: 'itemsExprChange' },
            { emit: 'itemTemplateChange' },
            { emit: 'keyExprChange' },
            { emit: 'noDataTextChange' },
            { emit: 'parentIdExprChange' },
            { emit: 'rootValueChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'scrollDirectionChange' },
            { emit: 'searchEditorOptionsChange' },
            { emit: 'searchEnabledChange' },
            { emit: 'searchExprChange' },
            { emit: 'searchModeChange' },
            { emit: 'searchTimeoutChange' },
            { emit: 'searchValueChange' },
            { emit: 'selectAllEnabledChange' },
            { emit: 'selectAllTextChange' },
            { emit: 'selectByClickChange' },
            { emit: 'selectedExprChange' },
            { emit: 'selectionModeChange' },
            { emit: 'selectNodesRecursiveChange' },
            { emit: 'showCheckBoxesChange' },
            { emit: 'showCheckBoxesModeChange' },
            { emit: 'tabIndexChange' },
            { emit: 'virtualModeEnabledChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' }
        ]);
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxTreeViewComponent.prototype, "accessKey", {
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
    Object.defineProperty(DxTreeViewComponent.prototype, "activeStateEnabled", {
        /**
         * Specifies whether or not the widget changes its state when interacting with a user.
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
    Object.defineProperty(DxTreeViewComponent.prototype, "animationEnabled", {
        /**
         * Specifies whether or not to animate item collapsing and expanding.
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
    Object.defineProperty(DxTreeViewComponent.prototype, "createChildren", {
        /**
         * Allows you to load nodes manually.
         */
        get: function () {
            return this._getOption('createChildren');
        },
        set: function (value) {
            this._setOption('createChildren', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "dataSource", {
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
    Object.defineProperty(DxTreeViewComponent.prototype, "dataStructure", {
        /**
         * Specifies whether a nested or plain array is used as a data source.
         */
        get: function () {
            return this._getOption('dataStructure');
        },
        set: function (value) {
            this._setOption('dataStructure', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "disabled", {
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
    Object.defineProperty(DxTreeViewComponent.prototype, "disabledExpr", {
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
    Object.defineProperty(DxTreeViewComponent.prototype, "displayExpr", {
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
    Object.defineProperty(DxTreeViewComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxTreeViewComponent.prototype, "expandAllEnabled", {
        /**
         * Specifies whether or not a user can expand all tree view items by the "*" hot key.
         */
        get: function () {
            return this._getOption('expandAllEnabled');
        },
        set: function (value) {
            this._setOption('expandAllEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "expandedExpr", {
        /**
         * Specifies the name of the data source item field whose value defines whether or not the corresponding widget item is displayed expanded.
         */
        get: function () {
            return this._getOption('expandedExpr');
        },
        set: function (value) {
            this._setOption('expandedExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "expandNodesRecursive", {
        /**
         * Specifies whether or not all parent nodes of an initially expanded node are displayed expanded.
         */
        get: function () {
            return this._getOption('expandNodesRecursive');
        },
        set: function (value) {
            this._setOption('expandNodesRecursive', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "focusStateEnabled", {
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
    Object.defineProperty(DxTreeViewComponent.prototype, "hasItemsExpr", {
        /**
         * Specifies the name of the data source item field whose value defines whether or not the corresponding node includes child nodes.
         */
        get: function () {
            return this._getOption('hasItemsExpr');
        },
        set: function (value) {
            this._setOption('hasItemsExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "height", {
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
    Object.defineProperty(DxTreeViewComponent.prototype, "hint", {
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
    Object.defineProperty(DxTreeViewComponent.prototype, "hoverStateEnabled", {
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
    Object.defineProperty(DxTreeViewComponent.prototype, "itemHoldTimeout", {
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
    Object.defineProperty(DxTreeViewComponent.prototype, "items", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this._setOption('items', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "itemsExpr", {
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
    Object.defineProperty(DxTreeViewComponent.prototype, "itemTemplate", {
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
    Object.defineProperty(DxTreeViewComponent.prototype, "keyExpr", {
        /**
         * Specifies which data field provides keys for TreeView items.
         */
        get: function () {
            return this._getOption('keyExpr');
        },
        set: function (value) {
            this._setOption('keyExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "noDataText", {
        /**
         * The text or HTML markup displayed by the widget if the item collection is empty.
         */
        get: function () {
            return this._getOption('noDataText');
        },
        set: function (value) {
            this._setOption('noDataText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "parentIdExpr", {
        /**
         * Specifies the name of the data source item field for holding the parent key of the corresponding node.
         */
        get: function () {
            return this._getOption('parentIdExpr');
        },
        set: function (value) {
            this._setOption('parentIdExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "rootValue", {
        /**
         * Specifies the parent ID value of the root item.
         */
        get: function () {
            return this._getOption('rootValue');
        },
        set: function (value) {
            this._setOption('rootValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxTreeViewComponent.prototype, "scrollDirection", {
        /**
         * A string value specifying available scrolling directions.
         */
        get: function () {
            return this._getOption('scrollDirection');
        },
        set: function (value) {
            this._setOption('scrollDirection', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "searchEditorOptions", {
        /**
         * Configures the search panel.
         */
        get: function () {
            return this._getOption('searchEditorOptions');
        },
        set: function (value) {
            this._setOption('searchEditorOptions', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "searchEnabled", {
        /**
         * Specifies whether the search panel is visible.
         */
        get: function () {
            return this._getOption('searchEnabled');
        },
        set: function (value) {
            this._setOption('searchEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "searchExpr", {
        /**
         * Specifies a data object's field name or an expression whose value is compared to the search string.
         */
        get: function () {
            return this._getOption('searchExpr');
        },
        set: function (value) {
            this._setOption('searchExpr', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "searchMode", {
        /**
         * Specifies whether the widget finds entries that contain your search string or entries that only start with it.
         */
        get: function () {
            return this._getOption('searchMode');
        },
        set: function (value) {
            this._setOption('searchMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "searchTimeout", {
        /**
         * Specifies a delay in milliseconds between when a user finishes typing, and the search is executed.
         */
        get: function () {
            return this._getOption('searchTimeout');
        },
        set: function (value) {
            this._setOption('searchTimeout', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "searchValue", {
        /**
         * Specifies the current search string.
         */
        get: function () {
            return this._getOption('searchValue');
        },
        set: function (value) {
            this._setOption('searchValue', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "selectAllEnabled", {
        /**
         * Use the showCheckBoxesMode options instead.
         */
        get: function () {
            return this._getOption('selectAllEnabled');
        },
        set: function (value) {
            this._setOption('selectAllEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "selectAllText", {
        /**
         * Specifies the text displayed at the "Select All" check box.
         */
        get: function () {
            return this._getOption('selectAllText');
        },
        set: function (value) {
            this._setOption('selectAllText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "selectByClick", {
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
    Object.defineProperty(DxTreeViewComponent.prototype, "selectedExpr", {
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
    Object.defineProperty(DxTreeViewComponent.prototype, "selectionMode", {
        /**
         * Specifies item selection mode.
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
    Object.defineProperty(DxTreeViewComponent.prototype, "selectNodesRecursive", {
        /**
         * Specifies whether or not to select nodes recursively.
         */
        get: function () {
            return this._getOption('selectNodesRecursive');
        },
        set: function (value) {
            this._setOption('selectNodesRecursive', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "showCheckBoxes", {
        /**
         * Use the showCheckBoxesMode options instead.
         */
        get: function () {
            return this._getOption('showCheckBoxes');
        },
        set: function (value) {
            this._setOption('showCheckBoxes', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "showCheckBoxesMode", {
        /**
         * Specifies the current check boxes display mode.
         */
        get: function () {
            return this._getOption('showCheckBoxesMode');
        },
        set: function (value) {
            this._setOption('showCheckBoxesMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "tabIndex", {
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
    Object.defineProperty(DxTreeViewComponent.prototype, "virtualModeEnabled", {
        /**
         * Specifies if the virtual mode is enabled.
         */
        get: function () {
            return this._getOption('virtualModeEnabled');
        },
        set: function (value) {
            this._setOption('virtualModeEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeViewComponent.prototype, "visible", {
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
    Object.defineProperty(DxTreeViewComponent.prototype, "width", {
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
    Object.defineProperty(DxTreeViewComponent.prototype, "itemsChildren", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this.setChildren('items', value);
        },
        enumerable: true,
        configurable: true
    });
    DxTreeViewComponent.prototype._createInstance = function (element, options) {
        return new tree_view_1.default(element, options);
    };
    DxTreeViewComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxTreeViewComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('dataSource', changes);
        this.setupChanges('items', changes);
        this.setupChanges('searchExpr', changes);
    };
    DxTreeViewComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxTreeViewComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('items');
        this._idh.doCheck('searchExpr');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
    };
    DxTreeViewComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxTreeViewComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-tree-view',
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
    DxTreeViewComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: iterable_differ_helper_1.IterableDifferHelper, },
        { type: nested_option_1.NestedOptionHost, },
    ]; };
    DxTreeViewComponent.propDecorators = {
        'accessKey': [{ type: core_1.Input },],
        'activeStateEnabled': [{ type: core_1.Input },],
        'animationEnabled': [{ type: core_1.Input },],
        'createChildren': [{ type: core_1.Input },],
        'dataSource': [{ type: core_1.Input },],
        'dataStructure': [{ type: core_1.Input },],
        'disabled': [{ type: core_1.Input },],
        'disabledExpr': [{ type: core_1.Input },],
        'displayExpr': [{ type: core_1.Input },],
        'elementAttr': [{ type: core_1.Input },],
        'expandAllEnabled': [{ type: core_1.Input },],
        'expandedExpr': [{ type: core_1.Input },],
        'expandNodesRecursive': [{ type: core_1.Input },],
        'focusStateEnabled': [{ type: core_1.Input },],
        'hasItemsExpr': [{ type: core_1.Input },],
        'height': [{ type: core_1.Input },],
        'hint': [{ type: core_1.Input },],
        'hoverStateEnabled': [{ type: core_1.Input },],
        'itemHoldTimeout': [{ type: core_1.Input },],
        'items': [{ type: core_1.Input },],
        'itemsExpr': [{ type: core_1.Input },],
        'itemTemplate': [{ type: core_1.Input },],
        'keyExpr': [{ type: core_1.Input },],
        'noDataText': [{ type: core_1.Input },],
        'parentIdExpr': [{ type: core_1.Input },],
        'rootValue': [{ type: core_1.Input },],
        'rtlEnabled': [{ type: core_1.Input },],
        'scrollDirection': [{ type: core_1.Input },],
        'searchEditorOptions': [{ type: core_1.Input },],
        'searchEnabled': [{ type: core_1.Input },],
        'searchExpr': [{ type: core_1.Input },],
        'searchMode': [{ type: core_1.Input },],
        'searchTimeout': [{ type: core_1.Input },],
        'searchValue': [{ type: core_1.Input },],
        'selectAllEnabled': [{ type: core_1.Input },],
        'selectAllText': [{ type: core_1.Input },],
        'selectByClick': [{ type: core_1.Input },],
        'selectedExpr': [{ type: core_1.Input },],
        'selectionMode': [{ type: core_1.Input },],
        'selectNodesRecursive': [{ type: core_1.Input },],
        'showCheckBoxes': [{ type: core_1.Input },],
        'showCheckBoxesMode': [{ type: core_1.Input },],
        'tabIndex': [{ type: core_1.Input },],
        'virtualModeEnabled': [{ type: core_1.Input },],
        'visible': [{ type: core_1.Input },],
        'width': [{ type: core_1.Input },],
        'onContentReady': [{ type: core_1.Output },],
        'onDisposing': [{ type: core_1.Output },],
        'onInitialized': [{ type: core_1.Output },],
        'onItemClick': [{ type: core_1.Output },],
        'onItemCollapsed': [{ type: core_1.Output },],
        'onItemContextMenu': [{ type: core_1.Output },],
        'onItemExpanded': [{ type: core_1.Output },],
        'onItemHold': [{ type: core_1.Output },],
        'onItemRendered': [{ type: core_1.Output },],
        'onItemSelected': [{ type: core_1.Output },],
        'onItemSelectionChanged': [{ type: core_1.Output },],
        'onOptionChanged': [{ type: core_1.Output },],
        'onSelectionChanged': [{ type: core_1.Output },],
        'accessKeyChange': [{ type: core_1.Output },],
        'activeStateEnabledChange': [{ type: core_1.Output },],
        'animationEnabledChange': [{ type: core_1.Output },],
        'createChildrenChange': [{ type: core_1.Output },],
        'dataSourceChange': [{ type: core_1.Output },],
        'dataStructureChange': [{ type: core_1.Output },],
        'disabledChange': [{ type: core_1.Output },],
        'disabledExprChange': [{ type: core_1.Output },],
        'displayExprChange': [{ type: core_1.Output },],
        'elementAttrChange': [{ type: core_1.Output },],
        'expandAllEnabledChange': [{ type: core_1.Output },],
        'expandedExprChange': [{ type: core_1.Output },],
        'expandNodesRecursiveChange': [{ type: core_1.Output },],
        'focusStateEnabledChange': [{ type: core_1.Output },],
        'hasItemsExprChange': [{ type: core_1.Output },],
        'heightChange': [{ type: core_1.Output },],
        'hintChange': [{ type: core_1.Output },],
        'hoverStateEnabledChange': [{ type: core_1.Output },],
        'itemHoldTimeoutChange': [{ type: core_1.Output },],
        'itemsChange': [{ type: core_1.Output },],
        'itemsExprChange': [{ type: core_1.Output },],
        'itemTemplateChange': [{ type: core_1.Output },],
        'keyExprChange': [{ type: core_1.Output },],
        'noDataTextChange': [{ type: core_1.Output },],
        'parentIdExprChange': [{ type: core_1.Output },],
        'rootValueChange': [{ type: core_1.Output },],
        'rtlEnabledChange': [{ type: core_1.Output },],
        'scrollDirectionChange': [{ type: core_1.Output },],
        'searchEditorOptionsChange': [{ type: core_1.Output },],
        'searchEnabledChange': [{ type: core_1.Output },],
        'searchExprChange': [{ type: core_1.Output },],
        'searchModeChange': [{ type: core_1.Output },],
        'searchTimeoutChange': [{ type: core_1.Output },],
        'searchValueChange': [{ type: core_1.Output },],
        'selectAllEnabledChange': [{ type: core_1.Output },],
        'selectAllTextChange': [{ type: core_1.Output },],
        'selectByClickChange': [{ type: core_1.Output },],
        'selectedExprChange': [{ type: core_1.Output },],
        'selectionModeChange': [{ type: core_1.Output },],
        'selectNodesRecursiveChange': [{ type: core_1.Output },],
        'showCheckBoxesChange': [{ type: core_1.Output },],
        'showCheckBoxesModeChange': [{ type: core_1.Output },],
        'tabIndexChange': [{ type: core_1.Output },],
        'virtualModeEnabledChange': [{ type: core_1.Output },],
        'visibleChange': [{ type: core_1.Output },],
        'widthChange': [{ type: core_1.Output },],
        'itemsChildren': [{ type: core_1.ContentChildren, args: [item_dxi_2.DxiItemComponent,] },],
    };
    return DxTreeViewComponent;
}(component_1.DxComponent));
exports.DxTreeViewComponent = DxTreeViewComponent;
var DxTreeViewModule = (function () {
    function DxTreeViewModule() {
    }
    DxTreeViewModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        item_dxi_1.DxiItemModule,
                        search_editor_options_1.DxoSearchEditorOptionsModule,
                        template_1.DxTemplateModule
                    ],
                    declarations: [
                        DxTreeViewComponent
                    ],
                    exports: [
                        DxTreeViewComponent,
                        item_dxi_1.DxiItemModule,
                        search_editor_options_1.DxoSearchEditorOptionsModule,
                        template_1.DxTemplateModule
                    ],
                },] },
    ];
    /** @nocollapse */
    DxTreeViewModule.ctorParameters = function () { return []; };
    return DxTreeViewModule;
}());
exports.DxTreeViewModule = DxTreeViewModule;
//# sourceMappingURL=tree-view.js.map