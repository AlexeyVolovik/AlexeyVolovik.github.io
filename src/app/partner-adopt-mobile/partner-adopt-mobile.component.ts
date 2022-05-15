import {Component, EventEmitter, OnInit, Output} from '@angular/core';

enum PartnerTabSelection {
  All,
  Adopt,
  Donate
}

@Component({
  selector: 'app-partner-adopt-mobile',
  templateUrl: './partner-adopt-mobile.component.html',
  styleUrls: ['./partner-adopt-mobile.component.css']
})
export class PartnerAdoptMobileComponent implements OnInit {
  PartnerTabSelection = PartnerTabSelection;

  @Output() tabChange = new EventEmitter<PartnerTabSelection>();

  selected: PartnerTabSelection = PartnerTabSelection.Adopt;

  constructor() { }

  ngOnInit(): void {
  }

  tabButtonClick(tabSelection: PartnerTabSelection) {
    console.log("tab button clicked");

    this.tabChange.emit(tabSelection);
  }

  inputChange(){
    this.tabButtonClick(this.selected);
  }

}
