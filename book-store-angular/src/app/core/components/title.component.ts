import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  template: `
    <div>
      <h1>{{title}}</h1>
    </div>`,
  styles: [
    'h1 { text-align:center; }'
  ]
})

export class TitleComponent {
  @Input() title = '';
}