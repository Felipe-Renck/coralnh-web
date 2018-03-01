import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/services/user.service';
import { User } from 'app/models/User';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-lista-usuarios-status',
  templateUrl: './lista-usuarios-status.component.html',
  styleUrls: ['./lista-usuarios-status.component.css']
})
export class ListaUsuariosStatusComponent implements OnInit {

  usuario: string;
  senha: string;
  usersArray: User[] = [];

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {


    this.usuario = this.route.snapshot.queryParams["usuario"];
    this.senha = this.route.snapshot.queryParams["senha"];


    this.getUsers();
  }

  getUsers() {
    this.userService.getAllUsers(this.usuario, this.senha).toPromise().then(x => this.usersArray = this.newUsers(x));//.subscribe(x => { this.newUser(x) });
  }

  newUsers(users) {
    var array: User[] = [];

    users.forEach(function (user) {
      var usuario = new User();
      usuario.Nome = user.nome;
      usuario.Celular = user.celular;
      usuario.Whatsapp = user.whatsapp;
      array.push(usuario);
    });

    return array;
  }

}
