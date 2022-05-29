import {HostListener, Inject, Injectable} from '@angular/core';
import { Enumerators, PartnerTabSelection, Language } from "../enumerators";
import {TranslateService} from "@ngx-translate/core";
import {delay} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  public menuSelection: Enumerators = Enumerators.Landing;
  public partnerTabSelection: PartnerTabSelection = PartnerTabSelection.All;
  public language: Language = Language.EN;
  public isMobileResolution: boolean;

  public about_team: boolean = false;

  constructor(private translate: TranslateService, private router: Router) {
    if (window.innerWidth < 768) {
      this.isMobileResolution = true;
    } else {
      this.isMobileResolution = false;
    }
  }

  public setMenuSelection(selection: Enumerators) {
    switch (selection) {
      case Enumerators.Donate: {
        this.router.navigate(['donate']);
        break;
      }
      case Enumerators.Volunteer: {
        this.router.navigate(['volunteer']);
        break;
      }
      case Enumerators.Partner: {
        this.router.navigate(['partner']);
        break;
      }
      case Enumerators.Request: {
        this.router.navigate(['request']);
        break;
      }
      case Enumerators.Reports: {
        this.router.navigate(['reports']);
        break;
      }
      case Enumerators.Media: {
        this.router.navigate(['media']);
        break;
      }
      case Enumerators.About: {
        this.router.navigate(['about']);
        break;
      }
      default: {
        this.router.navigate(['']);
        break;
      }
    }
  }

  public setElementSelection(selection: Enumerators, element: string) {
    this.setMenuSelection(selection);

    setTimeout(() => {
      let el = window.document.getElementById(element);
      el?.scrollIntoView();
    }, 75);
  }

  public setPartnerTabSelection(selection: PartnerTabSelection) {
    this.partnerTabSelection = selection;
  }

  public setLanguageSelection(selection: Language) {
    this.language = selection;
    this.translate.use(this.language.toLowerCase());
  }

}
