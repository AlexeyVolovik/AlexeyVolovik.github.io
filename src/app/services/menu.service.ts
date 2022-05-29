import {Inject, Injectable} from '@angular/core';
import { Enumerators, PartnerTabSelection, Language } from "../enumerators";
import {TranslateService} from "@ngx-translate/core";
import {delay} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  public menuSelection: Enumerators = Enumerators.Landing;
  public partnerTabSelection: PartnerTabSelection = PartnerTabSelection.All;
  public language: Language = Language.EN;

  public about_team: boolean = false;

  constructor(private translate: TranslateService) { }

  public setMenuSelection(selection: Enumerators) {
    this.menuSelection = selection;
    window.scroll(0,0);
  }

  public setElementSelection(selection: Enumerators, element: string) {
    this.menuSelection = selection;

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
