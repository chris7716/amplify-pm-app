import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,
    private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let url: string = state.url;
    return this.checkUserLogin(route, url);
  }

  checkUserLogin(route: ActivatedRouteSnapshot, url: any): Promise<boolean> {
      return new Promise((resolve, reject) => {
        this.authService.getAuthenticatedUser()
          .then(res => {
            if (res != null){
              console.log("res");
              const userRole = res.signInUserSession.accessToken.payload["cognito:groups"];
              console.log(route.data.role.indexOf(userRole));
              if (route.data.role && route.data.role.indexOf(userRole) === -1) {
                if (userRole == "MEMBERS"){
                  this.router.navigate(['/member']);
                } else {
                  this.router.navigate(['/admin']);
                }
                reject(false);
              }
              console.log(true);
              resolve(true);
            } else {
              this.router.navigate(['/auth/sign-in']);
              reject(false);
            }
          }).catch(err => {
            console.log(false);
            this.router.navigate(['/auth/sign-in']);
            reject(false);
          });
      });
  }
  
}
