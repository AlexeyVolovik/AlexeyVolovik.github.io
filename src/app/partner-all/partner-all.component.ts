import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Enumerators, PartnerTabSelection} from "../enumerators";
import {MenuService} from "../services/menu.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-partner-all',
  templateUrl: './partner-all.component.html',
  styleUrls: ['./partner-all.component.css']
})
export class PartnerAllComponent implements OnInit {
  MenuSelection = Enumerators;
  PartnerTabSelection = PartnerTabSelection;

  constructor(public menuService: MenuService, private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use(menuService.language.toLowerCase());
  }

  ngOnInit(): void {
  }

}
