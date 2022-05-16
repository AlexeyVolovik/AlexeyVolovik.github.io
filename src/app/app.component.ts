import {Component} from '@angular/core';
import {HostListener} from "@angular/core";
import {Enumerators} from "./enumerators";
import {MenuService} from "./services/menu.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isMobileResolution: boolean;

  MenuSelection = Enumerators;

  title = 'Zeilen';

  constructor(public menuService: MenuService) {
    if (window.innerWidth < 768) {
      this.isMobileResolution = true;
    } else {
      this.isMobileResolution = false;
    }
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event: any) {
    if (window.innerWidth < 768) {
      this.isMobileResolution = true;
    } else {
      this.isMobileResolution = false;
    }
  }

  setMenuSelection(selection: Enumerators) {
    this.menuService.menuSelection = selection;
  }

}
