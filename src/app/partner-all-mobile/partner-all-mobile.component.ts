import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PartnerTabSelection} from "../enumerators";
import {MenuService} from "../services/menu.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-partner-all-mobile',
  templateUrl: './partner-all-mobile.component.html',
  styleUrls: ['./partner-all-mobile.component.css']
})
export class PartnerAllMobileComponent implements OnInit {
  PartnerTabSelection = PartnerTabSelection;

  selected: PartnerTabSelection = PartnerTabSelection.All;

  constructor(public menuService: MenuService, private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use(menuService.language.toLowerCase());
  }

  ngOnInit(): void {
  }

  inputChange(){
    this.menuService.setPartnerTabSelection(this.selected);
  }

}
