import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { RevvitService } from 'src/app/services/revvit.service';
import { Revvit } from 'src/app/models/revvit';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _user: UserService, private router: Router, private _revvit: RevvitService) { }
  allRevvits: Revvit[];
  ngOnInit() {
    this._revvit.findAll().subscribe((response: Revvit[]) =>{
      console.log(response);
      this.allRevvits = response;
    })
  }

  handleLogOut() {
    this._user.logout();
    sessionStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
}
