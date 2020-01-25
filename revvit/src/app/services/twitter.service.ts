import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Revvit } from '../models/revvit';

@Injectable({
  providedIn: 'root'
})
export class TwitterService {
  private _url: string = "/SpringMVCDemo/tweets";
  private _nextUrl: string = "/SpringMVCDemo/tweet";
  private _anotherUrl: string = "/SpringMVCDemo/followUser";

  constructor(private _http: HttpClient) { }

  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  allTweets() {
    // console.log(revvitData);
    return this._http.get<any>(this._url, this.headers);
  }

  postTweet(text) {
    return this._http.post<any>(this._nextUrl, text, this.headers);
  }
  followUser(tweetFollow) {
    return this._http.post<any>(this._anotherUrl, JSON.stringify(tweetFollow), this.headers);
  }
}
