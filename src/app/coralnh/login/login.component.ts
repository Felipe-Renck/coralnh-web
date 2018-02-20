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


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('firstElement') private inputElement: MdlTextFieldComponent;

  public form: FormGroup;
  public username = new FormControl('', Validators.required);
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
      'username': this.username,
      'password': this.password
    });
  }


  public login() {
    this.processingLogin = true;
    this.statusMessage = 'Validando as suas credenciais ...';

    console.log(this.loggedUser);
    let obs = this.loginService.login(this.loggedUser);
    obs.subscribe(user => {

      this.processingLogin = false;
      this.statusMessage = 'Conectado!';

      setTimeout(() => {
        this.dialog.hide(user);
      }, 500);

    });
  }

  @HostListener('keydown.esc')
  public onEsc(): void {
    this.dialog.hide();
  }

}
