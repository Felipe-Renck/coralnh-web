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
var funnel_1 = require("devextreme/viz/funnel");
var component_1 = require("../core/component");
var template_host_1 = require("../core/template-host");
var template_1 = require("../core/template");
var nested_option_1 = require("../core/nested-option");
var watcher_helper_1 = require("../core/watcher-helper");
var iterable_differ_helper_1 = require("../core/iterable-differ-helper");
var adaptive_layout_1 = require("./nested/adaptive-layout");
var export_1 = require("./nested/export");
var item_1 = require("./nested/item");
var border_1 = require("./nested/border");
var hover_style_1 = require("./nested/hover-style");
var hatching_1 = require("./nested/hatching");
var selection_style_1 = require("./nested/selection-style");
var label_1 = require("./nested/label");
var connector_1 = require("./nested/connector");
var font_1 = require("./nested/font");
var format_1 = require("./nested/format");
var legend_1 = require("./nested/legend");
var margin_1 = require("./nested/margin");
var loading_indicator_1 = require("./nested/loading-indicator");
var size_1 = require("./nested/size");
var title_1 = require("./nested/title");
var subtitle_1 = require("./nested/subtitle");
var tooltip_1 = require("./nested/tooltip");
var shadow_1 = require("./nested/shadow");
/**
 * The Funnel is a widget that visualizes a value at different stages. It helps assess value changes throughout these stages and identify potential issues. The Funnel widget conveys information using different interactive elements (tooltips, labels, legend) and enables you to create not only a funnel, but also a pyramid chart.
 */
