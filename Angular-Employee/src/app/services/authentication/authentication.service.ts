import { Injectable } from '@angular/core';
import { testUsername, testPassword, baseUrl } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


export class User{
  constructor(
    public status:string,
     ) {}

}

export class JwtResponse{
  constructor(
    public jwttoken:string,
     ) {}

}
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }

  authenticate(username, password) {
    const authUrl = baseUrl + "login";
    return this.http.post<any>(`${authUrl}`,{username,password}).pipe(
     map(
       userData => {
        sessionStorage.setItem('username',username);
        let tokenStr= 'Bearer '+ userData.token;
        sessionStorage.setItem('token', tokenStr);
        return userData;
       }
     )
    );
  }

  register(username, password) {
    const registerUrl = baseUrl + "register";
    return this.http.post<any>(`${registerUrl}`,{username,password}).pipe(
     map(
       userData => {
        let tokenStr= 'Bearer '+ userData.token;
        sessionStorage.setItem('token', tokenStr);
        return userData;
       }
     )

    );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username');
  }
}
