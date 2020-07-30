import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {SelectRoleComponent} from './home/select-role/select-role.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'select', component: SelectRoleComponent},
    {
        path: 'teacher',
        loadChildren: () =>
            import('./teacher/inbox.module').then(mod => mod.InboxModule)
    },
    {path: '**', component: NotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
