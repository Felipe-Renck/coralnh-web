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
import { ElementRef, NgZone, OnDestroy, EventEmitter } from '@angular/core';
import DxBullet from 'devextreme/viz/bullet';
import { DxComponent } from '../core/component';
import { DxTemplateHost } from '../core/template-host';
import { NestedOptionHost } from '../core/nested-option';
import { WatcherHelper } from '../core/watcher-helper';
/**
 * The Bullet widget is useful when you need to compare a single measure to a target value. The widget comprises a horizontal bar indicating the measure and a vertical line indicating the target value.
 */
export declare class DxBulletComponent extends DxComponent implements OnDestroy {
    instance: DxBullet;
    /**
     * Specifies a color for the bullet bar.
     */
    color: string;
    /**
     * Specifies the attributes to be attached to the widget's root element.
     */
    elementAttr: any;
    /**
     * Specifies an end value for the invisible scale.
     */
    endScaleValue: number;
    /**
     * Generates space around the widget.
     */
    margin: any;
    /**
     * Notifies the widget that it is embedded into an HTML page that uses a tag modifying the path.
     */
    pathModified: boolean;
    /**
     * Switches the widget to a right-to-left representation.
     */
    rtlEnabled: boolean;
    /**
     * Specifies whether or not to show the target line.
     */
    showTarget: boolean;
    /**
     * Specifies whether or not to show the line indicating zero on the invisible scale.
     */
    showZeroLevel: boolean;
    /**
     * Specifies the widget's size in pixels.
     */
    size: any;
    /**
     * Specifies a start value for the invisible scale.
     */
    startScaleValue: number;
    /**
     * Specifies the value indicated by the target line.
     */
    target: number;
    /**
     * Specifies a color for both the target and zero level lines.
     */
    targetColor: string;
    /**
     * Specifies the width of the target line.
     */
    targetWidth: number;
    /**
     * Sets the name of the theme the widget uses.
     */
    theme: string;
    /**
     * Configures the tooltip.
     */
    tooltip: any;
    /**
     * Specifies the primary value indicated by the bullet bar.
     */
    value: number;
    /**
     * A handler for the disposing event. Executed when the widget is removed from the DOM using the remove(), empty(), or html() jQuery methods only.
     */
    onDisposing: EventEmitter<any>;
    /**
     * A handler for the drawn event. Executed when the widget has finished drawing itself.
     */
    onDrawn: EventEmitter<any>;
    /**
     * A handler for the exported event. Executed after data from the widget is exported.
     */
    onExported: EventEmitter<any>;
    /**
     * A handler for the exporting event. Executed before data from the widget is exported.
     */
    onExporting: EventEmitter<any>;
    /**
     * A handler for the fileSaving event. Executed before a file with exported data is saved on the user's local storage.
     */
    onFileSaving: EventEmitter<any>;
    /**
     * A handler for the incidentOccurred event. Executed when an error or warning appears in the widget.
     */
    onIncidentOccurred: EventEmitter<any>;
    /**
     * A handler for the initialized event. Executed only once, after the widget is initialized.
     */
    onInitialized: EventEmitter<any>;
    /**
     * A handler for the optionChanged event. Executed after an option of the widget is changed.
     */
    onOptionChanged: EventEmitter<any>;
    /**
     * A handler for the tooltipHidden event.
     */
    onTooltipHidden: EventEmitter<any>;
    /**
     * A handler for the tooltipShown event.
     */
    onTooltipShown: EventEmitter<any>;
    /**
     * A handler for the colorChange event.
     */
    colorChange: EventEmitter<string>;
    /**
     * A handler for the elementAttrChange event.
     */
    elementAttrChange: EventEmitter<any>;
    /**
     * A handler for the endScaleValueChange event.
     */
    endScaleValueChange: EventEmitter<number>;
    /**
     * A handler for the marginChange event.
     */
    marginChange: EventEmitter<any>;
    /**
     * A handler for the pathModifiedChange event.
     */
    pathModifiedChange: EventEmitter<boolean>;
    /**
     * A handler for the rtlEnabledChange event.
     */
    rtlEnabledChange: EventEmitter<boolean>;
    /**
     * A handler for the showTargetChange event.
     */
    showTargetChange: EventEmitter<boolean>;
    /**
     * A handler for the showZeroLevelChange event.
     */
    showZeroLevelChange: EventEmitter<boolean>;
    /**
     * A handler for the sizeChange event.
     */
    sizeChange: EventEmitter<any>;
    /**
     * A handler for the startScaleValueChange event.
     */
    startScaleValueChange: EventEmitter<number>;
    /**
     * A handler for the targetChange event.
     */
    targetChange: EventEmitter<number>;
    /**
     * A handler for the targetColorChange event.
     */
    targetColorChange: EventEmitter<string>;
    /**
     * A handler for the targetWidthChange event.
     */
    targetWidthChange: EventEmitter<number>;
    /**
     * A handler for the themeChange event.
     */
    themeChange: EventEmitter<string>;
    /**
     * A handler for the tooltipChange event.
     */
    tooltipChange: EventEmitter<any>;
    /**
     * A handler for the valueChange event.
     */
    valueChange: EventEmitter<number>;
    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, _watcherHelper: WatcherHelper, optionHost: NestedOptionHost);
    protected _createInstance(element: any, options: any): DxBullet;
    ngOnDestroy(): void;
}
export declare class DxBulletModule {
}
