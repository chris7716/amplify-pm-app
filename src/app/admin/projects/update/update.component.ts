import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { ProjectData, SharedService } from '../../../service/shared.service';

@Component({
  selector: 'ngx-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  data: ProjectData;

  constructor(private _sharedService: SharedService, protected ref: NbDialogRef<UpdateComponent>) {
    this.data = this._sharedService.getData();
   }

  ngOnInit(): void {
  }

  submit(){
    this.data.isChanged = true;
    this.ref.close(this.data);
  }

}
