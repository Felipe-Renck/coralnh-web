import {
  Component,
  ViewChild,
  HostListener,
  OnInit,
  Inject,
  InjectionToken
} from '@angular/core';
import { LoginService } from 'app/services/login.service';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { MdlDialogService, MdlDialogReference, MdlTextFieldComponent } from '@angular-mdl/core';
import { LoggedUser } from 'app/models/LoggedUser';
import { Http, Response } from '@angular/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('firstElement') private inputElement: MdlTextFieldComponent;

  public form: FormGroup;
  public email = new FormControl('', Validators.required);
  public password = new FormControl('', Validators.required);
  loggedUser = new LoggedUser();

  public processingLogin = false;
  public statusMessage = '';

  constructor(
    private dialog: MdlDialogReference,
    private fb: FormBuilder,
    private loginService: LoginService) {

    // just if you want to be informed if the dialog is hidden
    this.dialog.onHide().subscribe((user) => {
      console.log('login dialog hidden');
      if (user) {
        console.log('authenticated user', user);
      }
    });

    this.dialog.onVisible().subscribe(() => {
      console.log('set focus');
      this.inputElement.setFocus();
    });

  }


  public ngOnInit() {
    this.form = this.fb.group({
      'email': this.email,
      'password': this.password
    });
  }


  public login() {
    this.processingLogin = true;
    this.statusMessage = 'Validando as suas credenciais ...';

    console.log(this.loggedUser);
    this.loginService.login(this.loggedUser).then(res => this.validateAuthentication(res)).catch(res => this.validateAuthentication(res));

  }

  validateAuthentication = function (res) {

    console.log(res);
    console.log(res.status);

    if (res.status == "401") {
      this.processingLogin = false;
      this.statusMessage = res.error.message;
    } else {
      this.processingLogin = false;
      this.statusMessage = 'Conectado!';
      setTimeout(() => {
        this.dialog.hide();
      }, 500);
    }
  }

  @HostListener('keydown.esc')
  public onEsc(): void {
    this.dialog.hide();
  }

}
