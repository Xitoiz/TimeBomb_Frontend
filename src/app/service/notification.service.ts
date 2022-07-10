import { Injectable } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private notificationService: NotificationsService
    ) { }

    public errorAlert(message: String) {
        this.notificationService.error("Message d'erreur", message, {
            position: ['bottom', 'right'],
            timeOut: 3000,
            showProgressBar: true,
            pauseOnHover: true,
            clickToClose: true,
            clickIconToClose: false
          });
    }

    public successAlert(message: String) {
        this.notificationService.success("Message de validation", message, {
            position: ['bottom', 'right'],
            timeOut: 3000,
            showProgressBar: true,
            pauseOnHover: true,
            clickToClose: true,
            clickIconToClose: false
          });
    }
}
