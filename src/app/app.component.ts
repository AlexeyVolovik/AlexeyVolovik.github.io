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
  MenuSelection = Enumerators;

  constructor(public menuService: MenuService) {

  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event: any) {
    var reloadNeeded: boolean = false;

    if (window.innerWidth < 768) {
      if (this.menuService.isMobileResolution == false) {
        reloadNeeded = true;
      }
      this.menuService.isMobileResolution = true;
    } else {
      if (this.menuService.isMobileResolution == true) {
        reloadNeeded = true;
      }
      this.menuService.isMobileResolution = false;
    }

    if (reloadNeeded) {
      window.location.reload();
    }
  }

  setMenuSelection(selection: Enumerators) {
    this.menuService.menuSelection = selection;
  }

}
