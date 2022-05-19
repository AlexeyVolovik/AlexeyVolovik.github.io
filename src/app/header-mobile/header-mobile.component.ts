import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Enumerators, Language} from "../enumerators";
import {MenuService} from "../services/menu.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.css']
})
export class HeaderMobileComponent implements OnInit {
  MenuSelection = Enumerators;
  Language = Language;

  constructor(public menuService: MenuService, private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use(menuService.language.toLowerCase());
  }

  ngOnInit(): void {
  }

}
