/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateEmployeeInput = {
  id?: string | null,
  username: string,
  name: string,
  email: string,
  type: string,
};

export type ModelEmployeeConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  type?: ModelStringInput | null,
  and?: Array< ModelEmployeeConditionInput | null > | null,
  or?: Array< ModelEmployeeConditionInput | null > | null,
  not?: ModelEmployeeConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateEmployeeInput = {
  id: string,
  username?: string | null,
  name?: string | null,
  email?: string | null,
  type?: string | null,
};

export type DeleteEmployeeInput = {
  id?: string | null,
};

export type CreateEmployeeProjectInput = {
  id?: string | null,
  employeeId: string,
  projectId: string,
};

export type ModelEmployeeProjectConditionInput = {
  employeeId?: ModelIDInput | null,
  projectId?: ModelIDInput | null,
  and?: Array< ModelEmployeeProjectConditionInput | null > | null,
  or?: Array< ModelEmployeeProjectConditionInput | null > | null,
  not?: ModelEmployeeProjectConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateEmployeeProjectInput = {
  id: string,
  employeeId?: string | null,
  projectId?: string | null,
};

export type DeleteEmployeeProjectInput = {
  id?: string | null,
};

export type CreateProjectInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  status?: string | null,
  endingDate?: string | null,
};

export type ModelProjectConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  status?: ModelStringInput | null,
  endingDate?: ModelStringInput | null,
  and?: Array< ModelProjectConditionInput | null > | null,
  or?: Array< ModelProjectConditionInput | null > | null,
  not?: ModelProjectConditionInput | null,
};

export type UpdateProjectInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  status?: string | null,
  endingDate?: string | null,
};

export type DeleteProjectInput = {
  id?: string | null,
};

export type ModelEmployeeFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  type?: ModelStringInput | null,
  and?: Array< ModelEmployeeFilterInput | null > | null,
  or?: Array< ModelEmployeeFilterInput | null > | null,
  not?: ModelEmployeeFilterInput | null,
};

export type ModelEmployeeProjectFilterInput = {
  id?: ModelIDInput | null,
  employeeId?: ModelIDInput | null,
  projectId?: ModelIDInput | null,
  and?: Array< ModelEmployeeProjectFilterInput | null > | null,
  or?: Array< ModelEmployeeProjectFilterInput | null > | null,
  not?: ModelEmployeeProjectFilterInput | null,
};

export type ModelProjectFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  status?: ModelStringInput | null,
  endingDate?: ModelStringInput | null,
  and?: Array< ModelProjectFilterInput | null > | null,
  or?: Array< ModelProjectFilterInput | null > | null,
  not?: ModelProjectFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type CreateEmployeeMutationVariables = {
  input: CreateEmployeeInput,
  condition?: ModelEmployeeConditionInput | null,
};

