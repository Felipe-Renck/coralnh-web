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
var core_1 = require("@angular/core");
var IterableDifferHelper = (function () {
    function IterableDifferHelper(_differs) {
        this._differs = _differs;
        this._propertyDiffers = {};
    }
    IterableDifferHelper.prototype.setHost = function (host) {
        this._host = host;
    };
    IterableDifferHelper.prototype.setup = function (prop, changes) {
        if (prop in changes) {
            var value = changes[prop].currentValue;
            this.setupSingle(prop, value);
        }
    };
    IterableDifferHelper.prototype.setupSingle = function (prop, value) {
        if (value && Array.isArray(value)) {
            if (!this._propertyDiffers[prop]) {
                try {
                    this._propertyDiffers[prop] = this._differs.find(value).create(null);
                    return true;
                }
                catch (e) { }
            }
        }
        else {
            delete this._propertyDiffers[prop];
        }
        return false;
    };
    IterableDifferHelper.prototype.getChanges = function (prop, value) {
        if (this._propertyDiffers[prop]) {
            return this._propertyDiffers[prop].diff(value);
        }
    };
    IterableDifferHelper.prototype.doCheck = function (prop) {
        if (this._propertyDiffers[prop]) {
            var changes = this.getChanges(prop, this._host[prop]);
            if (changes && this._host.instance) {
                this._host.lockWidgetUpdate();
                this._host.instance.option(prop, this._host[prop]);
            }
        }
    };
    IterableDifferHelper.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    IterableDifferHelper.ctorParameters = function () { return [
        { type: core_1.IterableDiffers, },
    ]; };
    return IterableDifferHelper;
}());
exports.IterableDifferHelper = IterableDifferHelper;
//# sourceMappingURL=iterable-differ-helper.js.map