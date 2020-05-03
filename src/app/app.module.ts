import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {DashboardModule} from '../modules/dashboard/dashboard.module'
import {HttpClientModule} from '@angular/common/http'
import {MatToolbarModule} from '@angular/material/toolbar'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {MatIconModule, MatIconRegistry} from '@angular/material/icon'
import {PostModule} from '../modules/post/post.module'
import {PostDialogModule} from '../modules/post-dialog/post-dialog.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DashboardModule,
    MatToolbarModule,
    MatIconModule,
    PostDialogModule,
    PostModule
  ],
  providers: [MatIconRegistry],
  bootstrap: [AppComponent]
})
export class AppModule {
}
