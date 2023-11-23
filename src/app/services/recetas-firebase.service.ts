import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore'
import { Receta } from '../pages/domain/receta';

@Injectable({
  providedIn: 'root'
})
export class RecetasFirebaseService {

  private path = 'recetas'

  recetasRef: AngularFirestoreCollection<any>

  constructor(private db: AngularFirestore) { 
    this.recetasRef = db.collection(this.path)

    this.recetasRef.valueChanges().subscribe(data => {
      console.log(data)
    })
  }

  getAll(){
    return this.recetasRef.valueChanges()
  }

  save(receta: Receta){
    const uid = receta.nombre
    console.log('Receta', receta)
    return this.recetasRef.doc(uid).set(Object.assign({}, receta))
  }

  getReceta(uid:string){
    console.log("uid", uid)
    return this.db.doc(this.path+'/'+uid).valueChanges()
  }
}