export type CreateEmployeeMutation = {
  createEmployee:  {
    __typename: "Employee",
    id: string,
    username: string,
    name: string,
    email: string,
    type: string,
    employeeProjects:  {
      __typename: "ModelEmployeeProjectConnection",
      items:  Array< {
        __typename: "EmployeeProject",
        id: string,
        employeeId: string,
        projectId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateEmployeeMutationVariables = {
  input: UpdateEmployeeInput,
  condition?: ModelEmployeeConditionInput | null,
};

export type UpdateEmployeeMutation = {
  updateEmployee:  {
    __typename: "Employee",
    id: string,
    username: string,
    name: string,
    email: string,
    type: string,
    employeeProjects:  {
      __typename: "ModelEmployeeProjectConnection",
      items:  Array< {
        __typename: "EmployeeProject",
        id: string,
        employeeId: string,
        projectId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteEmployeeMutationVariables = {
  input: DeleteEmployeeInput,
  condition?: ModelEmployeeConditionInput | null,
};

export type DeleteEmployeeMutation = {
  deleteEmployee:  {
    __typename: "Employee",
    id: string,
    username: string,
    name: string,
    email: string,
    type: string,
    employeeProjects:  {
      __typename: "ModelEmployeeProjectConnection",
      items:  Array< {
        __typename: "EmployeeProject",
        id: string,
        employeeId: string,
        projectId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateEmployeeProjectMutationVariables = {
  input: CreateEmployeeProjectInput,
  condition?: ModelEmployeeProjectConditionInput | null,
};

export type CreateEmployeeProjectMutation = {
  createEmployeeProject:  {
    __typename: "EmployeeProject",
    id: string,
    employeeId: string,
    projectId: string,
    employee:  {
      __typename: "Employee",
      id: string,
      username: string,
      name: string,
      email: string,
      type: string,
      employeeProjects:  {
        __typename: "ModelEmployeeProjectConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      description: string | null,
      status: string | null,
      endingDate: string | null,
      employeeProjects:  {
        __typename: "ModelEmployeeProjectConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateEmployeeProjectMutationVariables = {
  input: UpdateEmployeeProjectInput,
  condition?: ModelEmployeeProjectConditionInput | null,
};

export type UpdateEmployeeProjectMutation = {
  updateEmployeeProject:  {
    __typename: "EmployeeProject",
    id: string,
    employeeId: string,
    projectId: string,
    employee:  {
      __typename: "Employee",
      id: string,
      username: string,
      name: string,
      email: string,
      type: string,
      employeeProjects:  {
        __typename: "ModelEmployeeProjectConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      description: string | null,
      status: string | null,
      endingDate: string | null,
      employeeProjects:  {
        __typename: "ModelEmployeeProjectConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteEmployeeProjectMutationVariables = {
  input: DeleteEmployeeProjectInput,
  condition?: ModelEmployeeProjectConditionInput | null,
};

export type DeleteEmployeeProjectMutation = {
  deleteEmployeeProject:  {
    __typename: "EmployeeProject",
    id: string,
    employeeId: string,
    projectId: string,
    employee:  {
      __typename: "Employee",
      id: string,
      username: string,
      name: string,
      email: string,
      type: string,
      employeeProjects:  {
        __typename: "ModelEmployeeProjectConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      description: string | null,
      status: string | null,
      endingDate: string | null,
      employeeProjects:  {
        __typename: "ModelEmployeeProjectConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProjectMutationVariables = {
  input: CreateProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type CreateProjectMutation = {
  createProject:  {
    __typename: "Project",
    id: string,
    name: string,
    description: string | null,
    status: string | null,
    endingDate: string | null,
    employeeProjects:  {
      __typename: "ModelEmployeeProjectConnection",
      items:  Array< {
        __typename: "EmployeeProject",
        id: string,
        employeeId: string,
        projectId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProjectMutationVariables = {
  input: UpdateProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type UpdateProjectMutation = {
  updateProject:  {
    __typename: "Project",
    id: string,
    name: string,
    description: string | null,
    status: string | null,
    endingDate: string | null,
    employeeProjects:  {
      __typename: "ModelEmployeeProjectConnection",
      items:  Array< {
        __typename: "EmployeeProject",
        id: string,
        employeeId: string,
        projectId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProjectMutationVariables = {
  input: DeleteProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type DeleteProjectMutation = {
  deleteProject:  {
    __typename: "Project",
    id: string,
    name: string,
    description: string | null,
    status: string | null,
    endingDate: string | null,
    employeeProjects:  {
      __typename: "ModelEmployeeProjectConnection",
      items:  Array< {
        __typename: "EmployeeProject",
        id: string,
        employeeId: string,
        projectId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetEmployeeQueryVariables = {
  id: string,
};

export type GetEmployeeQuery = {
  getEmployee:  {
    __typename: "Employee",
    id: string,
    username: string,
    name: string,
    email: string,
    type: string,
    employeeProjects:  {
      __typename: "ModelEmployeeProjectConnection",
      items:  Array< {
        __typename: "EmployeeProject",
        id: string,
        employeeId: string,
        projectId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListEmployeesQueryVariables = {
  filter?: ModelEmployeeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEmployeesQuery = {
  listEmployees:  {
    __typename: "ModelEmployeeConnection",
    items:  Array< {
      __typename: "Employee",
      id: string,
      username: string,
      name: string,
      email: string,
      type: string,
      employeeProjects:  {
        __typename: "ModelEmployeeProjectConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetEmployeeProjectQueryVariables = {
  id: string,
};

export type GetEmployeeProjectQuery = {
  getEmployeeProject:  {
    __typename: "EmployeeProject",
    id: string,
    employeeId: string,
    projectId: string,
    employee:  {
      __typename: "Employee",
      id: string,
      username: string,
      name: string,
      email: string,
      type: string,
      employeeProjects:  {
        __typename: "ModelEmployeeProjectConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      description: string | null,
      status: string | null,
      endingDate: string | null,
      employeeProjects:  {
        __typename: "ModelEmployeeProjectConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListEmployeeProjectsQueryVariables = {
  filter?: ModelEmployeeProjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEmployeeProjectsQuery = {
  listEmployeeProjects:  {
    __typename: "ModelEmployeeProjectConnection",
    items:  Array< {
      __typename: "EmployeeProject",
      id: string,
      employeeId: string,
      projectId: string,
      employee:  {
        __typename: "Employee",
        id: string,
        username: string,
        name: string,
        email: string,
        type: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      project:  {
        __typename: "Project",
        id: string,
        name: string,
        description: string | null,
        status: string | null,
        endingDate: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetProjectQueryVariables = {
  id: string,
};

export type GetProjectQuery = {
  getProject:  {
    __typename: "Project",
    id: string,
    name: string,
    description: string | null,
    status: string | null,
    endingDate: string | null,
    employeeProjects:  {
      __typename: "ModelEmployeeProjectConnection",
      items:  Array< {
        __typename: "EmployeeProject",
        id: string,
        employeeId: string,
        projectId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProjectsQueryVariables = {
  filter?: ModelProjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProjectsQuery = {
  listProjects:  {
    __typename: "ModelProjectConnection",
    items:  Array< {
      __typename: "Project",
      id: string,
      name: string,
      description: string | null,
      status: string | null,
      endingDate: string | null,
      employeeProjects:  {
        __typename: "ModelEmployeeProjectConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type EmployeesByTypeQueryVariables = {
  type?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelEmployeeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type EmployeesByTypeQuery = {
  employeesByType:  {
    __typename: "ModelEmployeeConnection",
    items:  Array< {
      __typename: "Employee",
      id: string,
      username: string,
      name: string,
      email: string,
      type: string,
      employeeProjects:  {
        __typename: "ModelEmployeeProjectConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type EmployeesByTypeByNameQueryVariables = {
  type?: string | null,
  name?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelEmployeeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type EmployeesByTypeByNameQuery = {
  employeesByTypeByName:  {
    __typename: "ModelEmployeeConnection",
    items:  Array< {
      __typename: "Employee",
      id: string,
      username: string,
      name: string,
      email: string,
      type: string,
      employeeProjects:  {
        __typename: "ModelEmployeeProjectConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type ProjectsByStatusQueryVariables = {
  status?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProjectsByStatusQuery = {
  projectsByStatus:  {
    __typename: "ModelProjectConnection",
    items:  Array< {
      __typename: "Project",
      id: string,
      name: string,
      description: string | null,
      status: string | null,
      endingDate: string | null,
      employeeProjects:  {
        __typename: "ModelEmployeeProjectConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type ProjectsByStatusByNameQueryVariables = {
  status?: string | null,
  name?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProjectsByStatusByNameQuery = {
  projectsByStatusByName:  {
    __typename: "ModelProjectConnection",
    items:  Array< {
      __typename: "Project",
      id: string,
      name: string,
      description: string | null,
      status: string | null,
      endingDate: string | null,
      employeeProjects:  {
        __typename: "ModelEmployeeProjectConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type ProjectsByStatusByDateQueryVariables = {
  status?: string | null,
  endingDate?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProjectsByStatusByDateQuery = {
  projectsByStatusByDate:  {
    __typename: "ModelProjectConnection",
    items:  Array< {
      __typename: "Project",
      id: string,
      name: string,
      description: string | null,
      status: string | null,
      endingDate: string | null,
      employeeProjects:  {
        __typename: "ModelEmployeeProjectConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateEmployeeSubscription = {
  onCreateEmployee:  {
    __typename: "Employee",
    id: string,
    username: string,
    name: string,
    email: string,
    type: string,
    employeeProjects:  {
      __typename: "ModelEmployeeProjectConnection",
      items:  Array< {
        __typename: "EmployeeProject",
        id: string,
        employeeId: string,
        projectId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateEmployeeSubscription = {
  onUpdateEmployee:  {
    __typename: "Employee",
    id: string,
    username: string,
    name: string,
    email: string,
    type: string,
    employeeProjects:  {
      __typename: "ModelEmployeeProjectConnection",
      items:  Array< {
        __typename: "EmployeeProject",
        id: string,
        employeeId: string,
        projectId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteEmployeeSubscription = {
  onDeleteEmployee:  {
    __typename: "Employee",
    id: string,
    username: string,
    name: string,
    email: string,
    type: string,
    employeeProjects:  {
      __typename: "ModelEmployeeProjectConnection",
      items:  Array< {
        __typename: "EmployeeProject",
        id: string,
        employeeId: string,
        projectId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateEmployeeProjectSubscription = {
  onCreateEmployeeProject:  {
    __typename: "EmployeeProject",
    id: string,
    employeeId: string,
    projectId: string,
    employee:  {
      __typename: "Employee",
      id: string,
      username: string,
      name: string,
      email: string,
      type: string,
      employeeProjects:  {
        __typename: "ModelEmployeeProjectConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      description: string | null,
      status: string | null,
      endingDate: string | null,
      employeeProjects:  {
        __typename: "ModelEmployeeProjectConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateEmployeeProjectSubscription = {
  onUpdateEmployeeProject:  {
    __typename: "EmployeeProject",
    id: string,
    employeeId: string,
    projectId: string,
    employee:  {
      __typename: "Employee",
      id: string,
      username: string,
      name: string,
      email: string,
      type: string,
      employeeProjects:  {
        __typename: "ModelEmployeeProjectConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      description: string | null,
      status: string | null,
      endingDate: string | null,
      employeeProjects:  {
        __typename: "ModelEmployeeProjectConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteEmployeeProjectSubscription = {
  onDeleteEmployeeProject:  {
    __typename: "EmployeeProject",
    id: string,
    employeeId: string,
    projectId: string,
    employee:  {
      __typename: "Employee",
      id: string,
      username: string,
      name: string,
      email: string,
      type: string,
      employeeProjects:  {
        __typename: "ModelEmployeeProjectConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      description: string | null,
      status: string | null,
      endingDate: string | null,
      employeeProjects:  {
        __typename: "ModelEmployeeProjectConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProjectSubscription = {
  onCreateProject:  {
    __typename: "Project",
    id: string,
    name: string,
    description: string | null,
    status: string | null,
    endingDate: string | null,
    employeeProjects:  {
      __typename: "ModelEmployeeProjectConnection",
      items:  Array< {
        __typename: "EmployeeProject",
        id: string,
        employeeId: string,
        projectId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProjectSubscription = {
  onUpdateProject:  {
    __typename: "Project",
    id: string,
    name: string,
    description: string | null,
    status: string | null,
    endingDate: string | null,
    employeeProjects:  {
      __typename: "ModelEmployeeProjectConnection",
      items:  Array< {
        __typename: "EmployeeProject",
        id: string,
        employeeId: string,
        projectId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProjectSubscription = {
  onDeleteProject:  {
    __typename: "Project",
    id: string,
    name: string,
    description: string | null,
    status: string | null,
    endingDate: string | null,
    employeeProjects:  {
      __typename: "ModelEmployeeProjectConnection",
      items:  Array< {
        __typename: "EmployeeProject",
        id: string,
        employeeId: string,
        projectId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
