import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {LoginComponent} from "./pages/login/login.component";
import {ViewMemberComponent} from "./pages/view-member/view-member.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'login', component: LoginComponent},
  { path: 'view-member', component: ViewMemberComponent}
];

export const routing = RouterModule.forRoot(routes, { useHash: true });
