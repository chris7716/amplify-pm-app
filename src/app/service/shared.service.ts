import { Injectable } from '@angular/core';

export interface ProjectData {
  projectId: string;
  name: string;
  description: string;
  deadline: string;
  status: string;
  isChanged: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private data: ProjectData = {projectId: '', name: '', description: '', deadline: '', status: '', isChanged: false};

  constructor() { }

  setData(projectId, name, description, deadline, status){
    this.data.projectId = projectId;
    this.data.name = name;
    this.data.description = description;
    this.data.deadline = deadline;
    this.data.status = status;
    this.data.isChanged = false;
  }

  getData(): ProjectData{
    return this.data;
  }
}