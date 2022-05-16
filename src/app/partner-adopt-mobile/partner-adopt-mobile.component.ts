import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PartnerTabSelection} from "../enumerators";
import {MenuService} from "../services/menu.service";

@Component({
  selector: 'app-partner-adopt-mobile',
  templateUrl: './partner-adopt-mobile.component.html',
  styleUrls: ['./partner-adopt-mobile.component.css']
})
export class PartnerAdoptMobileComponent implements OnInit {
  PartnerTabSelection = PartnerTabSelection;

  selected: PartnerTabSelection = PartnerTabSelection.Adopt;

  constructor(public menuService: MenuService) { }

  ngOnInit(): void {
  }

  inputChange(){
    this.menuService.setPartnerTabSelection(this.selected);
  }

}
