import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  p:any

  ngOnInit() {
    this.showNavL();
  }

  showNavL(){
   this.p= localStorage.getItem("showNavL"); 
  }
}
