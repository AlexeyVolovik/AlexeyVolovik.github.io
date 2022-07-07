import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderFullComponent } from './header-full/header-full.component';
import { FooterFullComponent } from './footer-full/footer-full.component';
import { LandingComponent } from './landing/landing.component';
import { LandingFullComponent } from './landing-full/landing-full.component';
import { DonateFullComponent } from './donate-full/donate-full.component';
import { VolunteerFullComponent } from './volunteer-full/volunteer-full.component';
import { PartnerComponent } from './partner/partner.component';
import { ReportsComponent } from './reports/reports.component';
import { MediaComponent } from './media/media.component';
import { AboutFullComponent } from './about-full/about-full.component';
import { RequestComponent } from './request/request.component';
import { PartnerAllComponent } from './partner-all/partner-all.component';
import { PartnerAdoptComponent } from './partner-adopt/partner-adopt.component';
import { PartnerDonateComponent } from './partner-donate/partner-donate.component';
import { HeaderMobileComponent } from './header-mobile/header-mobile.component';
import { FooterMobileComponent } from './footer-mobile/footer-mobile.component';
import { LandingMobileComponent } from './landing-mobile/landing-mobile.component';
import { DonateMobileComponent } from './donate-mobile/donate-mobile.component';
import { VolunteerMobileComponent } from './volunteer-mobile/volunteer-mobile.component';
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

// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {RouterModule} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { AboutComponent } from './about/about.component';
import { DonateComponent } from './donate/donate.component';
import { MediaFullComponent } from './media-full/media-full.component';
import { RequestFullComponent } from './request-full/request-full.component';
import { ReportsFullComponent } from './reports-full/reports-full.component';
import { PanningModule } from './panning/panning.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderFullComponent,
    FooterFullComponent,
    LandingComponent,
    DonateFullComponent,
    VolunteerFullComponent,
    PartnerComponent,
    ReportsComponent,
    MediaComponent,
    AboutFullComponent,
    RequestComponent,
    PartnerAllComponent,
    PartnerAdoptComponent,
    PartnerDonateComponent,
    HeaderMobileComponent,
    FooterMobileComponent,
    LandingFullComponent,
    LandingMobileComponent,
    DonateMobileComponent,
    VolunteerMobileComponent,
    RequestMobileComponent,
    ReportsMobileComponent,
    MediaMobileComponent,
    AboutMobileComponent,
    PartnerAllMobileComponent,
    PartnerAdoptMobileComponent,
    PartnerDonateMobileComponent,
    LandingComponent,
    HeaderComponent,
    FooterComponent,
    VolunteerComponent,
    AboutComponent,
    DonateComponent,
    MediaFullComponent,
    RequestFullComponent,
    ReportsFullComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatSelectModule,
    BrowserModule,
    // ngx-translate and the loader module
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AppRoutingModule,
    PanningModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
