/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEmployee = /* GraphQL */ `
  subscription OnCreateEmployee {
    onCreateEmployee {
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
export const onUpdateEmployee = /* GraphQL */ `
  subscription OnUpdateEmployee {
    onUpdateEmployee {
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
export const onDeleteEmployee = /* GraphQL */ `
  subscription OnDeleteEmployee {
    onDeleteEmployee {
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
export const onCreateEmployeeProject = /* GraphQL */ `
  subscription OnCreateEmployeeProject {
    onCreateEmployeeProject {
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
export const onUpdateEmployeeProject = /* GraphQL */ `
  subscription OnUpdateEmployeeProject {
    onUpdateEmployeeProject {
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
export const onDeleteEmployeeProject = /* GraphQL */ `
  subscription OnDeleteEmployeeProject {
    onDeleteEmployeeProject {
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
export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject {
    onCreateProject {
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
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject {
    onUpdateProject {
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
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject {
    onDeleteProject {
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
