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
    if (window.innerWidth < 768) {
      this.menuService.isMobileResolution = true;
    } else {
      this.menuService.isMobileResolution = false;
    }
  }

  setMenuSelection(selection: Enumerators) {
    this.menuService.menuSelection = selection;
  }

}
