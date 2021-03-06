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
var chart_1 = require("devextreme/viz/chart");
var component_1 = require("../core/component");
var template_host_1 = require("../core/template-host");
var template_1 = require("../core/template");
var nested_option_1 = require("../core/nested-option");
var watcher_helper_1 = require("../core/watcher-helper");
var iterable_differ_helper_1 = require("../core/iterable-differ-helper");
var adaptive_layout_1 = require("./nested/adaptive-layout");
var animation_1 = require("./nested/animation");
var argument_axis_1 = require("./nested/argument-axis");
var break_dxi_1 = require("./nested/break-dxi");
var break_style_1 = require("./nested/break-style");
var constant_line_dxi_1 = require("./nested/constant-line-dxi");
var label_1 = require("./nested/label");
var font_1 = require("./nested/font");
var constant_line_style_1 = require("./nested/constant-line-style");
var grid_1 = require("./nested/grid");
var format_1 = require("./nested/format");
var overlapping_behavior_1 = require("./nested/overlapping-behavior");
var minor_grid_1 = require("./nested/minor-grid");
var minor_tick_1 = require("./nested/minor-tick");
var minor_tick_interval_1 = require("./nested/minor-tick-interval");
var strip_dxi_1 = require("./nested/strip-dxi");
var strip_style_1 = require("./nested/strip-style");
var tick_1 = require("./nested/tick");
var tick_interval_1 = require("./nested/tick-interval");
var title_1 = require("./nested/title");
var common_axis_settings_1 = require("./nested/common-axis-settings");
var common_pane_settings_1 = require("./nested/common-pane-settings");
var border_1 = require("./nested/border");
var common_series_settings_1 = require("./nested/common-series-settings");
var area_1 = require("./nested/area");
var hover_style_1 = require("./nested/hover-style");
var hatching_1 = require("./nested/hatching");
var connector_1 = require("./nested/connector");
var point_1 = require("./nested/point");
var image_1 = require("./nested/image");
var height_1 = require("./nested/height");
var url_1 = require("./nested/url");
var width_1 = require("./nested/width");
var selection_style_1 = require("./nested/selection-style");
var reduction_1 = require("./nested/reduction");
var value_error_bar_1 = require("./nested/value-error-bar");
var bar_1 = require("./nested/bar");
var bubble_1 = require("./nested/bubble");
var candlestick_1 = require("./nested/candlestick");
var fullstackedarea_1 = require("./nested/fullstackedarea");
var fullstackedbar_1 = require("./nested/fullstackedbar");
var fullstackedline_1 = require("./nested/fullstackedline");
var fullstackedspline_1 = require("./nested/fullstackedspline");
var fullstackedsplinearea_1 = require("./nested/fullstackedsplinearea");
var argument_format_1 = require("./nested/argument-format");
var line_1 = require("./nested/line");
var rangearea_1 = require("./nested/rangearea");
var rangebar_1 = require("./nested/rangebar");
var scatter_1 = require("./nested/scatter");
var spline_1 = require("./nested/spline");
var splinearea_1 = require("./nested/splinearea");
var stackedarea_1 = require("./nested/stackedarea");
var stackedbar_1 = require("./nested/stackedbar");
var stackedline_1 = require("./nested/stackedline");
var stackedspline_1 = require("./nested/stackedspline");
var stackedsplinearea_1 = require("./nested/stackedsplinearea");
var steparea_1 = require("./nested/steparea");
var stepline_1 = require("./nested/stepline");
var stock_1 = require("./nested/stock");
var crosshair_1 = require("./nested/crosshair");
var horizontal_line_1 = require("./nested/horizontal-line");
var vertical_line_1 = require("./nested/vertical-line");
var data_prepare_settings_1 = require("./nested/data-prepare-settings");
var export_1 = require("./nested/export");
var legend_1 = require("./nested/legend");
var margin_1 = require("./nested/margin");
var loading_indicator_1 = require("./nested/loading-indicator");
var pane_dxi_1 = require("./nested/pane-dxi");
var scroll_bar_1 = require("./nested/scroll-bar");
var series_dxi_1 = require("./nested/series-dxi");
var series_template_1 = require("./nested/series-template");
var size_1 = require("./nested/size");
var subtitle_1 = require("./nested/subtitle");
var tooltip_1 = require("./nested/tooltip");
var shadow_1 = require("./nested/shadow");
var value_axis_dxi_1 = require("./nested/value-axis-dxi");
var pane_dxi_2 = require("./nested/pane-dxi");
var series_dxi_2 = require("./nested/series-dxi");
var value_axis_dxi_2 = require("./nested/value-axis-dxi");
/**
 * The Chart is a widget that visualizes data from a local or remote storage using a great variety of series types along with different interactive elements, such as tooltips, crosshair pointer, legend, etc.
 */
