import { Component, OnInit } from '@angular/core';
import {MenuService} from "../services/menu.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-volunteer-mobile',
  templateUrl: './volunteer-mobile.component.html',
  styleUrls: ['./volunteer-mobile.component.css']
})
export class VolunteerMobileComponent implements OnInit {

  constructor(public menuService: MenuService, private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use(menuService.language.toLowerCase());
  }

  ngOnInit(): void {
  }

}
