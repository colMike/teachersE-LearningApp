import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InboxRoutingModule } from './inbox-routing.module';
import { TeacherHomeComponent } from './teacherHome/teacher-home.component';
import { FinalComponent } from './final/final.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import { MajaribuComponent } from './majaribu/majaribu.component';


@NgModule({
  declarations: [TeacherHomeComponent, FinalComponent, MajaribuComponent],
    imports: [
        CommonModule,
        InboxRoutingModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class InboxModule { }
