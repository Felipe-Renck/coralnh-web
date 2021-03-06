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
var tree_map_1 = require("devextreme/viz/tree_map");
var component_1 = require("../core/component");
var template_host_1 = require("../core/template-host");
var template_1 = require("../core/template");
var nested_option_1 = require("../core/nested-option");
var watcher_helper_1 = require("../core/watcher-helper");
var iterable_differ_helper_1 = require("../core/iterable-differ-helper");
var colorizer_1 = require("./nested/colorizer");
var export_1 = require("./nested/export");
var group_1 = require("./nested/group");
var border_1 = require("./nested/border");
var hover_style_1 = require("./nested/hover-style");
var label_1 = require("./nested/label");
var font_1 = require("./nested/font");
var selection_style_1 = require("./nested/selection-style");
var loading_indicator_1 = require("./nested/loading-indicator");
var size_1 = require("./nested/size");
var tile_1 = require("./nested/tile");
var title_1 = require("./nested/title");
var margin_1 = require("./nested/margin");
var subtitle_1 = require("./nested/subtitle");
var tooltip_1 = require("./nested/tooltip");
var format_1 = require("./nested/format");
var shadow_1 = require("./nested/shadow");
/**
 * The TreeMap is a widget that displays hierarchical data by using nested rectangles.
 */
