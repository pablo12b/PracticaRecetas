import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule

import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { RecetasComponent } from './pages/recetas/recetas.component';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environments';
import { FIREBASE_APP_NAME, FIREBASE_OPTIONS } from '@angular/fire/compat';
import { RecetasService } from './recetas.service';
import { RecetasFirebaseService } from './services/recetas-firebase.service';
import { ViewRecetaComponent } from './pages/view-receta/view-receta.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    FormularioComponent,
    MenuComponent,
    NosotrosComponent,
    RecetasComponent,
    ViewRecetaComponent
  ],
  imports: [
    provideFirebaseApp(() => initializeApp( environment.firebaseConfig )),
    provideFirestore(() => getFirestore()),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp({apiKey: "AIzaSyAhkyyWgtjztkzf_zskV-0aMipjuIzeE5s", authDomain: "practicaclase-460cf.firebaseapp.com", projectId: "practicaclase-460cf", storageBucket: "practicaclase-460cf.appspot.com", messagingSenderId: "1030387281024", appId: "1:1030387281024:web:3380770ac9f952be998a65", measurementId: "G-8HGVVBGEF0"})),
  ],
  providers: [{ provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig }, RecetasFirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
