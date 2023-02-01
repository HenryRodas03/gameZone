import { Component, OnInit,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'gameStore';
  showNav:any;
  validation=false;

  ngOnInit() {
    this.showNavL();
  }

  showNavL(){
    this.showNav=localStorage.getItem("showNavL");
     if (this.showNav="1") {
      this.validation=true
     }else{
      this.validation=false
     }
  }
}
