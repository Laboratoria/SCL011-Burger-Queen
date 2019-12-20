import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//Rutas
import { AppRoutingModule } from './app-routing.module';

//Servicios

//Componentes
import { AppComponent } from './app.component';
import { startScreenComponent } from './components/startScreen/startScreen.component';
import { MenuComponent } from './components/menu/menu.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { MesasComponent } from './components/mesas/mesas.component';




@NgModule({
  declarations: [
    AppComponent,
    startScreenComponent,
    MenuComponent,
    PedidosComponent,
    MesasComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    FontAwesomeModule
    
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
