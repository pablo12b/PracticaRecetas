import { Injectable } from '@angular/core';
import { Receta } from 'src/app/pages/domain/receta';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {
  private recetas: Receta[] = [];
  
  selectedImage: File | null = null;

  agregarReceta(receta: Receta) {
    const recetas = this.obtenerRecetas();
      // Agregar una verificación para asegurarse de que event y event.target no sean nulos
          recetas.push(receta);
          localStorage.setItem('recetas', JSON.stringify(recetas));
  }

  obtenerRecetas() {
    const recetas = localStorage.getItem('recetas');
    return recetas ? JSON.parse(recetas) : [];
  }

  borrarRecetas() {
    localStorage.removeItem('recetas');
  }

}
