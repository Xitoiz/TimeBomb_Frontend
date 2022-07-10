import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs/internal/lastValueFrom';
import { Match } from 'src/app/model/match';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';
import { MatchService } from 'src/app/service/match.service';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
    selector: 'app-rejoindre',
    templateUrl: './rejoindre.component.html',
    styleUrls: ['./rejoindre.component.css']
})
export class RejoindreComponent implements OnInit {

    public match: Match = new Match();
    public listOfMatch: Array<Match> = new Array<Match>();
    public inAMatch: boolean = false;

    constructor(
        private srvMatch: MatchService,
        private authService: AuthService,
        private notificationService: NotificationService,
        private router: Router) { }

    ngOnInit(): void {
        this.initialisation();
    }

    private getUserSession(): User {
        return this.authService.userSession;
    }

    private async initialisation() {
        await this.reloadUserMatch();

        if (this.getUserSession().currentMatch?.state == "PLAYING" ) {
            return this.router.navigate(["/jouer"])
        }

        if (this.getUserSession().currentMatch?.state == "TERMINATED" ) {
            this.listOfMatch.push(this.getUserSession().currentMatch)
        }

        else {this.findAllPendingMatch()}
        return true;
    }

    private async reloadUserMatch() {
        await this.authService.reloadUserMatch();
    }

    private findAllPendingMatch() {
        this.srvMatch.findAllPendingMatch()
            .subscribe(
                response => this.listOfMatch = response)
    }

    public async creerMatch(): Promise<void> {
        // if (!this.match.name) {
        //     this.notificationService.errorAlert("NAME REQUIRED");
        //     return;
        // }
        await lastValueFrom(this.srvMatch.createMatch(this.match))
        .then(() => this.initialisation())
        .catch((event) => {
            if (event.error.message != undefined) {
                this.notificationService.errorAlert(event.error.message) }
            else { alert(event.message) };
        })
    }

    public async joinMatch(match: Match) {
        await lastValueFrom(this.srvMatch.joinMatch(match))
        .then(() => {
            this.initialisation()
        })
        .catch((event) => {
            if (event.error.message != undefined) { alert(event.error.message) }
            else { alert(event.message) };
        })
    }

    public async leaveMatch(match: Match) {
        await lastValueFrom(this.srvMatch.leaveMatch(match))
        .then(() => this.initialisation())
        .catch((event) => {
            if (event.error.message != undefined) { alert(event.error.message) }
            else { alert(event.message) };
        })
    }

    public async startMatch() {
        await lastValueFrom(this.srvMatch.startMatch())
        .then(() => this.router.navigate(["/jouer"]))
        .catch((event) => {
            if (event.error.message != undefined) { alert(event.error.message) }
            else { alert(event.message) };
        })
        .finally( () => this.reloadUserMatch())
    }

    public afficherJouer(match: Match): boolean {
        return (this.getUserSession().currentMatch?.state == "PLAYING") ;
    }

    public afficherDemarrer(match: Match): boolean {
        return (match.playerList.length > 3 && match.playerList.length < 9 && match.id == this.getUserSession().currentMatch?.id) ;
    }

    public afficherRejoindre(): boolean {
        return (this.getUserSession().currentMatch == undefined);
    }

    public afficherQuitter(match: Match): boolean {
        return (this.getUserSession().currentMatch != undefined && match.id == this.getUserSession().currentMatch?.id);
    }
}


