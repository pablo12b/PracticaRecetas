import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecetasService } from 'src/app/recetas.service';
import { RecetasFirebaseService } from 'src/app/services/recetas-firebase.service';
import { Receta } from '../domain/receta';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-view-receta',
  templateUrl: './view-receta.component.html',
  styleUrls: ['./view-receta.component.css']
})
export class ViewRecetaComponent {
  receta: Receta = new Receta

  constructor(private router: Router, private fb: FormBuilder, private recetasService: RecetasService,
              private recetasFirebaseService: RecetasFirebaseService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      console.log(params)
      if(params['nombre']){
        this.loadReceta(params['nombre'])
      }
    });
  }

  loadReceta(uid:string){
    this.recetasFirebaseService.getReceta(uid).subscribe(data => {
      console.log(data);
      this.receta = <any> data
    })
  }

}
