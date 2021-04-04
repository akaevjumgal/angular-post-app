import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {BrowserModule} from '@angular/platform-browser'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MaterialModule} from './material.module'

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  exports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: []
})
export class SharedModule {
}
