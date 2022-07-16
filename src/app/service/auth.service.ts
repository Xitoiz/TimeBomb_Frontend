import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AccountType } from '../enums/account-type';
import { User } from '../model/user';
import { AppConfigService } from './app-config.service';
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
        private router: Router) {}

    public async login(user: User): Promise<void> {
        let userResp: User = this.userService.findByLogin(user)
        console.log(userResp);
        if (userResp == null) {
            alert("Erreur sur les identifiants")
        }
        //this.appConfig.setCredentials(user.login + ":" + user.password);

        this.userSession = userResp;
        this.userSession.login = user.login;
        this.userSession.password = user.password;

        this.isLogin = true;
        this.router.navigate(['/player'])
    }

    public async signIn(user: User) {
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
