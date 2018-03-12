import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chamada-admin',
  templateUrl: './chamada-admin.component.html',
  styleUrls: ['./chamada-admin.component.css']
})
export class ChamadaAdminComponent implements OnInit {

  chamadas: Chamada[] = [];

  constructor() { }

  ngOnInit() {
    this.chamadas.push({ Id: 1, Data: new Date()});
  }

}

export class Chamada {
  Id: number;
  Data: Date;
};
