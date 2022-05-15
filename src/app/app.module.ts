import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { DonateComponent } from './donate/donate.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { PartnerComponent } from './partner/partner.component';
import { ReportsComponent } from './reports/reports.component';
import { MediaComponent } from './media/media.component';
import { AboutComponent } from './about/about.component';
import { RequestComponent } from './request/request.component';
import { PartnerAllComponent } from './partner-all/partner-all.component';
import { PartnerAdoptComponent } from './partner-adopt/partner-adopt.component';
import { PartnerDonateComponent } from './partner-donate/partner-donate.component';
import { HeaderMobileComponent } from './header-mobile/header-mobile.component';
import { FooterMobileComponent } from './footer-mobile/footer-mobile.component';
import { LandingMobileComponent } from './landing-mobile/landing-mobile.component';
import { DonateMobileComponent } from './donate-mobile/donate-mobile.component';
import { VolunteerMobileComponent } from './volunteer-mobile/volunteer-mobile.component';
import { PartnerMobileComponent } from './partner-mobile/partner-mobile.component';
import { RequestMobileComponent } from './request-mobile/request-mobile.component';
import { ReportsMobileComponent } from './reports-mobile/reports-mobile.component';
import { MediaMobileComponent } from './media-mobile/media-mobile.component';
import { AboutMobileComponent } from './about-mobile/about-mobile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import { PartnerAllMobileComponent } from './partner-all-mobile/partner-all-mobile.component';
import { PartnerAdoptMobileComponent } from './partner-adopt-mobile/partner-adopt-mobile.component';
import { PartnerDonateMobileComponent } from './partner-donate-mobile/partner-donate-mobile.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    DonateComponent,
    VolunteerComponent,
    PartnerComponent,
    ReportsComponent,
    MediaComponent,
    AboutComponent,
    RequestComponent,
    PartnerAllComponent,
    PartnerAdoptComponent,
    PartnerDonateComponent,
    HeaderMobileComponent,
    FooterMobileComponent,
    LandingMobileComponent,
    DonateMobileComponent,
    VolunteerMobileComponent,
    PartnerMobileComponent,
    RequestMobileComponent,
    ReportsMobileComponent,
    MediaMobileComponent,
    AboutMobileComponent,
    PartnerAllMobileComponent,
    PartnerAdoptMobileComponent,
    PartnerDonateMobileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
