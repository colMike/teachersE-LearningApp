import { Injectable } from '@angular/core';
import {tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';


interface BackgroundCheckRequest {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    codeOfConductFile: string;
    idFront: string;
    idBack: string;
    certificateOne: string;
    certificateTwo: string;
}

interface ServerResponse {
  message: string;
}


@Injectable({
  providedIn: 'root'
})
export class BackgroundService {

  rootUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  submitDocs(value: BackgroundCheckRequest) {
    return this.http.post<ServerResponse>(`${this.rootUrl}/teachers/background/sendDetailsAsEmail`, value)
        .pipe(
            tap((result) => {
              // this.setSession(value);
              // this.signedin$.next(true);
              console.log(result);
            })
        );

  }
}
