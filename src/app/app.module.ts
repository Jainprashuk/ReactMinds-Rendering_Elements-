import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './mycomponents/header/header.component';
import { RenderingintodomComponent } from './mycomponents/renderingintodom/renderingintodom.component';
import { UpdatingelementComponent } from './mycomponents/updatingelement/updatingelement.component';
import { NessecaryreactupdatesComponent } from './mycomponents/nessecaryreactupdates/nessecaryreactupdates.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RenderingintodomComponent,
    UpdatingelementComponent,
    NessecaryreactupdatesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
