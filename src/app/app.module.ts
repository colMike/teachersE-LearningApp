import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SuiModule} from 'ng2-semantic-ui';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { TeacherAuthHttpInterceptor } from './teacherAuth/teacher-auth-http-interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeacherAuthModule } from './teacherAuth/teacher-auth.module';
import { AuthModule } from './studentAuth/auth.module';
import { HomeComponent } from './home/home.component';

import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent],
  imports: [SuiModule, BrowserModule, TeacherAuthModule, AuthModule, AppRoutingModule, HttpClientModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TeacherAuthHttpInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
