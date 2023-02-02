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
export class LoginComponent implements OnInit{


  constructor(private loginService: LoginService, private router: Router){}


  validatorForm= new FormGroup({
  email: new FormControl('',[Validators.required,Validators.email]),
  password: new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(26)])
  })

   ngOnInit() {
    localStorage.removeItem("validate")
  } 

  validation(){
    this.loginService.validation(this.validatorForm.value).subscribe((data:any)=>{
      if (data['resultado']=='OK'){
        this.router.navigate(['/navbar/home']);
        localStorage.setItem("validate", "1");
      }else{
        alert("Correo o contraseña invalido")
      }
    });
  }

  

  

  public get formcontrols(): any{
    return this.validatorForm.controls;
  }
}
