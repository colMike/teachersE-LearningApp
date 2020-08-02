import {Component, OnInit} from '@angular/core';
import {TeacherAuthService} from './teacherAuth/teacher-auth.service';
import {CheckPageService} from './shared/check-page.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    signedin = false;

    currentPath = '/';

    constructor(
        private authService: TeacherAuthService,
        private data: CheckPageService,
    ) {
        this.data.currentMessage.subscribe(message => {
            setTimeout(() => {
                this.currentPath = message;
                // alert(this.currentPath);
            }, 0);
        });


        if (!localStorage.getItem('id_token')) {
            this.signedin = false;
        }
        this.authService.signedin$.subscribe((signedIn) => {
            this.signedin = signedIn;
        });


    }

    ngOnInit() {
        this.data.changeMessage(window.location.pathname);
    }

}
