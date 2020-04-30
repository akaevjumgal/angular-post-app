import {Component} from '@angular/core'
import {MatDialog} from '@angular/material/dialog'
import {AddPostDialogComponent} from '../modules/add-post-dialog/add-post-dialog.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private dialog: MatDialog) {
  }

  openDialog() {
    this.dialog.open(AddPostDialogComponent, {
      width: '350px'
    })
  }
}
