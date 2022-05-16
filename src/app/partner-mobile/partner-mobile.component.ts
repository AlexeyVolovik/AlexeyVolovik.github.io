import { Component, OnInit } from '@angular/core';
import {PartnerTabSelection} from "../enumerators";
import {MenuService} from "../services/menu.service";

@Component({
  selector: 'app-partner-mobile',
  templateUrl: './partner-mobile.component.html',
  styleUrls: ['./partner-mobile.component.css']
})
export class PartnerMobileComponent implements OnInit {
  PartnerTabSelection = PartnerTabSelection;

  constructor(public menuService: MenuService) { }

  ngOnInit(): void {
  }

}
