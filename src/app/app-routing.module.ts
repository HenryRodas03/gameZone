import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissionsGuard } from './guards/permissions.guard';
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
    component: UsuariosComponent , canActivate: [PermissionsGuard]
  },
  {
    path:'principal',
    component: PrincipalComponent , canActivate: [PermissionsGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
