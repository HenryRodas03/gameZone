import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { LoginService} from "./login.service";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  constructor(private loginService: LoginService, private router: Router){}
  
 

  continue:boolean=false;


  validatorForm= new FormGroup({
  correo: new FormControl('',[Validators.required]),
  contrasena: new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(26)])
  })

  validation(){
    this.loginService.validation(this.validatorForm.value).subscribe((datos:any)=>{
      if (datos['resultado']=='OK'){
        this.router.navigate(['/principal']);
      }else{
        alert("Correo o contraseña invalido")
      }
    });
  }
}
