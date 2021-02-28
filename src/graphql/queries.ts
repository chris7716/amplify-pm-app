/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEmployee = /* GraphQL */ `
  query GetEmployee($id: ID!) {
    getEmployee(id: $id) {
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
export const listEmployees = /* GraphQL */ `
  query ListEmployees(
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmployees(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getEmployeeProject = /* GraphQL */ `
  query GetEmployeeProject($id: ID!) {
    getEmployeeProject(id: $id) {
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
export const listEmployeeProjects = /* GraphQL */ `
  query ListEmployeeProjects(
    $filter: ModelEmployeeProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmployeeProjects(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        employeeId
        projectId
        employee {
          id
          username
          name
          email
          type
          createdAt
          updatedAt
        }
        project {
          id
          name
          description
          status
          endingDate
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
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
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const employeesByType = /* GraphQL */ `
  query EmployeesByType(
    $type: String
    $sortDirection: ModelSortDirection
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    employeesByType(
      type: $type
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const employeesByTypeByName = /* GraphQL */ `
  query EmployeesByTypeByName(
    $type: String
    $name: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    employeesByTypeByName(
      type: $type
      name: $name
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const employeesByUsername = /* GraphQL */ `
  query EmployeesByUsername(
    $username: String
    $sortDirection: ModelSortDirection
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    employeesByUsername(
      username: $username
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const projectsByStatus = /* GraphQL */ `
  query ProjectsByStatus(
    $status: String
    $sortDirection: ModelSortDirection
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    projectsByStatus(
      status: $status
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const projectsByStatusByName = /* GraphQL */ `
  query ProjectsByStatusByName(
    $status: String
    $name: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    projectsByStatusByName(
      status: $status
      name: $name
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const projectsByStatusByDate = /* GraphQL */ `
  query ProjectsByStatusByDate(
    $status: String
    $endingDate: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    projectsByStatusByDate(
      status: $status
      endingDate: $endingDate
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
