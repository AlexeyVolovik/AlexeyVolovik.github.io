import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DonateComponent} from "./donate/donate.component";
import {LandingComponent} from "./landing/landing.component";
import {VolunteerComponent} from "./volunteer/volunteer.component";
import {PartnerComponent} from "./partner/partner.component";
import {MediaComponent} from "./media/media.component";
import {ReportsComponent} from "./reports/reports.component";
import {RequestComponent} from "./request/request.component";
import {AboutComponent} from "./about/about.component";

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'volunteer', component: VolunteerComponent },
  { path: 'partner', component: PartnerComponent },
  { path: 'media', component: MediaComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'request', component: RequestComponent },
  { path: 'about', component: AboutComponent },
  { path: 'donate', component: DonateComponent },
  { path: '**', component: LandingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
