import { Component, OnInit } from '@angular/core';
import { UsuariosService } from './usuarios.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PattUtility } from "./../utilities/PattUtility";

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  role:any;
  users:any;
  id:any;
  showButton=false;
  pat= new PattUtility;

  userForm = new FormGroup({
    id: new FormControl(0),
    name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required,Validators.pattern(this.pat.pattern['emailPat'])]),
    password: new FormControl('',[Validators.required,Validators.pattern(this.pat.pattern['passPat'])])
  })
  
 

  constructor(private usuariosService: UsuariosService){}

  ngOnInit() {
        this.getData();
        this.start();
        
    }

  
    start(){
    if (localStorage.getItem("role")=='1') {
      this.role=true;
    }else{
      this.role=false;
    }
  }

    getData(){
      this.usuariosService.return()
    .subscribe(result => this.users = result)  
    }

    sendData(){
      if (this.userForm.invalid) {
        alert('Todos los campos son obligatorios')
      } else 
      {
        this.usuariosService.sendData(this.userForm.value).subscribe((data:any) => {
          if (data['resultado']=='OK') {
            alert(data['mensaje']);
            this.getData();
            this.resetInput();
          }
        }); 
      }      
    }
    resetInput() {
      this.userForm.reset({ name: "", email:"",password:""})
    }

    seeData(ide:number,name:string,email:string,password:string){
      this.userForm.reset({ id:ide, name: name, email:email,password:password})
      this.showButton=true;
    }

    updateData(){
      if (this.userForm.invalid) {
        alert('Todos los campos deben ser validos')
      }else
      {
        this.usuariosService.updateData(this.userForm.value).subscribe((data:any) => {
          if (data['resultado']=='OK') {
            alert(data['mensaje']);
            this.showButton=false;
            this.getData();
            this.resetInput();
          }
        }); 
      }
    }

    Cancel(){
      this.resetInput();
      this.showButton=false;
    }

    deleteData(delid:number){
     this.id = {
      id: delid
     }
    }

     rectify() {
      this.usuariosService.deleteData(this.id).subscribe((data:any) => {
          if (data['resultado']=='OK') {
            alert(data['mensaje']);
            this.getData();
          }
        });  
    }


    public get formcontrols(): any{
      return this.userForm.controls;
    }
}
