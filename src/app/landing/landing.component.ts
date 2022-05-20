import { Component, OnInit } from '@angular/core';
import {Enumerators} from "../enumerators";
import {MenuService} from "../services/menu.service";
import {AppDataService} from "../services/app-data.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  MenuSelection = Enumerators;

  constructor(public menuService: MenuService, public appData: AppDataService, private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use(menuService.language.toLowerCase());
  }

  ngOnInit(): void {
  }

}
