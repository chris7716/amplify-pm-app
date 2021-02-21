import { Component, OnInit } from '@angular/core';

import { MENU_ITEMS } from './member-menu';

@Component({
  selector: 'ngx-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent {

  menu = MENU_ITEMS;

}
