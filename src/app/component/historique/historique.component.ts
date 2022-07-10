import { Component, OnInit } from '@angular/core';
import { MatchResult } from 'src/app/model/match-result';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';
import { MatchResultService } from 'src/app/service/match-result.service';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {

    public matchResultList: Array<MatchResult> = new Array<MatchResult>();
    constructor(private srvMatchResult: MatchResultService,
        private authService: AuthService) { }

    ngOnInit(): void {
        this.getAllMatchResult();
    }

    private getUserSession(): User {
        return this.authService.userSession
    }

    public getAllMatchResult() {
        (this.srvMatchResult.getAllMatchResult())
            .subscribe(response => {
                this.matchResultList = response.filter(matchResult => matchResult.winners.find(player => player.id == this.getUserSession().id) || matchResult.loosers.find(player => player.id == this.getUserSession().id));
            });
    }

}
