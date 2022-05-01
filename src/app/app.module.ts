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
    RequestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
