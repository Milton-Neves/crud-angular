import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdicionarComponent } from './Usuarios/adicionar/adicionar.component';
import { EditarComponent } from './Usuarios/editar/editar.component';
import { ListarComponent } from './Usuarios/listar/listar.component';

const routes: Routes = [
  {path: 'listar', component: ListarComponent},
  {path: 'adicionar', component: AdicionarComponent},
  {path: 'editar', component: EditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
