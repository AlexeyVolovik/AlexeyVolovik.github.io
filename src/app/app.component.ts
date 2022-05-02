import { Component } from '@angular/core';

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
  MenuSelection = MenuSelection;

  title = 'Zeilen';
  menuSelection: MenuSelection = MenuSelection.Volunteer;

  setMenuSelection(selection: MenuSelection) {
    this.menuSelection = selection;
  }

}
