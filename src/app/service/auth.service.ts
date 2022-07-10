import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom, of } from 'rxjs';
import { AccountType } from '../enums/account-type';
import { User } from '../model/user';
import { AppConfigService } from './app-config.service';
import { MatchService } from './match.service';
import { NotificationService } from './notification.service';
import { UserService } from './user.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private isLogin = false;
    public userSession: User;

    constructor(
        public appConfig: AppConfigService,
        private userService: UserService,
        private matchService: MatchService,
        private notificationService: NotificationService,
        private router: Router) {}


    public async reloadUserMatch() {
        await lastValueFrom(this.matchService.getMine())
            .then(match => {
                this.userSession.currentMatch = match
            })
    }

    public async login(user: User): Promise<void> {
        await lastValueFrom(this.userService.findByLogin(user))
            .then(userResp => {
                this.appConfig.setCredentials(user.login + ":" + user.password);

                this.userSession = userResp;
                this.userSession.login = user.login;
                this.userSession.password = user.password;

                this.isLogin = true;
                if (this.userSession.currentMatch?.state == 'PLAYING') {this.router.navigate(["/jouer"])}
                else {this.router.navigate(["/rejoindre"])}
            })
            .catch((event) => {
                if (event.error.message != undefined) {
                    this.notificationService.errorAlert(event.error.message); }
                else { alert(event.message); }
            });
    }

    public async signIn(user: User) {
        await lastValueFrom(this.userService.saveUser(user))
            .then(() => {
                this.notificationService.successAlert("Votre inscription a été validée")
            })
            .catch((event) => {
                if (event.error.message != undefined) {
                    this.notificationService.errorAlert(event.error.message);
                } else { alert(event.message); }
            });
    }

    public logout() {
        this.isLogin = false;
        this.userSession = new User();
        this.router.navigate(["/connexion"])
    }

    public isLoggedIn() {
        return this.isLogin;
    }

    public getRole(): AccountType {
        return this.userSession.accountType;
    }

}
