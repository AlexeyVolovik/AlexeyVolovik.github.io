import { Component } from '@angular/core';
import { HostListener } from "@angular/core";

enum MenuSelection {
  Landing = 0,
  Donate = 1,
  Volunteer = 2,
  Partner = 3,
  Request = 4,
  Reports = 5,
  Media = 6,
  About = 7
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isMobileResolution: boolean;

  MenuSelection = MenuSelection;

  title = 'Zeilen';
  menuSelection: MenuSelection = MenuSelection.Landing;

  constructor() {
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

  setMenuSelection(selection: MenuSelection) {
    this.menuSelection = selection;
  }

}
