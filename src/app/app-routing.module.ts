import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreciosComponent } from './components/precios/precios.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { HomeComponent } from './components/home/home.component';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { AuthGuardService} from './services/auth-guard.service';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'precios', component: PreciosComponent},
  {
    path: 'protegida', 
    component: ProtegidaComponent,
    canActivate: [ AuthGuardService ]
  },
  {path: '**', pathMatch: 'full', redirectTo: 'home'},
];

export const APP_ROUTING = RouterModule.forRoot(routes);

 @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
