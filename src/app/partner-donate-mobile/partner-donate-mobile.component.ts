import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PartnerTabSelection} from "../enumerators";
import {MenuService} from "../services/menu.service";

@Component({
  selector: 'app-partner-donate-mobile',
  templateUrl: './partner-donate-mobile.component.html',
  styleUrls: ['./partner-donate-mobile.component.css']
})
export class PartnerDonateMobileComponent implements OnInit {
  PartnerTabSelection = PartnerTabSelection;

  selected: PartnerTabSelection = PartnerTabSelection.Donate;

  constructor(public menuService: MenuService) { }

  ngOnInit(): void {
  }

  inputChange(){
    this.menuService.setPartnerTabSelection(this.selected);
  }

}
