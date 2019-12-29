import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { TablsModel } from '../models/mesa.model';
import { menuModel } from '../models/menu.model';





@Injectable({
  providedIn: 'root'
})

export class WaiqueenService {

//variables para coleccion
 private tablsCollection: AngularFirestoreCollection<TablsModel>
 private menuCollection: AngularFirestoreCollection<menuModel>
//variable para arrays
 arrayTabls: Observable<TablsModel[]>;
 arraymens: Observable<menuModel[]>;

   constructor(private afs: AngularFirestore) {

    //Peticion de coleccion de mesas
       this.tablsCollection = afs.collection<TablsModel>('mesas');
    //Guardo coleccion en array
       this.arrayTabls = this.tablsCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as TablsModel;
          const id = a.payload.doc.id;
          return { id, ...data };
        }))
      );

    //Peticion de coleccion menu
    this.menuCollection = afs.collection<menuModel>('menu');
     //Guardo coleccion en array
     this.arraymens = this.menuCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as menuModel;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  //Funcion que retorna la data de mesa en un array
    getTabls(){
      return this.arrayTabls;
    }

  
    //Funcion que retorna la data de menu en un array
    getmens(){
      return this.arraymens;
    }
}
