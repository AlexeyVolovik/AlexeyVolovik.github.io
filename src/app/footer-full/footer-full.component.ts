import {Component, Inject, OnInit} from '@angular/core';
import {MenuService} from "../services/menu.service";
import {Enumerators} from "../enumerators";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-footer-full',
  templateUrl: './footer-full.component.html',
  styleUrls: ['./footer-full.component.css']
})
export class FooterFullComponent implements OnInit {
  MenuSelection = Enumerators;

  constructor(public menuService: MenuService, private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use(menuService.language.toLowerCase());
  }

  ngOnInit(): void {
  }

}

