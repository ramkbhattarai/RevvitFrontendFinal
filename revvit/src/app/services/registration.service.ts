import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  //private _url: string = "http://localhost:8080/SpringMVCDemo/signup";
  private _url: string = "/SpringMVCDemo/signup";
  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private _http: HttpClient) { }

  register(userData) {
    return this._http.post<any>(this._url, JSON.stringify(userData), this.headers);
  }
}
