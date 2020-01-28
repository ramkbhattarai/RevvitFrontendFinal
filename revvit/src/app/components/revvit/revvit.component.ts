import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { User } from '../../models/user';
import { RevvitService} from '../../services/revvit.service';
import { Revvit } from 'src/app/models/revvit';
import { HashTagService } from 'src/app/services/hash-tag.service';
import { HashTag } from 'src/app/models/hashTag';

@Component({
  selector: 'app-revvit',
  templateUrl: './revvit.component.html',
  styleUrls: ['./revvit.component.css']
})
export class RevvitComponent implements OnInit {
  currentUser = User;
  revvitForm: FormGroup;
  constructor(private fb: FormBuilder, private _revvit: RevvitService, private router: Router, private _hashTag: HashTagService) {
    this.revvitForm = this.fb.group({
      text: ['', Validators.required],
      hashTags: ['']
    });
   }
  ngOnInit() {
    let userString: string = sessionStorage.getItem('currentUser');
    if (userString === null) {
      this.router.navigate(['/login']);
    } else {
      this.currentUser = JSON.parse(userString);
    }
  }

  handleSubmit() {
    const formData = { ...this.revvitForm.value }
    delete formData.file;
    formData.author = this.currentUser; 
    let text = formData.hashTags;
    delete formData.hashTags;
    this._revvit.createRevvit(formData).subscribe(
      (response: Revvit) => {
        console.log(response);
        this.router.navigate(['/home']);
      },
     // error => console.log("Error", error)
    )

    // this._hashTag.createHashTag({"text": text}).subscribe(
    //   (response: HashTag) => {
    //     console.log(response);
    //     this.router.navigate(['/home']);
    //   },
    //   error => console.log("Error", error)
    // )
  }
}
