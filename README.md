## What i-Manage is?

i-Manage is a project management tool, where you can create projects, assign members to projects and monitor or update the progress of projects.

##### Sign-in

![Screen Shot 2021-02-28 at 9.38.15 PM.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1614532804310/iHgdVMiHf.png)

##### Register

![Screen Shot 2021-02-28 at 10.16.28 PM.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1614532833707/lHcVq_IZR.png)

##### Admin profile setup

![Screen Shot 2021-02-28 at 10.41.00 PM.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1614532859011/QCo11CJWr.png)

##### Create project - Only for Admins

![Screen Shot 2021-02-28 at 10.42.53 PM.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1614532929942/5y7tS_Ww_.png)

##### List projects - Only for Admins

![Screen Shot 2021-02-28 at 10.49.10 PM.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1614532958827/cUcs4DpZA.png)

##### Update projects - Only for Admins

![Screen Shot 2021-02-28 at 10.45.12 PM.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1614533026527/9BUF4OEOB.png)

##### List employees - Only for Admins

![Screen Shot 2021-02-28 at 10.42.20 PM.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1614532989191/rUSbpp6KM.png)

##### Member Dashboard

![Screen Shot 2021-02-28 at 10.56.08 PM.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1614533242743/62dSb7Ryd.png)

## Architecture

![i-Manager Architecture (1).jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1614568350221/AwwswlSwC.jpeg)

## Tech stack

i-Manage is built on top of the following stacks.

- Angular 11
- Nebular UI
- AWS Amplify
- git

The following Amplify tools and services were used to build the application.

1. Authetication - AWS Cognito
2. Functoins - AWS Lambda
3. API - GraphQL API using AppSync
4. Hosting - to configure CI/CD

Of course Amplify CLI was used to configure all the AWS resources using Amplify.

### Authentication

As it is shown in the architecture, there are 3 levels of users in i-Manage i.e.

- **Super Admin**: Has AWS console access and creates Admin users through Cognito console.
- **Admin**: Can create projects, assgin members to projects, view details of members and monitor / update projects.
- **Employee**: Can monitor projects.

Two static user groups are created in cognito namely, **ADMINS** and **MEMBERS**. **Admins** are added to the ***ADMINS*** groups while **Employees** are added to the ***MEMBERS*** group. Based on the user group, routes of the front-end application and data access through GraphQL are restricted.

### API

A GraphQL API is created. There are three models.

- Project
- Employee
- EmployeeProject

GraphQL schema looks followiing.

```
type Employee @model
  @auth(rules: [{ allow: groups, groups: ["ADMINS"], operations: [create, delete, update] }, { allow: owner, ownerField: "username", operations: [create, delete, update] }])
  @key(name: "byType", fields: ["type"], queryField: "employeesByType")
  @key(name: "byTypeByName", fields: ["type", "name"], queryField: "employeesByTypeByName")
  @key(name: "byUsername", fields: ["username"], queryField: "employeesByUsername") {
  id: ID!
  username: String!
  name: String!
  email: String!
  type: String!
  employeeProjects: [EmployeeProject] @connection(keyName: "byEmployee", fields: ["id"])
}

type EmployeeProject @model 
  @key(name: "byEmployee", fields: ["employeeId"])
  @key(name: "byProject", fields: ["projectId"]) {
  id: ID!
  employeeId: ID!
  projectId: ID!
  employee: Employee @connection(fields: ["employeeId"])
  project: Project @connection(fields: ["projectId"])
}

type Project @model
  @auth(rules: [{ allow: groups, groups: ["ADMINS"], operations: [create, delete, update] }])
  @key(name: "byStatus", fields: ["status"], queryField: "projectsByStatus")
  @key(name: "byStatusByName", fields: ["status", "name"], queryField: "projectsByStatusByName")
  @key(name: "byStatusByDate", fields: ["status", "endingDate"], queryField: "projectsByStatusByDate") {
  id: ID!
  name: String!
  description: String
  status: String
  endingDate: String
  employeeProjects: [EmployeeProject] @connection(keyName: "byProject", fields: ["id"])
}
```
For **Project** model, ***static group*** authorization is used to restrict **create**, **delete** and **update**. For **Employee** model ***owner*** and ***static group*** authorization to restrict **create**, **delete** and **update**.

#### Data access patterns
- Get project by id
- Get projects by status
- Get projects by status by name
- Get projects by status by date
- Get projects by employee
- Get employees by type by name
- Get employees by project
- Get employees by type
- Get employee by id

Global Secondary Indexes are designed to match these data access pattern as shown in the above schema.

### Functions

