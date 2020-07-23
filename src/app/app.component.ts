import {Component, OnInit} from '@angular/core';
import {AuthService} from './auth/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    signedin = false;

    constructor(private authService: AuthService) {
      if (!localStorage.getItem('id_token')) {
        this.signedin = false;
      }
      this.authService.signedin$.subscribe((signedIn) => {
            this.signedin = signedIn;
        });


    }

    ngOnInit() {
    }
}
