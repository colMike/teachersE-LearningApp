import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, of} from 'rxjs';
import {delay, tap} from 'rxjs/operators';
import * as moment from 'moment';

interface EmailAvailableResponse {
    available: boolean;
}

interface SignupCredentials {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

interface JwtResponse {
    token: string;
    expiresIn: string;
}

interface SignedinResponse {
    authenticated: boolean;
    username: string;
}

interface SigninCredentials {
    email: string;
    password: string;
}

@Injectable({
    providedIn: 'root'
})
export class TeacherAuthService {

    // rootUrl = 'http://localhost:8181/api';
    rootUrl = 'http://46.101.233.134/app2/api';

    signedin$ = new BehaviorSubject(false);

    constructor(private http: HttpClient) {
    }

    emailAvailable(email: string) {
        return this.http.post<EmailAvailableResponse>(
            `${this.rootUrl}/users/email`,
            {
                email
            }
        );
    }

    signup(credentials: SignupCredentials) {
        return this.http
            .post<JwtResponse>(`${this.rootUrl}/users/register`, credentials)
            .pipe(
                tap((value) => {
                    this.setSession(value);
                    this.signedin$.next(true);
                })
            );
    }

    signin(credentials: SigninCredentials) {
        return this.http.post(`${this.rootUrl}/users/login`, credentials).pipe(
            tap((value: JwtResponse) => {
                this.setSession(value);
                this.signedin$.next(true);
            })
        );
    }

    checkAuth() {
        return of({}).pipe(
            tap(() => {
                const expiration = localStorage.getItem('expires_at');
                const expiresAt = new Date(expiration);
                this.signedin$.next(moment().isBefore(expiresAt));
            })
        );
    }

    signout() {
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        // this.signedin$.next(false);
    }

    setSession(value: JwtResponse) {

        const utcTime = value.expiresIn;

        const localDate = moment.utc(utcTime ).local().format('YYYY-MM-DD HH:mm:ss');

        localStorage.setItem('id_token', value.token);
        localStorage.setItem('expires_at', localDate );
    }
}
