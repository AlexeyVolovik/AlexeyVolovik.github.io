import { Component, OnInit } from '@angular/core';
import {MenuService} from "../services/menu.service";
import {Enumerators} from "../enumerators";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  MenuSelection = Enumerators;

  constructor(public menuService: MenuService) { }

  ngOnInit(): void {
  }

}
