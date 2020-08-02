import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TeacherAuthService} from '../teacher-auth.service';
import {CheckPageService} from '../../shared/check-page.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
    authForm = new FormGroup({
        email: new FormControl('', [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(35),
            Validators.pattern(/^(.+)@(.+)$/)
        ]),
        password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)])
    });

    constructor(
        private authService: TeacherAuthService,
        private router: Router,
        private data: CheckPageService
    ) {
    }

    ngOnInit() {
        this.data.changeMessage(window.location.pathname);
    }

    onSubmit() {
        if (this.authForm.invalid) {
            return;
        }

        this.authService.signin(this.authForm.value).subscribe({
            next: () => {

                this.router.navigateByUrl('/teacher/steps');
            },
            error: (error) => {
                // tslint:disable-next-line:triple-equals
                if (error.status == 401) {
                    this.authForm.setErrors({credentials: true});
                }
            }
        });
    }
}
