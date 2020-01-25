import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TwitterService } from 'src/app/services/twitter.service';
import { Router } from '@angular/router';
import { Revvit } from 'src/app/models/revvit';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css']
})
export class TwitterComponent implements OnInit {

  constructor(private fb: FormBuilder, private _tweeter: TwitterService, private router: Router) { }
  twitterForm = this.fb.group({
    username: ['']
  });
  allTweets: Revvit[];
  ngOnInit() {
    this._tweeter.allTweets().subscribe(
      (response: Revvit[]) =>{
        console.log(response);
        this.allTweets = response;
      }
    )
  }

  handleSubmit(){
    let formData = { ...this.twitterForm.value };
    
    this._tweeter.followUser(formData).subscribe(
      ()=>{
        console.log("You are following the User in real Twitter Account");
      }
    )
  }
}
