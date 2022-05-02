import {Component, EventEmitter, OnInit, Output} from '@angular/core';

enum PartnerTabSelection {
  All,
  Adopt,
  Donate
}

@Component({
  selector: 'app-partner-donate',
  templateUrl: './partner-donate.component.html',
  styleUrls: ['./partner-donate.component.css']
})
export class PartnerDonateComponent implements OnInit {
  PartnerTabSelection = PartnerTabSelection;

  @Output() tabChange = new EventEmitter<PartnerTabSelection>();

  constructor() { }

  ngOnInit(): void {
  }

  tabButtonClick(tabSelection: PartnerTabSelection) {
    console.log("tab button clicked");

    this.tabChange.emit(tabSelection);
  }

}
