import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [

  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'usuarios',
    component: UsuariosComponent
  },
  {
    path:'principal',
    component: PrincipalComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
