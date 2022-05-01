import {Component, EventEmitter, OnInit, Output} from '@angular/core';

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
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  MenuSelection = MenuSelection;

  @Output() menuChange = new EventEmitter<MenuSelection>();

  constructor() { }

  ngOnInit(): void {
  }

  menuButtonClick(menuSelection: MenuSelection) {
    console.log("menu button clicked");

    this.menuChange.emit(menuSelection);
  }

}
