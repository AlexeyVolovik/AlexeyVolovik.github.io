import { Component, OnInit } from '@angular/core';
import {Enumerators} from "../enumerators";
import {MenuService} from "../services/menu.service";
import {AppDataService} from "../services/app-data.service";

@Component({
  selector: 'app-landing-mobile',
  templateUrl: './landing-mobile.component.html',
  styleUrls: ['./landing-mobile.component.css']
})
export class LandingMobileComponent implements OnInit {
  MenuSelection = Enumerators;

  constructor(public menuService: MenuService, public appData: AppDataService) { }

  ngOnInit(): void {
  }

}
