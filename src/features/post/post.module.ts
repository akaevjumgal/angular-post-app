import { NgModule } from '@angular/core';
import {PostComponent} from './post.component';
import {SharedModule} from '../../shared/shared.module'

@NgModule({
  declarations: [
    PostComponent,
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    PostComponent,
  ],
})
export class PostModule { }
