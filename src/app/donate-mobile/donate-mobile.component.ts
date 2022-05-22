import { Component, OnInit } from '@angular/core';
import {MenuService} from "../services/menu.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-donate-mobile',
  templateUrl: './donate-mobile.component.html',
  styleUrls: ['./donate-mobile.component.css']
})
export class DonateMobileComponent implements OnInit {

  constructor(public menuService: MenuService, private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use(menuService.language.toLowerCase());
  }

  ngOnInit(): void {
  }

}
