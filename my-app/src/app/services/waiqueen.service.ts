import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { TablsModel } from '../models/mesa.model';



@Injectable({
  providedIn: 'root'
})

export class WaiqueenService {

  private url = "https://burguer-queen-7d0ee.firebaseio.com";

  //inyectando el servicio http
  constructor( private http:HttpClient) { }

  //Metodo para obtener lista de mesas
  getTabls(){
  return this.http.get(`${ this.url }/mesas.json`)
  .pipe(
    map( resp => this.createArray(resp))
   
  );
  }

  //Metodo para convertir el objeto en array
private createArray( tablsObje:object ){

  const tabls: TablsModel[] = [];
    if ( tablsObje === null ){return [];}

    //uso el metodo keys de javascript
  Object.keys(tablsObje).forEach( key => {

    const table: TablsModel = tablsObje[key];
    table.id = key;

    tabls.push(table);
  })

  return tabls;

}
}
