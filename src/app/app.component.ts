import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { User } from './model/user';
import { AuthService } from './service/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Timebomb';

    constructor(
        public authService: AuthService
    ) {}

    public seDeconnecter() {
        this.authService.logout();
    }

    public getUserSession(): User {
        return this.authService.userSession
    }
}
