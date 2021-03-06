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
var pie_chart_1 = require("devextreme/viz/pie_chart");
var component_1 = require("../core/component");
var template_host_1 = require("../core/template-host");
var template_1 = require("../core/template");
var nested_option_1 = require("../core/nested-option");
var watcher_helper_1 = require("../core/watcher-helper");
var iterable_differ_helper_1 = require("../core/iterable-differ-helper");
var adaptive_layout_1 = require("./nested/adaptive-layout");
var animation_1 = require("./nested/animation");
var common_series_settings_1 = require("./nested/common-series-settings");
var border_1 = require("./nested/border");
var hover_style_1 = require("./nested/hover-style");
var hatching_1 = require("./nested/hatching");
var label_1 = require("./nested/label");
var argument_format_1 = require("./nested/argument-format");
var connector_1 = require("./nested/connector");
var font_1 = require("./nested/font");
var format_1 = require("./nested/format");
var selection_style_1 = require("./nested/selection-style");
var small_values_grouping_1 = require("./nested/small-values-grouping");
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
var series_dxi_2 = require("./nested/series-dxi");
/**
 * The PieChart is a widget that visualizes data as a circle divided into sectors that each represents a portion of the whole.
 */
var DxPieChartComponent = (function (_super) {
    __extends(DxPieChartComponent, _super);
    function DxPieChartComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper) || this;
        _this._watcherHelper = _watcherHelper;
        _this._idh = _idh;
        _this._createEventEmitters([
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
            { subscribe: 'tooltipHidden', emit: 'onTooltipHidden' },
            { subscribe: 'tooltipShown', emit: 'onTooltipShown' },
            { emit: 'adaptiveLayoutChange' },
            { emit: 'animationChange' },
            { emit: 'commonSeriesSettingsChange' },
            { emit: 'customizeLabelChange' },
            { emit: 'customizePointChange' },
            { emit: 'dataSourceChange' },
            { emit: 'diameterChange' },
            { emit: 'elementAttrChange' },
            { emit: 'exportChange' },
            { emit: 'innerRadiusChange' },
            { emit: 'legendChange' },
            { emit: 'loadingIndicatorChange' },
            { emit: 'marginChange' },
            { emit: 'minDiameterChange' },
            { emit: 'paletteChange' },
            { emit: 'pathModifiedChange' },
            { emit: 'pointSelectionModeChange' },
            { emit: 'redrawOnResizeChange' },
            { emit: 'resolveLabelOverlappingChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'segmentsDirectionChange' },
            { emit: 'seriesChange' },
            { emit: 'seriesTemplateChange' },
            { emit: 'sizeChange' },
            { emit: 'sizeGroupChange' },
            { emit: 'startAngleChange' },
            { emit: 'themeChange' },
            { emit: 'titleChange' },
            { emit: 'tooltipChange' },
            { emit: 'typeChange' }
        ]);
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxPieChartComponent.prototype, "adaptiveLayout", {
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
    Object.defineProperty(DxPieChartComponent.prototype, "animation", {
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
    Object.defineProperty(DxPieChartComponent.prototype, "commonSeriesSettings", {
        /**
         * An object defining the configuration options that are common for all series of the PieChart widget.
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
    Object.defineProperty(DxPieChartComponent.prototype, "customizeLabel", {
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
    Object.defineProperty(DxPieChartComponent.prototype, "customizePoint", {
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
    Object.defineProperty(DxPieChartComponent.prototype, "dataSource", {
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
    Object.defineProperty(DxPieChartComponent.prototype, "diameter", {
        /**
         * Specifies the diameter of the pie.
         */
        get: function () {
            return this._getOption('diameter');
        },
        set: function (value) {
            this._setOption('diameter', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxPieChartComponent.prototype, "export", {
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
    Object.defineProperty(DxPieChartComponent.prototype, "innerRadius", {
        /**
         * Specifies the fraction of the inner radius relative to the total radius in the series of the 'doughnut' type. The value should be between 0 and 1.
         */
        get: function () {
            return this._getOption('innerRadius');
        },
        set: function (value) {
            this._setOption('innerRadius', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "legend", {
        /**
         * Specifies PieChart legend options.
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
    Object.defineProperty(DxPieChartComponent.prototype, "loadingIndicator", {
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
    Object.defineProperty(DxPieChartComponent.prototype, "margin", {
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
    Object.defineProperty(DxPieChartComponent.prototype, "minDiameter", {
        /**
         * Specifies the minimum diameter of the pie.
         */
        get: function () {
            return this._getOption('minDiameter');
        },
        set: function (value) {
            this._setOption('minDiameter', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "palette", {
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
    Object.defineProperty(DxPieChartComponent.prototype, "pathModified", {
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
    Object.defineProperty(DxPieChartComponent.prototype, "pointSelectionMode", {
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
    Object.defineProperty(DxPieChartComponent.prototype, "redrawOnResize", {
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
    Object.defineProperty(DxPieChartComponent.prototype, "resolveLabelOverlapping", {
        /**
         * Specifies how a chart must behave when point labels overlap.
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
    Object.defineProperty(DxPieChartComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxPieChartComponent.prototype, "segmentsDirection", {
        /**
         * Specifies the direction that the pie chart segments will occupy.
         */
        get: function () {
            return this._getOption('segmentsDirection');
        },
        set: function (value) {
            this._setOption('segmentsDirection', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "series", {
        /**
         * Specifies options for the series of the PieChart widget.
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
    Object.defineProperty(DxPieChartComponent.prototype, "seriesTemplate", {
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
    Object.defineProperty(DxPieChartComponent.prototype, "size", {
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
    Object.defineProperty(DxPieChartComponent.prototype, "sizeGroup", {
        /**
         * Allows you to display several adjoining pies in the same size.
         */
        get: function () {
            return this._getOption('sizeGroup');
        },
        set: function (value) {
            this._setOption('sizeGroup', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "startAngle", {
        /**
         * Specifies the angle in arc degrees from which the first segment of a pie chart should start.
         */
        get: function () {
            return this._getOption('startAngle');
        },
        set: function (value) {
            this._setOption('startAngle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "theme", {
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
    Object.defineProperty(DxPieChartComponent.prototype, "title", {
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
    Object.defineProperty(DxPieChartComponent.prototype, "tooltip", {
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
    Object.defineProperty(DxPieChartComponent.prototype, "type", {
        /**
         * Specifies the type of the pie chart series.
         */
        get: function () {
            return this._getOption('type');
        },
        set: function (value) {
            this._setOption('type', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxPieChartComponent.prototype, "seriesChildren", {
        get: function () {
            return this._getOption('series');
        },
        set: function (value) {
            this.setChildren('series', value);
        },
        enumerable: true,
        configurable: true
    });
    DxPieChartComponent.prototype._createInstance = function (element, options) {
        return new pie_chart_1.default(element, options);
    };
    DxPieChartComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxPieChartComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('dataSource', changes);
        this.setupChanges('palette', changes);
        this.setupChanges('series', changes);
    };
    DxPieChartComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxPieChartComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('dataSource');
        this._idh.doCheck('palette');
        this._idh.doCheck('series');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
    };
    DxPieChartComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxPieChartComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-pie-chart',
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
    DxPieChartComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: iterable_differ_helper_1.IterableDifferHelper, },
        { type: nested_option_1.NestedOptionHost, },
    ]; };
    DxPieChartComponent.propDecorators = {
        'adaptiveLayout': [{ type: core_1.Input },],
        'animation': [{ type: core_1.Input },],
        'commonSeriesSettings': [{ type: core_1.Input },],
        'customizeLabel': [{ type: core_1.Input },],
        'customizePoint': [{ type: core_1.Input },],
        'dataSource': [{ type: core_1.Input },],
        'diameter': [{ type: core_1.Input },],
        'elementAttr': [{ type: core_1.Input },],
        'export': [{ type: core_1.Input },],
        'innerRadius': [{ type: core_1.Input },],
        'legend': [{ type: core_1.Input },],
        'loadingIndicator': [{ type: core_1.Input },],
        'margin': [{ type: core_1.Input },],
        'minDiameter': [{ type: core_1.Input },],
        'palette': [{ type: core_1.Input },],
        'pathModified': [{ type: core_1.Input },],
        'pointSelectionMode': [{ type: core_1.Input },],
        'redrawOnResize': [{ type: core_1.Input },],
        'resolveLabelOverlapping': [{ type: core_1.Input },],
        'rtlEnabled': [{ type: core_1.Input },],
        'segmentsDirection': [{ type: core_1.Input },],
        'series': [{ type: core_1.Input },],
        'seriesTemplate': [{ type: core_1.Input },],
        'size': [{ type: core_1.Input },],
        'sizeGroup': [{ type: core_1.Input },],
        'startAngle': [{ type: core_1.Input },],
        'theme': [{ type: core_1.Input },],
        'title': [{ type: core_1.Input },],
        'tooltip': [{ type: core_1.Input },],
        'type': [{ type: core_1.Input },],
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
        'onTooltipHidden': [{ type: core_1.Output },],
        'onTooltipShown': [{ type: core_1.Output },],
        'adaptiveLayoutChange': [{ type: core_1.Output },],
        'animationChange': [{ type: core_1.Output },],
        'commonSeriesSettingsChange': [{ type: core_1.Output },],
        'customizeLabelChange': [{ type: core_1.Output },],
        'customizePointChange': [{ type: core_1.Output },],
        'dataSourceChange': [{ type: core_1.Output },],
        'diameterChange': [{ type: core_1.Output },],
        'elementAttrChange': [{ type: core_1.Output },],
        'exportChange': [{ type: core_1.Output },],
        'innerRadiusChange': [{ type: core_1.Output },],
        'legendChange': [{ type: core_1.Output },],
        'loadingIndicatorChange': [{ type: core_1.Output },],
        'marginChange': [{ type: core_1.Output },],
        'minDiameterChange': [{ type: core_1.Output },],
        'paletteChange': [{ type: core_1.Output },],
        'pathModifiedChange': [{ type: core_1.Output },],
        'pointSelectionModeChange': [{ type: core_1.Output },],
        'redrawOnResizeChange': [{ type: core_1.Output },],
        'resolveLabelOverlappingChange': [{ type: core_1.Output },],
        'rtlEnabledChange': [{ type: core_1.Output },],
        'segmentsDirectionChange': [{ type: core_1.Output },],
        'seriesChange': [{ type: core_1.Output },],
        'seriesTemplateChange': [{ type: core_1.Output },],
        'sizeChange': [{ type: core_1.Output },],
        'sizeGroupChange': [{ type: core_1.Output },],
        'startAngleChange': [{ type: core_1.Output },],
        'themeChange': [{ type: core_1.Output },],
        'titleChange': [{ type: core_1.Output },],
        'tooltipChange': [{ type: core_1.Output },],
        'typeChange': [{ type: core_1.Output },],
        'seriesChildren': [{ type: core_1.ContentChildren, args: [series_dxi_2.DxiSeriesComponent,] },],
    };
    return DxPieChartComponent;
}(component_1.DxComponent));
exports.DxPieChartComponent = DxPieChartComponent;
var DxPieChartModule = (function () {
    function DxPieChartModule() {
    }
    DxPieChartModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        adaptive_layout_1.DxoAdaptiveLayoutModule,
                        animation_1.DxoAnimationModule,
                        common_series_settings_1.DxoCommonSeriesSettingsModule,
                        border_1.DxoBorderModule,
                        hover_style_1.DxoHoverStyleModule,
                        hatching_1.DxoHatchingModule,
                        label_1.DxoLabelModule,
                        argument_format_1.DxoArgumentFormatModule,
                        connector_1.DxoConnectorModule,
                        font_1.DxoFontModule,
                        format_1.DxoFormatModule,
                        selection_style_1.DxoSelectionStyleModule,
                        small_values_grouping_1.DxoSmallValuesGroupingModule,
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
                        template_1.DxTemplateModule
                    ],
                    declarations: [
                        DxPieChartComponent
                    ],
                    exports: [
                        DxPieChartComponent,
                        adaptive_layout_1.DxoAdaptiveLayoutModule,
                        animation_1.DxoAnimationModule,
                        common_series_settings_1.DxoCommonSeriesSettingsModule,
                        border_1.DxoBorderModule,
                        hover_style_1.DxoHoverStyleModule,
                        hatching_1.DxoHatchingModule,
                        label_1.DxoLabelModule,
                        argument_format_1.DxoArgumentFormatModule,
                        connector_1.DxoConnectorModule,
                        font_1.DxoFontModule,
                        format_1.DxoFormatModule,
                        selection_style_1.DxoSelectionStyleModule,
                        small_values_grouping_1.DxoSmallValuesGroupingModule,
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
                        template_1.DxTemplateModule
                    ],
                },] },
    ];
    /** @nocollapse */
    DxPieChartModule.ctorParameters = function () { return []; };
    return DxPieChartModule;
}());
exports.DxPieChartModule = DxPieChartModule;
//# sourceMappingURL=pie-chart.js.map