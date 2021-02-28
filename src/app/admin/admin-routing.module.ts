import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [{
  path: '',
  component: AdminComponent,
  children: [
    {
      path: 'project',
      loadChildren: () => import('./projects/projects.module')
        .then(m => m.ProjectsModule),
    },
    {
      path: 'member',
      loadChildren: () => import('./members/members.module')
        .then(m => m.MembersModule),
    },
    {
      path: '',
      redirectTo: 'project',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
