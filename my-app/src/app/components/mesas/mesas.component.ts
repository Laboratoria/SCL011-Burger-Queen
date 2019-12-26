import { Component, OnInit } from '@angular/core';
import { TablsModel } from '../../models/mesa.model';
import { WaiqueenService } from '../../services/waiqueen.service';


@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.component.html',
  styleUrls: ['./mesas.component.css']
})
export class MesasComponent implements OnInit {

  // Declarando variable donde se almacena resp del getTabls
  tabls: TablsModel[] = [];
  

  //Inyecto mi servicio dentro del contructor para que la data cargue antes de la interfaz
  constructor(private waiqueenService:WaiqueenService) { }

  ngOnInit() {

    //Llamo el metodo getTabls creado en el services y me suscribo al evento
    this.waiqueenService.getTabls()
          .subscribe( resp =>{
             this.tabls = resp

          console.log(this.tabls);
            });
          
  }

  //Funcion obtener numero de mesa
  getTable(tableNumber:number){
    console.log(tableNumber);
  }
}
