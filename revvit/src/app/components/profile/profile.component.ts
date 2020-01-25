import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Revvit } from 'src/app/models/revvit';
import { RevvitService } from 'src/app/services/revvit.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private _revvit: RevvitService) { }
  user: User;
  allUserRevvits: Revvit[];
  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('currentUser'));
    this._revvit.findAllOfUser(this.user).subscribe((response: Revvit[]) => {
      console.log(response);
      this.allUserRevvits = response;});
  }

}
