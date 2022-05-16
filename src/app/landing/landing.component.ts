import { Component, OnInit } from '@angular/core';
import {MenuSelection} from "../enumerators/menu-selection";
import {MenuService} from "../services/menu.service";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  MenuSelection = MenuSelection;

  constructor(public menuService: MenuService) { }

  ngOnInit(): void {
  }

}
