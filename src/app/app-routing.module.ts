import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { AgregarComponent } from './components/inventario/agregar/agregar.component';
import { MostrarComponent } from './components/inventario/mostrar/mostrar.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'tienda', component: TiendaComponent},
  {path: 'inventario', component: MostrarComponent, pathMatch: 'full'},
  {path: 'inventario/agregar', component: AgregarComponent, pathMatch: 'full'},
  {path: 'inventario/editar', component: AgregarComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
