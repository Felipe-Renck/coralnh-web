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
var vector_map_1 = require("devextreme/viz/vector_map");
var component_1 = require("../core/component");
var template_host_1 = require("../core/template-host");
var template_1 = require("../core/template");
var nested_option_1 = require("../core/nested-option");
var watcher_helper_1 = require("../core/watcher-helper");
var iterable_differ_helper_1 = require("../core/iterable-differ-helper");
var area_settings_1 = require("./nested/area-settings");
var label_1 = require("./nested/label");
var font_1 = require("./nested/font");
var background_1 = require("./nested/background");
var control_bar_1 = require("./nested/control-bar");
var export_1 = require("./nested/export");
var layer_dxi_1 = require("./nested/layer-dxi");
var legend_dxi_1 = require("./nested/legend-dxi");
var border_1 = require("./nested/border");
var margin_1 = require("./nested/margin");
var source_1 = require("./nested/source");
var loading_indicator_1 = require("./nested/loading-indicator");
var marker_dxi_1 = require("./nested/marker-dxi");
var marker_settings_1 = require("./nested/marker-settings");
var size_1 = require("./nested/size");
var title_1 = require("./nested/title");
var subtitle_1 = require("./nested/subtitle");
var tooltip_1 = require("./nested/tooltip");
var shadow_1 = require("./nested/shadow");
var layer_dxi_2 = require("./nested/layer-dxi");
var legend_dxi_2 = require("./nested/legend-dxi");
var marker_dxi_2 = require("./nested/marker-dxi");
/**
 * The VectorMap is a widget that visualizes geographical locations. This widget represents a geographical map that contains areas and markers. Areas embody continents and countries. Markers flag specific points on the map, for example, towns, cities or capitals.
 */
