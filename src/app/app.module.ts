import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// RUTAS
import { APP_ROUTES } from "./app.routes";

import { AppComponent } from "./app.component";

import { MDBBootstrapModule } from "angular-bootstrap-md";
import { FormsModule } from "@angular/forms";
import { PwComponent } from "./components/pw/pw.component";
import { NavbarComponent } from "./components/pw/partials/navbar/navbar.component";
import { FooterComponent } from "./components/pw/partials/footer/footer.component";
import { InicioComponent } from "./components/pw/inicio/inicio.component";
import { NosotrosComponent } from "./components/pw/nosotros/nosotros.component";
import { AliadosComponent } from "./components/pw/aliados/aliados.component";
import { AlfagasComponent } from './components/pw/aliados/alfagas/alfagas.component';
import { AuregasComponent } from './components/pw/aliados/auregas/auregas.component';
import { GasCanonComponent } from './components/pw/aliados/gas-canon/gas-canon.component';
import { GasLuxComponent } from './components/pw/aliados/gas-lux/gas-lux.component';
import { HaciendaNuevaComponent } from './components/pw/aliados/hacienda-nueva/hacienda-nueva.component';
import { ServiciosComponent } from './components/pw/servicios/servicios.component';

@NgModule({
  declarations: [
    AppComponent,
    PwComponent,
    NavbarComponent,
    FooterComponent,
    InicioComponent,
    NosotrosComponent,
    AliadosComponent,
    AlfagasComponent,
    AuregasComponent,
    GasCanonComponent,
    GasLuxComponent,
    HaciendaNuevaComponent,
    ServiciosComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    APP_ROUTES,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
