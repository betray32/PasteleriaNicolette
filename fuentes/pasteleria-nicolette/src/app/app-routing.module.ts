import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * Enrutador para la aplicacion, se declaran todos los 
 * modulos presentes en la aplicacion
 */
import { InicioComponent } from './inicio/inicio.component';
import { TortasComponent } from './tortas/tortas.component';


const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path : 'inicio', component: InicioComponent },
  { path : 'tortas', component: TortasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
