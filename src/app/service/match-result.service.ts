import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatchResult } from '../model/match-result';
import { AppConfigService } from './app-config.service';

@Injectable({
  providedIn: 'root'
})
export class MatchResultService {

    private apiUrl: string = "";

    constructor(
        private appConfig: AppConfigService,
        private http: HttpClient)
            { this.apiUrl = this.appConfig.url + '/resultats';}

    public getAllMatchResult() {
        return this.http.get<Array<MatchResult>>(this.apiUrl, this.appConfig.httpOptions);
    }

    public listPlayer() {
        return this.http.get<Array<Object>>(this.apiUrl + "/list", this.appConfig.httpOptions);
    }

    public classement() {
        return this.http.get<Array<Object>>(this.apiUrl + "/classement", this.appConfig.httpOptions);
    }

    public resultat() {
        return this.http.get<Array<Object>>(this.apiUrl + "/resultat", this.appConfig.httpOptions);
    }

}
