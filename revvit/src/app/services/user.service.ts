import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _url: string = "/SpringMVCDemo/logout";
  constructor(private http: HttpClient) { }

  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  logout() {
    return this.http.post<void>(this._url, {}, this.headers);
  }
}
