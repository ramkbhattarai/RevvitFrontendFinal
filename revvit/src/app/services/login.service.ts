import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
 // private _url: string = "http://localhost:8080/SpringMVCDemo/login";
  private _url: string = "/SpringMVCDemo/login";

  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private _http: HttpClient) { }

  login(userData) {
    //console.log(userData);
    return this._http.post<any>(this._url, JSON.stringify(userData), this.headers);
  }
}