var DxTreeMapComponent = (function (_super) {
    __extends(DxTreeMapComponent, _super);
    function DxTreeMapComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper) || this;
        _this._watcherHelper = _watcherHelper;
        _this._idh = _idh;
        _this._createEventEmitters([
            { subscribe: 'click', emit: 'onClick' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'drawn', emit: 'onDrawn' },
            { subscribe: 'drill', emit: 'onDrill' },
            { subscribe: 'exported', emit: 'onExported' },
            { subscribe: 'exporting', emit: 'onExporting' },
            { subscribe: 'fileSaving', emit: 'onFileSaving' },
            { subscribe: 'hoverChanged', emit: 'onHoverChanged' },
            { subscribe: 'incidentOccurred', emit: 'onIncidentOccurred' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'nodesInitialized', emit: 'onNodesInitialized' },
            { subscribe: 'nodesRendering', emit: 'onNodesRendering' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'selectionChanged', emit: 'onSelectionChanged' },
            { emit: 'childrenFieldChange' },
            { emit: 'colorFieldChange' },
            { emit: 'colorizerChange' },
            { emit: 'dataSourceChange' },
            { emit: 'elementAttrChange' },
            { emit: 'exportChange' },
            { emit: 'groupChange' },
            { emit: 'hoverEnabledChange' },
            { emit: 'idFieldChange' },
            { emit: 'interactWithGroupChange' },
            { emit: 'labelFieldChange' },
            { emit: 'layoutAlgorithmChange' },
            { emit: 'layoutDirectionChange' },
            { emit: 'loadingIndicatorChange' },
            { emit: 'maxDepthChange' },
            { emit: 'parentFieldChange' },
            { emit: 'pathModifiedChange' },
            { emit: 'redrawOnResizeChange' },
            { emit: 'resolveLabelOverflowChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'selectionModeChange' },
            { emit: 'sizeChange' },
            { emit: 'themeChange' },
            { emit: 'tileChange' },
            { emit: 'titleChange' },
            { emit: 'tooltipChange' },
            { emit: 'valueFieldChange' }
        ]);
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxTreeMapComponent.prototype, "childrenField", {
        /**
         * Specifies the name of the data source field that provides nested items for a group. Applies to hierarchical data sources only.
         */
        get: function () {
            return this._getOption('childrenField');
        },
        set: function (value) {
            this._setOption('childrenField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "colorField", {
        /**
         * Specifies the name of the data source field that provides colors for tiles.
         */
        get: function () {
            return this._getOption('colorField');
        },
        set: function (value) {
            this._setOption('colorField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "colorizer", {
        /**
         * Manages the color settings.
         */
        get: function () {
            return this._getOption('colorizer');
        },
        set: function (value) {
            this._setOption('colorizer', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "dataSource", {
        /**
         * Specifies the origin of data for the widget.
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
    Object.defineProperty(DxTreeMapComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxTreeMapComponent.prototype, "export", {
        /**
         * Configures the exporting and printing features.
         */
        get: function () {
            return this._getOption('export');
        },
        set: function (value) {
            this._setOption('export', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "group", {
        /**
         * Configures groups.
         */
        get: function () {
            return this._getOption('group');
        },
        set: function (value) {
            this._setOption('group', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "hoverEnabled", {
        /**
         * Specifies whether tiles and groups change their style when a user pauses on them.
         */
        get: function () {
            return this._getOption('hoverEnabled');
        },
        set: function (value) {
            this._setOption('hoverEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "idField", {
        /**
         * Specifies the name of the data source field that provides IDs for items. Applies to plain data sources only.
         */
        get: function () {
            return this._getOption('idField');
        },
        set: function (value) {
            this._setOption('idField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "interactWithGroup", {
        /**
         * Specifies whether the user will interact with a single tile or its group.
         */
        get: function () {
            return this._getOption('interactWithGroup');
        },
        set: function (value) {
            this._setOption('interactWithGroup', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "labelField", {
        /**
         * Specifies the name of the data source field that provides texts for tile and group labels.
         */
        get: function () {
            return this._getOption('labelField');
        },
        set: function (value) {
            this._setOption('labelField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "layoutAlgorithm", {
        /**
         * Specifies the layout algorithm.
         */
        get: function () {
            return this._getOption('layoutAlgorithm');
        },
        set: function (value) {
            this._setOption('layoutAlgorithm', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "layoutDirection", {
        /**
         * Specifies the direction in which the items will be laid out.
         */
        get: function () {
            return this._getOption('layoutDirection');
        },
        set: function (value) {
            this._setOption('layoutDirection', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "loadingIndicator", {
        /**
         * Configures the loading indicator.
         */
        get: function () {
            return this._getOption('loadingIndicator');
        },
        set: function (value) {
            this._setOption('loadingIndicator', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "maxDepth", {
        /**
         * Specifies how many hierarchical levels must be visualized.
         */
        get: function () {
            return this._getOption('maxDepth');
        },
        set: function (value) {
            this._setOption('maxDepth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "parentField", {
        /**
         * Specifies the name of the data source field that provides parent IDs for items. Applies to plain data sources only.
         */
        get: function () {
            return this._getOption('parentField');
        },
        set: function (value) {
            this._setOption('parentField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "pathModified", {
        /**
         * Notifies the widget that it is embedded into an HTML page that uses a tag modifying the path.
         */
        get: function () {
            return this._getOption('pathModified');
        },
        set: function (value) {
            this._setOption('pathModified', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "redrawOnResize", {
        /**
         * Specifies whether to redraw the widget when the size of the parent browser window changes or a mobile device rotates.
         */
        get: function () {
            return this._getOption('redrawOnResize');
        },
        set: function (value) {
            this._setOption('redrawOnResize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "resolveLabelOverflow", {
        /**
         * Decides whether those labels that overflow their tile/group should be hidden or truncated with ellipsis.
         */
        get: function () {
            return this._getOption('resolveLabelOverflow');
        },
        set: function (value) {
            this._setOption('resolveLabelOverflow', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxTreeMapComponent.prototype, "selectionMode", {
        /**
         * Specifies whether a single or multiple nodes can be in the selected state simultaneously.
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
    Object.defineProperty(DxTreeMapComponent.prototype, "size", {
        /**
         * Specifies the widget's size in pixels.
         */
        get: function () {
            return this._getOption('size');
        },
        set: function (value) {
            this._setOption('size', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "theme", {
        /**
         * Sets the name of the theme the widget uses.
         */
        get: function () {
            return this._getOption('theme');
        },
        set: function (value) {
            this._setOption('theme', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "tile", {
        /**
         * Configures tiles.
         */
        get: function () {
            return this._getOption('tile');
        },
        set: function (value) {
            this._setOption('tile', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "title", {
        /**
         * Configures the widget's title.
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
    Object.defineProperty(DxTreeMapComponent.prototype, "tooltip", {
        /**
         * Configures tooltips - small pop-up rectangles that display information about a data-visualizing widget element being pressed or hovered over with the mouse pointer.
         */
        get: function () {
            return this._getOption('tooltip');
        },
        set: function (value) {
            this._setOption('tooltip', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxTreeMapComponent.prototype, "valueField", {
        /**
         * Specifies the name of the data source field that provides values for tiles.
         */
        get: function () {
            return this._getOption('valueField');
        },
        set: function (value) {
            this._setOption('valueField', value);
        },
        enumerable: true,
        configurable: true
    });
    DxTreeMapComponent.prototype._createInstance = function (element, options) {
        return new tree_map_1.default(element, options);
    };
    DxTreeMapComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxTreeMapComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('dataSource', changes);
    };
    DxTreeMapComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxTreeMapComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('dataSource');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
    };
    DxTreeMapComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxTreeMapComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-tree-map',
                    template: '',
                    styles: [' :host {  display: block; }'],
                    providers: [
                        template_host_1.DxTemplateHost,
                        watcher_helper_1.WatcherHelper,
                        nested_option_1.NestedOptionHost,
                        iterable_differ_helper_1.IterableDifferHelper
                    ]
                },] },
    ];
    /** @nocollapse */
    DxTreeMapComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: iterable_differ_helper_1.IterableDifferHelper, },
        { type: nested_option_1.NestedOptionHost, },
    ]; };
    DxTreeMapComponent.propDecorators = {
        'childrenField': [{ type: core_1.Input },],
        'colorField': [{ type: core_1.Input },],
        'colorizer': [{ type: core_1.Input },],
        'dataSource': [{ type: core_1.Input },],
        'elementAttr': [{ type: core_1.Input },],
        'export': [{ type: core_1.Input },],
        'group': [{ type: core_1.Input },],
        'hoverEnabled': [{ type: core_1.Input },],
        'idField': [{ type: core_1.Input },],
        'interactWithGroup': [{ type: core_1.Input },],
        'labelField': [{ type: core_1.Input },],
        'layoutAlgorithm': [{ type: core_1.Input },],
        'layoutDirection': [{ type: core_1.Input },],
        'loadingIndicator': [{ type: core_1.Input },],
        'maxDepth': [{ type: core_1.Input },],
        'parentField': [{ type: core_1.Input },],
        'pathModified': [{ type: core_1.Input },],
        'redrawOnResize': [{ type: core_1.Input },],
        'resolveLabelOverflow': [{ type: core_1.Input },],
        'rtlEnabled': [{ type: core_1.Input },],
        'selectionMode': [{ type: core_1.Input },],
        'size': [{ type: core_1.Input },],
        'theme': [{ type: core_1.Input },],
        'tile': [{ type: core_1.Input },],
        'title': [{ type: core_1.Input },],
        'tooltip': [{ type: core_1.Input },],
        'valueField': [{ type: core_1.Input },],
        'onClick': [{ type: core_1.Output },],
        'onDisposing': [{ type: core_1.Output },],
        'onDrawn': [{ type: core_1.Output },],
        'onDrill': [{ type: core_1.Output },],
        'onExported': [{ type: core_1.Output },],
        'onExporting': [{ type: core_1.Output },],
        'onFileSaving': [{ type: core_1.Output },],
        'onHoverChanged': [{ type: core_1.Output },],
        'onIncidentOccurred': [{ type: core_1.Output },],
        'onInitialized': [{ type: core_1.Output },],
        'onNodesInitialized': [{ type: core_1.Output },],
        'onNodesRendering': [{ type: core_1.Output },],
        'onOptionChanged': [{ type: core_1.Output },],
        'onSelectionChanged': [{ type: core_1.Output },],
        'childrenFieldChange': [{ type: core_1.Output },],
        'colorFieldChange': [{ type: core_1.Output },],
        'colorizerChange': [{ type: core_1.Output },],
        'dataSourceChange': [{ type: core_1.Output },],
        'elementAttrChange': [{ type: core_1.Output },],
        'exportChange': [{ type: core_1.Output },],
        'groupChange': [{ type: core_1.Output },],
        'hoverEnabledChange': [{ type: core_1.Output },],
        'idFieldChange': [{ type: core_1.Output },],
        'interactWithGroupChange': [{ type: core_1.Output },],
        'labelFieldChange': [{ type: core_1.Output },],
        'layoutAlgorithmChange': [{ type: core_1.Output },],
        'layoutDirectionChange': [{ type: core_1.Output },],
        'loadingIndicatorChange': [{ type: core_1.Output },],
        'maxDepthChange': [{ type: core_1.Output },],
        'parentFieldChange': [{ type: core_1.Output },],
        'pathModifiedChange': [{ type: core_1.Output },],
        'redrawOnResizeChange': [{ type: core_1.Output },],
        'resolveLabelOverflowChange': [{ type: core_1.Output },],
        'rtlEnabledChange': [{ type: core_1.Output },],
        'selectionModeChange': [{ type: core_1.Output },],
        'sizeChange': [{ type: core_1.Output },],
        'themeChange': [{ type: core_1.Output },],
        'tileChange': [{ type: core_1.Output },],
        'titleChange': [{ type: core_1.Output },],
        'tooltipChange': [{ type: core_1.Output },],
        'valueFieldChange': [{ type: core_1.Output },],
    };
    return DxTreeMapComponent;
}(component_1.DxComponent));
exports.DxTreeMapComponent = DxTreeMapComponent;
var DxTreeMapModule = (function () {
    function DxTreeMapModule() {
    }
    DxTreeMapModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        colorizer_1.DxoColorizerModule,
                        export_1.DxoExportModule,
                        group_1.DxoGroupModule,
                        border_1.DxoBorderModule,
                        hover_style_1.DxoHoverStyleModule,
                        label_1.DxoLabelModule,
                        font_1.DxoFontModule,
                        selection_style_1.DxoSelectionStyleModule,
                        loading_indicator_1.DxoLoadingIndicatorModule,
                        size_1.DxoSizeModule,
                        tile_1.DxoTileModule,
                        title_1.DxoTitleModule,
                        margin_1.DxoMarginModule,
                        subtitle_1.DxoSubtitleModule,
                        tooltip_1.DxoTooltipModule,
                        format_1.DxoFormatModule,
                        shadow_1.DxoShadowModule,
                        template_1.DxTemplateModule
                    ],
                    declarations: [
                        DxTreeMapComponent
                    ],
                    exports: [
                        DxTreeMapComponent,
                        colorizer_1.DxoColorizerModule,
                        export_1.DxoExportModule,
                        group_1.DxoGroupModule,
                        border_1.DxoBorderModule,
                        hover_style_1.DxoHoverStyleModule,
                        label_1.DxoLabelModule,
                        font_1.DxoFontModule,
                        selection_style_1.DxoSelectionStyleModule,
                        loading_indicator_1.DxoLoadingIndicatorModule,
                        size_1.DxoSizeModule,
                        tile_1.DxoTileModule,
                        title_1.DxoTitleModule,
                        margin_1.DxoMarginModule,
                        subtitle_1.DxoSubtitleModule,
                        tooltip_1.DxoTooltipModule,
                        format_1.DxoFormatModule,
                        shadow_1.DxoShadowModule,
                        template_1.DxTemplateModule
                    ],
                },] },
    ];
    /** @nocollapse */
    DxTreeMapModule.ctorParameters = function () { return []; };
    return DxTreeMapModule;
}());
exports.DxTreeMapModule = DxTreeMapModule;
//# sourceMappingURL=tree-map.js.map