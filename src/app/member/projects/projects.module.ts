import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { OnGoingComponent } from './on-going/on-going.component';
import { OverdueComponent } from './overdue/overdue.component';
import { CompletedComponent } from './completed/completed.component';


@NgModule({
  declarations: [OnGoingComponent, OverdueComponent, CompletedComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
