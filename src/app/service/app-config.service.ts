import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

    public url: string = "http://localhost:8181/api/v1";
    public httpOptions: Object = { headers: new HttpHeaders() };

    constructor() {}

    public setCredentials(header: string) {
        let headers: HttpHeaders = new HttpHeaders();
        let basicAuth = 'Basic ' + btoa(header);

        headers = headers.append('Authorization', basicAuth);

        this.httpOptions = { headers: headers };
    }

}
