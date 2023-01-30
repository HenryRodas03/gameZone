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

  userForm = new FormGroup({
    nombre: new FormControl('',[Validators.required]),
    correo: new FormControl('',[Validators.required]),
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
      } else {
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

    public get f(): any{
      return this.userForm.controls;
    }
}
