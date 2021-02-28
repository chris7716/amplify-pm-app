import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { OnGoingComponent } from './on-going/on-going.component';
import { OverdueComponent } from './overdue/overdue.component';
import { CompletedComponent } from './completed/completed.component';
import { NbButtonModule, NbCardModule, NbIconModule, NbListModule, NbUserModule } from '@nebular/theme';


@NgModule({
  declarations: [OnGoingComponent, OverdueComponent, CompletedComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    NbCardModule,
    NbIconModule,
    NbUserModule,
    NbButtonModule,
    NbListModule,
  ]
})
export class ProjectsModule { }
