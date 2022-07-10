import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from '../model/card';
import { Match } from '../model/match';
import { MatchProjection } from '../model/match-projection';
import { AppConfigService } from './app-config.service';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

    private apiUrl: string = "";

    constructor(
        private appConfig: AppConfigService,
        private http: HttpClient) {
          this.apiUrl = this.appConfig.url + '/match';
        }

    public getMine() {
        return this.http.get<Match>(this.apiUrl + "/mine", this.appConfig.httpOptions);
    }

    public getMatchProjectedById(id: number) {
        return this.http.get<MatchProjection>(this.apiUrl + "/projection/" + id, this.appConfig.httpOptions)
    }

    public findAllPendingMatch() {
        return this.http.get<Array<Match>>(this.apiUrl + "/pending", this.appConfig.httpOptions)
    }

    public createMatch(match: Match) {
        return this.http.post(this.apiUrl + "/create", match, this.appConfig.httpOptions)
    }

    public joinMatch(match: Match) {
        return this.http.post(this.apiUrl + "/join", match, this.appConfig.httpOptions)
    }

    public leaveMatch(match: Match) {
        return this.http.post(this.apiUrl + "/leave", match, this.appConfig.httpOptions)
    }

    public startMatch() {
        return this.http.get(this.apiUrl + "/start", this.appConfig.httpOptions)
    }

    public playCard(card: Card) {
        return this.http.post(this.apiUrl + "/play", card, this.appConfig.httpOptions)
    }
}
