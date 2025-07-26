import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeadComponent } from './components/head/head.component';
import { LoginComponent } from './components/login/login.component';
import { AgregarComponent } from './components/inventario/agregar/agregar.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { MostrarComponent } from './components/inventario/mostrar/mostrar.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeadComponent,
    LoginComponent,
    AgregarComponent,
    TiendaComponent,
    MostrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
