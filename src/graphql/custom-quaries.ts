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
          items {
            id
            employee {
              id
              name
              username
            }
          }
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
          items {
            id
            employeeId
            projectId
            project {
              name
              description
              endingDate
              status
              employeeProjects {
                items {
                  employee {
                    name
                  }
                }
              }
            }
          }
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
          items {
            employee {
              name
            }
          }
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
          items {
            employee {
              name
            }
          }
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
