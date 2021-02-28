import { Injectable } from '@angular/core';
import { API, Auth } from 'aws-amplify';
import * as queries from '../../graphql/queries';
import * as customQuaries from '../../graphql/custom-quaries';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private _authService: AuthService
  ) { }

  async listEmployees(): Promise<any> {
    const allEmployees = await API.graphql({ query: queries.listEmployees });
    return allEmployees;
  }

  async getEmployee(): Promise<any> {
    const user = await Auth.currentAuthenticatedUser();
    const employee = await API.graphql({ query: customQuaries.employeesByUsername, variables: { username: user.username }});
    return employee;
  }

}
