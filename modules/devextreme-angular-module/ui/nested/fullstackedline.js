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
/* tslint:disable:use-input-property-decorator */
var core_1 = require("@angular/core");
var nested_option_1 = require("../../core/nested-option");
var chart_common_series_settings_1 = require("./base/chart-common-series-settings");
var DxoFullstackedlineComponent = (function (_super) {
    __extends(DxoFullstackedlineComponent, _super);
    function DxoFullstackedlineComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxoFullstackedlineComponent.prototype, "_optionPath", {
        get: function () {
            return 'fullstackedline';
        },
        enumerable: true,
        configurable: true
    });
    DxoFullstackedlineComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxo-fullstackedline',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost],
                    inputs: [
                        'area',
                        'argumentField',
                        'axis',
                        'bar',
                        'border',
                        'bubble',
                        'candlestick',
                        'closeValueField',
                        'color',
                        'cornerRadius',
                        'dashStyle',
                        'fullstackedarea',
                        'fullstackedbar',
                        'fullstackedline',
                        'fullstackedspline',
                        'fullstackedsplinearea',
                        'highValueField',
                        'hoverMode',
                        'hoverStyle',
                        'ignoreEmptyPoints',
                        'innerColor',
                        'label',
                        'line',
                        'lowValueField',
                        'maxLabelCount',
                        'minBarSize',
                        'opacity',
                        'openValueField',
                        'pane',
                        'point',
                        'rangearea',
                        'rangebar',
                        'rangeValue1Field',
                        'rangeValue2Field',
                        'reduction',
                        'scatter',
                        'selectionMode',
                        'selectionStyle',
                        'showInLegend',
                        'sizeField',
                        'spline',
                        'splinearea',
                        'stack',
                        'stackedarea',
                        'stackedbar',
                        'stackedline',
                        'stackedspline',
                        'stackedsplinearea',
                        'steparea',
                        'stepline',
                        'stock',
                        'tagField',
                        'type',
                        'valueErrorBar',
                        'valueField',
                        'visible',
                        'width'
                    ]
                },] },
    ];
    /** @nocollapse */
    DxoFullstackedlineComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    return DxoFullstackedlineComponent;
}(chart_common_series_settings_1.DxoChartCommonSeriesSettings));
exports.DxoFullstackedlineComponent = DxoFullstackedlineComponent;
var DxoFullstackedlineModule = (function () {
    function DxoFullstackedlineModule() {
    }
    DxoFullstackedlineModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxoFullstackedlineComponent
                    ],
                    exports: [
                        DxoFullstackedlineComponent
                    ],
                },] },
    ];
    /** @nocollapse */
    DxoFullstackedlineModule.ctorParameters = function () { return []; };
    return DxoFullstackedlineModule;
}());
exports.DxoFullstackedlineModule = DxoFullstackedlineModule;
//# sourceMappingURL=fullstackedline.js.map