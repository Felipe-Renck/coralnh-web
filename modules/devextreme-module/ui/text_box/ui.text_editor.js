/**
 * DevExtreme (ui/text_box/ui.text_editor.js)
 * Version: 17.2.5
 * Build date: Tue Jan 23 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
"use strict";
var registerComponent = require("../../core/component_registrator"),
    TextEditorMask = require("./ui.text_editor.mask");
registerComponent("dxTextEditor", TextEditorMask);
module.exports = TextEditorMask;
