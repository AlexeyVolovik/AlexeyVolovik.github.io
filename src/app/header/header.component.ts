import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import {MenuSelection} from "../enumerators/menu-selection";
import {MenuService} from "../services/menu.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  MenuSelection = MenuSelection;

  constructor(public menuService: MenuService) {
  }

  ngOnInit(): void {
  }

}
