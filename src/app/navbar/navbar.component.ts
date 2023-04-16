import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit  {
role:any;
  
ngOnInit(){
  this.start();
}
start(){
if (localStorage.getItem("role")=='1') {
  this.role=true;
}else{
  this.role=false;
}
}



}
