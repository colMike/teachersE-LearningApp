import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatchPassword} from '../validators/match-password';
import {UniqueEmail} from '../validators/unique-email';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    authForm = new FormGroup(
        {
            firstName: new FormControl('', [
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(20)
            ]),
            lastName: new FormControl('', [
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(20)
            ]),
            email: new FormControl(
                '',
                [
                    Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(35),
                    Validators.pattern(/^(.+)@(.+)$/)
                ],
                [this.uniqueEmail.validate]
            ),
            password: new FormControl('', [
                Validators.required,
                Validators.minLength(4),
                Validators.maxLength(20)
            ]),
            passwordConfirmation: new FormControl('', [
                Validators.required,
                Validators.minLength(4),
                Validators.maxLength(20)
            ])
        },
        {validators: [this.matchPassword.validate]}
    );

    constructor(
        private router: Router,
        private matchPassword: MatchPassword,
        private uniqueEmail: UniqueEmail,
        private authService: AuthService
    ) {
    }

    ngOnInit() {
    }

    onSubmit() {
        if (this.authForm.invalid) {
            return;
        }

        this.authService.signup(this.authForm.value).subscribe({
            next: response => {
                // Navigate to some other route
                this.router.navigateByUrl('/inbox');
            },
            error: err => {
                if (!err.status) {
                    this.authForm.setErrors({noConnection: true});
                } else {
                    this.authForm.setErrors({unknownError: true});
                }
            }
        });
    }
}
