import { Component, OnInit } from '@angular/core';
import {ReportsService} from "../services/reports.service";

@Component({
  selector: 'app-reports-mobile',
  templateUrl: './reports-mobile.component.html',
  styleUrls: ['./reports-mobile.component.css']
})
export class ReportsMobileComponent implements OnInit {

  constructor(public repData: ReportsService) { }

  ngOnInit(): void {
  }

}
