import { Injectable } from '@angular/core';
import { API } from 'aws-amplify';
import * as mutations from '../../graphql/mutations';
import * as quaries from '../../graphql/queries';
import * as customQuaries from '../../graphql/custom-quaries';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  async saveProject(data): Promise<any> {
    const projectDetails = {
      description: data.description,
      endingDate: data.endingDate,
      name: data.name,
      status: 'PENDING'
    };
    console.log(data);
    console.log(projectDetails);
    const newProject = await API.graphql({ query: mutations.createProject, variables: {input: projectDetails}});
    return newProject;
  }

  async saveProjectMembers(data): Promise<any> {
    console.log(data);
    const employeeProject = {
      projectId: data.projectId,
      employeeId: data.memberId
    };
    return API.graphql({ query: mutations.createEmployeeProject, variables: {input: employeeProject}});
  }

  async getAllProjects(): Promise<any> {
    return API.graphql({ query: customQuaries.listProjects });
  }

  async updateProject(data): Promise<any> {
    const projectDetails = {
      id: data.id,
      description: data.description,
      endingDate: data.endingDate,
      name: data.name,
      status: data.status
    };
    return API.graphql({ query: mutations.updateProject, variables: {input: projectDetails}});
  }

  async searchProjectByStatusByName(data): Promise<any> {
    const filterParams = {
      status: data.status,
      name: {
        beginsWith: data.name
      }
    }
    const projects = await API.graphql({query: customQuaries.projectsByStatusByName, variables: filterParams});
    return projects;
  }

  async searchProjectsByStatus(data): Promise<any> {
    const filterParams = {
      status: data.status
    }
    const projects = await API.graphql({query: customQuaries.projectsByStatus, variables: filterParams});
    return projects;
  }

}
