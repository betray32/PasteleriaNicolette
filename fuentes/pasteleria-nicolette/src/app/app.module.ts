import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TortasComponent } from './tortas/tortas.component';
import { GalletasComponent } from './galletas/galletas.component';
import { EmporioComponent } from './emporio/emporio.component';
import { CotillonComponent } from './cotillon/cotillon.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { RecomendadosComponent } from './recomendados/recomendados.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TortasComponent,
    GalletasComponent,
    EmporioComponent,
    CotillonComponent,
    InicioComponent,
    ContactoComponent,
    NosotrosComponent,
    RecomendadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
