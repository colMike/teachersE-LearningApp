import {NgModule} from '@angular/core';
import {NoPreloading, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';


const routes: Routes = [
    {path: '', component: HomeComponent},

    {
        path: 'teacher',
        loadChildren: () =>
            import('./home/teacher/inbox.module').then(mod => mod.InboxModule)
    },
    {
        path: 'student',
        loadChildren: () =>
            import('./home/students/inbox.module').then(res => res.InboxModule)
    },

    {path: '**', component: NotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {preloadingStrategy: NoPreloading})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
