import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarService } from 'app/services/calendar.service';
import { Http, HttpModule, Response, RequestOptionsArgs } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxSchedulerModule } from 'devextreme-angular';
import 'rxjs/Rx';

import DataSource from 'devextreme/data/data_source';
import CustomStore from 'devextreme/data/custom_store';

export interface CalendarRequestOptionsArgs extends RequestOptionsArgs {
    showDeleted?: boolean;
}

@Component({
    selector: 'app-coralnhcalendario',
    templateUrl: './coralnhcalendario.component.html',
    styleUrls: ['./coralnhcalendario.component.css'],
})
export class CoralnhcalendarioComponent  {
    dataSource: any;
    currentDate: Date = new Date();

    constructor(private http: Http) {
        this.dataSource = new DataSource({
            store: new CustomStore({
                load: (options) => this.getData(options, { showDeleted: false })
            })
        });
    }
    private getData(options: any, requestOptions: CalendarRequestOptionsArgs) {
        let PUBLIC_KEY = 'AIzaSyDIlxcaHiaY901g7vtJVhwcDwzu80lWZII',
            CALENDAR_ID = 'jovensadventistasnh@gmail.com';
        let dataUrl = [ 'https://www.googleapis.com/calendar/v3/calendars/',
                CALENDAR_ID, '/events?key=', PUBLIC_KEY].join('');

        return this.http.get(dataUrl, requestOptions).toPromise().then(this.extractData);
    }
    private extractData(res: Response) {
        return res.json().items;
    }
}
