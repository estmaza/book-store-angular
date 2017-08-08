import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { Author } from '../../models/author';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css']
})
export class AuthorDetailComponent implements OnChanges {
  @Input() author: Author;
  @Output() canceled: EventEmitter<any> = new EventEmitter();
  @Output() saved: EventEmitter<Author> = new EventEmitter();

  form: FormGroup;

  constructor(private builder: FormBuilder) {
    this.init();
  }

  ngOnChanges() {
    this.form.reset({
      id: this.author.id || 0,
      firstName: this.author.firstName || '',
      lastName: this.author.lastName || '',
      biography: this.author.biography || ''
    });
  }

  init() {
    this.form = this.builder.group({
      id: 0,
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      biography: ''
    });
  }

  onSubmit() {
    console.log('OnSubmit');
    
  }

  cancel(): void {
    this.canceled.emit(null);
  }

}
