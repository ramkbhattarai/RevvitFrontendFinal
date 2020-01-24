import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _url: string = "http://localhost:8080/SpringMVCDemo/login";

  constructor(private _http: HttpClient) { }

  login(userData) {
    return this._http.post<any>(this._url, JSON.stringify(userData));
  }
}