var DxFunnelComponent = (function (_super) {
    __extends(DxFunnelComponent, _super);
    function DxFunnelComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper) || this;
        _this._watcherHelper = _watcherHelper;
        _this._idh = _idh;
        _this._createEventEmitters([
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'drawn', emit: 'onDrawn' },
            { subscribe: 'exported', emit: 'onExported' },
            { subscribe: 'exporting', emit: 'onExporting' },
            { subscribe: 'fileSaving', emit: 'onFileSaving' },
            { subscribe: 'hoverChanged', emit: 'onHoverChanged' },
            { subscribe: 'incidentOccurred', emit: 'onIncidentOccurred' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'itemClick', emit: 'onItemClick' },
            { subscribe: 'legendClick', emit: 'onLegendClick' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'selectionChanged', emit: 'onSelectionChanged' },
            { emit: 'adaptiveLayoutChange' },
            { emit: 'algorithmChange' },
            { emit: 'argumentFieldChange' },
            { emit: 'colorFieldChange' },
            { emit: 'dataSourceChange' },
            { emit: 'elementAttrChange' },
            { emit: 'exportChange' },
            { emit: 'hoverEnabledChange' },
            { emit: 'invertedChange' },
            { emit: 'itemChange' },
            { emit: 'labelChange' },
            { emit: 'legendChange' },
            { emit: 'loadingIndicatorChange' },
            { emit: 'marginChange' },
            { emit: 'neckHeightChange' },
            { emit: 'neckWidthChange' },
            { emit: 'paletteChange' },
            { emit: 'pathModifiedChange' },
            { emit: 'redrawOnResizeChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'selectionModeChange' },
            { emit: 'sizeChange' },
            { emit: 'sortDataChange' },
            { emit: 'themeChange' },
            { emit: 'titleChange' },
            { emit: 'tooltipChange' },
            { emit: 'valueFieldChange' }
        ]);
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxFunnelComponent.prototype, "adaptiveLayout", {
        /**
         * Specifies adaptive layout options.
         */
        get: function () {
            return this._getOption('adaptiveLayout');
        },
        set: function (value) {
            this._setOption('adaptiveLayout', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFunnelComponent.prototype, "algorithm", {
        /**
         * Specifies the algorithm for building the funnel.
         */
        get: function () {
            return this._getOption('algorithm');
        },
        set: function (value) {
            this._setOption('algorithm', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFunnelComponent.prototype, "argumentField", {
        /**
         * Specifies which data source field provides arguments for funnel items. The argument identifies a funnel item and represents it on the legend.
         */
        get: function () {
            return this._getOption('argumentField');
        },
        set: function (value) {
            this._setOption('argumentField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFunnelComponent.prototype, "colorField", {
        /**
         * Specifies which data source field provides colors for funnel items. If this field is absent, the palette provides the colors.
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
    Object.defineProperty(DxFunnelComponent.prototype, "dataSource", {
        /**
         * Specifies the widget's data origin.
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
    Object.defineProperty(DxFunnelComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxFunnelComponent.prototype, "export", {
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
    Object.defineProperty(DxFunnelComponent.prototype, "hoverEnabled", {
        /**
         * Specifies whether funnel items change their style when a user pauses on them.
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
    Object.defineProperty(DxFunnelComponent.prototype, "inverted", {
        /**
         * Turns the funnel upside down.
         */
        get: function () {
            return this._getOption('inverted');
        },
        set: function (value) {
            this._setOption('inverted', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFunnelComponent.prototype, "item", {
        /**
         * Configures funnel items' appearance.
         */
        get: function () {
            return this._getOption('item');
        },
        set: function (value) {
            this._setOption('item', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFunnelComponent.prototype, "label", {
        /**
         * Configures funnel item labels.
         */
        get: function () {
            return this._getOption('label');
        },
        set: function (value) {
            this._setOption('label', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFunnelComponent.prototype, "legend", {
        /**
         * Configures the legend.
         */
        get: function () {
            return this._getOption('legend');
        },
        set: function (value) {
            this._setOption('legend', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFunnelComponent.prototype, "loadingIndicator", {
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
    Object.defineProperty(DxFunnelComponent.prototype, "margin", {
        /**
         * Generates space around the widget.
         */
        get: function () {
            return this._getOption('margin');
        },
        set: function (value) {
            this._setOption('margin', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFunnelComponent.prototype, "neckHeight", {
        /**
         * Specifies the ratio between the height of the neck and that of the whole funnel. Accepts values from 0 to 1. Applies only if the algorithm is "dynamicHeight".
         */
        get: function () {
            return this._getOption('neckHeight');
        },
        set: function (value) {
            this._setOption('neckHeight', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFunnelComponent.prototype, "neckWidth", {
        /**
         * Specifies the ratio between the width of the neck and that of the whole funnel. Accepts values from 0 to 1. Applies only if the algorithm is "dynamicHeight".
         */
        get: function () {
            return this._getOption('neckWidth');
        },
        set: function (value) {
            this._setOption('neckWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFunnelComponent.prototype, "palette", {
        /**
         * Sets the palette to be used for colorizing funnel items.
         */
        get: function () {
            return this._getOption('palette');
        },
        set: function (value) {
            this._setOption('palette', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFunnelComponent.prototype, "pathModified", {
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
    Object.defineProperty(DxFunnelComponent.prototype, "redrawOnResize", {
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
    Object.defineProperty(DxFunnelComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxFunnelComponent.prototype, "selectionMode", {
        /**
         * Specifies whether a single or multiple funnel items can be in the selected state at a time. Assigning "none" disables the selection feature.
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
    Object.defineProperty(DxFunnelComponent.prototype, "size", {
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
    Object.defineProperty(DxFunnelComponent.prototype, "sortData", {
        /**
         * Specifies whether to sort funnel items.
         */
        get: function () {
            return this._getOption('sortData');
        },
        set: function (value) {
            this._setOption('sortData', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxFunnelComponent.prototype, "theme", {
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
    Object.defineProperty(DxFunnelComponent.prototype, "title", {
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
    Object.defineProperty(DxFunnelComponent.prototype, "tooltip", {
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
    Object.defineProperty(DxFunnelComponent.prototype, "valueField", {
        /**
         * Specifies which data source field provides values for funnel items. The value defines a funnel item's area.
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
    DxFunnelComponent.prototype._createInstance = function (element, options) {
        return new funnel_1.default(element, options);
    };
    DxFunnelComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxFunnelComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('dataSource', changes);
        this.setupChanges('palette', changes);
    };
    DxFunnelComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxFunnelComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('palette');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
    };
    DxFunnelComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxFunnelComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-funnel',
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
    DxFunnelComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: iterable_differ_helper_1.IterableDifferHelper, },
        { type: nested_option_1.NestedOptionHost, },
    ]; };
    DxFunnelComponent.propDecorators = {
        'adaptiveLayout': [{ type: core_1.Input },],
        'algorithm': [{ type: core_1.Input },],
        'argumentField': [{ type: core_1.Input },],
        'colorField': [{ type: core_1.Input },],
        'dataSource': [{ type: core_1.Input },],
        'elementAttr': [{ type: core_1.Input },],
        'export': [{ type: core_1.Input },],
        'hoverEnabled': [{ type: core_1.Input },],
        'inverted': [{ type: core_1.Input },],
        'item': [{ type: core_1.Input },],
        'label': [{ type: core_1.Input },],
        'legend': [{ type: core_1.Input },],
        'loadingIndicator': [{ type: core_1.Input },],
        'margin': [{ type: core_1.Input },],
        'neckHeight': [{ type: core_1.Input },],
        'neckWidth': [{ type: core_1.Input },],
        'palette': [{ type: core_1.Input },],
        'pathModified': [{ type: core_1.Input },],
        'redrawOnResize': [{ type: core_1.Input },],
        'rtlEnabled': [{ type: core_1.Input },],
        'selectionMode': [{ type: core_1.Input },],
        'size': [{ type: core_1.Input },],
        'sortData': [{ type: core_1.Input },],
        'theme': [{ type: core_1.Input },],
        'title': [{ type: core_1.Input },],
        'tooltip': [{ type: core_1.Input },],
        'valueField': [{ type: core_1.Input },],
        'onDisposing': [{ type: core_1.Output },],
        'onDrawn': [{ type: core_1.Output },],
        'onExported': [{ type: core_1.Output },],
        'onExporting': [{ type: core_1.Output },],
        'onFileSaving': [{ type: core_1.Output },],
        'onHoverChanged': [{ type: core_1.Output },],
        'onIncidentOccurred': [{ type: core_1.Output },],
        'onInitialized': [{ type: core_1.Output },],
        'onItemClick': [{ type: core_1.Output },],
        'onLegendClick': [{ type: core_1.Output },],
        'onOptionChanged': [{ type: core_1.Output },],
        'onSelectionChanged': [{ type: core_1.Output },],
        'adaptiveLayoutChange': [{ type: core_1.Output },],
        'algorithmChange': [{ type: core_1.Output },],
        'argumentFieldChange': [{ type: core_1.Output },],
        'colorFieldChange': [{ type: core_1.Output },],
        'dataSourceChange': [{ type: core_1.Output },],
        'elementAttrChange': [{ type: core_1.Output },],
        'exportChange': [{ type: core_1.Output },],
        'hoverEnabledChange': [{ type: core_1.Output },],
        'invertedChange': [{ type: core_1.Output },],
        'itemChange': [{ type: core_1.Output },],
        'labelChange': [{ type: core_1.Output },],
        'legendChange': [{ type: core_1.Output },],
        'loadingIndicatorChange': [{ type: core_1.Output },],
        'marginChange': [{ type: core_1.Output },],
        'neckHeightChange': [{ type: core_1.Output },],
        'neckWidthChange': [{ type: core_1.Output },],
        'paletteChange': [{ type: core_1.Output },],
        'pathModifiedChange': [{ type: core_1.Output },],
        'redrawOnResizeChange': [{ type: core_1.Output },],
        'rtlEnabledChange': [{ type: core_1.Output },],
        'selectionModeChange': [{ type: core_1.Output },],
        'sizeChange': [{ type: core_1.Output },],
        'sortDataChange': [{ type: core_1.Output },],
        'themeChange': [{ type: core_1.Output },],
        'titleChange': [{ type: core_1.Output },],
        'tooltipChange': [{ type: core_1.Output },],
        'valueFieldChange': [{ type: core_1.Output },],
    };
    return DxFunnelComponent;
}(component_1.DxComponent));
exports.DxFunnelComponent = DxFunnelComponent;
var DxFunnelModule = (function () {
    function DxFunnelModule() {
    }
    DxFunnelModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        adaptive_layout_1.DxoAdaptiveLayoutModule,
                        export_1.DxoExportModule,
                        item_1.DxoItemModule,
                        border_1.DxoBorderModule,
                        hover_style_1.DxoHoverStyleModule,
                        hatching_1.DxoHatchingModule,
                        selection_style_1.DxoSelectionStyleModule,
                        label_1.DxoLabelModule,
                        connector_1.DxoConnectorModule,
                        font_1.DxoFontModule,
                        format_1.DxoFormatModule,
                        legend_1.DxoLegendModule,
                        margin_1.DxoMarginModule,
                        loading_indicator_1.DxoLoadingIndicatorModule,
                        size_1.DxoSizeModule,
                        title_1.DxoTitleModule,
                        subtitle_1.DxoSubtitleModule,
                        tooltip_1.DxoTooltipModule,
                        shadow_1.DxoShadowModule,
                        template_1.DxTemplateModule
                    ],
                    declarations: [
                        DxFunnelComponent
                    ],
                    exports: [
                        DxFunnelComponent,
                        adaptive_layout_1.DxoAdaptiveLayoutModule,
                        export_1.DxoExportModule,
                        item_1.DxoItemModule,
                        border_1.DxoBorderModule,
                        hover_style_1.DxoHoverStyleModule,
                        hatching_1.DxoHatchingModule,
                        selection_style_1.DxoSelectionStyleModule,
                        label_1.DxoLabelModule,
                        connector_1.DxoConnectorModule,
                        font_1.DxoFontModule,
                        format_1.DxoFormatModule,
                        legend_1.DxoLegendModule,
                        margin_1.DxoMarginModule,
                        loading_indicator_1.DxoLoadingIndicatorModule,
                        size_1.DxoSizeModule,
                        title_1.DxoTitleModule,
                        subtitle_1.DxoSubtitleModule,
                        tooltip_1.DxoTooltipModule,
                        shadow_1.DxoShadowModule,
                        template_1.DxTemplateModule
                    ],
                },] },
    ];
    /** @nocollapse */
    DxFunnelModule.ctorParameters = function () { return []; };
    return DxFunnelModule;
}());
exports.DxFunnelModule = DxFunnelModule;
//# sourceMappingURL=funnel.js.map