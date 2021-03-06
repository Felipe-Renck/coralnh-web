/**
 * DevExtreme (ui/filter_builder/filter_builder.js)
 * Version: 17.2.5
 * Build date: Tue Jan 23 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
"use strict";
var $ = require("../../core/renderer"),
    Class = require("../../core/class"),
    eventsEngine = require("../../events/core/events_engine"),
    Widget = require("../widget/ui.widget"),
    registerComponent = require("../../core/component_registrator"),
    extend = require("../../core/utils/extend").extend,
    messageLocalization = require("../../localization/message"),
    utils = require("./utils"),
    TreeView = require("../tree_view"),
    Popup = require("../popup"),
    EditorFactoryMixin = require("../shared/ui.editor_factory_mixin");
var FILTER_BUILDER_CLASS = "dx-filterbuilder",
    FILTER_BUILDER_GROUP_CLASS = "dx-filterbuilder-group",
    FILTER_BUILDER_GROUP_ITEM_CLASS = "dx-filterbuilder-group-item",
    FILTER_BUILDER_GROUP_CONTENT_CLASS = "dx-filterbuilder-group-content",
    FILTER_BUILDER_GROUP_OPERATION_CLASS = "dx-filterbuilder-group-operation",
    FILTER_BUILDER_ACTION_CLASS = "dx-filterbuilder-action",
    FILTER_BUILDER_IMAGE_CLASS = "dx-filterbuilder-action-icon",
    FILTER_BUILDER_IMAGE_ADD_CLASS = "dx-icon-plus",
    FILTER_BUILDER_IMAGE_REMOVE_CLASS = "dx-icon-remove",
    FILTER_BUILDER_ITEM_TEXT_CLASS = "dx-filterbuilder-text",
    FILTER_BUILDER_ITEM_FIELD_CLASS = "dx-filterbuilder-item-field",
    FILTER_BUILDER_ITEM_OPERATION_CLASS = "dx-filterbuilder-item-operation",
    FILTER_BUILDER_ITEM_VALUE_CLASS = "dx-filterbuilder-item-value",
    FILTER_BUILDER_ITEM_VALUE_TEXT_CLASS = "dx-filterbuilder-item-value-text",
    FILTER_BUILDER_OVERLAY_CLASS = "dx-filterbuilder-overlay",
    FILTER_BUILDER_FILTER_OPERATIONS_CLASS = "dx-filterbuilder-operations",
    FILTER_BUILDER_GROUP_OPERATIONS_CLASS = "dx-filterbuilder-group-operations",
    FILTER_BUILDER_FIELDS_CLASS = "dx-filterbuilder-fields",
    FILTER_BUILDER_ADD_CONDITION_CLASS = "dx-filterbuilder-add-condition",
    ACTIVE_CLASS = "dx-state-active",
    TAB_KEY = 9,
    ENTER_KEY = 13,
    ESCAPE_KEY = 27;
var ACTIONS = [{
        name: "onEditorPreparing",
        config: {
            excludeValidators: ["designMode", "disabled", "readOnly"],
            category: "rendering"
        }
    }, {
        name: "onEditorPrepared",
        config: {
            excludeValidators: ["designMode", "disabled", "readOnly"],
            category: "rendering"
        }
    }, {
        name: "onValueChanged",
        config: {
            excludeValidators: ["disabled", "readOnly"]
        }
    }],
    OPERATORS = {
        and: "and",
        or: "or",
        notAnd: "!and",
        notOr: "!or"
    };
var EditorFactory = Class.inherit(EditorFactoryMixin);
var FilterBuilder = Widget.inherit({
    _getDefaultOptions: function() {
        return extend(this.callBase(), {
            onEditorPreparing: null,
            onEditorPrepared: null,
            onValueChanged: null,
            fields: [],
            defaultGroupOperation: "and",
            value: null,
            allowHierarchicalFields: false,
            groupOperationDescriptions: {
                and: messageLocalization.format("dxFilterBuilder-and"),
                or: messageLocalization.format("dxFilterBuilder-or"),
                notAnd: messageLocalization.format("dxFilterBuilder-notAnd"),
                notOr: messageLocalization.format("dxFilterBuilder-notOr")
            },
            filterOperationDescriptions: {
                equal: messageLocalization.format("dxFilterBuilder-filterOperationEquals"),
                notEqual: messageLocalization.format("dxFilterBuilder-filterOperationNotEquals"),
                lessThan: messageLocalization.format("dxFilterBuilder-filterOperationLess"),
                lessThanOrEqual: messageLocalization.format("dxFilterBuilder-filterOperationLessOrEquals"),
                greaterThan: messageLocalization.format("dxFilterBuilder-filterOperationGreater"),
                greaterThanOrEqual: messageLocalization.format("dxFilterBuilder-filterOperationGreaterOrEquals"),
                startsWith: messageLocalization.format("dxFilterBuilder-filterOperationStartsWith"),
                contains: messageLocalization.format("dxFilterBuilder-filterOperationContains"),
                notContains: messageLocalization.format("dxFilterBuilder-filterOperationNotContains"),
                endsWith: messageLocalization.format("dxFilterBuilder-filterOperationEndsWith"),
                isBlank: messageLocalization.format("dxFilterBuilder-filterOperationIsBlank"),
                isNotBlank: messageLocalization.format("dxFilterBuilder-filterOperationIsNotBlank")
            }
        })
    },
    _optionChanged: function(args) {
        switch (args.name) {
            case "onEditorPreparing":
            case "onEditorPrepared":
            case "onValueChanged":
                this._initActions();
                break;
            case "fields":
            case "defaultGroupOperation":
            case "allowHierarchicalFields":
            case "groupOperationDescriptions":
            case "filterOperationDescriptions":
                this._invalidate();
                break;
            case "value":
                if (!this._disableInvalidateForValue) {
                    this._invalidate()
                }
                this.executeAction("onValueChanged", {
                    value: args.value,
                    previousValue: args.previousValue
                });
                break;
            default:
                this.callBase(args)
        }
    },
    _updateFilter: function() {
        this._disableInvalidateForValue = true;
        var value = extend(true, [], this._model);
        this.option("value", utils.getNormalizedFilter(value, this.option("fields")));
        this._disableInvalidateForValue = false
    },
    _init: function() {
        this._model = null;
        this._initEditorFactory();
        this._initActions();
        this.callBase()
    },
    _initEditorFactory: function() {
        this._editorFactory = new EditorFactory
    },
    _initActions: function() {
        var that = this;
        that._actions = {};
        ACTIONS.forEach(function(action) {
            that._actions[action.name] = that._createActionByOption(action.name, action.config)
        })
    },
    executeAction: function(actionName, options) {
        var action = this._actions[actionName];
        return action && action(options)
    },
    _render: function() {
        this.$element().addClass(FILTER_BUILDER_CLASS);
        this.callBase()
    },
    _renderContentImpl: function() {
        this._model = utils.convertToInnerStructure(this.option("value"));
        this._createGroupElementByCriteria(this._model).appendTo(this.$element())
    },
    _createConditionElement: function(condition, parent) {
        return $("<div>").addClass(FILTER_BUILDER_GROUP_CLASS).append(this._createConditionItem(condition, parent))
    },
    _createGroupElementByCriteria: function(criteria, parent) {
        var $group = this._createGroupElement(criteria, parent),
            $groupContent = $group.find("." + FILTER_BUILDER_GROUP_CONTENT_CLASS),
            groupCriteria = utils.getGroupCriteria(criteria);
        for (var i = 0; i < groupCriteria.length; i++) {
            var innerCriteria = groupCriteria[i];
            if (utils.isGroup(innerCriteria)) {
                this._createGroupElementByCriteria(innerCriteria, groupCriteria).appendTo($groupContent)
            } else {
                if (utils.isCondition(innerCriteria)) {
                    this._createConditionElement(innerCriteria, groupCriteria).appendTo($groupContent)
                }
            }
        }
        return $group
    },
    _createGroupElement: function(criteria, parent) {
        var that = this,
            $groupItem = $("<div>").addClass(FILTER_BUILDER_GROUP_ITEM_CLASS),
            $groupContent = $("<div>").addClass(FILTER_BUILDER_GROUP_CONTENT_CLASS),
            $group = $("<div>").addClass(FILTER_BUILDER_GROUP_CLASS).append($groupItem).append($groupContent);
        if (null != parent) {
            this._createRemoveButton(function() {
                utils.removeItem(parent, criteria);
                $group.remove();
                if (!utils.isEmptyGroup(criteria)) {
                    that._updateFilter()
                }
            }).appendTo($groupItem)
        }
        this._createGroupOperationButton(criteria).appendTo($groupItem);
        this._createAddButton(function() {
            var newGroup = utils.createEmptyGroup(that.option("defaultGroupOperation"));
            utils.addItem(newGroup, criteria);
            that._createGroupElement(newGroup, criteria).appendTo($groupContent)
        }, function() {
            var field = that.option("fields")[0],
                newCondition = utils.createCondition(field);
            utils.addItem(newCondition, criteria);
            that._createConditionElement(newCondition, criteria).appendTo($groupContent);
            if (utils.isValidCondition(newCondition, field)) {
                that._updateFilter()
            }
        }).appendTo($groupItem);
        return $group
    },
    _createGroupOperationButton: function(criteria) {
        var that = this,
            groupOperations = this._getGroupOperations(),
            groupMenuItem = utils.getGroupMenuItem(criteria, groupOperations),
            $operationButton = this._createButtonWithMenu({
                caption: groupMenuItem.text,
                menu: {
                    items: groupOperations,
                    displayExpr: "text",
                    keyExpr: "value",
                    onItemClick: function(e) {
                        if (groupMenuItem !== e.itemData) {
                            utils.setGroupValue(criteria, e.itemData.value);
                            $operationButton.html(e.itemData.text);
                            groupMenuItem = e.itemData;
                            that._updateFilter()
                        }
                    },
                    onContentReady: function(e) {
                        e.component.selectItem(groupMenuItem)
                    },
                    cssClass: FILTER_BUILDER_GROUP_OPERATIONS_CLASS
                }
            }).addClass(FILTER_BUILDER_ITEM_TEXT_CLASS).addClass(FILTER_BUILDER_GROUP_OPERATION_CLASS).attr("tabindex", 0);
        return $operationButton
    },
    _createButtonWithMenu: function(options) {
        var that = this,
            removeMenu = function() {
                that.$element().find("." + ACTIVE_CLASS).removeClass(ACTIVE_CLASS);
                that.$element().find(".dx-overlay .dx-treeview").remove();
                that.$element().find(".dx-overlay").remove()
            },
            rtlEnabled = this.option("rtlEnabled"),
            menuOnItemClickWrapper = function(handler) {
                return function(e) {
                    handler(e);
                    if ("dxclick" === e.event.type) {
                        removeMenu()
                    }
                }
            },
            position = rtlEnabled ? "right" : "left",
            $button = $("<div>").text(options.caption);
        extend(options.menu, {
            focusStateEnabled: true,
            selectionMode: "single",
            onItemClick: menuOnItemClickWrapper(options.menu.onItemClick),
            onHiding: function(e) {
                $button.removeClass(ACTIVE_CLASS)
            },
            position: {
                my: position + " top",
                at: position + " bottom",
                offset: "0 1"
            },
            animation: null,
            onHidden: function() {
                removeMenu()
            },
            cssClass: FILTER_BUILDER_OVERLAY_CLASS + " " + options.menu.cssClass,
            target: $button,
            rtlEnabled: rtlEnabled
        });
        options.popup = {
            onShown: function(info) {
                var treeViewElement = $(info.component.content()).find(".dx-treeview"),
                    treeView = treeViewElement.dxTreeView("instance");
                eventsEngine.on(treeViewElement, "keyup keydown", function(e) {
                    if ("keydown" === e.type && e.keyCode === TAB_KEY || "keyup" === e.type && (e.keyCode === ESCAPE_KEY || e.keyCode === ENTER_KEY)) {
                        info.component.hide();
                        eventsEngine.trigger(options.menu.target, "focus")
                    }
                });
                treeView.focus();
                treeView.option("focusedElement", null)
            }
        };
        this._subscribeOnClickAndEnterKey($button, function() {
            removeMenu();
            that._createPopupWithTreeView(options, that.$element());
            $button.addClass(ACTIVE_CLASS)
        });
        return $button
    },
    _hasValueButton: function(condition) {
        return null !== condition[2]
    },
    _createOperationButtonWithMenu: function(condition, field) {
        var that = this,
            availableOperations = utils.getAvailableOperations(field, this.option("filterOperationDescriptions")),
            currentOperation = utils.getOperationFromAvailable(utils.getOperationValue(condition), availableOperations),
            $operationButton = this._createButtonWithMenu({
                caption: currentOperation.text,
                menu: {
                    items: availableOperations,
                    displayExpr: "text",
                    onContentReady: function(e) {
                        e.component.selectItem(currentOperation)
                    },
                    onItemClick: function(e) {
                        if (currentOperation !== e.itemData) {
                            currentOperation = e.itemData;
                            utils.updateConditionByOperation(condition, currentOperation.value);
                            if (that._hasValueButton(condition)) {
                                if (0 === $operationButton.siblings().filter("." + FILTER_BUILDER_ITEM_VALUE_CLASS).length) {
                                    that._createValueButton(condition, field).appendTo($operationButton.parent())
                                }
                            } else {
                                $operationButton.siblings().filter("." + FILTER_BUILDER_ITEM_VALUE_CLASS).remove()
                            }
                            $operationButton.html(currentOperation.text);
                            that._updateFilter()
                        }
                    },
                    cssClass: FILTER_BUILDER_FILTER_OPERATIONS_CLASS
                }
            }).addClass(FILTER_BUILDER_ITEM_TEXT_CLASS).addClass(FILTER_BUILDER_ITEM_OPERATION_CLASS).attr("tabindex", 0);
        return $operationButton
    },
    _createOperationAndValueButtons: function(condition, field, $item) {
        this._createOperationButtonWithMenu(condition, field).appendTo($item);
        if (this._hasValueButton(condition)) {
            this._createValueButton(condition, field).appendTo($item)
        }
    },
    _createFieldButtonWithMenu: function(fields, condition, field) {
        var that = this,
            allowHierarchicalFields = this.option("allowHierarchicalFields"),
            items = utils.getItems(fields, allowHierarchicalFields),
            item = utils.getField(field.dataField, items),
            getFullCaption = function(item, items) {
                return allowHierarchicalFields ? utils.getCaptionWithParents(item, items) : item.caption
            };
        var $fieldButton = this._createButtonWithMenu({
            caption: getFullCaption(item, items),
            menu: {
                items: items,
                dataStructure: "plain",
                keyExpr: "dataField",
                displayExpr: "caption",
                onItemClick: function(e) {
                    if (item !== e.itemData) {
                        item = e.itemData;
                        condition[0] = item.dataField;
                        condition[2] = "object" === item.dataType ? null : "";
                        utils.updateConditionByOperation(condition, utils.getDefaultOperation(item));
                        $fieldButton.siblings().filter("." + FILTER_BUILDER_ITEM_TEXT_CLASS).remove();
                        that._createOperationAndValueButtons(condition, item, $fieldButton.parent());
                        var caption = getFullCaption(item, e.component.option("items"));
                        $fieldButton.html(caption);
                        that._updateFilter()
                    }
                },
                onContentReady: function(e) {
                    e.component.selectItem(item)
                },
                cssClass: FILTER_BUILDER_FIELDS_CLASS
            }
        }).addClass(FILTER_BUILDER_ITEM_TEXT_CLASS).addClass(FILTER_BUILDER_ITEM_FIELD_CLASS).attr("tabindex", 0);
        return $fieldButton
    },
    _createConditionItem: function(condition, parent) {
        var that = this,
            $item = $("<div>").addClass(FILTER_BUILDER_GROUP_ITEM_CLASS),
            fields = utils.getNormalizedFields(this.option("fields")),
            field = utils.getField(condition[0], fields);
        this._createRemoveButton(function() {
            utils.removeItem(parent, condition);
            $item.remove();
            if (utils.isValidCondition(condition, field)) {
                that._updateFilter()
            }
        }).appendTo($item);
        this._createFieldButtonWithMenu(fields, condition, field).appendTo($item);
        this._createOperationAndValueButtons(condition, field, $item);
        return $item
    },
    _getGroupOperations: function() {
        var operatorDescription, result = [],
            groupOperationDescriptions = this.option("groupOperationDescriptions");
        for (operatorDescription in groupOperationDescriptions) {
            result.push({
                text: groupOperationDescriptions[operatorDescription],
                value: OPERATORS[operatorDescription]
            })
        }
        return result
    },
    _createRemoveButton: function(handler) {
        var $removeButton = $("<div>").addClass(FILTER_BUILDER_IMAGE_CLASS).addClass(FILTER_BUILDER_IMAGE_REMOVE_CLASS).addClass(FILTER_BUILDER_ACTION_CLASS).attr("tabindex", 0);
        this._subscribeOnClickAndEnterKey($removeButton, handler);
        return $removeButton
    },
    _createAddButton: function(addGroupHandler, addConditionHandler) {
        return this._createButtonWithMenu({
            menu: {
                items: [{
                    caption: messageLocalization.format("dxFilterBuilder-addCondition"),
                    click: addConditionHandler
                }, {
                    caption: messageLocalization.format("dxFilterBuilder-addGroup"),
                    click: addGroupHandler
                }],
                displayExpr: "caption",
                onItemClick: function(e) {
                    e.itemData.click()
                },
                cssClass: FILTER_BUILDER_ADD_CONDITION_CLASS
            }
        }).addClass(FILTER_BUILDER_IMAGE_CLASS).addClass(FILTER_BUILDER_IMAGE_ADD_CLASS).addClass(FILTER_BUILDER_ACTION_CLASS).attr("tabindex", 0)
    },
    _createValueText: function(item, field, $container) {
        var that = this,
            $text = $("<div>").addClass(FILTER_BUILDER_ITEM_VALUE_TEXT_CLASS).attr("tabindex", 0).appendTo($container),
            value = item[2],
            setText = function(valueText) {
                $text.text(valueText || messageLocalization.format("dxFilterBuilder-enterValueText"))
            };
        if (field.lookup) {
            utils.getCurrentLookupValueText(field, value, function(valueText) {
                setText(valueText)
            })
        } else {
            setText(utils.getCurrentValueText(field, value))
        }
        that._subscribeOnClickAndEnterKey($text, function(e) {
            if ("keyup" === e.type) {
                e.stopPropagation()
            }
            that._createValueEditorWithEvents(item, field, $container)
        });
        return $text
    },
    _updateConditionValue: function(item, value, callback) {
        var areValuesDifferent = item[2] !== value;
        if (areValuesDifferent) {
            item[2] = value
        }
        callback();
        if (areValuesDifferent) {
            this._updateFilter()
        }
    },
    _createValueEditorWithEvents: function(item, field, $container) {
        var that = this,
            value = item[2],
            removeEvents = function() {
                eventsEngine.off(document, "keyup", documentKeyUpHandler);
                eventsEngine.off(document, "dxclick", documentClickHandler)
            },
            isFocusOnEditorParts = function() {
                var activeElement = document.activeElement;
                return $(activeElement).closest($editor.children()).length || $(activeElement).closest(".dx-dropdowneditor-overlay").length
            },
            createValueText = function() {
                $container.empty();
                removeEvents();
                return that._createValueText(item, field, $container)
            };
        $container.empty();
        var options = {
            value: "" === value ? null : value,
            filterOperation: utils.getOperationValue(item),
            isValueChanged: true,
            setValue: function(data) {
                value = null === data ? "" : data
            }
        };
        var $editor = that._createValueEditor($container, field, options);
        eventsEngine.trigger($editor.find("input"), "focus");
        var documentClickHandler = function(e) {
            if (!isFocusOnEditorParts()) {
                that._updateConditionValue(item, value, function() {
                    createValueText()
                })
            }
        };
        eventsEngine.on(document, "dxclick", documentClickHandler);
        var documentKeyUpHandler = function(e) {
            if (e.keyCode === TAB_KEY) {
                if (isFocusOnEditorParts()) {
                    return
                }
                that._updateConditionValue(item, value, function() {
                    createValueText();
                    if (e.shiftKey) {
                        eventsEngine.trigger($container.prev(), "focus")
                    }
                })
            }
            if (e.keyCode === ESCAPE_KEY) {
                eventsEngine.trigger(createValueText(), "focus")
            }
            if (e.keyCode === ENTER_KEY) {
                that._updateConditionValue(item, value, function() {
                    eventsEngine.trigger(createValueText(), "focus")
                })
            }
        };
        eventsEngine.on(document, "keyup", documentKeyUpHandler)
    },
    _createValueButton: function(item, field) {
        var $valueButton = $("<div>").addClass(FILTER_BUILDER_ITEM_TEXT_CLASS).addClass(FILTER_BUILDER_ITEM_VALUE_CLASS);
        this._createValueText(item, field, $valueButton);
        return $valueButton
    },
    _createValueEditor: function($container, field, options) {
        var $editor = $("<div>").attr("tabindex", 0).appendTo($container);
        if (field.editorTemplate) {
            var template = this._getTemplate(field.editorTemplate);
            template.render({
                model: extend({
                    field: field
                }, options),
                container: $editor
            })
        } else {
            this._editorFactory.createEditor.call(this, $editor, extend({}, field, options, {
                parentType: "filterBuilder"
            }))
        }
        return $editor
    },
    _createPopupWithTreeView: function(options, $container) {
        var that = this,
            $popup = $("<div>").addClass(options.menu.cssClass).appendTo($container);
        this._createComponent($popup, Popup, {
            target: options.menu.target,
            onHiding: options.menu.onHiding,
            onHidden: options.menu.onHidden,
            rtlEnabled: options.menu.rtlEnabled,
            position: options.menu.position,
            animation: options.menu.animation,
            contentTemplate: function(contentElement) {
                var $menuContainer = $("<div>");
                that._createComponent($menuContainer, TreeView, options.menu);
                return $menuContainer
            },
            visible: true,
            focusStateEnabled: false,
            closeOnOutsideClick: true,
            onShown: options.popup.onShown,
            shading: false,
            width: "auto",
            height: "auto",
            showTitle: false,
            deferRendering: false
        })
    },
    _subscribeOnClickAndEnterKey: function($button, handler) {
        eventsEngine.on($button, "dxclick", handler);
        eventsEngine.on($button, "keyup", function(e) {
            if (e.keyCode === ENTER_KEY) {
                handler(e)
            }
        })
    }
});
registerComponent("dxFilterBuilder", FilterBuilder);
module.exports = FilterBuilder;
