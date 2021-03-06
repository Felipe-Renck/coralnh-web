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
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:use-input-property-decorator */
var core_1 = require("@angular/core");
var template_host_1 = require("./template-host");
var utils_1 = require("./utils");
var events = require("devextreme/events");
exports.DX_TEMPLATE_WRAPPER_CLASS = 'dx-template-wrapper';
var RenderData = (function () {
    function RenderData() {
    }
    return RenderData;
}());
exports.RenderData = RenderData;
var DxTemplateDirective = (function () {
    function DxTemplateDirective(templateRef, viewContainerRef, templateHost, ngZone) {
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
        this.ngZone = ngZone;
        templateHost.setTemplate(this);
    }
    Object.defineProperty(DxTemplateDirective.prototype, "dxTemplateOf", {
        set: function (value) {
            this.name = value;
        },
        enumerable: true,
        configurable: true
    });
    ;
    DxTemplateDirective.prototype.render = function (renderData) {
        var childView = this.viewContainerRef.createEmbeddedView(this.templateRef, {
            '$implicit': renderData.model,
            index: renderData.index
        });
        var container = utils_1.getElement(renderData.container);
        if (renderData.container) {
            childView.rootNodes.forEach(function (element) {
                container.appendChild(element);
            });
        }
        // =========== WORKAROUND =============
        // https://github.com/angular/angular/issues/12243
        this.ngZone.run(function () {
            childView['detectChanges']();
        });
        // =========== /WORKAROUND =============
        childView.rootNodes.forEach(function (element) {
            utils_1.addClass(element, exports.DX_TEMPLATE_WRAPPER_CLASS);
            events.one(element, 'dxremove', function (e) {
                if (!e._angularIntegration) {
                    childView.destroy();
                }
            });
        });
        return childView.rootNodes;
    };
    DxTemplateDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[dxTemplate]'
                },] },
    ];
    /** @nocollapse */
    DxTemplateDirective.ctorParameters = function () { return [
        { type: core_1.TemplateRef, },
        { type: core_1.ViewContainerRef, },
        { type: template_host_1.DxTemplateHost, },
        { type: core_1.NgZone, },
    ]; };
    DxTemplateDirective.propDecorators = {
        'dxTemplateOf': [{ type: core_1.Input },],
    };
    return DxTemplateDirective;
}());
exports.DxTemplateDirective = DxTemplateDirective;
var DxTemplateModule = (function () {
    function DxTemplateModule() {
    }
    DxTemplateModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [DxTemplateDirective],
                    exports: [DxTemplateDirective]
                },] },
    ];
    /** @nocollapse */
    DxTemplateModule.ctorParameters = function () { return []; };
    return DxTemplateModule;
}());
exports.DxTemplateModule = DxTemplateModule;
//# sourceMappingURL=template.js.map