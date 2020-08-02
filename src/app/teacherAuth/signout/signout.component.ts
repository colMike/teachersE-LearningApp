import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherAuthService } from '../teacher-auth.service';
import {CheckPageService} from '../../shared/check-page.service';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.css']
})
export class SignoutComponent implements OnInit {
  constructor(
      private authService: TeacherAuthService,
      private router: Router,
      private data: CheckPageService
  ) {}

  ngOnInit() {
    this.data.changeMessage(window.location.pathname);
    this.authService.signout();
    // this.router.navigateByUrl('/');
    window.open('/', '_self');
  }
}
