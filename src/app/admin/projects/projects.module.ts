import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { NbActionsModule, NbAlertModule, NbAutocompleteModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbIconModule, NbInputModule, NbListModule, NbRadioModule, NbSelectModule, NbUserModule } from '@nebular/theme';
import { FormsRoutingModule } from '../../pages/forms/forms-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';


@NgModule({
  declarations: [CreateComponent, ListComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    NbCardModule,
    NbIconModule,
    NbUserModule,
    NbAlertModule,
    NbButtonModule,
    NbListModule,
    NbAutocompleteModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    FormsRoutingModule,
    NbSelectModule,
    NbInputModule,
    NbActionsModule,
    Ng2SmartTableModule,
  ]
})
export class ProjectsModule { }
