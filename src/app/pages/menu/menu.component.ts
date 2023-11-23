import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  paginas = [
    {titulo: 'Inicio', path: 'paginas/inicio'},
    {titulo: 'Nosotros', path: 'paginas/nosotros'},
    {titulo: 'Recetas', path: 'paginas/recetas'},
    {titulo: 'Formulario', path: 'paginas/formulario'}
  ]
}
