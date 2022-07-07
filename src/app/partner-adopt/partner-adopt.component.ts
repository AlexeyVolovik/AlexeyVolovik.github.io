import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PartnerTabSelection} from "../enumerators";
import {MenuService} from "../services/menu.service";
import {TranslateService} from "@ngx-translate/core";
@Component({
  selector: 'app-partner-adopt',
  templateUrl: './partner-adopt.component.html',
  styleUrls: ['./partner-adopt.component.css']
})
export class PartnerAdoptComponent implements OnInit {
  PartnerTabSelection = PartnerTabSelection;

  constructor(public menuService: MenuService, private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use(menuService.language.toLowerCase());
  }

  public items = [
    'assets/img/partner-adopt-carousel-1.jpeg',
    'assets/img/partner-adopt-carousel-2.jpeg',
    'assets/img/partner-adopt-carousel-3.jpeg',
    'assets/img/partner-adopt-carousel-4.jpeg',
    'assets/img/partner-adopt-carousel-5.jpeg',
    'assets/img/partner-adopt-carousel-6.jpeg',
    'assets/img/partner-adopt-carousel-7.jpeg',
    'assets/img/partner-adopt-carousel-8.jpeg'
  ];

  ngOnInit() {
  }

}
