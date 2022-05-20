import { Component, OnInit } from '@angular/core';
import {MenuService} from "../services/menu.service";
import {Enumerators} from "../enumerators";

@Component({
  selector: 'app-about-mobile',
  templateUrl: './about-mobile.component.html',
  styleUrls: ['./about-mobile.component.css']
})
export class AboutMobileComponent implements OnInit {
  MenuSelection = Enumerators;

  constructor(public menuService: MenuService) { }

  ngOnInit(): void {
  }

}
