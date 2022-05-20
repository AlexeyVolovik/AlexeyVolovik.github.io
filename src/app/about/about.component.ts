import { Component, OnInit } from '@angular/core';
import {MenuService} from "../services/menu.service";
import {Enumerators} from "../enumerators";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  MenuSelection = Enumerators;

  constructor(public menuService: MenuService) { }

  ngOnInit(): void {
  }

}
