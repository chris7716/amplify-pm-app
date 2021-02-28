import { ChangeDetectionStrategy, Component, ViewChild, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import { format } from 'date-fns';
import { LocalDataSource } from 'ng2-smart-table';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { EmployeeService } from '../../../service/employee.service';
import { ProjectService } from '../../../service/project.service';
@Component({
  selector: 'ngx-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  options: any[];
  filteredOptions$: Observable<string[]>;

  settings = {
    hideSubHeader: true,
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      name: {
        title: 'Name',
        type: 'string',
      },
      email: {
        title: 'Email',
        type: 'string',
      },
    },
  };

  data = [
    {
      value: "Option 1",
      name: "OPTION 1"
    },
    {
      value: "Option 2",
      name: "OPTION 2"
    },
    {
      value: "Option 3",
      name: "OPTION 3"
    },
  ];

  source: LocalDataSource = new LocalDataSource();
  members = [];
  projectDetails: any = {};

  @ViewChild('autoInput') input;

  constructor(
    private _employeeService: EmployeeService,
    private _projectService: ProjectService,
    private _toastrService: NbToastrService,
    ){

  }

  projectForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    deadline: new FormControl('', Validators.required),
    selectedName: new FormControl(''),
  });

  ngOnInit() {
    this.loadEmployees();
  }

  private filter(data): string[] {
    console.log(data);
    const filterValue = data.toLowerCase();
    return this.options.filter(optionValue => optionValue.name.toLowerCase().includes(filterValue));
  }

  getFilteredOptions(value: string): Observable<string[]> {
    return of(value).pipe(
      map(filterString => this.filter(filterString)),
    );
  }

  onChange() {
    this.filteredOptions$ = this.getFilteredOptions(this.input.nativeElement.value);
  }

  onSelectionChange($event) {
    console.log($event);
    this.input.nativeElement.value = $event.name;
    this.members.push($event);
    this.source.load(this.members);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  submit() {
    console.log(this.projectForm.value.name);
    this.projectDetails.name = this.projectForm.value.name;
    this.projectDetails.description = this.projectForm.value.description;
    this.projectDetails.endingDate = format( new Date(this.projectForm.value.deadline), 'yyyy-MM-dd' );

    this._projectService.saveProject(this.projectDetails)
      .then(res => {
        console.log(res);
        let projectId = res.data.createProject.id;
        this.saveEmployeeProjects(projectId);
      })
      .then(res => {
        this.projectForm.reset();
        this.members = [];
        this.filteredOptions$ = null;
        this.loadEmployees();
        this.source.load(this.members);
        this.notifyUser();
      })
      .catch(err => {
        console.log(err);
      })
  }

  saveEmployeeProjects(projectId) {
    this.members.reduce((promiseChain, item) => {
      let data: any = {};
      data.projectId = projectId;
      data.memberId = item.id;
      return promiseChain.then(() => new Promise((resolve) => {
        this._projectService.saveProjectMembers(data);
      }));
    }, Promise.resolve())
  }

  loadEmployees() {
    this._employeeService.listEmployees()
      .then(res => {
        this.options = res.data.listEmployees.items;
      }
    );
    this.filteredOptions$ = of(this.options);
  }

  notifyUser() {
    let status = 'success';
    this._toastrService.show(
      status || 'Success',
      `Project created!`,
      { status });
  }

}
