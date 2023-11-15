import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClipboardModule } from 'ngx-clipboard';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './mycomponents/header/header.component';
import { RenderingintodomComponent } from './mycomponents/renderingintodom/renderingintodom.component';
import { UpdatingelementComponent } from './mycomponents/updatingelement/updatingelement.component';
import { NessecaryreactupdatesComponent } from './mycomponents/nessecaryreactupdates/nessecaryreactupdates.component';
import { YoutubeComponent } from './mycomponents/youtube/youtube.component';
import { QuizComponent } from './mycomponents/quiz/quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RenderingintodomComponent,
    UpdatingelementComponent,
    NessecaryreactupdatesComponent,
    QuizComponent,
    YoutubeComponent,
  ],
  imports: [
    BrowserModule,
    
    FormsModule,
    ClipboardModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
