import { Component, OnInit } from '@angular/core';
import {MenuService} from "../services/menu.service";
import {Enumerators} from "../enumerators";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-footer-mobile',
  templateUrl: './footer-mobile.component.html',
  styleUrls: ['./footer-mobile.component.css']
})
export class FooterMobileComponent implements OnInit {
  MenuSelection = Enumerators;

  constructor(public menuService: MenuService, private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use(menuService.language.toLowerCase());
  }

  ngOnInit(): void {
  }

}
