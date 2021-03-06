/**
 * DevExtreme (ui/widget/jquery.template.js)
 * Version: 17.2.5
 * Build date: Tue Jan 23 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
"use strict";
var $ = require("../../core/renderer"),
    errors = require("../../core/errors"),
    typeUtils = require("../../core/utils/type"),
    TemplateBase = require("./ui.template_base"),
    domUtils = require("../../core/utils/dom");
var templateEngines = {};
var registerTemplateEngine = function(name, templateEngine) {
    templateEngines[name] = templateEngine
};
var outerHtml = function(element) {
    element = $(element);
    var templateTag = element.length && element[0].nodeName.toLowerCase();
    if ("script" === templateTag) {
        return element.html()
    } else {
        element = $("<div>").append(element);
        return element.html()
    }
};
registerTemplateEngine("default", {
    compile: function(element) {
        return domUtils.normalizeTemplateElement(element)
    },
    render: function(template) {
        return template.clone()
    }
});
registerTemplateEngine("jquery-tmpl", {
    compile: function(element) {
        return outerHtml(element)
    },
    render: function(template, data) {
        return jQuery.tmpl(template, data)
    }
});
registerTemplateEngine("jsrender", {
    compile: function(element) {
        return (jQuery ? jQuery : jsrender).templates(outerHtml(element))
    },
    render: function(template, data) {
        return template.render(data)
    }
});
registerTemplateEngine("mustache", {
    compile: function(element) {
        return outerHtml(element)
    },
    render: function(template, data) {
        return Mustache.render(template, data)
    }
});
registerTemplateEngine("hogan", {
    compile: function(element) {
        return Hogan.compile(outerHtml(element))
    },
    render: function(template, data) {
        return template.render(data)
    }
});
registerTemplateEngine("underscore", {
    compile: function(element) {
        return _.template(outerHtml(element))
    },
    render: function(template, data) {
        return template(data)
    }
});
registerTemplateEngine("handlebars", {
    compile: function(element) {
        return Handlebars.compile(outerHtml(element))
    },
    render: function(template, data) {
        return template(data)
    }
});
registerTemplateEngine("doT", {
    compile: function(element) {
        return doT.template(outerHtml(element))
    },
    render: function(template, data) {
        return template(data)
    }
});
var currentTemplateEngine;
var setTemplateEngine = function(templateEngine) {
    if (typeUtils.isString(templateEngine)) {
        currentTemplateEngine = templateEngines[templateEngine];
        if (!currentTemplateEngine) {
            throw errors.Error("E0020", templateEngine)
        }
    } else {
        currentTemplateEngine = templateEngine
    }
};
setTemplateEngine("default");
var Template = TemplateBase.inherit({
    ctor: function(element) {
        this._element = element;
        this._compiledTemplate = currentTemplateEngine.compile(element)
    },
    _renderCore: function(options) {
        return $("<div>").append(currentTemplateEngine.render(this._compiledTemplate, options.model, options.index)).contents()
    },
    source: function() {
        return $(this._element).clone()
    }
});
module.exports = Template;
module.exports.setTemplateEngine = setTemplateEngine;
