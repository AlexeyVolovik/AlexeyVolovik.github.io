import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import {Enumerators, Language} from "../enumerators";
import {MenuService} from "../services/menu.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  MenuSelection = Enumerators;
  Language = Language;

  constructor(public menuService: MenuService) {
  }

  ngOnInit(): void {
  }

}
