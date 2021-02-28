import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';

export class User {
  name: string;
  username: string;
  password: string;
  newPassword: string;
  email: string;
  phoneNumber: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  signUp(data: User): Promise<any> {
    let username = data.username;
    let password = data.password;
    let email = data.email;
    let phone_number = data.phoneNumber;
    let name = data.name;
    return Auth.signUp({
        username,
        password,
        attributes: {
            name,
            email,
            phone_number,
        }
    });
  }

  signIn(data: User): Promise<any> {
    let username = data.username;
    let password = data.password;
    console.log(data);
    return Auth.signIn(username, password);
  }

  signOut(): Promise<any> {
    return Auth.signOut();
  }

  setupAdminProfile(data: User, user: any): Promise<any> {
    let username = data.username;
    let password = data.newPassword;
    let phone_number = data.phoneNumber;
    let name = data.name;
    return Auth.completeNewPassword(
      user,
      password,
      {
        name: name,
        email: username,
        phone_number: phone_number
      }
    );
  }

  forgotPassword(username): Promise<any> {
    return Auth.forgotPassword(username);
  }

  forgotPasswordSubmit(username, code, new_password): Promise<any> {
    return Auth.forgotPasswordSubmit(username, code, new_password);
  }

  getAuthenticatedUser(): Promise<any> {
    return Auth.currentAuthenticatedUser();
  }

}
