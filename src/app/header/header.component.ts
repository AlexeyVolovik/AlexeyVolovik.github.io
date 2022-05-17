import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import {Enumerators} from "../enumerators";
import {MenuService} from "../services/menu.service";

enum Language {
  EN = "EN",
  UA = "UA",
  NL = "NL"
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  MenuSelection = Enumerators;
  Language = Language;

  language: Language = Language.EN;

  constructor(public menuService: MenuService) {
  }

  ngOnInit(): void {
  }

  setLanguage(language: Language) {
    this.language = language;
  }

}
