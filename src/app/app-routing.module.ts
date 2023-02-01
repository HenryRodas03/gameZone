import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissionsGuard } from './guards/permissions.guard';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PrincipalComponent } from './principal/principal.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [

  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'navbar',
    component: NavbarComponent, canActivate: [PermissionsGuard],
    children:[
      {
        path: 'usuarios',
        component: UsuariosComponent 
      },
      {
        path:'principal',
        component: PrincipalComponent
      }
    ]
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
