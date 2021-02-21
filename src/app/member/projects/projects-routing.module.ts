import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompletedComponent } from './completed/completed.component';
import { OnGoingComponent } from './on-going/on-going.component';
import { OverdueComponent } from './overdue/overdue.component';

const routes: Routes = [
  {
    path: 'on-going',
    component: OnGoingComponent,
  },
  {
    path: 'overdue',
    component: OverdueComponent,
  },
  {
    path: 'completed',
    component: CompletedComponent,
  },
  {
    path: '',
    redirectTo: 'on-going',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
