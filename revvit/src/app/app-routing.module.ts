import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './components/login/login.component'
import { SignupComponent} from './components/signup/signup.component';
import { HomeComponent} from './components/home/home.component';
import { RevvitComponent } from './components/revvit/revvit.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TwitterComponent } from './components/twitter/twitter.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'revvit',
    component: RevvitComponent
  },{
    path: 'profile',
    component: ProfileComponent
  },{
    path: 'twitter',
    component: TwitterComponent
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [ LoginComponent];
