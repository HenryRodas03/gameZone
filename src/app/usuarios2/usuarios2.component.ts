import { Component, OnInit } from '@angular/core';
import { Usuarios2Service } from './usuarios2.service';


@Component({
  selector: 'app-usuarios2',
  templateUrl: './usuarios2.component.html',
  styleUrls: ['./usuarios2.component.css']
})
export class Usuarios2Component implements OnInit {
  users:any;
  constructor(private usuarios2Service: Usuarios2Service){}

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.usuarios2Service.return()
    .subscribe(result => this.users = result)  
  }
}
