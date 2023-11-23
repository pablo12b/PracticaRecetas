import { Component, OnInit } from '@angular/core';
import { RecetasService } from 'src/app/recetas.service';
import { Receta } from '../domain/receta';
import { DomSanitizer } from '@angular/platform-browser';
import { RecetasFirebaseService } from 'src/app/services/recetas-firebase.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent implements OnInit {
  recetas: Receta[] = [];
  imagenRecetaBase64!: string | null;
  terminoBusqueda: string = '';

  listaRecetas: any

  constructor(private router: Router, private recetasService: RecetasService, private sanitizer: DomSanitizer, private recetasFirebaseService: RecetasFirebaseService) {
    this.recetas = recetasService.obtenerRecetas()

    this.listaRecetas = this.recetasFirebaseService.getAll()
  }

  ngOnInit() {
    this.recetas = this.recetasService.obtenerRecetas();
    this.imagenRecetaBase64 = localStorage.getItem('imagenReceta') || null;
  }

  borrarTodasLasRecetas() {
    this.recetasService.borrarRecetas();
  }

  goEditar(receta: any){
    console.log("editando", receta)

    let params: NavigationExtras = {
      queryParams: {
        receta: receta
      }
    }
    this.router.navigate(['paginas/formulario'], params)
  }

}
