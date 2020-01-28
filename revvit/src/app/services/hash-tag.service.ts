import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HashTagService {

  private _url: string = "/SpringMVCDemo/createHashTag";
  private _nextUrl: string = "/SpringMVCDemo/hashTags";
  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private _http: HttpClient) { }

  createHashTag(hashTagData) {
    console.log(hashTagData);
    return this._http.post<any>(this._url, JSON.stringify(hashTagData), this.headers);
  }

  findAll() {
    return this._http.get<any>(this._nextUrl, this.headers);
  }
}
