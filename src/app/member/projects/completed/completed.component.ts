import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { EmployeeService } from '../../../service/employee.service';

@Component({
  selector: 'ngx-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {

  projects = [];
  completedProjects = [];
  constructor(
    private _employeeService: EmployeeService,
    private _authService: AuthService,
  ) {
    this._employeeService.getEmployee()
      .then(res => {
        console.log(res);
        let user = res.data.employeesByUsername.items[0];
        this.projects = user.employeeProjects.items;
        this.completedProjects = this.projects.filter(item => item.project.status == 'COMPLETED');
        console.log(this.completedProjects);
      })
      .catch(err => {
        console.log(err);
      })
  }

  ngOnInit(): void {
  }

}
