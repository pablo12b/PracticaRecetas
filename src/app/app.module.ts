import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp({"projectId":"practicaclase-460cf","appId":"1:1030387281024:web:8083bbe935b9f379998a65","storageBucket":"practicaclase-460cf.appspot.com","apiKey":"AIzaSyAhkyyWgtjztkzf_zskV-0aMipjuIzeE5s","authDomain":"practicaclase-460cf.firebaseapp.com","messagingSenderId":"1030387281024","measurementId":"G-YCQHP830YK"})),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
