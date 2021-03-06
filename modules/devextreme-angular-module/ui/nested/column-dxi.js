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
var data_grid_column_dxi_1 = require("./base/data-grid-column-dxi");
var validation_rule_dxi_1 = require("./validation-rule-dxi");
var DxiColumnComponent = (function (_super) {
    __extends(DxiColumnComponent, _super);
    function DxiColumnComponent(parentOptionHost, optionHost) {
        var _this = _super.call(this) || this;
        parentOptionHost.setNestedOption(_this);
        optionHost.setHost(_this, _this._fullOptionPath.bind(_this));
        return _this;
    }
    Object.defineProperty(DxiColumnComponent.prototype, "_optionPath", {
        get: function () {
            return 'columns';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiColumnComponent.prototype, "columnsChildren", {
        get: function () {
            return this._getOption('columns');
        },
        set: function (value) {
            this.setChildren('columns', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiColumnComponent.prototype, "validationRulesChildren", {
        get: function () {
            return this._getOption('validationRules');
        },
        set: function (value) {
            this.setChildren('validationRules', value);
        },
        enumerable: true,
        configurable: true
    });
    DxiColumnComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dxi-column',
                    template: '',
                    styles: [''],
                    providers: [nested_option_1.NestedOptionHost],
                    inputs: [
                        'alignment',
                        'allowEditing',
                        'allowExporting',
                        'allowFiltering',
                        'allowFixing',
                        'allowGrouping',
                        'allowHeaderFiltering',
                        'allowHiding',
                        'allowReordering',
                        'allowResizing',
                        'allowSearch',
                        'allowSorting',
                        'autoExpandGroup',
                        'calculateCellValue',
                        'calculateDisplayValue',
                        'calculateFilterExpression',
                        'calculateGroupValue',
                        'calculateSortValue',
                        'caption',
                        'cellTemplate',
                        'columns',
                        'cssClass',
                        'customizeText',
                        'dataField',
                        'dataType',
                        'editCellTemplate',
                        'editorOptions',
                        'encodeHtml',
                        'falseText',
                        'filterOperations',
                        'filterType',
                        'filterValue',
                        'filterValues',
                        'fixed',
                        'fixedPosition',
                        'format',
                        'formItem',
                        'groupCellTemplate',
                        'groupIndex',
                        'headerCellTemplate',
                        'headerFilter',
                        'hidingPriority',
                        'isBand',
                        'lookup',
                        'minWidth',
                        'name',
                        'ownerBand',
                        'precision',
                        'selectedFilterOperation',
                        'setCellValue',
                        'showEditorAlways',
                        'showInColumnChooser',
                        'showWhenGrouped',
                        'sortIndex',
                        'sortingMethod',
                        'sortOrder',
                        'trueText',
                        'validationRules',
                        'visible',
                        'visibleIndex',
                        'width'
                    ]
                },] },
    ];
    /** @nocollapse */
    DxiColumnComponent.ctorParameters = function () { return [
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host },] },
        { type: nested_option_1.NestedOptionHost, decorators: [{ type: core_1.Host },] },
    ]; };
    DxiColumnComponent.propDecorators = {
        'columnsChildren': [{ type: core_1.ContentChildren, args: [core_1.forwardRef(function () { return DxiColumnComponent; }),] },],
        'validationRulesChildren': [{ type: core_1.ContentChildren, args: [core_1.forwardRef(function () { return validation_rule_dxi_1.DxiValidationRuleComponent; }),] },],
    };
    return DxiColumnComponent;
}(data_grid_column_dxi_1.DxiDataGridColumn));
exports.DxiColumnComponent = DxiColumnComponent;
var DxiColumnModule = (function () {
    function DxiColumnModule() {
    }
    DxiColumnModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DxiColumnComponent
                    ],
                    exports: [
                        DxiColumnComponent
                    ],
                },] },
    ];
    /** @nocollapse */
    DxiColumnModule.ctorParameters = function () { return []; };
    return DxiColumnModule;
}());
exports.DxiColumnModule = DxiColumnModule;
//# sourceMappingURL=column-dxi.js.map