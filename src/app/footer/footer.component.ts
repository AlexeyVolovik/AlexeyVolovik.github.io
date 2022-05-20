import {Component, Inject, OnInit} from '@angular/core';
import {MenuService} from "../services/menu.service";
import {Enumerators} from "../enumerators";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  MenuSelection = Enumerators;

  constructor(public menuService: MenuService) { }

  ngOnInit(): void {
  }

}

