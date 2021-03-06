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
var nested_option_1 = require("../../../core/nested-option");
var DxiContextMenuItem = (function (_super) {
    __extends(DxiContextMenuItem, _super);
    function DxiContextMenuItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DxiContextMenuItem.prototype, "disabled", {
        get: function () {
            return this._getOption('disabled');
        },
        set: function (value) {
            this._setOption('disabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiContextMenuItem.prototype, "html", {
        get: function () {
            return this._getOption('html');
        },
        set: function (value) {
            this._setOption('html', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiContextMenuItem.prototype, "icon", {
        get: function () {
            return this._getOption('icon');
        },
        set: function (value) {
            this._setOption('icon', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiContextMenuItem.prototype, "iconSrc", {
        get: function () {
            return this._getOption('iconSrc');
        },
        set: function (value) {
            this._setOption('iconSrc', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiContextMenuItem.prototype, "template", {
        get: function () {
            return this._getOption('template');
        },
        set: function (value) {
            this._setOption('template', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiContextMenuItem.prototype, "text", {
        get: function () {
            return this._getOption('text');
        },
        set: function (value) {
            this._setOption('text', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiContextMenuItem.prototype, "title", {
        get: function () {
            return this._getOption('title');
        },
        set: function (value) {
            this._setOption('title', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiContextMenuItem.prototype, "visible", {
        get: function () {
            return this._getOption('visible');
        },
        set: function (value) {
            this._setOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiContextMenuItem.prototype, "onClick", {
        get: function () {
            return this._getOption('onClick');
        },
        set: function (value) {
            this._setOption('onClick', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiContextMenuItem.prototype, "type", {
        get: function () {
            return this._getOption('type');
        },
        set: function (value) {
            this._setOption('type', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiContextMenuItem.prototype, "baseSize", {
        get: function () {
            return this._getOption('baseSize');
        },
        set: function (value) {
            this._setOption('baseSize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiContextMenuItem.prototype, "box", {
        get: function () {
            return this._getOption('box');
        },
        set: function (value) {
            this._setOption('box', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiContextMenuItem.prototype, "ratio", {
        get: function () {
            return this._getOption('ratio');
        },
        set: function (value) {
            this._setOption('ratio', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiContextMenuItem.prototype, "shrink", {
        get: function () {
            return this._getOption('shrink');
        },
        set: function (value) {
            this._setOption('shrink', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiContextMenuItem.prototype, "beginGroup", {
        get: function () {
            return this._getOption('beginGroup');
        },
        set: function (value) {
            this._setOption('beginGroup', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiContextMenuItem.prototype, "closeMenuOnClick", {
        get: function () {
            return this._getOption('closeMenuOnClick');
        },
        set: function (value) {
            this._setOption('closeMenuOnClick', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiContextMenuItem.prototype, "items", {
        get: function () {
            return this._getOption('items');
        },
        set: function (value) {
            this._setOption('items', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiContextMenuItem.prototype, "selectable", {
        get: function () {
            return this._getOption('selectable');
        },
        set: function (value) {
            this._setOption('selectable', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiContextMenuItem.prototype, "selected", {
        get: function () {
            return this._getOption('selected');
        },
        set: function (value) {
            this._setOption('selected', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiContextMenuItem.prototype, "colSpan", {
        get: function () {
            return this._getOption('colSpan');
        },
        set: function (value) {
            this._setOption('colSpan', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiContextMenuItem.prototype, "cssClass", {
        get: function () {
            return this._getOption('cssClass');
        },
        set: function (value) {
            this._setOption('cssClass', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiContextMenuItem.prototype, "dataField", {
        get: function () {
            return this._getOption('dataField');
        },
        set: function (value) {
            this._setOption('dataField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiContextMenuItem.prototype, "editorOptions", {
        get: function () {
            return this._getOption('editorOptions');
        },
        set: function (value) {
            this._setOption('editorOptions', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiContextMenuItem.prototype, "editorType", {
        get: function () {
            return this._getOption('editorType');
        },
        set: function (value) {
            this._setOption('editorType', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiContextMenuItem.prototype, "helpText", {
        get: function () {
            return this._getOption('helpText');
        },
        set: function (value) {
            this._setOption('helpText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiContextMenuItem.prototype, "isRequired", {
        get: function () {
            return this._getOption('isRequired');
        },
        set: function (value) {
            this._setOption('isRequired', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiContextMenuItem.prototype, "itemType", {
        get: function () {
            return this._getOption('itemType');
        },
        set: function (value) {
            this._setOption('itemType', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiContextMenuItem.prototype, "label", {
        get: function () {
            return this._getOption('label');
        },
        set: function (value) {
            this._setOption('label', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiContextMenuItem.prototype, "name", {
        get: function () {
            return this._getOption('name');
        },
        set: function (value) {
            this._setOption('name', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiContextMenuItem.prototype, "validationRules", {
        get: function () {
            return this._getOption('validationRules');
        },
        set: function (value) {
            this._setOption('validationRules', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiContextMenuItem.prototype, "visibleIndex", {
        get: function () {
            return this._getOption('visibleIndex');
        },
        set: function (value) {
            this._setOption('visibleIndex', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiContextMenuItem.prototype, "alignItemLabels", {
        get: function () {
            return this._getOption('alignItemLabels');
        },
        set: function (value) {
            this._setOption('alignItemLabels', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiContextMenuItem.prototype, "caption", {
        get: function () {
            return this._getOption('caption');
        },
        set: function (value) {
            this._setOption('caption', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiContextMenuItem.prototype, "colCount", {
        get: function () {
            return this._getOption('colCount');
        },
        set: function (value) {
            this._setOption('colCount', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiContextMenuItem.prototype, "colCountByScreen", {
        get: function () {
            return this._getOption('colCountByScreen');
        },
        set: function (value) {
            this._setOption('colCountByScreen', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiContextMenuItem.prototype, "tabPanelOptions", {
        get: function () {
            return this._getOption('tabPanelOptions');
        },
        set: function (value) {
            this._setOption('tabPanelOptions', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiContextMenuItem.prototype, "tabs", {
        get: function () {
            return this._getOption('tabs');
        },
        set: function (value) {
            this._setOption('tabs', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiContextMenuItem.prototype, "badge", {
        get: function () {
            return this._getOption('badge');
        },
        set: function (value) {
            this._setOption('badge', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiContextMenuItem.prototype, "tabTemplate", {
        get: function () {
            return this._getOption('tabTemplate');
        },
        set: function (value) {
            this._setOption('tabTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiContextMenuItem.prototype, "imageAlt", {
        get: function () {
            return this._getOption('imageAlt');
        },
        set: function (value) {
            this._setOption('imageAlt', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiContextMenuItem.prototype, "imageSrc", {
        get: function () {
            return this._getOption('imageSrc');
        },
        set: function (value) {
            this._setOption('imageSrc', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiContextMenuItem.prototype, "key", {
        get: function () {
            return this._getOption('key');
        },
        set: function (value) {
            this._setOption('key', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiContextMenuItem.prototype, "showChevron", {
        get: function () {
            return this._getOption('showChevron');
        },
        set: function (value) {
            this._setOption('showChevron', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiContextMenuItem.prototype, "titleTemplate", {
        get: function () {
            return this._getOption('titleTemplate');
        },
        set: function (value) {
            this._setOption('titleTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiContextMenuItem.prototype, "location", {
        get: function () {
            return this._getOption('location');
        },
        set: function (value) {
            this._setOption('location', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiContextMenuItem.prototype, "menuTemplate", {
        get: function () {
            return this._getOption('menuTemplate');
        },
        set: function (value) {
            this._setOption('menuTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiContextMenuItem.prototype, "heightRatio", {
        get: function () {
            return this._getOption('heightRatio');
        },
        set: function (value) {
            this._setOption('heightRatio', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiContextMenuItem.prototype, "widthRatio", {
        get: function () {
            return this._getOption('widthRatio');
        },
        set: function (value) {
            this._setOption('widthRatio', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiContextMenuItem.prototype, "locateInMenu", {
        get: function () {
            return this._getOption('locateInMenu');
        },
        set: function (value) {
            this._setOption('locateInMenu', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiContextMenuItem.prototype, "menuItemTemplate", {
        get: function () {
            return this._getOption('menuItemTemplate');
        },
        set: function (value) {
            this._setOption('menuItemTemplate', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiContextMenuItem.prototype, "options", {
        get: function () {
            return this._getOption('options');
        },
        set: function (value) {
            this._setOption('options', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiContextMenuItem.prototype, "showText", {
        get: function () {
            return this._getOption('showText');
        },
        set: function (value) {
            this._setOption('showText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiContextMenuItem.prototype, "widget", {
        get: function () {
            return this._getOption('widget');
        },
        set: function (value) {
            this._setOption('widget', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiContextMenuItem.prototype, "expanded", {
        get: function () {
            return this._getOption('expanded');
        },
        set: function (value) {
            this._setOption('expanded', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiContextMenuItem.prototype, "hasItems", {
        get: function () {
            return this._getOption('hasItems');
        },
        set: function (value) {
            this._setOption('hasItems', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DxiContextMenuItem.prototype, "parentId", {
        get: function () {
            return this._getOption('parentId');
        },
        set: function (value) {
            this._setOption('parentId', value);
        },
        enumerable: true,
        configurable: true
    });
    return DxiContextMenuItem;
}(nested_option_1.CollectionNestedOption));
exports.DxiContextMenuItem = DxiContextMenuItem;
//# sourceMappingURL=context-menu-item-dxi.js.map