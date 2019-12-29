import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { TablsModel } from '../models/mesa.model';




@Injectable({
  providedIn: 'root'
})

export class WaiqueenService {

//Declaro una variable para mi coleccion
 private tablsCollection: AngularFirestoreCollection<TablsModel>
 //Declaro mi variable para guardar el array de mesas
 arrayTabls: Observable<TablsModel[]>;

   constructor(private afs: AngularFirestore) {
     //Guardo la coleccion de mesas en la variable tablsCollection 
    this.tablsCollection = afs.collection<TablsModel>('mesas');
    //Guardo la coleccion en mi variable arrayTabls Y EVALUO LOS CAMBIOS
      this.arrayTabls = this.tablsCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as TablsModel;
          const id = a.payload.doc.id;
          return { id, ...data };
        }))
      );
  }

    getTabls(){
      return this.arrayTabls;
    }
}
