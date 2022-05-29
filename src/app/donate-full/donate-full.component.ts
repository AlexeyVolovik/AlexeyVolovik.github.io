import { Component, OnInit } from '@angular/core';
import {MenuService} from "../services/menu.service";
import {TranslateService} from "@ngx-translate/core";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-donate-full',
  templateUrl: './donate-full.component.html',
  styleUrls: ['./donate-full.component.css']
})
export class DonateFullComponent implements OnInit {

  constructor(private route: ActivatedRoute, public menuService: MenuService, private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use(menuService.language.toLowerCase());
  }

  ngOnInit(): void {
  }

}
