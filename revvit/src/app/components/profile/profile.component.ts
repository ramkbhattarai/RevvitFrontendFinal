import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Profile } from '../models/profile.model';
import { User } from '../models/user.model';

@Component({
  selector: 'app-profile', // do we need to change this selector?
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    // could we implement userService here?
    // private userService: UserService
  ) { }

    profile: Profile;
    currentUser: User;
    isUser: boolean;

  ngOnInit() {
    this.route.data.subscribe(
      (data: {profile: Profile}) => {
        this.profile = data.profile;
      }
    );

    // Load current user's data 
    this.userService.currentUser.subscribe(
      (userData: User) => {
        this.currentUser = userData;
        this.isUser = (this.currentUser.username === this.profile.username);
      }
    );
  }

  // onToggleFollowing(following: boolean) {
  //   this.profile.following = following;

}
