import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {MenuService} from "../services/menu.service";

@Component({
  selector: 'app-volunteer-full',
  templateUrl: './volunteer-full.component.html',
  styleUrls: ['./volunteer-full.component.css']
})
export class VolunteerFullComponent implements OnInit {

  constructor(public menuService: MenuService, private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use(menuService.language.toLowerCase());
  }

  ngOnInit(): void {
  }

}
