import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Enumerators} from "../enumerators";
import {MenuService} from "../services/menu.service";

@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.css']
})
export class HeaderMobileComponent implements OnInit {
  MenuSelection = Enumerators;

  constructor(public menuService: MenuService) { }

  ngOnInit(): void {
  }

}
