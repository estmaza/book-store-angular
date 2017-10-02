import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

// Models
import { Author } from '../../shared/models/author';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';

@Component({
  selector: 'app-author-detail',
  templateUrl: 'author-detail.component.html'
})
export class AuthorDetailComponent implements OnChanges {
  @Input() author: Author;
  @Input() options: IMultiSelectOption[];
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
      biography: this.author.biography || '',
      books: this.author.books || [],
    });
  }

  init() {
    this.form = this.builder.group({
      id: 0,
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      biography: '',
      books: []
    });
    console.log(this.options);
  }

  onSubmit() {
    const model = this.form.value;
    this.saved.emit(model);
  }

  cancel(): void {
    this.canceled.emit(null);
  }

}
