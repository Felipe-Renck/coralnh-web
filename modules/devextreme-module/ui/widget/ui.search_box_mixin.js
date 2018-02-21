/**
 * DevExtreme (ui/widget/ui.search_box_mixin.js)
 * Version: 17.2.5
 * Build date: Tue Jan 23 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
"use strict";
var $ = require("../../core/renderer"),
    extend = require("../../core/utils/extend").extend,
    messageLocalization = require("../../localization/message"),
    TextBox = require("../text_box"),
    errors = require("../widget/ui.errors");
module.exports = {
    _getDefaultOptions: function() {
        return extend(this.callBase(), {
            searchMode: "",
            searchExpr: null,
            searchValue: "",
            searchEnabled: false,
            searchEditorOptions: {}
        })
    },
    _render: function() {
        this._renderSearch();
        this.callBase()
    },
    _renderSearch: function() {
        var editorOptions, $element = this.$element(),
            searchEnabled = this.option("searchEnabled"),
            searchBoxClassName = this._addWidgetPrefix("search"),
            rootElementClassName = this._addWidgetPrefix("with-search");
        if (!searchEnabled) {
            $element.removeClass(rootElementClassName);
            this._removeSearchBox();
            return
        }
        editorOptions = this._getSearchEditorOptions();
        if (this._searchEditor) {
            this._searchEditor.option(editorOptions)
        } else {
            $element.addClass(rootElementClassName);
            this._$searchEditorElement = $("<div>").addClass(searchBoxClassName).prependTo($element);
            this._searchEditor = this._createComponent(this._$searchEditorElement, TextBox, editorOptions)
        }
    },
    _removeSearchBox: function() {
        this._$searchEditorElement && this._$searchEditorElement.remove();
        delete this._$searchEditorElement;
        delete this._searchEditor
    },
    _getSearchEditorOptions: function() {
        var that = this,
            userEditorOptions = that.option("searchEditorOptions");
        return extend({
            mode: "search",
            placeholder: messageLocalization.format("Search"),
            tabIndex: that.option("tabIndex"),
            value: that.option("searchValue"),
            valueChangeEvent: "input",
            onValueChanged: function(e) {
                var searchTimeout = that.option("searchTimeout");
                window.clearTimeout(that._valueChangeTimeout);
                if (e.event && "input" === e.event.type && searchTimeout) {
                    that._valueChangeTimeout = setTimeout(function() {
                        that.option("searchValue", e.value)
                    }, searchTimeout)
                } else {
                    that.option("searchValue", e.value)
                }
            }
        }, userEditorOptions)
    },
    _getAriaTarget: function() {
        return this.$element()
    },
    _focusTarget: function() {
        if (this.option("searchEnabled")) {
            return this._itemContainer()
        }
        return this.callBase()
    },
    _updateFocusState: function(e, isFocused) {
        if (this.option("searchEnabled")) {
            this._toggleFocusClass(isFocused, this.$element())
        }
        this.callBase(e, isFocused)
    },
    _optionChanged: function(args) {
        switch (args.name) {
            case "searchEnabled":
            case "searchEditorOptions":
                this._invalidate();
                break;
            case "searchExpr":
            case "searchMode":
            case "searchValue":
                if (!this._dataSource) {
                    errors.log("W1009");
                    return
                }
                this._dataSource["searchMode" === args.name ? "searchOperation" : args.name](args.value);
                this._dataSource.load();
                break;
            case "searchTimeout":
                break;
            default:
                this.callBase(args)
        }
    },
    focus: function() {
        if (!this.option("focusedElement") && this.option("searchEnabled")) {
            this._searchEditor && this._searchEditor.focus();
            return
        }
        this.callBase()
    }
};
