import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { RecetasComponent } from './pages/recetas/recetas.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { ViewRecetaComponent } from './pages/view-receta/view-receta.component';

const routes: Routes = [
  {path:"paginas/inicio", component: InicioComponent},
  {path:"paginas/nosotros", component: NosotrosComponent},
  {path:"paginas/recetas", component: RecetasComponent},
  {path:"paginas/formulario/:nombre", component: ViewRecetaComponent},
  {path:"paginas/formulario", component: FormularioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

