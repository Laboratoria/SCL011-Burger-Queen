import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { startScreenComponent } from './components/startScreen/startScreen.component';

const ROUTES: Routes = [
{ path: 'home', component:startScreenComponent },
{ path: '', pathMatch: 'full', redirectTo: 'home' },
{ path: '**', component: startScreenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
