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
import { CheckoutComponent } from './checkout/checkout.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { CompraFinalizadaComponent } from './compra-finalizada/compra-finalizada.component';

/* Habilitar HTTP */
import { HttpClientModule } from '@angular/common/http';

/* Habilitar llamadas a servicios en memoria */
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

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
    RecomendadosComponent,
    CheckoutComponent,
    DetalleProductoComponent,
    CompraFinalizadaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {
        dataEncapsulation: false
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
