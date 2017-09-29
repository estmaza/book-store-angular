import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

import { MenuItem } from '.././models/menuItem';

@Component({
  selector: 'app-menu',
  template: `
    <ul class="nav nav-tabs">
      <li *ngFor="let route of routes; let i = index" role="presentation" [class.active]="route.id == selected">
        <a routerLink="{{route.link}}">
          {{route.name}}
        </a>
      </li>
    </ul>`
})

export class MenuComponent implements OnInit {
  routes: MenuItem[];
  selected: number = 1;

  constructor() { 
    this.routes = [
      new MenuItem(1, 'Books', '/books', 0),
      new MenuItem(2, 'Authors', '/authors', 0)
    ]
  }

  ngOnInit() { }
}