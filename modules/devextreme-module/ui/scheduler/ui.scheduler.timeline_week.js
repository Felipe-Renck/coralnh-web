/**
 * DevExtreme (ui/scheduler/ui.scheduler.timeline_week.js)
 * Version: 17.2.5
 * Build date: Tue Jan 23 2018
 *
 * Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
"use strict";
var $ = require("../../core/renderer"),
    registerComponent = require("../../core/component_registrator"),
    SchedulerTimeline = require("./ui.scheduler.timeline");
var TIMELINE_CLASS = "dx-scheduler-timeline-week",
    HEADER_PANEL_CELL_CLASS = "dx-scheduler-header-panel-cell",
    HEADER_ROW_CLASS = "dx-scheduler-header-row";
var SchedulerTimelineWeek = SchedulerTimeline.inherit({
    _getElementClass: function() {
        return TIMELINE_CLASS
    },
    _getCellCount: function() {
        return this.callBase() * this._getWeekDuration()
    },
    _renderDateHeader: function() {
        var $headerRow = this.callBase(),
            firstViewDate = new Date(this._firstViewDate),
            $cells = [],
            colspan = this._getCellCountInDay(),
            cellTemplate = this.option("dateCellTemplate"),
            headerCellWidth = colspan * this._getHeaderPanelCellWidth($headerRow);
        for (var i = 0; i < this._getWeekDuration() * this.option("intervalCount"); i++) {
            var $th = $("<th>"),
                text = this._formatWeekdayAndDay(firstViewDate);
            if (cellTemplate) {
                var templateOptions = {
                    model: {
                        text: text,
                        date: firstViewDate
                    },
                    container: $th,
                    index: i
                };
                cellTemplate.render(templateOptions)
            } else {
                $th.text(text)
            }
            $th.addClass(HEADER_PANEL_CELL_CLASS).attr("colSpan", colspan).width(headerCellWidth);
            $cells.push($th);
            this._incrementDate(firstViewDate)
        }
        var $row = $("<tr>").addClass(HEADER_ROW_CLASS).append($cells);
        $headerRow.before($row)
    },
    _setTableSizes: function() {
        this.callBase();
        var cellWidth = this.getCellWidth(),
            minWidth = this._getWorkSpaceMinWidth(),
            $headerCells = this.$element().find("." + HEADER_ROW_CLASS).last().find("th");
        var width = cellWidth * $headerCells.length;
        if (width < minWidth) {
            width = minWidth
        }
        this._$headerPanel.width(width)
    },
    _getHeaderPanelCellWidth: function($headerRow) {
        return $headerRow.children().first().outerWidth()
    },
    _getWeekDuration: function() {
        return 7
    },
    _incrementDate: function(date) {
        date.setDate(date.getDate() + 1)
    }
});
registerComponent("dxSchedulerTimelineWeek", SchedulerTimelineWeek);
module.exports = SchedulerTimelineWeek;