var DxVectorMapComponent = (function (_super) {
    __extends(DxVectorMapComponent, _super);
    function DxVectorMapComponent(elementRef, ngZone, templateHost, _watcherHelper, _idh, optionHost) {
        var _this = _super.call(this, elementRef, ngZone, templateHost, _watcherHelper) || this;
        _this._watcherHelper = _watcherHelper;
        _this._idh = _idh;
        _this._createEventEmitters([
            { subscribe: 'areaClick', emit: 'onAreaClick' },
            { subscribe: 'areaSelectionChanged', emit: 'onAreaSelectionChanged' },
            { subscribe: 'centerChanged', emit: 'onCenterChanged' },
            { subscribe: 'click', emit: 'onClick' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'drawn', emit: 'onDrawn' },
            { subscribe: 'exported', emit: 'onExported' },
            { subscribe: 'exporting', emit: 'onExporting' },
            { subscribe: 'fileSaving', emit: 'onFileSaving' },
            { subscribe: 'incidentOccurred', emit: 'onIncidentOccurred' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'markerClick', emit: 'onMarkerClick' },
            { subscribe: 'markerSelectionChanged', emit: 'onMarkerSelectionChanged' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'selectionChanged', emit: 'onSelectionChanged' },
            { subscribe: 'tooltipHidden', emit: 'onTooltipHidden' },
            { subscribe: 'tooltipShown', emit: 'onTooltipShown' },
            { subscribe: 'zoomFactorChanged', emit: 'onZoomFactorChanged' },
            { emit: 'areaSettingsChange' },
            { emit: 'backgroundChange' },
            { emit: 'boundsChange' },
            { emit: 'centerChange' },
            { emit: 'controlBarChange' },
            { emit: 'elementAttrChange' },
            { emit: 'exportChange' },
            { emit: 'layersChange' },
            { emit: 'legendsChange' },
            { emit: 'loadingIndicatorChange' },
            { emit: 'mapDataChange' },
            { emit: 'markersChange' },
            { emit: 'markerSettingsChange' },
            { emit: 'maxZoomFactorChange' },
            { emit: 'panningEnabledChange' },
            { emit: 'pathModifiedChange' },
            { emit: 'projectionChange' },
            { emit: 'redrawOnResizeChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'sizeChange' },
            { emit: 'themeChange' },
            { emit: 'titleChange' },
            { emit: 'tooltipChange' },
            { emit: 'touchEnabledChange' },
            { emit: 'wheelEnabledChange' },
            { emit: 'zoomFactorChange' },
            { emit: 'zoomingEnabledChange' }
        ]);
        _this._idh.setHost(_this);
        optionHost.setHost(_this);
        return _this;
    }
    Object.defineProperty(DxVectorMapComponent.prototype, "areaSettings", {
        /**
         * Use the "area" type element of the layers array.
         */
        get: function () {
            return this._getOption('areaSettings');
        },
        set: function (value) {
            this._setOption('areaSettings', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "background", {
        /**
         * Specifies the options for the map background.
         */
        get: function () {
            return this._getOption('background');
        },
        set: function (value) {
            this._setOption('background', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "bounds", {
        /**
         * Specifies the positioning of a map in geographical coordinates.
         */
        get: function () {
            return this._getOption('bounds');
        },
        set: function (value) {
            this._setOption('bounds', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "center", {
        /**
         * Specifies the geographical coordinates of the center for a map.
         */
        get: function () {
            return this._getOption('center');
        },
        set: function (value) {
            this._setOption('center', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "controlBar", {
        /**
         * Specifies the options of the control bar.
         */
        get: function () {
            return this._getOption('controlBar');
        },
        set: function (value) {
            this._setOption('controlBar', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "elementAttr", {
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
    Object.defineProperty(DxVectorMapComponent.prototype, "export", {
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
    Object.defineProperty(DxVectorMapComponent.prototype, "layers", {
        /**
         * Specifies options for VectorMap widget layers.
         */
        get: function () {
            return this._getOption('layers');
        },
        set: function (value) {
            this._setOption('layers', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "legends", {
        /**
         * Configures map legends.
         */
        get: function () {
            return this._getOption('legends');
        },
        set: function (value) {
            this._setOption('legends', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "loadingIndicator", {
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
    Object.defineProperty(DxVectorMapComponent.prototype, "mapData", {
        /**
         * Use the layers.dataSource option instead.
         */
        get: function () {
            return this._getOption('mapData');
        },
        set: function (value) {
            this._setOption('mapData', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "markers", {
        /**
         * Use the layers.dataSource option instead.
         */
        get: function () {
            return this._getOption('markers');
        },
        set: function (value) {
            this._setOption('markers', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "markerSettings", {
        /**
         * Use the "marker" type element of the layers array.
         */
        get: function () {
            return this._getOption('markerSettings');
        },
        set: function (value) {
            this._setOption('markerSettings', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "maxZoomFactor", {
        /**
         * Specifies a map's maximum zoom factor.
         */
        get: function () {
            return this._getOption('maxZoomFactor');
        },
        set: function (value) {
            this._setOption('maxZoomFactor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "panningEnabled", {
        /**
         * Disables the panning capability.
         */
        get: function () {
            return this._getOption('panningEnabled');
        },
        set: function (value) {
            this._setOption('panningEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "pathModified", {
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
    Object.defineProperty(DxVectorMapComponent.prototype, "projection", {
        /**
         * Specifies the map projection.
         */
        get: function () {
            return this._getOption('projection');
        },
        set: function (value) {
            this._setOption('projection', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "redrawOnResize", {
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
    Object.defineProperty(DxVectorMapComponent.prototype, "rtlEnabled", {
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
    Object.defineProperty(DxVectorMapComponent.prototype, "size", {
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
    Object.defineProperty(DxVectorMapComponent.prototype, "theme", {
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
    Object.defineProperty(DxVectorMapComponent.prototype, "title", {
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
    Object.defineProperty(DxVectorMapComponent.prototype, "tooltip", {
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
    Object.defineProperty(DxVectorMapComponent.prototype, "touchEnabled", {
        /**
         * Specifies whether the map should respond to touch gestures.
         */
        get: function () {
            return this._getOption('touchEnabled');
        },
        set: function (value) {
            this._setOption('touchEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "wheelEnabled", {
        /**
         * Specifies whether or not the map should respond when a user rolls the mouse wheel.
         */
        get: function () {
            return this._getOption('wheelEnabled');
        },
        set: function (value) {
            this._setOption('wheelEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "zoomFactor", {
        /**
         * Specifies a number that is used to zoom a map initially.
         */
        get: function () {
            return this._getOption('zoomFactor');
        },
        set: function (value) {
            this._setOption('zoomFactor', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "zoomingEnabled", {
        /**
         * Disables the zooming capability.
         */
        get: function () {
            return this._getOption('zoomingEnabled');
        },
        set: function (value) {
            this._setOption('zoomingEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "layersChildren", {
        get: function () {
            return this._getOption('layers');
        },
        set: function (value) {
            this.setChildren('layers', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "legendsChildren", {
        get: function () {
            return this._getOption('legends');
        },
        set: function (value) {
            this.setChildren('legends', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxVectorMapComponent.prototype, "markersChildren", {
        get: function () {
            return this._getOption('markers');
        },
        set: function (value) {
            this.setChildren('markers', value);
        },
        enumerable: true,
        configurable: true
    });
    DxVectorMapComponent.prototype._createInstance = function (element, options) {
        return new vector_map_1.default(element, options);
    };
    DxVectorMapComponent.prototype.ngOnDestroy = function () {
        this._destroyWidget();
    };
    DxVectorMapComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.setupChanges('bounds', changes);
        this.setupChanges('center', changes);
        this.setupChanges('layers', changes);
        this.setupChanges('legends', changes);
        this.setupChanges('mapData', changes);
        this.setupChanges('markers', changes);
    };
    DxVectorMapComponent.prototype.setupChanges = function (prop, changes) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    };
    DxVectorMapComponent.prototype.ngDoCheck = function () {
        this._idh.doCheck('bounds');
        this._idh.doCheck('center');
        this._idh.doCheck('layers');
        this._idh.doCheck('legends');
        this._idh.doCheck('mapData');
        this._idh.doCheck('markers');
        this._watcherHelper.checkWatchers();
        _super.prototype.ngDoCheck.call(this);
    };
    DxVectorMapComponent.prototype._setOption = function (name, value) {
        var isSetup = this._idh.setupSingle(name, value);
        var isChanged = this._idh.getChanges(name, value) !== null;
        if (isSetup || isChanged) {
            _super.prototype._setOption.call(this, name, value);
        }
    };
    DxVectorMapComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dx-vector-map',
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
    DxVectorMapComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: template_host_1.DxTemplateHost, },
        { type: watcher_helper_1.WatcherHelper, },
        { type: iterable_differ_helper_1.IterableDifferHelper, },
        { type: nested_option_1.NestedOptionHost, },
    ]; };
    DxVectorMapComponent.propDecorators = {
        'areaSettings': [{ type: core_1.Input },],
        'background': [{ type: core_1.Input },],
        'bounds': [{ type: core_1.Input },],
        'center': [{ type: core_1.Input },],
        'controlBar': [{ type: core_1.Input },],
        'elementAttr': [{ type: core_1.Input },],
        'export': [{ type: core_1.Input },],
        'layers': [{ type: core_1.Input },],
        'legends': [{ type: core_1.Input },],
        'loadingIndicator': [{ type: core_1.Input },],
        'mapData': [{ type: core_1.Input },],
        'markers': [{ type: core_1.Input },],
        'markerSettings': [{ type: core_1.Input },],
        'maxZoomFactor': [{ type: core_1.Input },],
        'panningEnabled': [{ type: core_1.Input },],
        'pathModified': [{ type: core_1.Input },],
        'projection': [{ type: core_1.Input },],
        'redrawOnResize': [{ type: core_1.Input },],
        'rtlEnabled': [{ type: core_1.Input },],
        'size': [{ type: core_1.Input },],
        'theme': [{ type: core_1.Input },],
        'title': [{ type: core_1.Input },],
        'tooltip': [{ type: core_1.Input },],
        'touchEnabled': [{ type: core_1.Input },],
        'wheelEnabled': [{ type: core_1.Input },],
        'zoomFactor': [{ type: core_1.Input },],
        'zoomingEnabled': [{ type: core_1.Input },],
        'onAreaClick': [{ type: core_1.Output },],
        'onAreaSelectionChanged': [{ type: core_1.Output },],
        'onCenterChanged': [{ type: core_1.Output },],
        'onClick': [{ type: core_1.Output },],
        'onDisposing': [{ type: core_1.Output },],
        'onDrawn': [{ type: core_1.Output },],
        'onExported': [{ type: core_1.Output },],
        'onExporting': [{ type: core_1.Output },],
        'onFileSaving': [{ type: core_1.Output },],
        'onIncidentOccurred': [{ type: core_1.Output },],
        'onInitialized': [{ type: core_1.Output },],
        'onMarkerClick': [{ type: core_1.Output },],
        'onMarkerSelectionChanged': [{ type: core_1.Output },],
        'onOptionChanged': [{ type: core_1.Output },],
        'onSelectionChanged': [{ type: core_1.Output },],
        'onTooltipHidden': [{ type: core_1.Output },],
        'onTooltipShown': [{ type: core_1.Output },],
        'onZoomFactorChanged': [{ type: core_1.Output },],
        'areaSettingsChange': [{ type: core_1.Output },],
        'backgroundChange': [{ type: core_1.Output },],
        'boundsChange': [{ type: core_1.Output },],
        'centerChange': [{ type: core_1.Output },],
        'controlBarChange': [{ type: core_1.Output },],
        'elementAttrChange': [{ type: core_1.Output },],
        'exportChange': [{ type: core_1.Output },],
        'layersChange': [{ type: core_1.Output },],
        'legendsChange': [{ type: core_1.Output },],
        'loadingIndicatorChange': [{ type: core_1.Output },],
        'mapDataChange': [{ type: core_1.Output },],
        'markersChange': [{ type: core_1.Output },],
        'markerSettingsChange': [{ type: core_1.Output },],
        'maxZoomFactorChange': [{ type: core_1.Output },],
        'panningEnabledChange': [{ type: core_1.Output },],
        'pathModifiedChange': [{ type: core_1.Output },],
        'projectionChange': [{ type: core_1.Output },],
        'redrawOnResizeChange': [{ type: core_1.Output },],
        'rtlEnabledChange': [{ type: core_1.Output },],
        'sizeChange': [{ type: core_1.Output },],
        'themeChange': [{ type: core_1.Output },],
        'titleChange': [{ type: core_1.Output },],
        'tooltipChange': [{ type: core_1.Output },],
        'touchEnabledChange': [{ type: core_1.Output },],
        'wheelEnabledChange': [{ type: core_1.Output },],
        'zoomFactorChange': [{ type: core_1.Output },],
        'zoomingEnabledChange': [{ type: core_1.Output },],
        'layersChildren': [{ type: core_1.ContentChildren, args: [layer_dxi_2.DxiLayerComponent,] },],
        'legendsChildren': [{ type: core_1.ContentChildren, args: [legend_dxi_2.DxiLegendComponent,] },],
        'markersChildren': [{ type: core_1.ContentChildren, args: [marker_dxi_2.DxiMarkerComponent,] },],
    };
    return DxVectorMapComponent;
}(component_1.DxComponent));
exports.DxVectorMapComponent = DxVectorMapComponent;
var DxVectorMapModule = (function () {
    function DxVectorMapModule() {
    }
    DxVectorMapModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        area_settings_1.DxoAreaSettingsModule,
                        label_1.DxoLabelModule,
                        font_1.DxoFontModule,
                        background_1.DxoBackgroundModule,
                        control_bar_1.DxoControlBarModule,
                        export_1.DxoExportModule,
                        layer_dxi_1.DxiLayerModule,
                        legend_dxi_1.DxiLegendModule,
                        border_1.DxoBorderModule,
                        margin_1.DxoMarginModule,
                        source_1.DxoSourceModule,
                        loading_indicator_1.DxoLoadingIndicatorModule,
                        marker_dxi_1.DxiMarkerModule,
                        marker_settings_1.DxoMarkerSettingsModule,
                        size_1.DxoSizeModule,
                        title_1.DxoTitleModule,
                        subtitle_1.DxoSubtitleModule,
                        tooltip_1.DxoTooltipModule,
                        shadow_1.DxoShadowModule,
                        template_1.DxTemplateModule
                    ],
                    declarations: [
                        DxVectorMapComponent
                    ],
                    exports: [
                        DxVectorMapComponent,
                        area_settings_1.DxoAreaSettingsModule,
                        label_1.DxoLabelModule,
                        font_1.DxoFontModule,
                        background_1.DxoBackgroundModule,
                        control_bar_1.DxoControlBarModule,
                        export_1.DxoExportModule,
                        layer_dxi_1.DxiLayerModule,
                        legend_dxi_1.DxiLegendModule,
                        border_1.DxoBorderModule,
                        margin_1.DxoMarginModule,
                        source_1.DxoSourceModule,
                        loading_indicator_1.DxoLoadingIndicatorModule,
                        marker_dxi_1.DxiMarkerModule,
                        marker_settings_1.DxoMarkerSettingsModule,
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
    DxVectorMapModule.ctorParameters = function () { return []; };
    return DxVectorMapModule;
}());
exports.DxVectorMapModule = DxVectorMapModule;
//# sourceMappingURL=vector-map.js.map