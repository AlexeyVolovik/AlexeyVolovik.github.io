import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Enumerators, PartnerTabSelection} from "../enumerators";
import {MenuService} from "../services/menu.service";

@Component({
  selector: 'app-partner-all',
  templateUrl: './partner-all.component.html',
  styleUrls: ['./partner-all.component.css']
})
export class PartnerAllComponent implements OnInit {
  MenuSelection = Enumerators;
  PartnerTabSelection = PartnerTabSelection;

  constructor(public menuService: MenuService) { }

  ngOnInit(): void {
  }

}
