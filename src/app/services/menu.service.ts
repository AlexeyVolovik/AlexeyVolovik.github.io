import { Injectable } from '@angular/core';
import { Enumerators, PartnerTabSelection } from "../enumerators";

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  public menuSelection: Enumerators = Enumerators.Landing;
  public partnerTabSelection: PartnerTabSelection = PartnerTabSelection.All;

  constructor() { }

  setMenuSelection(selection: Enumerators) {
    this.menuSelection = selection;
  }

  setPartnerTabSelection(selection: PartnerTabSelection) {
    this.partnerTabSelection = selection;
  }

}
