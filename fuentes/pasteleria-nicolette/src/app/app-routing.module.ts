import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * Enrutador para la aplicacion, se declaran todos los 
 * modulos presentes en la aplicacion
 */
import { InicioComponent } from './inicio/inicio.component';
import { TortasComponent } from './tortas/tortas.component';
import { GalletasComponent } from './galletas/galletas.component';
import { EmporioComponent } from './emporio/emporio.component';
import { CotillonComponent } from './cotillon/cotillon.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { RecomendadosComponent } from './recomendados/recomendados.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';


const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path : 'inicio', component: InicioComponent },
  { path : 'tortas', component: TortasComponent },
  { path : 'galletas', component: GalletasComponent },
  { path : 'emporio', component: EmporioComponent },
  { path : 'cotillon', component: CotillonComponent },
  { path : 'nosotros', component: NosotrosComponent },
  { path : 'recomendado', component: RecomendadosComponent },
  { path : 'contacto', component: ContactoComponent },
  { path : 'detalle/:id', component: DetalleProductoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
