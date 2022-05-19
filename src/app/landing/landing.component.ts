import { Component, OnInit } from '@angular/core';
import {Enumerators} from "../enumerators";
import {MenuService} from "../services/menu.service";
import {AppDataService} from "../services/app-data.service";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  MenuSelection = Enumerators;

  constructor(public menuService: MenuService, public appData: AppDataService) { }

  ngOnInit(): void {
  }

}
