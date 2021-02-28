/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEmployee = /* GraphQL */ `
  mutation CreateEmployee(
    $input: CreateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    createEmployee(input: $input, condition: $condition) {
      id
      username
      name
      email
      type
      employeeProjects {
        items {
          id
          employeeId
          projectId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateEmployee = /* GraphQL */ `
  mutation UpdateEmployee(
    $input: UpdateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    updateEmployee(input: $input, condition: $condition) {
      id
      username
      name
      email
      type
      employeeProjects {
        items {
          id
          employeeId
          projectId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteEmployee = /* GraphQL */ `
  mutation DeleteEmployee(
    $input: DeleteEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    deleteEmployee(input: $input, condition: $condition) {
      id
      username
      name
      email
      type
      employeeProjects {
        items {
          id
          employeeId
          projectId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createEmployeeProject = /* GraphQL */ `
  mutation CreateEmployeeProject(
    $input: CreateEmployeeProjectInput!
    $condition: ModelEmployeeProjectConditionInput
  ) {
    createEmployeeProject(input: $input, condition: $condition) {
      id
      employeeId
      projectId
      employee {
        id
        username
        name
        email
        type
        employeeProjects {
          nextToken
        }
        createdAt
        updatedAt
      }
      project {
        id
        name
        description
        status
        endingDate
        employeeProjects {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateEmployeeProject = /* GraphQL */ `
  mutation UpdateEmployeeProject(
    $input: UpdateEmployeeProjectInput!
    $condition: ModelEmployeeProjectConditionInput
  ) {
    updateEmployeeProject(input: $input, condition: $condition) {
      id
      employeeId
      projectId
      employee {
        id
        username
        name
        email
        type
        employeeProjects {
          nextToken
        }
        createdAt
        updatedAt
      }
      project {
        id
        name
        description
        status
        endingDate
        employeeProjects {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteEmployeeProject = /* GraphQL */ `
  mutation DeleteEmployeeProject(
    $input: DeleteEmployeeProjectInput!
    $condition: ModelEmployeeProjectConditionInput
  ) {
    deleteEmployeeProject(input: $input, condition: $condition) {
      id
      employeeId
      projectId
      employee {
        id
        username
        name
        email
        type
        employeeProjects {
          nextToken
        }
        createdAt
        updatedAt
      }
      project {
        id
        name
        description
        status
        endingDate
        employeeProjects {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
      id
      name
      description
      status
      endingDate
      employeeProjects {
        items {
          id
          employeeId
          projectId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
      id
      name
      description
      status
      endingDate
      employeeProjects {
        items {
          id
          employeeId
          projectId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
      id
      name
      description
      status
      endingDate
      employeeProjects {
        items {
          id
          employeeId
          projectId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
