import { Component, InjectionToken, OnInit } from '@angular/core';
import { MdlDialogService, MdlDialogReference } from '@angular-mdl/core';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-coralnh',
  templateUrl: './coralnh.component.html',
  styleUrls: ['./coralnh.component.css']
})
export class CoralnhComponent implements OnInit {

  constructor(private dialogService: MdlDialogService) {

  }

  ngOnInit() {

  }

  public showDialog($event: MouseEvent) {

    console.log('COMPONENTE ROOT');

    let pDialog = this.dialogService.showCustomDialog({
      component: LoginComponent,
      isModal: true,
      styles: { 'width': '300px' },
      clickOutsideToClose: true,
      openFrom: $event,
      enterTransitionDuration: 400,
      leaveTransitionDuration: 400
    });
    pDialog.subscribe((dialogReference: MdlDialogReference) => {
      console.log('dialog visible', dialogReference);
    });
  }
}
