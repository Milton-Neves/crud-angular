import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdicionarComponent } from './Usuarios/adicionar/adicionar.component';
import { EditarComponent } from './Usuarios/editar/editar.component';
import { ListarComponent } from './Usuarios/listar/listar.component';

@NgModule({
  declarations: [
    AppComponent,
    AdicionarComponent,
    EditarComponent,
    ListarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
