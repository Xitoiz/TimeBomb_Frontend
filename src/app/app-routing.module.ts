import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationComponent } from './component/administration/administration.component';
import { ClassementsComponent } from './component/classements/classements.component';
import { ConnexionComponent } from './component/connexion/connexion.component';
import { HistoriqueComponent } from './component/historique/historique.component';
import { JouerComponent } from './component/jouer/jouer.component';
import { RejoindreComponent } from './component/rejoindre/rejoindre.component';
import { ResultatsComponent } from './component/resultats/resultats.component';
import { AuthGuard } from './model/auth.guard';

const routes: Routes = [
    { path: 'connect', component: ConnexionComponent },
    { path: 'jouer', component: JouerComponent,
        canActivate: [AuthGuard],
        data: {
            role: ['ADMIN','PLAYER']
        }},
    { path: 'rejoindre', component: RejoindreComponent,
        canActivate: [AuthGuard],
        data: {
            role: ['ADMIN','PLAYER']
        }},
    { path: 'historique', component: HistoriqueComponent,
        canActivate: [AuthGuard],
        data: {
            role: ['ADMIN','PLAYER']
        }},
    { path: 'resultats', component: ResultatsComponent },
    { path: 'classements', component: ClassementsComponent },
    { path: 'admin', component: AdministrationComponent,
        canActivate: [AuthGuard],
        data: {
          role: 'ADMIN'
        }},
    { path: '', redirectTo: 'connect', pathMatch: 'full' },
    { path: '**', component: ConnexionComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
