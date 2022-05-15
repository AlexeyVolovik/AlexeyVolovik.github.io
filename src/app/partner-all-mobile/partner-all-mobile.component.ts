import {Component, EventEmitter, OnInit, Output} from '@angular/core';

enum PartnerTabSelection {
  All,
  Adopt,
  Donate
}

@Component({
  selector: 'app-partner-all-mobile',
  templateUrl: './partner-all-mobile.component.html',
  styleUrls: ['./partner-all-mobile.component.css']
})
export class PartnerAllMobileComponent implements OnInit {
  PartnerTabSelection = PartnerTabSelection;

  @Output() tabChange = new EventEmitter<PartnerTabSelection>();

  selected: PartnerTabSelection = PartnerTabSelection.All;

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
