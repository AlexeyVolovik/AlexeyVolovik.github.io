import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PartnerTabSelection} from "../enumerators";
import {MenuService} from "../services/menu.service";

@Component({
  selector: 'app-partner-adopt',
  templateUrl: './partner-adopt.component.html',
  styleUrls: ['./partner-adopt.component.css']
})
export class PartnerAdoptComponent implements OnInit {
  PartnerTabSelection = PartnerTabSelection;

  constructor(public menuService: MenuService) { }

  ngOnInit(): void {
  }

}
