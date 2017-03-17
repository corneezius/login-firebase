import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
import { moveIn } from '../router.animations';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [moveIn()],
  host: {'[@moveIn]':''}
})
export class LoginComponent implements OnInit {
  error: any;

  //we use dependency injection for AF and Router
  constructor(public af: AngularFire, private router: Router) {
    //we look for a user if its logged in and redirected if so
    this.af.auth.subscribe(auth => {
      if(auth){
        this.router.navigateByUrl('/members');
      }
    });
  }


loginFb(){
  this.af.auth.login({
    provider: AuthProviders.Facebook,
    method: AuthMethods.Popup,
  })
  .then((success) => {
        this.router.navigate(['/members']);
      })
  .catch((err) => {
          this.error = err;
      })
  }

  loginGoogle() {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    })
    .then((success) => {
      this.router.navigate(['/members']);
    })
    .catch((err) => {
      this.error = err;
    })
  }


  ngOnInit() {
  }

}
