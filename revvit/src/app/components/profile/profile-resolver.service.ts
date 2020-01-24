import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { Profile, ProfilesService } from '../shared';

@Injectable()
export class ProfileResolver implements Resolve<Profile> {
  constructor(
    private profilesService: ProfilesService,
    private router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {

    return this.profilesService.get(route.params['username'])
           .catch((err) => this.router.navigateByUrl('/'));

  }
}

//This retrieves data before allowing access to a route.
    // This retrieves the profile data which we need that we need (BEFORE THE PAGE LOADS)