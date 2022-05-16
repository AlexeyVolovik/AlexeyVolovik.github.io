import { Component, OnInit } from '@angular/core';
import {PartnerTabSelection} from "../enumerators";
import {MenuService} from "../services/menu.service";

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css']
})
export class PartnerComponent implements OnInit {
  PartnerTabSelection = PartnerTabSelection;

  constructor(public menuService: MenuService) { }

  ngOnInit(): void {
  }

}
