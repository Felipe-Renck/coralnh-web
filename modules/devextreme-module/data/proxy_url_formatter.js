/**
 * DevExtreme (data/proxy_url_formatter.js)
 * Version: 17.2.5
 * Build date: Tue Jan 23 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
"use strict";
var each = require("../core/utils/iterator").each,
    location = window.location,
    DXPROXY_HOST = "dxproxy.devexpress.com:8000",
    IS_DXPROXY_ORIGIN = location.host === DXPROXY_HOST,
    urlMapping = {};
var parseUrl = function() {
    var a = document.createElement("a"),
        props = ["protocol", "hostname", "port", "pathname", "search", "hash"];
    var normalizePath = function(value) {
        if ("/" !== value.charAt(0)) {
            value = "/" + value
        }
        return value
    };
    return function(url) {
        a.href = url;
        var result = {};
        each(props, function() {
            result[this] = a[this]
        });
        result.pathname = normalizePath(result.pathname);
        return result
    }
}();
var extractProxyAppId = function() {
    return location.pathname.split("/")[1]
};
module.exports = {
    parseUrl: parseUrl,
    isProxyUsed: function() {
        return IS_DXPROXY_ORIGIN
    },
    formatProxyUrl: function(localUrl) {
        var urlData = parseUrl(localUrl);
        if (!/^(localhost$|127\.)/i.test(urlData.hostname)) {
            return localUrl
        }
        var proxyUrlPart = DXPROXY_HOST + "/" + extractProxyAppId() + "_" + urlData.port;
        urlMapping[proxyUrlPart] = urlData.hostname + ":" + urlData.port;
        var resultUrl = "http://" + proxyUrlPart + urlData.pathname + urlData.search;
        return resultUrl
    },
    formatLocalUrl: function(proxyUrl) {
        if (proxyUrl.indexOf(DXPROXY_HOST) < 0) {
            return proxyUrl
        }
        var resultUrl = proxyUrl;
        for (var proxyUrlPart in urlMapping) {
            if (urlMapping.hasOwnProperty(proxyUrlPart)) {
                if (proxyUrl.indexOf(proxyUrlPart) >= 0) {
                    resultUrl = proxyUrl.replace(proxyUrlPart, urlMapping[proxyUrlPart]);
                    break
                }
            }
        }
        return resultUrl
    }
};
