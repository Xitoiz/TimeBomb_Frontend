import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassementsComponent } from './component/classements/classements.component';
import { JouerComponent } from './component/jouer/jouer.component';
import { RejoindreComponent } from './component/rejoindre/rejoindre.component';
import { ConnexionComponent } from './component/connexion/connexion.component';
import { ResultatsComponent } from './component/resultats/resultats.component';
import { AdministrationComponent } from './component/administration/administration.component';
import { HistoriqueComponent } from './component/historique/historique.component';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent,
        ConnexionComponent,
        ClassementsComponent,
        ResultatsComponent,
        RejoindreComponent,
        JouerComponent,
        AdministrationComponent,
        HistoriqueComponent
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
