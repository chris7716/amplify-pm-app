import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../service/employee.service';

@Component({
  selector: 'ngx-overdue',
  templateUrl: './overdue.component.html',
  styleUrls: ['./overdue.component.scss']
})
export class OverdueComponent implements OnInit {

  projects = [];
  overdueProjects = [];
  constructor(
    private _employeeService: EmployeeService,
  ) {
    this._employeeService.getEmployee()
      .then(res => {
        console.log(res);
        let user = res.data.employeesByUsername.items[0];
        this.projects = user.employeeProjects.items;
        this.overdueProjects = this.projects.filter(item => item.project.status == 'OVERDUE');
      })
      .catch(err => {
        console.log(err);
      })
  }

  ngOnInit(): void {
  }

}
