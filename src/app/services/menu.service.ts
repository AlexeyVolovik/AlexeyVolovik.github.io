import { Injectable } from '@angular/core';
import { MenuSelection } from "../enumerators/menu-selection";

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  public menuSelection: MenuSelection = MenuSelection.Landing;

  constructor() { }

  setMenuSelection(selection: MenuSelection) {
    this.menuSelection = selection;
  }
}
