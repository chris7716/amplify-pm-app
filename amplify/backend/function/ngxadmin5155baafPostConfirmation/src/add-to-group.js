/* eslint-disable-line */ const aws = require('aws-sdk');
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
