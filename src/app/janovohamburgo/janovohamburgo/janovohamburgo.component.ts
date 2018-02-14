import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VerticalMaisComponent } from 'app/vertical-mais/vertical-mais.component';

@Component({
  selector: 'app-janovohamburgo',
  templateUrl: './janovohamburgo.component.html',
  styleUrls: ['./janovohamburgo.component.css']
})
export class JanovohamburgoComponent implements OnInit {
  
  hide:boolean = true;

  constructor(private router: Router){

  }
  
  ngOnInit() {

  }

  BtnCoralClick = function(){
      this.router.navigateByUrl('/coralnh');
  }
}
