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
var polar_chart_1 = require("devextreme/viz/polar_chart");
var component_1 = require("../core/component");
var template_host_1 = require("../core/template-host");
var template_1 = require("../core/template");
var nested_option_1 = require("../core/nested-option");
var watcher_helper_1 = require("../core/watcher-helper");
var iterable_differ_helper_1 = require("../core/iterable-differ-helper");
var adaptive_layout_1 = require("./nested/adaptive-layout");
var animation_1 = require("./nested/animation");
var argument_axis_1 = require("./nested/argument-axis");
var constant_line_dxi_1 = require("./nested/constant-line-dxi");
var label_1 = require("./nested/label");
var font_1 = require("./nested/font");
var constant_line_style_1 = require("./nested/constant-line-style");
var grid_1 = require("./nested/grid");
var format_1 = require("./nested/format");
var minor_grid_1 = require("./nested/minor-grid");
var minor_tick_1 = require("./nested/minor-tick");
var minor_tick_interval_1 = require("./nested/minor-tick-interval");
var strip_dxi_1 = require("./nested/strip-dxi");
var strip_style_1 = require("./nested/strip-style");
var tick_1 = require("./nested/tick");
var tick_interval_1 = require("./nested/tick-interval");
var common_axis_settings_1 = require("./nested/common-axis-settings");
var common_series_settings_1 = require("./nested/common-series-settings");
var area_1 = require("./nested/area");
var border_1 = require("./nested/border");
var hover_style_1 = require("./nested/hover-style");
var hatching_1 = require("./nested/hatching");
var connector_1 = require("./nested/connector");
var point_1 = require("./nested/point");
var image_1 = require("./nested/image");
var selection_style_1 = require("./nested/selection-style");
var value_error_bar_1 = require("./nested/value-error-bar");
var bar_1 = require("./nested/bar");
var argument_format_1 = require("./nested/argument-format");
var line_1 = require("./nested/line");
var scatter_1 = require("./nested/scatter");
var stackedbar_1 = require("./nested/stackedbar");
var data_prepare_settings_1 = require("./nested/data-prepare-settings");
var export_1 = require("./nested/export");
var legend_1 = require("./nested/legend");
var margin_1 = require("./nested/margin");
var loading_indicator_1 = require("./nested/loading-indicator");
var series_dxi_1 = require("./nested/series-dxi");
var series_template_1 = require("./nested/series-template");
var size_1 = require("./nested/size");
var title_1 = require("./nested/title");
var subtitle_1 = require("./nested/subtitle");
var tooltip_1 = require("./nested/tooltip");
var shadow_1 = require("./nested/shadow");
var value_axis_1 = require("./nested/value-axis");
var series_dxi_2 = require("./nested/series-dxi");
/**
 * The PolarChart is a widget that visualizes data in a polar coordinate system.
 */
