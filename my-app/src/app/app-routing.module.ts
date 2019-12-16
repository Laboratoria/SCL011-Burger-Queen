import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { startScreenComponent } from './components/startScreen/startScreen.component';
import {MenuComponent } from './components/menu/menu.component';



const ROUTES: Routes = [
{ path: 'home', component:startScreenComponent },
{ path: 'menu', component:MenuComponent },
{ path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
