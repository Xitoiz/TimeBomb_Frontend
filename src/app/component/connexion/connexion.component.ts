import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';

@Component({
	selector: 'app-connexion',
	templateUrl: './connexion.component.html',
	styleUrls: ['./connexion.component.css'],
})
export class ConnexionComponent {
	public user: User = new User();
    public inscription: boolean = false;

	constructor(
        public authService: AuthService) {}

	public seConnecter() {
        this.authService.login(this.user);
    }

    public async inscrire() {
        await this.authService.signIn(this.user);
        this.inscription = false;
    }

    public signInBoolean(): void {
        this.inscription = true;
    }

    public logInBoolean(): void {
        this.inscription = false;
    }

}
