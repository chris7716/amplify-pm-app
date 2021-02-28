import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../service/employee.service';

@Component({
  selector: 'ngx-on-going',
  templateUrl: './on-going.component.html',
  styleUrls: ['./on-going.component.scss']
})
export class OnGoingComponent implements OnInit {

  projects = [];
  ongoingProjects = [];
  constructor(
    private _employeeService: EmployeeService,
  ) {
    this._employeeService.getEmployee()
      .then(res => {
        console.log(res);
        let user = res.data.employeesByUsername.items[0];
        this.projects = user.employeeProjects.items;
        this.ongoingProjects = this.projects.filter(item => item.project.status == 'ON-GOING');
      })
      .catch(err => {
        console.log(err);
      })
  }

  ngOnInit(): void {
  }

}
