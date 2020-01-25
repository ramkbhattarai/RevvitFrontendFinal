import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Revvit } from '../models/revvit';

@Injectable({
  providedIn: 'root'
})
export class RevvitService {

  private _url: string = "/SpringMVCDemo/saveRevvit";
  private _nextUrl: string = "/SpringMVCDemo/revvits";
  private _anotherUrl: string ="/SpringMVCDemo/revvitsAuthor"
  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private _http: HttpClient) { }

  createRevvit(revvitData: Revvit){
   // console.log(revvitData);
    return this._http.post<any>(this._url, JSON.stringify(revvitData), this.headers);
  }

  findAll(){
    return this._http.get<any>(this._nextUrl, this.headers);
  }

  findAllOfUser(user){
    return this._http.post<any>(this._anotherUrl, JSON.stringify(user), this.headers);
  }
}
