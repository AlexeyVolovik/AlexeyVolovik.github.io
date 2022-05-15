import { Component, OnInit } from '@angular/core';

enum PartnerTabSelection {
  All,
  Adopt,
  Donate
}

@Component({
  selector: 'app-partner-mobile',
  templateUrl: './partner-mobile.component.html',
  styleUrls: ['./partner-mobile.component.css']
})
export class PartnerMobileComponent implements OnInit {
  PartnerTabSelection = PartnerTabSelection;

  tabSelection: PartnerTabSelection = PartnerTabSelection.All;

  constructor() { }

  ngOnInit(): void {
  }

  setTabSelection(selection: PartnerTabSelection) {
    this.tabSelection = selection;
  }

}
