import {Component, EventEmitter, OnInit, Output} from '@angular/core';

enum PartnerTabSelection {
  All,
  Adopt,
  Donate
}

@Component({
  selector: 'app-partner-donate-mobile',
  templateUrl: './partner-donate-mobile.component.html',
  styleUrls: ['./partner-donate-mobile.component.css']
})
export class PartnerDonateMobileComponent implements OnInit {
  PartnerTabSelection = PartnerTabSelection;

  @Output() tabChange = new EventEmitter<PartnerTabSelection>();

  selected: PartnerTabSelection = PartnerTabSelection.Donate;

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
