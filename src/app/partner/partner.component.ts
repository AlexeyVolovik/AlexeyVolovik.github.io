import { Component, OnInit } from '@angular/core';

enum PartnerTabSelection {
  All,
  Adopt,
  Donate
}

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css']
})
export class PartnerComponent implements OnInit {
  PartnerTabSelection = PartnerTabSelection;

  tabSelection: PartnerTabSelection = PartnerTabSelection.All;

  constructor() { }

  ngOnInit(): void {
  }

  setTabSelection(selection: PartnerTabSelection) {
    this.tabSelection = selection;
  }

}