var DxPolarChartComponent = (function (_super) {
    __extends(DxPolarChartComponent, _super);
    function DxPolarChartComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper) || this;
        _this._watcherHelper = _watcherHelper;
        _this._idh = _idh;
        _this._createEventEmitters([
            { subscribe: 'argumentAxisClick', emit: 'onArgumentAxisClick' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'done', emit: 'onDone' },
            { subscribe: 'drawn', emit: 'onDrawn' },
            { subscribe: 'exported', emit: 'onExported' },
            { subscribe: 'exporting', emit: 'onExporting' },
            { subscribe: 'fileSaving', emit: 'onFileSaving' },
            { subscribe: 'incidentOccurred', emit: 'onIncidentOccurred' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'legendClick', emit: 'onLegendClick' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'pointClick', emit: 'onPointClick' },
            { subscribe: 'pointHoverChanged', emit: 'onPointHoverChanged' },
            { subscribe: 'pointSelectionChanged', emit: 'onPointSelectionChanged' },
            { subscribe: 'seriesClick', emit: 'onSeriesClick' },
            { subscribe: 'seriesHoverChanged', emit: 'onSeriesHoverChanged' },
            { subscribe: 'seriesSelectionChanged', emit: 'onSeriesSelectionChanged' },
            { subscribe: 'tooltipHidden', emit: 'onTooltipHidden' },
            { subscribe: 'tooltipShown', emit: 'onTooltipShown' },
            { emit: 'adaptiveLayoutChange' },
            { emit: 'animationChange' },
            { emit: 'argumentAxisChange' },
            { emit: 'barWidthChange' },
            { emit: 'commonAxisSettingsChange' },
            { emit: 'commonSeriesSettingsChange' },
            { emit: 'containerBackgroundColorChange' },
            { emit: 'customizeLabelChange' },
            { emit: 'customizePointChange' },
            { emit: 'dataPrepareSettingsChange' },
            { emit: 'dataSourceChange' },
            { emit: 'elementAttrChange' },
            { emit: 'equalBarWidthChange' },
            { emit: 'exportChange' },
            { emit: 'legendChange' },
            { emit: 'loadingIndicatorChange' },
            { emit: 'marginChange' },
            { emit: 'negativesAsZeroesChange' },
            { emit: 'paletteChange' },
            { emit: 'pathModifiedChange' },
            { emit: 'pointSelectionModeChange' },
            { emit: 'redrawOnResizeChange' },
            { emit: 'resolveLabelOverlappingChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'seriesChange' },
            { emit: 'seriesSelectionModeChange' },
            { emit: 'seriesTemplateChange' },
            { emit: 'sizeChange' },
            { emit: 'themeChange' },
            { emit: 'titleChange' },
            { emit: 'tooltipChange' },
            { emit: 'useSpiderWebChange' },
            { emit: 'valueAxisChange' }
        ]);
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxPolarChartComponent.prototype, "adaptiveLayout", {
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
    Object.defineProperty(DxPolarChartComponent.prototype, "animation", {
        /**
         * Specifies animation options.
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
    Object.defineProperty(DxPolarChartComponent.prototype, "argumentAxis", {
        /**
         * Specifies argument axis options for the PolarChart widget.
         */
        get: function () {
            return this._getOption('argumentAxis');
        },
        set: function (value) {
            this._setOption('argumentAxis', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPolarChartComponent.prototype, "barWidth", {
        /**
         * Specifies a common bar width as a percentage from 0 to 1.
         */
        get: function () {
            return this._getOption('barWidth');
        },
        set: function (value) {
            this._setOption('barWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPolarChartComponent.prototype, "commonAxisSettings", {
        /**
         * An object defining the configuration options that are common for all axes of the PolarChart widget.
         */
        get: function () {
            return this._getOption('commonAxisSettings');
        },
        set: function (value) {
            this._setOption('commonAxisSettings', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPolarChartComponent.prototype, "commonSeriesSettings", {
        /**
         * An object defining the configuration options that are common for all series of the PolarChart widget.
         */
        get: function () {
            return this._getOption('commonSeriesSettings');
        },
        set: function (value) {
            this._setOption('commonSeriesSettings', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPolarChartComponent.prototype, "containerBackgroundColor", {
        /**
         * Specifies the color of the parent page element.
         */
        get: function () {
            return this._getOption('containerBackgroundColor');
        },
        set: function (value) {
            this._setOption('containerBackgroundColor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPolarChartComponent.prototype, "customizeLabel", {
        /**
         * Customizes the appearance of an individual point label.
         */
        get: function () {
            return this._getOption('customizeLabel');
        },
        set: function (value) {
            this._setOption('customizeLabel', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPolarChartComponent.prototype, "customizePoint", {
        /**
         * Customizes the appearance of an individual series point.
         */
        get: function () {
            return this._getOption('customizePoint');
        },
        set: function (value) {
            this._setOption('customizePoint', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPolarChartComponent.prototype, "dataPrepareSettings", {
        /**
         * An object providing options for managing data from a data source.
         */
        get: function () {
            return this._getOption('dataPrepareSettings');
        },
        set: function (value) {
            this._setOption('dataPrepareSettings', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPolarChartComponent.prototype, "dataSource", {
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
    Object.defineProperty(DxPolarChartComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxPolarChartComponent.prototype, "equalBarWidth", {
        /**
         * Specifies whether or not all bars in a series must have the same angle, or may have different angles if any points in other series are missing.
         */
        get: function () {
            return this._getOption('equalBarWidth');
        },
        set: function (value) {
            this._setOption('equalBarWidth', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPolarChartComponent.prototype, "export", {
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
    Object.defineProperty(DxPolarChartComponent.prototype, "legend", {
        /**
         * Specifies the options of a chart's legend.
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
    Object.defineProperty(DxPolarChartComponent.prototype, "loadingIndicator", {
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
    Object.defineProperty(DxPolarChartComponent.prototype, "margin", {
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
    Object.defineProperty(DxPolarChartComponent.prototype, "negativesAsZeroes", {
        /**
         * Forces the widget to treat negative values as zeroes. Applies to stacked-like series only.
         */
        get: function () {
            return this._getOption('negativesAsZeroes');
        },
        set: function (value) {
            this._setOption('negativesAsZeroes', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPolarChartComponent.prototype, "palette", {
        /**
         * Sets the name of the palette to be used in the chart. Alternatively, an array of colors can be set as a custom palette to be used within this chart.
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
    Object.defineProperty(DxPolarChartComponent.prototype, "pathModified", {
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
    Object.defineProperty(DxPolarChartComponent.prototype, "pointSelectionMode", {
        /**
         * Specifies whether a single point or multiple points can be selected in the chart.
         */
        get: function () {
            return this._getOption('pointSelectionMode');
        },
        set: function (value) {
            this._setOption('pointSelectionMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPolarChartComponent.prototype, "redrawOnResize", {
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
    Object.defineProperty(DxPolarChartComponent.prototype, "resolveLabelOverlapping", {
        /**
         * Specifies how the chart must behave when series point labels overlap.
         */
        get: function () {
            return this._getOption('resolveLabelOverlapping');
        },
        set: function (value) {
            this._setOption('resolveLabelOverlapping', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPolarChartComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxPolarChartComponent.prototype, "series", {
        /**
         * Specifies options for PolarChart widget series.
         */
        get: function () {
            return this._getOption('series');
        },
        set: function (value) {
            this._setOption('series', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPolarChartComponent.prototype, "seriesSelectionMode", {
        /**
         * Specifies whether a single series or multiple series can be selected in the chart.
         */
        get: function () {
            return this._getOption('seriesSelectionMode');
        },
        set: function (value) {
            this._setOption('seriesSelectionMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPolarChartComponent.prototype, "seriesTemplate", {
        /**
         * Defines options for the series template.
         */
        get: function () {
            return this._getOption('seriesTemplate');
        },
        set: function (value) {
            this._setOption('seriesTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPolarChartComponent.prototype, "size", {
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
    Object.defineProperty(DxPolarChartComponent.prototype, "theme", {
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
    Object.defineProperty(DxPolarChartComponent.prototype, "title", {
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
    Object.defineProperty(DxPolarChartComponent.prototype, "tooltip", {
        /**
         * Configures tooltips.
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
    Object.defineProperty(DxPolarChartComponent.prototype, "useSpiderWeb", {
        /**
         * Indicates whether or not to display a "spider web".
         */
        get: function () {
            return this._getOption('useSpiderWeb');
        },
        set: function (value) {
            this._setOption('useSpiderWeb', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPolarChartComponent.prototype, "valueAxis", {
        /**
         * Specifies value axis options for the PolarChart widget.
         */
        get: function () {
            return this._getOption('valueAxis');
        },
        set: function (value) {
            this._setOption('valueAxis', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPolarChartComponent.prototype, "seriesChildren", {
        get: function () {
            return this._getOption('series');
        },
        set: function (value) {
            this.setChildren('series', value);
        },
        enumerable: true,
        configurable: true
    });
    DxPolarChartComponent.prototype._createInstance = function (element, options) {
        return new polar_chart_1.default(element, options);
    };
    DxPolarChartComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxPolarChartComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('dataSource', changes);
        this.setupChanges('palette', changes);
        this.setupChanges('series', changes);
    };
    DxPolarChartComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxPolarChartComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('palette');
        this._idh.doCheck('series');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
    };
    DxPolarChartComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxPolarChartComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-polar-chart',
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
    DxPolarChartComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: iterable_differ_helper_1.IterableDifferHelper, },
        { type: nested_option_1.NestedOptionHost, },
    ]; };
    DxPolarChartComponent.propDecorators = {
        'adaptiveLayout': [{ type: core_1.Input },],
        'animation': [{ type: core_1.Input },],
        'argumentAxis': [{ type: core_1.Input },],
        'barWidth': [{ type: core_1.Input },],
        'commonAxisSettings': [{ type: core_1.Input },],
        'commonSeriesSettings': [{ type: core_1.Input },],
        'containerBackgroundColor': [{ type: core_1.Input },],
        'customizeLabel': [{ type: core_1.Input },],
        'customizePoint': [{ type: core_1.Input },],
        'dataPrepareSettings': [{ type: core_1.Input },],
        'dataSource': [{ type: core_1.Input },],
        'elementAttr': [{ type: core_1.Input },],
        'equalBarWidth': [{ type: core_1.Input },],
        'export': [{ type: core_1.Input },],
        'legend': [{ type: core_1.Input },],
        'loadingIndicator': [{ type: core_1.Input },],
        'margin': [{ type: core_1.Input },],
        'negativesAsZeroes': [{ type: core_1.Input },],
        'palette': [{ type: core_1.Input },],
        'pathModified': [{ type: core_1.Input },],
        'pointSelectionMode': [{ type: core_1.Input },],
        'redrawOnResize': [{ type: core_1.Input },],
        'resolveLabelOverlapping': [{ type: core_1.Input },],
        'rtlEnabled': [{ type: core_1.Input },],
        'series': [{ type: core_1.Input },],
        'seriesSelectionMode': [{ type: core_1.Input },],
        'seriesTemplate': [{ type: core_1.Input },],
        'size': [{ type: core_1.Input },],
        'theme': [{ type: core_1.Input },],
        'title': [{ type: core_1.Input },],
        'tooltip': [{ type: core_1.Input },],
        'useSpiderWeb': [{ type: core_1.Input },],
        'valueAxis': [{ type: core_1.Input },],
        'onArgumentAxisClick': [{ type: core_1.Output },],
        'onDisposing': [{ type: core_1.Output },],
        'onDone': [{ type: core_1.Output },],
        'onDrawn': [{ type: core_1.Output },],
        'onExported': [{ type: core_1.Output },],
        'onExporting': [{ type: core_1.Output },],
        'onFileSaving': [{ type: core_1.Output },],
        'onIncidentOccurred': [{ type: core_1.Output },],
        'onInitialized': [{ type: core_1.Output },],
        'onLegendClick': [{ type: core_1.Output },],
        'onOptionChanged': [{ type: core_1.Output },],
        'onPointClick': [{ type: core_1.Output },],
        'onPointHoverChanged': [{ type: core_1.Output },],
        'onPointSelectionChanged': [{ type: core_1.Output },],
        'onSeriesClick': [{ type: core_1.Output },],
        'onSeriesHoverChanged': [{ type: core_1.Output },],
        'onSeriesSelectionChanged': [{ type: core_1.Output },],
        'onTooltipHidden': [{ type: core_1.Output },],
        'onTooltipShown': [{ type: core_1.Output },],
        'adaptiveLayoutChange': [{ type: core_1.Output },],
        'animationChange': [{ type: core_1.Output },],
        'argumentAxisChange': [{ type: core_1.Output },],
        'barWidthChange': [{ type: core_1.Output },],
        'commonAxisSettingsChange': [{ type: core_1.Output },],
        'commonSeriesSettingsChange': [{ type: core_1.Output },],
        'containerBackgroundColorChange': [{ type: core_1.Output },],
        'customizeLabelChange': [{ type: core_1.Output },],
        'customizePointChange': [{ type: core_1.Output },],
        'dataPrepareSettingsChange': [{ type: core_1.Output },],
        'dataSourceChange': [{ type: core_1.Output },],
        'elementAttrChange': [{ type: core_1.Output },],
        'equalBarWidthChange': [{ type: core_1.Output },],
        'exportChange': [{ type: core_1.Output },],
        'legendChange': [{ type: core_1.Output },],
        'loadingIndicatorChange': [{ type: core_1.Output },],
        'marginChange': [{ type: core_1.Output },],
        'negativesAsZeroesChange': [{ type: core_1.Output },],
        'paletteChange': [{ type: core_1.Output },],
        'pathModifiedChange': [{ type: core_1.Output },],
        'pointSelectionModeChange': [{ type: core_1.Output },],
        'redrawOnResizeChange': [{ type: core_1.Output },],
        'resolveLabelOverlappingChange': [{ type: core_1.Output },],
        'rtlEnabledChange': [{ type: core_1.Output },],
        'seriesChange': [{ type: core_1.Output },],
        'seriesSelectionModeChange': [{ type: core_1.Output },],
        'seriesTemplateChange': [{ type: core_1.Output },],
        'sizeChange': [{ type: core_1.Output },],
        'themeChange': [{ type: core_1.Output },],
        'titleChange': [{ type: core_1.Output },],
        'tooltipChange': [{ type: core_1.Output },],
        'useSpiderWebChange': [{ type: core_1.Output },],
        'valueAxisChange': [{ type: core_1.Output },],
        'seriesChildren': [{ type: core_1.ContentChildren, args: [series_dxi_2.DxiSeriesComponent,] },],
    };
    return DxPolarChartComponent;
}(component_1.DxComponent));
exports.DxPolarChartComponent = DxPolarChartComponent;
var DxPolarChartModule = (function () {
    function DxPolarChartModule() {
    }
    DxPolarChartModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        adaptive_layout_1.DxoAdaptiveLayoutModule,
                        animation_1.DxoAnimationModule,
                        argument_axis_1.DxoArgumentAxisModule,
                        constant_line_dxi_1.DxiConstantLineModule,
                        label_1.DxoLabelModule,
                        font_1.DxoFontModule,
                        constant_line_style_1.DxoConstantLineStyleModule,
                        grid_1.DxoGridModule,
                        format_1.DxoFormatModule,
                        minor_grid_1.DxoMinorGridModule,
                        minor_tick_1.DxoMinorTickModule,
                        minor_tick_interval_1.DxoMinorTickIntervalModule,
                        strip_dxi_1.DxiStripModule,
                        strip_style_1.DxoStripStyleModule,
                        tick_1.DxoTickModule,
                        tick_interval_1.DxoTickIntervalModule,
                        common_axis_settings_1.DxoCommonAxisSettingsModule,
                        common_series_settings_1.DxoCommonSeriesSettingsModule,
                        area_1.DxoAreaModule,
                        border_1.DxoBorderModule,
                        hover_style_1.DxoHoverStyleModule,
                        hatching_1.DxoHatchingModule,
                        connector_1.DxoConnectorModule,
                        point_1.DxoPointModule,
                        image_1.DxoImageModule,
                        selection_style_1.DxoSelectionStyleModule,
                        value_error_bar_1.DxoValueErrorBarModule,
                        bar_1.DxoBarModule,
                        argument_format_1.DxoArgumentFormatModule,
                        line_1.DxoLineModule,
                        scatter_1.DxoScatterModule,
                        stackedbar_1.DxoStackedbarModule,
                        data_prepare_settings_1.DxoDataPrepareSettingsModule,
                        export_1.DxoExportModule,
                        legend_1.DxoLegendModule,
                        margin_1.DxoMarginModule,
                        loading_indicator_1.DxoLoadingIndicatorModule,
                        series_dxi_1.DxiSeriesModule,
                        series_template_1.DxoSeriesTemplateModule,
                        size_1.DxoSizeModule,
                        title_1.DxoTitleModule,
                        subtitle_1.DxoSubtitleModule,
                        tooltip_1.DxoTooltipModule,
                        shadow_1.DxoShadowModule,
                        value_axis_1.DxoValueAxisModule,
                        template_1.DxTemplateModule
                    ],
                    declarations: [
                        DxPolarChartComponent
                    ],
                    exports: [
                        DxPolarChartComponent,
                        adaptive_layout_1.DxoAdaptiveLayoutModule,
                        animation_1.DxoAnimationModule,
                        argument_axis_1.DxoArgumentAxisModule,
                        constant_line_dxi_1.DxiConstantLineModule,
                        label_1.DxoLabelModule,
                        font_1.DxoFontModule,
                        constant_line_style_1.DxoConstantLineStyleModule,
                        grid_1.DxoGridModule,
                        format_1.DxoFormatModule,
                        minor_grid_1.DxoMinorGridModule,
                        minor_tick_1.DxoMinorTickModule,
                        minor_tick_interval_1.DxoMinorTickIntervalModule,
                        strip_dxi_1.DxiStripModule,
                        strip_style_1.DxoStripStyleModule,
                        tick_1.DxoTickModule,
                        tick_interval_1.DxoTickIntervalModule,
                        common_axis_settings_1.DxoCommonAxisSettingsModule,
                        common_series_settings_1.DxoCommonSeriesSettingsModule,
                        area_1.DxoAreaModule,
                        border_1.DxoBorderModule,
                        hover_style_1.DxoHoverStyleModule,
                        hatching_1.DxoHatchingModule,
                        connector_1.DxoConnectorModule,
                        point_1.DxoPointModule,
                        image_1.DxoImageModule,
                        selection_style_1.DxoSelectionStyleModule,
                        value_error_bar_1.DxoValueErrorBarModule,
                        bar_1.DxoBarModule,
                        argument_format_1.DxoArgumentFormatModule,
                        line_1.DxoLineModule,
                        scatter_1.DxoScatterModule,
                        stackedbar_1.DxoStackedbarModule,
                        data_prepare_settings_1.DxoDataPrepareSettingsModule,
                        export_1.DxoExportModule,
                        legend_1.DxoLegendModule,
                        margin_1.DxoMarginModule,
                        loading_indicator_1.DxoLoadingIndicatorModule,
                        series_dxi_1.DxiSeriesModule,
                        series_template_1.DxoSeriesTemplateModule,
                        size_1.DxoSizeModule,
                        title_1.DxoTitleModule,
                        subtitle_1.DxoSubtitleModule,
                        tooltip_1.DxoTooltipModule,
                        shadow_1.DxoShadowModule,
                        value_axis_1.DxoValueAxisModule,
                        template_1.DxTemplateModule
                    ],
                },] },
    ];
    /** @nocollapse */
    DxPolarChartModule.ctorParameters = function () { return []; };
    return DxPolarChartModule;
}());
exports.DxPolarChartModule = DxPolarChartModule;
//# sourceMappingURL=polar-chart.js.map