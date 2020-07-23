import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TeacherHomeComponent} from './teacherHome/teacher-home.component';
import {FinalComponent} from './final/final.component';
import {MajaribuComponent} from './majaribu/majaribu.component';

const routes: Routes = [
    {path: '', component: TeacherHomeComponent},
    {path: 'final', component: FinalComponent},
    {path: 'majaribu', component: MajaribuComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InboxRoutingModule {
}
