import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembersRoutingModule } from './members-routing.module';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbCardModule } from '@nebular/theme';


@NgModule({
  declarations: [CreateComponent, ListComponent],
  imports: [
    CommonModule,
    MembersRoutingModule,
    Ng2SmartTableModule,
    NbCardModule,
  ]
})
export class MembersModule { }
