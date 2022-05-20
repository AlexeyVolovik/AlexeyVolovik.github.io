import { Component, OnInit } from '@angular/core';
import {Enumerators} from "../enumerators";
import {MenuService} from "../services/menu.service";
import {AppDataService} from "../services/app-data.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-landing-mobile',
  templateUrl: './landing-mobile.component.html',
  styleUrls: ['./landing-mobile.component.css']
})
export class LandingMobileComponent implements OnInit {
  MenuSelection = Enumerators;

  constructor(public menuService: MenuService, public appData: AppDataService, private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use(menuService.language.toLowerCase());
  }

  ngOnInit(): void {
  }

}
