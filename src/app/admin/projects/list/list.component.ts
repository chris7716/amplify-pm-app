import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NbDialogService, NbThemeService, NbToastrService } from '@nebular/theme';
import { format } from 'date-fns';
import { ProjectService } from '../../../service/project.service';
import { SharedService } from '../../../service/shared.service';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'ngx-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  currentTheme: string;
  themeSubscription: any;
  projects =[];
  projectDetails: any = {};
  searchData: any ={};
  @ViewChild('contentTemplate', { static: true }) contentTemplate: TemplateRef<any>;

  constructor(
    private themeService: NbThemeService,
    private _projectService: ProjectService,
    private _dialogService: NbDialogService,
    private _sharedService: SharedService,
    private _toastrService: NbToastrService) {
    this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
      this.currentTheme = theme.name;
    });
    this.listProjects();
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }

  listProjects() {
    this._projectService.getAllProjects()
      .then(res => {
        console.log(res);
        this.projects = res.data.listProjects.items;
        console.log(this.projects);
      })
      .catch(err => {
        console.log(err);
      })
  }

  openWindow(contentTemplate, object) {
    console.log(object);
    this._sharedService.setData(object.id, object.name, object.description, object.deadline, object.status);
    this._dialogService.open(UpdateComponent)
      .onClose.subscribe(data => this.updateProject(data));
  }

  async updateProject(obj){
    if (obj.isChanged) {
      console.log(obj);
      this.projectDetails.id = obj.projectId;
      this.projectDetails.name = obj.name;
      this.projectDetails.description = obj.description;
      this.projectDetails.endingDate = format( new Date(obj.deadline), 'yyyy-MM-dd' );
      this.projectDetails.status = obj.status;
      console.log(this.projectDetails);
  
      this._projectService.updateProject(this.projectDetails)
        .then(res => {
          console.log(res);
          this.showToast('top-right', 'success');
          this.projectDetails = {};
          this.listProjects();
        })
        .catch(err => {
          console.log(err);
        })
    }
  }

  searchProjects() {
    console.log(this.searchData);
    if (this.searchData.status == "ALL") {
      this.listProjects();
    } else if(this.searchData.name == null) {
      this._projectService.searchProjectsByStatus(this.searchData)
      .then(res => {
        console.log(res);
        this.projects = res.data.projectsByStatus.items;
      })
    } else {
      this._projectService.searchProjectByStatusByName(this.searchData)
      .then(res => {
        this.projects = res.data.projectsByStatusByName.items;
      })
    }
  }

  showToast(position, status) {
    this._toastrService.show(
      'Order updated!',
      `Success`,
      { position, status });
  }

}
