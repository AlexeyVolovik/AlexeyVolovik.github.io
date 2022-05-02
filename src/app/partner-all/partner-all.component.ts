import {Component, EventEmitter, OnInit, Output} from '@angular/core';

enum PartnerTabSelection {
  All,
  Adopt,
  Donate
}

@Component({
  selector: 'app-partner-all',
  templateUrl: './partner-all.component.html',
  styleUrls: ['./partner-all.component.css']
})
export class PartnerAllComponent implements OnInit {
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
