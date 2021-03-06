import { Component, OnInit } from '@angular/core';
import {Profile} from './model/profile';
import {ProfileService} from './service/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public profile: Profile;

  constructor(private _profileService: ProfileService) { }

  ngOnInit() {
    this.profile = this._profileService.profile;
  }

}
