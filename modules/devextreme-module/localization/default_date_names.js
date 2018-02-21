/**
 * DevExtreme (localization/default_date_names.js)
 * Version: 17.2.5
 * Build date: Tue Jan 23 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
"use strict";
var iteratorUtils = require("../core/utils/iterator");
var MONTHS = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
    DAYS = ["Doming", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
    PERIODS = ["AM", "PM"],
    QUARTERS = ["Q1", "Q2", "Q3", "Q4"];
var cutCaptions = function(captions, format) {
    var lengthByFormat = {
        abbreviated: 3,
        "short": 2,
        narrow: 1
    };
    return iteratorUtils.map(captions, function(caption) {
        return caption.substr(0, lengthByFormat[format])
    })
};
module.exports = {
    getMonthNames: function(format) {
        return cutCaptions(MONTHS, format)
    },
    getDayNames: function(format) {
        return cutCaptions(DAYS, format)
    },
    getQuarterNames: function(format) {
        return QUARTERS
    },
    getPeriodNames: function(format) {
        return PERIODS
    }
};
