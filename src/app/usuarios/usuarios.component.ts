import { Component, OnInit } from '@angular/core';
import { UsuariosService } from './usuarios.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  users:any;
  id:any;
  showButton=false;
  updateUser: any;
  delete=false;
 
  

  userForm = new FormGroup({
    id: new FormControl(0),
    nombre: new FormControl('',[Validators.required]),
    correo: new FormControl('',[Validators.required,Validators.email]),
    contrasena: new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(26)])
  })
  
 

  constructor(private usuariosService: UsuariosService){}

  ngOnInit() {
        this.getData();
        
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
        this.usuariosService.sendData(this.userForm.value).subscribe((datos:any) => {
          if (datos['resultado']=='OK') {
            alert(datos['mensaje']);
            this.getData();
            this.resetInput();
          }
        }); 
      }      
    }
    resetInput() {
      this.userForm.reset({ nombre: "", correo:"",contrasena:""})
    }

    seeData(ide:number,nombre:string,correo:string,contrasena:string){
      this.userForm.reset({ id:ide, nombre: nombre, correo:correo,contrasena:contrasena})
      this.showButton=true;
    }

    updateData(){
      if (this.userForm.invalid) {
        alert('Todos los campos deben ser validos')
      }else
      {
        this.usuariosService.updateData(this.userForm.value).subscribe((datos:any) => {
          if (datos['resultado']=='OK') {
            alert(datos['mensaje']);
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
      this.usuariosService.deleteData(this.id).subscribe((datos:any) => {
          if (datos['resultado']=='OK') {
            alert(datos['mensaje']);
            this.showButton=false;
            this.getData();
            
          }
        }); 
    }


    public get formcontrols(): any{
      return this.userForm.controls;
    }
}
