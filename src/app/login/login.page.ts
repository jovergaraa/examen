import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  constructor(private authSvc: AuthService,private alertCtrl: AlertController, private router: Router) {}

  async onLogin(email:string, password:string) {
    try {
      const user = true;
      if (user) {
        const isVerified = true;
        console.log(user)
        this.redirectUser(isVerified);
        this.router.navigateByUrl('/home',{replaceUrl:true});
      }
    } catch (error) {
      this.alertPresent('Login failed','Please try again!!');
    }
  }

  async onLoginGoogle() {
    try {
      const user = await this.authSvc.loginGoogle();
      if (user) {
        const isVerified = this.authSvc.isEmailVerified(user);
        this.redirectUser(isVerified);
        this.router.navigateByUrl('/home',{replaceUrl:true});
      }
    } catch (error) {
      console.log('Error->', error);
    }
  }

  private redirectUser(isVerified: boolean): void {
    if (isVerified) {
      this.router.navigate(['admin']);
    } else {
      this.router.navigate(['verify-email']);
    }
  }

  async alertPresent(header:string,message:string){
    const alert = await this.alertCtrl.create({
      header:header,
      message:message,
      buttons:['OK'],
    });
    await alert.present();
  }
}
