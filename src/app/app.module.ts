import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './component/connexion/connexion.component';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdministrationComponent } from './administration/administration.component';
import { PlayerComponent } from './player/player.component';

@NgModule({
    declarations: [
        AppComponent,
        ConnexionComponent,
        AdministrationComponent,
        PlayerComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        SimpleNotificationsModule.forRoot()
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]})
export class AppModule { }