There are two Lambda functions are being used in the system as it is shown in the architecture. They are generated in auth configuration stage.

- **Custom message lambda trigger**: Used to customize the user notification which is generated on user sign-up and add Employees to MEMBERS group.
```
exports.handler = (event, context, callback) => {
  // Define the URL that you want the user to be directed to after verification is complete
  if (event.triggerSource === 'CustomMessage_SignUp') {
    const { codeParameter } = event.request;
    const { region, userName } = event;
    const { clientId } = event.callerContext;
    const redirectUrl = `${process.env.REDIRECTURL}/?username=${userName}`;
    const resourcePrefix = process.env.RESOURCENAME.split('CustomMessage')[0];

    const hyphenRegions = [
      'us-east-1',
      'us-west-1',
      'us-west-2',
      'ap-southeast-1',
      'ap-southeast-2',
      'ap-northeast-1',
      'eu-west-1',
      'sa-east-1',
    ];

    const seperator = hyphenRegions.includes(region) ? '-' : '.';

    const payload = Buffer.from(
      JSON.stringify({
        userName,
        redirectUrl,
        region,
        clientId,
      })
    ).toString('base64');
    const bucketUrl = `http://${resourcePrefix}verificationbucket-${process.env.ENV}.s3-website${seperator}${region}.amazonaws.com`;
    const url = `${bucketUrl}/?data=${payload}&code=${codeParameter}`;
    const message = `${process.env.EMAILMESSAGE}. \n ${url}`;
    event.response.smsMessage = message;
    event.response.emailSubject = process.env.EMAILSUBJECT;
    event.response.emailMessage = message;
    console.log('event.response', event.response);
    callback(null, event);
  } 
  else if (event.triggerSource === 'CustomMessage_AdminCreateUser') {
    const url = process.env.ADMINURL;
    event.response.smsMessage = "Welcome to the service. Your user name is " + event.request.usernameParameter + " Your temporary password is " + event.request.codeParameter;
    event.response.emailSubject = process.env.EMAILSUBJECT;
    event.response.emailMessage = "Welcome to the service. Your user name is " + event.request.usernameParameter + " Your temporary password is " + event.request.codeParameter + ". Follow this link to complete your sign up. " + url;
    callback(null, event);
  } else {
    callback(null, event);
  }
};
```
- **Post confirmation lambda trigger**: Used to add users to Employee DynamoDB table.

```
const aws = require('aws-sdk');
var ddb = new aws.DynamoDB()

exports.handler = async (event, context, callback) => {
  console.log(event);
  if (event.triggerSOurce == 'PostConfirmation_ConfirmSignUp') {
    const cognitoidentityserviceprovider = new aws.CognitoIdentityServiceProvider({ apiVersion: '2016-04-18' });
    const groupParams = {
      GroupName: process.env.GROUP,
      UserPoolId: event.userPoolId,
    };
  
    const addUserParams = {
      GroupName: process.env.GROUP,
      UserPoolId: event.userPoolId,
      Username: event.userName,
    };
  
    try {
      await cognitoidentityserviceprovider.getGroup(groupParams).promise();
    } catch (e) {
      await cognitoidentityserviceprovider.createGroup(groupParams).promise();
    }
  
    let date = new Date()
    let params = {
      Item: {
        'id': {S: event.request.userAttributes.sub},
        '__typename': {S: 'Employee'},
        'username': {S: event.userName},
        'name': {S: event.request.userAttributes.name},
        'type': {S: 'MEMBER'},
        'email': {S: event.request.userAttributes.email},
        'createdAt': {S: date.toISOString()},
        'updatedAt': {S: date.toISOString()},
      },
      TableName: process.env.EMPLOYEETABLE
    }
  
    try {
      await ddb.putItem(params).promise()
      console.log("Success")
    } catch (err) {
      console.log("Error", err)
    }
  
    try {
      await cognitoidentityserviceprovider.adminAddUserToGroup(addUserParams).promise();
      callback(null, event);
    } catch (e) {
      callback(e);
    }
  }
};
```

### Hosting

I have connected develop github branch to the dev backend environment using Amplify to enable CI/CD to automatically deploy the application.

## Project details

#### Live project -  [https://develop.d394kogwnc7hvv.amplifyapp.com](https://develop.d394kogwnc7hvv.amplifyapp.com) 
##### Admin's credentials
- username: hkraclh@gmail.com
- password: Admin123

##### Employee's credentials
- username: online.hasitha@gmail.com
- password: John1234

Of course you can create your own Employee account by signing up in the app. Then check your email to confirm your account. Afterwards you can assign your newly created account to projects by signing in as the admin.