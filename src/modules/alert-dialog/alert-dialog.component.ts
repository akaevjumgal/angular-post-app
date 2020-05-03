import {Component, Inject, OnInit} from '@angular/core'
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog'

export interface IAlertDialogData {
  message: string
  onSubmit: () => void
}

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.scss']
})
export class AlertDialogComponent implements OnInit {

  constructor(
    private dialog: MatDialogRef<AlertDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IAlertDialogData
  ) { }

  ngOnInit(): void {
  }

  onClose() {
    this.dialog.close()
  }

  onSubmit() {
    this.data.onSubmit()
  }

}
