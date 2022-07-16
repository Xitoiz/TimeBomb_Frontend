import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AccountType } from '../enums/account-type';
import { User } from '../model/user';
import { AppConfigService } from './app-config.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    public appConfig: AppConfigService,
    private http: HttpClient) {
        //this.apiUrl = this.appConfig.url + '/user';
    }

    public findByLogin(user: User) {
        if (user.login == "player" && user.password == "player") {
            return new User(undefined, "player", "player", "player", AccountType.PLAYER)
        }
        if (user.login == "admin" && user.password == "admin") {
            return new User(undefined, "admin", "admin", "admin", AccountType.ADMIN)
        }
        return null;
    }

}

