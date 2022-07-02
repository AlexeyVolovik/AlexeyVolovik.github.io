import { Component, OnInit } from '@angular/core';
import {AppDataService} from "../services/app-data.service";
import {ReportsService} from "../services/reports.service";

@Component({
  selector: 'app-reports-full',
  templateUrl: './reports-full.component.html',
  styleUrls: ['./reports-full.component.css']
})
export class ReportsFullComponent implements OnInit {

  constructor(public repData: ReportsService) { }

  ngOnInit(): void {
  }

}
