import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
//Modulo de peticiones http
import { HttpClientModule } from '@angular/common/http'

//Rutas
import { AppRoutingModule } from './app-routing.module';

//Servicios
import { WaiqueenService } from '../app/services/waiqueen.service';

//Componentes
import { AppComponent } from './app.component';
import { startScreenComponent } from './components/startScreen/startScreen.component';
import { MenuComponent } from './components/menu/menu.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { MesasComponent } from './components/mesas/mesas.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    startScreenComponent,
    MenuComponent,
    PedidosComponent,
    MesasComponent,
    NavbarComponent,  
  ],
    imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    WaiqueenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