var DxChartComponent = (function (_super) {
    __extends(DxChartComponent, _super);
    function DxChartComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost) {
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
            { subscribe: 'zoomEnd', emit: 'onZoomEnd' },
            { subscribe: 'zoomStart', emit: 'onZoomStart' },
            { emit: 'adaptiveLayoutChange' },
            { emit: 'adjustOnZoomChange' },
            { emit: 'animationChange' },
            { emit: 'argumentAxisChange' },
            { emit: 'barWidthChange' },
            { emit: 'commonAxisSettingsChange' },
            { emit: 'commonPaneSettingsChange' },
            { emit: 'commonSeriesSettingsChange' },
            { emit: 'containerBackgroundColorChange' },
            { emit: 'crosshairChange' },
            { emit: 'customizeLabelChange' },
            { emit: 'customizePointChange' },
            { emit: 'dataPrepareSettingsChange' },
            { emit: 'dataSourceChange' },
            { emit: 'defaultPaneChange' },
            { emit: 'elementAttrChange' },
            { emit: 'equalBarWidthChange' },
            { emit: 'exportChange' },
            { emit: 'legendChange' },
            { emit: 'loadingIndicatorChange' },
            { emit: 'marginChange' },
            { emit: 'maxBubbleSizeChange' },
            { emit: 'minBubbleSizeChange' },
            { emit: 'negativesAsZeroesChange' },
            { emit: 'paletteChange' },
            { emit: 'panesChange' },
            { emit: 'pathModifiedChange' },
            { emit: 'pointSelectionModeChange' },
            { emit: 'redrawOnResizeChange' },
            { emit: 'resolveLabelOverlappingChange' },
            { emit: 'rotatedChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'scrollBarChange' },
            { emit: 'scrollingModeChange' },
            { emit: 'seriesChange' },
            { emit: 'seriesSelectionModeChange' },
            { emit: 'seriesTemplateChange' },
            { emit: 'sizeChange' },
            { emit: 'synchronizeMultiAxesChange' },
            { emit: 'themeChange' },
            { emit: 'titleChange' },
            { emit: 'tooltipChange' },
            { emit: 'useAggregationChange' },
            { emit: 'valueAxisChange' },
            { emit: 'zoomingModeChange' }
        ]);
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxChartComponent.prototype, "adaptiveLayout", {
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
    Object.defineProperty(DxChartComponent.prototype, "adjustOnZoom", {
        /**
         * Specifies whether or not to adjust the value axis when zooming the widget.
         */
        get: function () {
            return this._getOption('adjustOnZoom');
        },
        set: function (value) {
            this._setOption('adjustOnZoom', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "animation", {
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
    Object.defineProperty(DxChartComponent.prototype, "argumentAxis", {
        /**
         * Configures the argument axis.
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
    Object.defineProperty(DxChartComponent.prototype, "barWidth", {
        /**
         * Controls the width of bars in the widget. Applies only to bar-like series and when the equalBarWidth option is true.
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
    Object.defineProperty(DxChartComponent.prototype, "commonAxisSettings", {
        /**
         * Defines common settings for both the argument and value axis in a chart.
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
    Object.defineProperty(DxChartComponent.prototype, "commonPaneSettings", {
        /**
         * Defines common settings for all panes in a chart.
         */
        get: function () {
            return this._getOption('commonPaneSettings');
        },
        set: function (value) {
            this._setOption('commonPaneSettings', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "commonSeriesSettings", {
        /**
         * Specifies settings common for all series in the chart.
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
    Object.defineProperty(DxChartComponent.prototype, "containerBackgroundColor", {
        /**
         * Colors the background of the chart container.
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
    Object.defineProperty(DxChartComponent.prototype, "crosshair", {
        /**
         * Configures the crosshair feature.
         */
        get: function () {
            return this._getOption('crosshair');
        },
        set: function (value) {
            this._setOption('crosshair', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "customizeLabel", {
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
    Object.defineProperty(DxChartComponent.prototype, "customizePoint", {
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
    Object.defineProperty(DxChartComponent.prototype, "dataPrepareSettings", {
        /**
         * Processes data before visualizing it.
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
    Object.defineProperty(DxChartComponent.prototype, "dataSource", {
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
    Object.defineProperty(DxChartComponent.prototype, "defaultPane", {
        /**
         * Specifies which pane should be used by default.
         */
        get: function () {
            return this._getOption('defaultPane');
        },
        set: function (value) {
            this._setOption('defaultPane', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxChartComponent.prototype, "equalBarWidth", {
        /**
         * Specifies whether all bars should have equal width, even if some values are missing from a series. Applies only to bar-like series.
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
    Object.defineProperty(DxChartComponent.prototype, "export", {
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
    Object.defineProperty(DxChartComponent.prototype, "legend", {
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
    Object.defineProperty(DxChartComponent.prototype, "loadingIndicator", {
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
    Object.defineProperty(DxChartComponent.prototype, "margin", {
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
    Object.defineProperty(DxChartComponent.prototype, "maxBubbleSize", {
        /**
         * Specifies a coefficient determining the diameter of the largest bubble.
         */
        get: function () {
            return this._getOption('maxBubbleSize');
        },
        set: function (value) {
            this._setOption('maxBubbleSize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "minBubbleSize", {
        /**
         * Specifies the diameter of the smallest bubble measured in pixels.
         */
        get: function () {
            return this._getOption('minBubbleSize');
        },
        set: function (value) {
            this._setOption('minBubbleSize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "negativesAsZeroes", {
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
    Object.defineProperty(DxChartComponent.prototype, "palette", {
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
    Object.defineProperty(DxChartComponent.prototype, "panes", {
        /**
         * Declares a collection of panes.
         */
        get: function () {
            return this._getOption('panes');
        },
        set: function (value) {
            this._setOption('panes', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "pathModified", {
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
    Object.defineProperty(DxChartComponent.prototype, "pointSelectionMode", {
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
    Object.defineProperty(DxChartComponent.prototype, "redrawOnResize", {
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
    Object.defineProperty(DxChartComponent.prototype, "resolveLabelOverlapping", {
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
    Object.defineProperty(DxChartComponent.prototype, "rotated", {
        /**
         * Swaps the axes around making the value axis horizontal and the argument axis vertical.
         */
        get: function () {
            return this._getOption('rotated');
        },
        set: function (value) {
            this._setOption('rotated', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxChartComponent.prototype, "scrollBar", {
        /**
         * Specifies the settings of the scroll bar.
         */
        get: function () {
            return this._getOption('scrollBar');
        },
        set: function (value) {
            this._setOption('scrollBar', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "scrollingMode", {
        /**
         * Enables scrolling in your chart.
         */
        get: function () {
            return this._getOption('scrollingMode');
        },
        set: function (value) {
            this._setOption('scrollingMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "series", {
        /**
         * Specifies options for Chart widget series.
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
    Object.defineProperty(DxChartComponent.prototype, "seriesSelectionMode", {
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
    Object.defineProperty(DxChartComponent.prototype, "seriesTemplate", {
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
    Object.defineProperty(DxChartComponent.prototype, "size", {
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
    Object.defineProperty(DxChartComponent.prototype, "synchronizeMultiAxes", {
        /**
         * Indicates whether or not to synchronize value axes when they are displayed on a single pane.
         */
        get: function () {
            return this._getOption('synchronizeMultiAxes');
        },
        set: function (value) {
            this._setOption('synchronizeMultiAxes', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "theme", {
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
    Object.defineProperty(DxChartComponent.prototype, "title", {
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
    Object.defineProperty(DxChartComponent.prototype, "tooltip", {
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
    Object.defineProperty(DxChartComponent.prototype, "useAggregation", {
        /**
         * Specifies whether or not to filter the series points depending on their quantity.
         */
        get: function () {
            return this._getOption('useAggregation');
        },
        set: function (value) {
            this._setOption('useAggregation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "valueAxis", {
        /**
         * Configures the value axis.
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
    Object.defineProperty(DxChartComponent.prototype, "zoomingMode", {
        /**
         * Enables zooming in your chart.
         */
        get: function () {
            return this._getOption('zoomingMode');
        },
        set: function (value) {
            this._setOption('zoomingMode', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "panesChildren", {
        get: function () {
            return this._getOption('panes');
        },
        set: function (value) {
            this.setChildren('panes', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "seriesChildren", {
        get: function () {
            return this._getOption('series');
        },
        set: function (value) {
            this.setChildren('series', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxChartComponent.prototype, "valueAxisChildren", {
        get: function () {
            return this._getOption('valueAxis');
        },
        set: function (value) {
            this.setChildren('valueAxis', value);
        },
        enumerable: true,
        configurable: true
    });
    DxChartComponent.prototype._createInstance = function (element, options) {
        return new chart_1.default(element, options);
    };
    DxChartComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxChartComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('dataSource', changes);
        this.setupChanges('palette', changes);
        this.setupChanges('panes', changes);
        this.setupChanges('series', changes);
        this.setupChanges('valueAxis', changes);
    };
    DxChartComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxChartComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('palette');
        this._idh.doCheck('panes');
        this._idh.doCheck('series');
        this._idh.doCheck('valueAxis');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
    };
    DxChartComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxChartComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-chart',
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
    DxChartComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: iterable_differ_helper_1.IterableDifferHelper, },
        { type: nested_option_1.NestedOptionHost, },
    ]; };
    DxChartComponent.propDecorators = {
        'adaptiveLayout': [{ type: core_1.Input },],
        'adjustOnZoom': [{ type: core_1.Input },],
        'animation': [{ type: core_1.Input },],
        'argumentAxis': [{ type: core_1.Input },],
        'barWidth': [{ type: core_1.Input },],
        'commonAxisSettings': [{ type: core_1.Input },],
        'commonPaneSettings': [{ type: core_1.Input },],
        'commonSeriesSettings': [{ type: core_1.Input },],
        'containerBackgroundColor': [{ type: core_1.Input },],
        'crosshair': [{ type: core_1.Input },],
        'customizeLabel': [{ type: core_1.Input },],
        'customizePoint': [{ type: core_1.Input },],
        'dataPrepareSettings': [{ type: core_1.Input },],
        'dataSource': [{ type: core_1.Input },],
        'defaultPane': [{ type: core_1.Input },],
        'elementAttr': [{ type: core_1.Input },],
        'equalBarWidth': [{ type: core_1.Input },],
        'export': [{ type: core_1.Input },],
        'legend': [{ type: core_1.Input },],
        'loadingIndicator': [{ type: core_1.Input },],
        'margin': [{ type: core_1.Input },],
        'maxBubbleSize': [{ type: core_1.Input },],
        'minBubbleSize': [{ type: core_1.Input },],
        'negativesAsZeroes': [{ type: core_1.Input },],
        'palette': [{ type: core_1.Input },],
        'panes': [{ type: core_1.Input },],
        'pathModified': [{ type: core_1.Input },],
        'pointSelectionMode': [{ type: core_1.Input },],
        'redrawOnResize': [{ type: core_1.Input },],
        'resolveLabelOverlapping': [{ type: core_1.Input },],
        'rotated': [{ type: core_1.Input },],
        'rtlEnabled': [{ type: core_1.Input },],
        'scrollBar': [{ type: core_1.Input },],
        'scrollingMode': [{ type: core_1.Input },],
        'series': [{ type: core_1.Input },],
        'seriesSelectionMode': [{ type: core_1.Input },],
        'seriesTemplate': [{ type: core_1.Input },],
        'size': [{ type: core_1.Input },],
        'synchronizeMultiAxes': [{ type: core_1.Input },],
        'theme': [{ type: core_1.Input },],
        'title': [{ type: core_1.Input },],
        'tooltip': [{ type: core_1.Input },],
        'useAggregation': [{ type: core_1.Input },],
        'valueAxis': [{ type: core_1.Input },],
        'zoomingMode': [{ type: core_1.Input },],
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
        'onZoomEnd': [{ type: core_1.Output },],
        'onZoomStart': [{ type: core_1.Output },],
        'adaptiveLayoutChange': [{ type: core_1.Output },],
        'adjustOnZoomChange': [{ type: core_1.Output },],
        'animationChange': [{ type: core_1.Output },],
        'argumentAxisChange': [{ type: core_1.Output },],
        'barWidthChange': [{ type: core_1.Output },],
        'commonAxisSettingsChange': [{ type: core_1.Output },],
        'commonPaneSettingsChange': [{ type: core_1.Output },],
        'commonSeriesSettingsChange': [{ type: core_1.Output },],
        'containerBackgroundColorChange': [{ type: core_1.Output },],
        'crosshairChange': [{ type: core_1.Output },],
        'customizeLabelChange': [{ type: core_1.Output },],
        'customizePointChange': [{ type: core_1.Output },],
        'dataPrepareSettingsChange': [{ type: core_1.Output },],
        'dataSourceChange': [{ type: core_1.Output },],
        'defaultPaneChange': [{ type: core_1.Output },],
        'elementAttrChange': [{ type: core_1.Output },],
        'equalBarWidthChange': [{ type: core_1.Output },],
        'exportChange': [{ type: core_1.Output },],
        'legendChange': [{ type: core_1.Output },],
        'loadingIndicatorChange': [{ type: core_1.Output },],
        'marginChange': [{ type: core_1.Output },],
        'maxBubbleSizeChange': [{ type: core_1.Output },],
        'minBubbleSizeChange': [{ type: core_1.Output },],
        'negativesAsZeroesChange': [{ type: core_1.Output },],
        'paletteChange': [{ type: core_1.Output },],
        'panesChange': [{ type: core_1.Output },],
        'pathModifiedChange': [{ type: core_1.Output },],
        'pointSelectionModeChange': [{ type: core_1.Output },],
        'redrawOnResizeChange': [{ type: core_1.Output },],
        'resolveLabelOverlappingChange': [{ type: core_1.Output },],
        'rotatedChange': [{ type: core_1.Output },],
        'rtlEnabledChange': [{ type: core_1.Output },],
        'scrollBarChange': [{ type: core_1.Output },],
        'scrollingModeChange': [{ type: core_1.Output },],
        'seriesChange': [{ type: core_1.Output },],
        'seriesSelectionModeChange': [{ type: core_1.Output },],
        'seriesTemplateChange': [{ type: core_1.Output },],
        'sizeChange': [{ type: core_1.Output },],
        'synchronizeMultiAxesChange': [{ type: core_1.Output },],
        'themeChange': [{ type: core_1.Output },],
        'titleChange': [{ type: core_1.Output },],
        'tooltipChange': [{ type: core_1.Output },],
        'useAggregationChange': [{ type: core_1.Output },],
        'valueAxisChange': [{ type: core_1.Output },],
        'zoomingModeChange': [{ type: core_1.Output },],
        'panesChildren': [{ type: core_1.ContentChildren, args: [pane_dxi_2.DxiPaneComponent,] },],
        'seriesChildren': [{ type: core_1.ContentChildren, args: [series_dxi_2.DxiSeriesComponent,] },],
        'valueAxisChildren': [{ type: core_1.ContentChildren, args: [value_axis_dxi_2.DxiValueAxisComponent,] },],
    };
    return DxChartComponent;
}(component_1.DxComponent));
exports.DxChartComponent = DxChartComponent;
var DxChartModule = (function () {
    function DxChartModule() {
    }
    DxChartModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        adaptive_layout_1.DxoAdaptiveLayoutModule,
                        animation_1.DxoAnimationModule,
                        argument_axis_1.DxoArgumentAxisModule,
                        break_dxi_1.DxiBreakModule,
                        break_style_1.DxoBreakStyleModule,
                        constant_line_dxi_1.DxiConstantLineModule,
                        label_1.DxoLabelModule,
                        font_1.DxoFontModule,
                        constant_line_style_1.DxoConstantLineStyleModule,
                        grid_1.DxoGridModule,
                        format_1.DxoFormatModule,
                        overlapping_behavior_1.DxoOverlappingBehaviorModule,
                        minor_grid_1.DxoMinorGridModule,
                        minor_tick_1.DxoMinorTickModule,
                        minor_tick_interval_1.DxoMinorTickIntervalModule,
                        strip_dxi_1.DxiStripModule,
                        strip_style_1.DxoStripStyleModule,
                        tick_1.DxoTickModule,
                        tick_interval_1.DxoTickIntervalModule,
                        title_1.DxoTitleModule,
                        common_axis_settings_1.DxoCommonAxisSettingsModule,
                        common_pane_settings_1.DxoCommonPaneSettingsModule,
                        border_1.DxoBorderModule,
                        common_series_settings_1.DxoCommonSeriesSettingsModule,
                        area_1.DxoAreaModule,
                        hover_style_1.DxoHoverStyleModule,
                        hatching_1.DxoHatchingModule,
                        connector_1.DxoConnectorModule,
                        point_1.DxoPointModule,
                        image_1.DxoImageModule,
                        height_1.DxoHeightModule,
                        url_1.DxoUrlModule,
                        width_1.DxoWidthModule,
                        selection_style_1.DxoSelectionStyleModule,
                        reduction_1.DxoReductionModule,
                        value_error_bar_1.DxoValueErrorBarModule,
                        bar_1.DxoBarModule,
                        bubble_1.DxoBubbleModule,
                        candlestick_1.DxoCandlestickModule,
                        fullstackedarea_1.DxoFullstackedareaModule,
                        fullstackedbar_1.DxoFullstackedbarModule,
                        fullstackedline_1.DxoFullstackedlineModule,
                        fullstackedspline_1.DxoFullstackedsplineModule,
                        fullstackedsplinearea_1.DxoFullstackedsplineareaModule,
                        argument_format_1.DxoArgumentFormatModule,
                        line_1.DxoLineModule,
                        rangearea_1.DxoRangeareaModule,
                        rangebar_1.DxoRangebarModule,
                        scatter_1.DxoScatterModule,
                        spline_1.DxoSplineModule,
                        splinearea_1.DxoSplineareaModule,
                        stackedarea_1.DxoStackedareaModule,
                        stackedbar_1.DxoStackedbarModule,
                        stackedline_1.DxoStackedlineModule,
                        stackedspline_1.DxoStackedsplineModule,
                        stackedsplinearea_1.DxoStackedsplineareaModule,
                        steparea_1.DxoStepareaModule,
                        stepline_1.DxoSteplineModule,
                        stock_1.DxoStockModule,
                        crosshair_1.DxoCrosshairModule,
                        horizontal_line_1.DxoHorizontalLineModule,
                        vertical_line_1.DxoVerticalLineModule,
                        data_prepare_settings_1.DxoDataPrepareSettingsModule,
                        export_1.DxoExportModule,
                        legend_1.DxoLegendModule,
                        margin_1.DxoMarginModule,
                        loading_indicator_1.DxoLoadingIndicatorModule,
                        pane_dxi_1.DxiPaneModule,
                        scroll_bar_1.DxoScrollBarModule,
                        series_dxi_1.DxiSeriesModule,
                        series_template_1.DxoSeriesTemplateModule,
                        size_1.DxoSizeModule,
                        subtitle_1.DxoSubtitleModule,
                        tooltip_1.DxoTooltipModule,
                        shadow_1.DxoShadowModule,
                        value_axis_dxi_1.DxiValueAxisModule,
                        template_1.DxTemplateModule
                    ],
                    declarations: [
                        DxChartComponent
                    ],
                    exports: [
                        DxChartComponent,
                        adaptive_layout_1.DxoAdaptiveLayoutModule,
                        animation_1.DxoAnimationModule,
                        argument_axis_1.DxoArgumentAxisModule,
                        break_dxi_1.DxiBreakModule,
                        break_style_1.DxoBreakStyleModule,
                        constant_line_dxi_1.DxiConstantLineModule,
                        label_1.DxoLabelModule,
                        font_1.DxoFontModule,
                        constant_line_style_1.DxoConstantLineStyleModule,
                        grid_1.DxoGridModule,
                        format_1.DxoFormatModule,
                        overlapping_behavior_1.DxoOverlappingBehaviorModule,
                        minor_grid_1.DxoMinorGridModule,
                        minor_tick_1.DxoMinorTickModule,
                        minor_tick_interval_1.DxoMinorTickIntervalModule,
                        strip_dxi_1.DxiStripModule,
                        strip_style_1.DxoStripStyleModule,
                        tick_1.DxoTickModule,
                        tick_interval_1.DxoTickIntervalModule,
                        title_1.DxoTitleModule,
                        common_axis_settings_1.DxoCommonAxisSettingsModule,
                        common_pane_settings_1.DxoCommonPaneSettingsModule,
                        border_1.DxoBorderModule,
                        common_series_settings_1.DxoCommonSeriesSettingsModule,
                        area_1.DxoAreaModule,
                        hover_style_1.DxoHoverStyleModule,
                        hatching_1.DxoHatchingModule,
                        connector_1.DxoConnectorModule,
                        point_1.DxoPointModule,
                        image_1.DxoImageModule,
                        height_1.DxoHeightModule,
                        url_1.DxoUrlModule,
                        width_1.DxoWidthModule,
                        selection_style_1.DxoSelectionStyleModule,
                        reduction_1.DxoReductionModule,
                        value_error_bar_1.DxoValueErrorBarModule,
                        bar_1.DxoBarModule,
                        bubble_1.DxoBubbleModule,
                        candlestick_1.DxoCandlestickModule,
                        fullstackedarea_1.DxoFullstackedareaModule,
                        fullstackedbar_1.DxoFullstackedbarModule,
                        fullstackedline_1.DxoFullstackedlineModule,
                        fullstackedspline_1.DxoFullstackedsplineModule,
                        fullstackedsplinearea_1.DxoFullstackedsplineareaModule,
                        argument_format_1.DxoArgumentFormatModule,
                        line_1.DxoLineModule,
                        rangearea_1.DxoRangeareaModule,
                        rangebar_1.DxoRangebarModule,
                        scatter_1.DxoScatterModule,
                        spline_1.DxoSplineModule,
                        splinearea_1.DxoSplineareaModule,
                        stackedarea_1.DxoStackedareaModule,
                        stackedbar_1.DxoStackedbarModule,
                        stackedline_1.DxoStackedlineModule,
                        stackedspline_1.DxoStackedsplineModule,
                        stackedsplinearea_1.DxoStackedsplineareaModule,
                        steparea_1.DxoStepareaModule,
                        stepline_1.DxoSteplineModule,
                        stock_1.DxoStockModule,
                        crosshair_1.DxoCrosshairModule,
                        horizontal_line_1.DxoHorizontalLineModule,
                        vertical_line_1.DxoVerticalLineModule,
                        data_prepare_settings_1.DxoDataPrepareSettingsModule,
                        export_1.DxoExportModule,
                        legend_1.DxoLegendModule,
                        margin_1.DxoMarginModule,
                        loading_indicator_1.DxoLoadingIndicatorModule,
                        pane_dxi_1.DxiPaneModule,
                        scroll_bar_1.DxoScrollBarModule,
                        series_dxi_1.DxiSeriesModule,
                        series_template_1.DxoSeriesTemplateModule,
                        size_1.DxoSizeModule,
                        subtitle_1.DxoSubtitleModule,
                        tooltip_1.DxoTooltipModule,
                        shadow_1.DxoShadowModule,
                        value_axis_dxi_1.DxiValueAxisModule,
                        template_1.DxTemplateModule
                    ],
                },] },
    ];
    /** @nocollapse */
    DxChartModule.ctorParameters = function () { return []; };
    return DxChartModule;
}());
exports.DxChartModule = DxChartModule;
//# sourceMappingURL=chart.js.map