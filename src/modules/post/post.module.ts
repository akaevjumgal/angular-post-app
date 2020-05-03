import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostComponent} from './post.component';
import {MatInputModule} from '@angular/material/input'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule, MatIconRegistry} from '@angular/material/icon'
import {RouterModule} from '@angular/router'
import {AlertDialogModule} from '../alert-dialog/alert-dialog.module'

@NgModule({
  declarations: [
    PostComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    AlertDialogModule
  ],
  exports: [
    PostComponent
  ],
  providers: [MatIconRegistry]
})
export class PostModule { }
