import { Component, OnInit } from '@angular/core';
import {MenuSelection} from "../enumerators/menu-selection";
import {MenuService} from "../services/menu.service";

@Component({
  selector: 'app-landing-mobile',
  templateUrl: './landing-mobile.component.html',
  styleUrls: ['./landing-mobile.component.css']
})
export class LandingMobileComponent implements OnInit {
  MenuSelection = MenuSelection;

  constructor(public menuService: MenuService) { }

  ngOnInit(): void {
  }

}
