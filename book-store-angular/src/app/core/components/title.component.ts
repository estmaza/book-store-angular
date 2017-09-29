import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  template: `<h1>{{title}}</h1>`,
  styles: [
    'h1 { text-align:center; }'
  ]
})

export class TitleComponent {
  @Input() title = '';
}