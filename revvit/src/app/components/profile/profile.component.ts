import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Profile } from 'src/app/models/profile';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  profile: Profile;
  user: User;
  isUser: boolean
  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('currentUser'));
  }

}
