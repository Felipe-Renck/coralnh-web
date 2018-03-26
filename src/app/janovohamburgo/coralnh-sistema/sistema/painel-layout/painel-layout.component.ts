import { Component, OnInit } from '@angular/core';
import { LoginService } from 'app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-painel-layout',
  templateUrl: './painel-layout.component.html',
  styleUrls: ['./painel-layout.component.css']
})
export class PainelLayoutComponent implements OnInit {

  isValid: boolean;
  username: string;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    // this.loginService.verifyToken(localStorage.getItem('token')).then(res => this.verifyIfTokenIsValid(res)).catch(res => this.verifyIfTokenIsValid(res));
    this.username = localStorage.getItem('username');
  }

  verifyIfTokenIsValid = function(res){
    if (res.message == "IsAExpiredToken") {
      this.router.navigateByUrl('coralnh');
    }
  }

}
