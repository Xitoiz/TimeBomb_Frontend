import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationComponent } from './administration/administration.component';
import { ConnexionComponent } from './component/connexion/connexion.component';
import { AuthGuard } from './model/auth.guard';
import { PlayerComponent } from './player/player.component';

const routes: Routes = [
    { path: 'conenxion', component: ConnexionComponent },
    { path: 'player', component: PlayerComponent,
        canActivate: [AuthGuard],
        data: {
        role: ['ADMIN','PLAYER']
        }},
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
