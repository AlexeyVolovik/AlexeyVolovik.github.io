import { Injectable } from '@angular/core';
import { Enumerators, PartnerTabSelection, Language } from "../enumerators";
import {TranslateService} from "@ngx-translate/core";

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  public menuSelection: Enumerators = Enumerators.Landing;
  public partnerTabSelection: PartnerTabSelection = PartnerTabSelection.All;
  public language: Language = Language.EN;

  constructor(private translate: TranslateService) { }

  public setMenuSelection(selection: Enumerators) {
    this.menuSelection = selection;
  }

  public setPartnerTabSelection(selection: PartnerTabSelection) {
    this.partnerTabSelection = selection;
  }

  public setLanguageSelection(selection: Language) {
    this.language = selection;
    this.translate.use(this.language.toLowerCase());
  }

}
