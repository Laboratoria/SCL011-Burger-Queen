import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { startScreenComponent } from './components/startScreen/startScreen.component';
import {MenuComponent } from './components/menu/menu.component';
import{PedidosComponent} from './components/pedidos/pedidos.component';



const ROUTES: Routes = [
{ path: 'home', component:startScreenComponent },
{ path: 'menu', component:MenuComponent },
{ path: 'pedidos', component:PedidosComponent},
{ path: '', pathMatch: 'full', redirectTo: 'home' },
{ path: '**', component: startScreenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
