import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
//Modulos de firebase
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
//Modulo de peticiones http
import { HttpClientModule } from '@angular/common/http'

//Pipes
import { FilterPipe } from './pipe/filter.pipe';



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
import { BurguerComponent } from './components/menu/burguer/burguer.component';


@NgModule({
  declarations: [
    AppComponent,
    startScreenComponent,
    MenuComponent,
    PedidosComponent,
    MesasComponent,
    NavbarComponent,
    BurguerComponent,
    FilterPipe,
    
  ],
    imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // Necesario para las funciones de base de datos
    AngularFireAuthModule, // Necesario para las funciones de autentificacion
    AngularFireStorageModule //Necesario para las funciones de almacenamiento
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    WaiqueenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
