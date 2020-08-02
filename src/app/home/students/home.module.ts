import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomeComponent } from './home.component';
// import { StudentsModule } from './students/students.module';

import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';



@NgModule({
  declarations: [HomeComponent],
    imports: [
        CommonModule,
        // StudentsModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class InboxModule { }
