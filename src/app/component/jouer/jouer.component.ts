import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { CardState } from 'src/app/enums/card-state';
import { CardType } from 'src/app/enums/card-type';
import { PlayerRole } from 'src/app/enums/player-role';
import { Card } from 'src/app/model/card';
import { Match } from 'src/app/model/match';
import { MatchProjection } from 'src/app/model/match-projection';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';
import { MatchService } from 'src/app/service/match.service';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
    selector: 'app-jouer',
    templateUrl: './jouer.component.html',
    styleUrls: ['./jouer.component.css']
})
export class JouerComponent implements OnInit {

    public match: Match;
    public nbDiffuse: number;
    public nbDiffuseLeft: number;
    public bomb: boolean;
    public role: PlayerRole;
    public done: boolean = false;

    constructor(
        private matchService: MatchService,
        private authService: AuthService,
        private notificationService: NotificationService
    ) { }

    ngOnInit(): void {
        this.getMatch();
    }

    private getUserSession(): User {
        return this.authService.userSession;
    }

    public async getMatch() {
        await lastValueFrom(this.matchService.getMatchProjectedById(this.getUserSession().currentMatch.id))
            .then(matchProjection => this.getInformation(matchProjection))
            .finally(() => this.done = true)
    }

    private getInformation(matchProjection: MatchProjection) {
        this.match = matchProjection.match;
        this.nbDiffuse = matchProjection.nbDiffuse;
        this.nbDiffuseLeft = matchProjection.nbDiffuseLeft;
        this.bomb = matchProjection.isBombInHand;
        this.role = matchProjection.matchRole;
    }

    public getHand(user: User): Array<Card> {
        let hand: Array<Card> = [];
        this.match?.cardList.forEach(card => {
            if (card.owner.id == user.id) {
                hand.push(card)
            }
        })
        return hand;
    }

    public getRole(user: User): String {
        let userSession = this.getUserSession()
        if (this.match.state == "TERMINATED") {
            return this.yourRole(this.match.playerList.find(userRequest => user.id == userRequest.id).playerRole)
        }
        if (userSession.id == user.id) {return this.yourRole(this.role)}
        return "autre";
    }

    public yourRole(role: PlayerRole): string {
        if (role==null || role == undefined) {return "autre"}
        if (role==PlayerRole.MORIARTY) { return "moriarty"}
        if (role==PlayerRole.SHERLOCK) { return "sherlock"}
        return "autre"
    }

    public getImageForCards(card: Card) {
        if (card.state == CardState.HIDDEN) {
            return "../../../assets/img/back.jpg";
        }
        if (card.type == CardType.BOMB) {
            return "../../../assets/img/bomb.jpg";
        }
        if (card.type == CardType.BAIT) {
            return "../../../assets/img/bait.jpg";
        }
        if (card.type == CardType.DIFFUSE) {
            return "../../../assets/img/diffuse.jpg";
        }
        return "";
    }

    public async playCard(card: Card) {
        await lastValueFrom(this.matchService.playCard(card))
            .then(() => this.getMatch())
            .catch((event) => {
                if (event.error.message != undefined) {
                    this.notificationService.errorAlert(event.error.message);
                } else { this.notificationService.errorAlert(event.message); }
            });
    }

}
