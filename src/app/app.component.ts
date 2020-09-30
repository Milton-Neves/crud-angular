import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud-angular';

  constructor (private router:Router) {}

  Listar(){
    this.router.navigate(["listar"])
  }
  Adicionar(){
    this.router.navigate(["adicionar"])
  }
  Editar(){
    this.router.navigate(["editar"])
  }
  Inicio(){
    this.router.navigate([""])
  }
}
