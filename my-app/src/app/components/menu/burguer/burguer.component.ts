import { Component, OnInit } from '@angular/core';
import { menuModel } from '../../../models/menu.model';
import { WaiqueenService} from '../../../services/waiqueen.service';


@Component({
  selector: 'app-burguer',
  templateUrl: './burguer.component.html',
  styleUrls: ['./burguer.component.css']
})
export class BurguerComponent implements OnInit {

  //Varible para almacenar lo que retorna la funcion que esta alojada en el servicio
  menus: menuModel[] = [];
  //inyecto mi servicion
  constructor(private waiqueenservice:WaiqueenService) { }

  ngOnInit() {
  
   this.waiqueenservice.getmens()
        .subscribe( resp => {
          this.menus = resp

          console.log(this.menus);
        })

  }

}
