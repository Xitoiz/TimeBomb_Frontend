import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { User } from '../model/user';
import { AppConfigService } from './app-config.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl: string = "";

  constructor(
    public appConfig: AppConfigService,
    private http: HttpClient) {
        this.apiUrl = this.appConfig.url + '/user';
    }

    public findByLogin(user: User) {
        return this.http.post<User>(this.apiUrl + "/login", user);
    }

    public saveUser(user: User) {
        return this.http.post<User>(this.apiUrl + "/inscription", user);
    }
}

