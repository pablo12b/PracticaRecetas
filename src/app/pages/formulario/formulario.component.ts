import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecetasService } from 'src/app/recetas.service';
import { RecetasFirebaseService } from 'src/app/services/recetas-firebase.service';
import { Receta } from '../domain/receta';



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  
  formulario: FormGroup;

  constructor(private fb: FormBuilder, private recetasService: RecetasService, private recetasFirebaseService: RecetasFirebaseService) {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      ingredientes: ['', Validators.required],
      pasos: ['', Validators.required],
      imagen: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.formulario.valid) {
      const receta = this.formulario.value as Receta;
      this.recetasService.agregarReceta(receta);
      this.recetasFirebaseService.save(receta);
      this.formulario.reset();
      }
    }
}
