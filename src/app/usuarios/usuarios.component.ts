import { Component, OnInit } from '@angular/core';
import { UsuariosService } from './usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  users:any;

  constructor(private usuariosService: UsuariosService){}

  ngOnInit() {
    this.usuariosService.return()
    .subscribe(result => this.users = result)      
    }

}
