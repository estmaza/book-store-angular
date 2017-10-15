import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Components */
import { GridHeadComponent } from './components/grid-head.component';

/* Third Party */

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GridHeadComponent
  ],
  declarations: [
    GridHeadComponent
  ],
  providers: [],
})
export class SharedModule { }
