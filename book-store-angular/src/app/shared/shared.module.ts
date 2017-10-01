import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/* Components */
import { TableHeadComponent } from './components/table-head.component';

/* Third Party */

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    TableHeadComponent
  ],
  declarations: [
    TableHeadComponent
  ],
  providers: [],
})
export class SharedModule { }
