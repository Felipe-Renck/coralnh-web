/**
 * DevExtreme (ui/list/ui.list.edit.js)
 * Version: 17.2.5
 * Build date: Tue Jan 23 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
"use strict";
var $ = require("../../core/renderer"),
    eventUtils = require("../../events/utils"),
    extend = require("../../core/utils/extend").extend,
    GroupedEditStrategy = require("./ui.list.edit.strategy.grouped"),
    messageLocalization = require("../../localization/message"),
    EditProvider = require("./ui.list.edit.provider"),
    ListBase = require("./ui.list.base");
var LIST_ITEM_SELECTED_CLASS = "dx-list-item-selected",
    LIST_ITEM_RESPONSE_WAIT_CLASS = "dx-list-item-response-wait";
var ListEdit = ListBase.inherit({
    _supportedKeys: function() {
        var that = this,
            parent = this.callBase();
        var deleteFocusedItem = function(e) {
            if (that.option("allowItemDeleting")) {
                e.preventDefault();
                that.deleteItem(that.option("focusedElement"))
            }
        };
        var moveFocusedItemUp = function(e) {
            if (e.shiftKey && that.option("allowItemReordering")) {
                e.preventDefault();
                var focusedItemIndex = that._editStrategy.getNormalizedIndex(that.option("focusedElement")),
                    $prevItem = that._editStrategy.getItemElement(focusedItemIndex - 1);
                that.reorderItem(that.option("focusedElement"), $prevItem);
                that.scrollToItem(that.option("focusedElement"))
            } else {
                parent.upArrow(e)
            }
        };
        var moveFocusedItemDown = function(e) {
            if (e.shiftKey && that.option("allowItemReordering")) {
                e.preventDefault();
                var focusedItemIndex = that._editStrategy.getNormalizedIndex(that.option("focusedElement")),
                    $nextItem = that._editStrategy.getItemElement(focusedItemIndex + 1);
                that.reorderItem(that.option("focusedElement"), $nextItem);
                that.scrollToItem(that.option("focusedElement"))
            } else {
                parent.downArrow(e)
            }
        };
        return extend({}, parent, {
            del: deleteFocusedItem,
            upArrow: moveFocusedItemUp,
            downArrow: moveFocusedItemDown
        })
    },
    _updateSelection: function() {
        this._editProvider.afterItemsRendered();
        this.callBase()
    },
    _refreshItemElements: function() {
        this.callBase();
        var excludedSelectors = this._editProvider.getExcludedItemSelectors();
        if (excludedSelectors.length) {
            this._itemElementsCache = this._itemElementsCache.not(excludedSelectors)
        }
    },
    _getDefaultOptions: function() {
        return extend(this.callBase(), {
            showSelectionControls: false,
            selectionMode: "none",
            selectAllMode: "page",
            onSelectAllValueChanged: null,
            selectAllText: messageLocalization.format("dxList-selectAll"),
            menuItems: [],
            menuMode: "context",
            allowItemDeleting: false,
            itemDeleteMode: "static",
            allowItemReordering: false
        })
    },
    _defaultOptionsRules: function() {
        return this.callBase().concat([{
            device: function(device) {
                return "ios" === device.platform
            },
            options: {
                menuMode: "slide",
                itemDeleteMode: "slideItem"
            }
        }, {
            device: {
                platform: "android"
            },
            options: {
                itemDeleteMode: "swipe"
            }
        }, {
            device: {
                platform: "win"
            },
            options: {
                itemDeleteMode: "context"
            }
        }])
    },
    _init: function() {
        this.callBase();
        this._initEditProvider()
    },
    _initDataSource: function() {
        this.callBase();
        if (!this._isPageSelectAll()) {
            this._dataSource && this._dataSource.requireTotalCount(true)
        }
    },
    _isPageSelectAll: function() {
        return "page" === this.option("selectAllMode")
    },
    _initEditProvider: function() {
        this._editProvider = new EditProvider(this)
    },
    _disposeEditProvider: function() {
        if (this._editProvider) {
            this._editProvider.dispose()
        }
    },
    _refreshEditProvider: function() {
        this._disposeEditProvider();
        this._initEditProvider()
    },
    _initEditStrategy: function() {
        if (this.option("grouped")) {
            this._editStrategy = new GroupedEditStrategy(this)
        } else {
            this.callBase()
        }
    },
    _render: function() {
        this._refreshEditProvider();
        this.callBase()
    },
    _renderItems: function() {
        this.callBase.apply(this, arguments);
        this._editProvider.afterItemsRendered()
    },
    _selectedItemClass: function() {
        return LIST_ITEM_SELECTED_CLASS
    },
    _itemResponseWaitClass: function() {
        return LIST_ITEM_RESPONSE_WAIT_CLASS
    },
    _itemClickHandler: function(e) {
        var $itemElement = $(e.currentTarget);
        if ($itemElement.is(".dx-state-disabled, .dx-state-disabled *")) {
            return
        }
        var handledByEditProvider = this._editProvider.handleClick($itemElement, e);
        if (handledByEditProvider) {
            return
        }
        this.callBase.apply(this, arguments)
    },
    _shouldFireContextMenuEvent: function() {
        return this.callBase.apply(this, arguments) || this._editProvider.contextMenuHandlerExists()
    },
    _itemHoldHandler: function(e) {
        var $itemElement = $(e.currentTarget);
        if ($itemElement.is(".dx-state-disabled, .dx-state-disabled *")) {
            return
        }
        var isTouchEvent = eventUtils.isTouchEvent(e),
            handledByEditProvider = isTouchEvent && this._editProvider.handleContextMenu($itemElement, e);
        if (handledByEditProvider) {
            e.handledByEditProvider = true;
            return
        }
        this.callBase.apply(this, arguments)
    },
    _itemContextMenuHandler: function(e) {
        var $itemElement = $(e.currentTarget);
        if ($itemElement.is(".dx-state-disabled, .dx-state-disabled *")) {
            return
        }
        var handledByEditProvider = !e.handledByEditProvider && this._editProvider.handleContextMenu($itemElement, e);
        if (handledByEditProvider) {
            e.preventDefault();
            return
        }
        this.callBase.apply(this, arguments)
    },
    _postprocessRenderItem: function(args) {
        this.callBase.apply(this, arguments);
        this._editProvider.modifyItemElement(args)
    },
    _clean: function() {
        this._disposeEditProvider();
        this.callBase()
    },
    _optionChanged: function(args) {
        switch (args.name) {
            case "selectAllMode":
                this._initDataSource();
                this._dataSource.pageIndex(0);
                this._dataSource.load();
                break;
            case "grouped":
                this._clearSelectedItems();
                delete this._renderingGroupIndex;
                this._initEditStrategy();
                this.callBase(args);
                break;
            case "showSelectionControls":
            case "menuItems":
            case "menuMode":
            case "allowItemDeleting":
            case "itemDeleteMode":
            case "allowItemReordering":
            case "selectAllText":
                this._invalidate();
                break;
            case "onSelectAllValueChanged":
                break;
            default:
                this.callBase(args)
        }
    },
    selectAll: function() {
        return this._selection.selectAll(this._isPageSelectAll())
    },
    unselectAll: function() {
        return this._selection.deselectAll(this._isPageSelectAll())
    },
    isSelectAll: function() {
        return this._selection.getSelectAllState(this._isPageSelectAll())
    },
    getFlatIndexByItemElement: function(itemElement) {
        return this._itemElements().index(itemElement)
    },
    getItemElementByFlatIndex: function(flatIndex) {
        var $itemElements = this._itemElements();
        if (flatIndex < 0 || flatIndex >= $itemElements.length) {
            return $()
        }
        return $itemElements.eq(flatIndex)
    },
    getItemByIndex: function(index) {
        return this._editStrategy.getItemDataByIndex(index)
    }
});
module.exports = ListEdit;
