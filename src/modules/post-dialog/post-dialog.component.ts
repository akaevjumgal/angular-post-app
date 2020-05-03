import {Component, Inject} from '@angular/core'
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog'
import {FormGroup} from '@angular/forms'

export interface IPostDialogData {
  postForm: FormGroup
  onSave: () => void
}

@Component({
  selector: 'app-add-post-dialog',
  templateUrl: './post-dialog.component.html',
  styleUrls: ['./post-dialog.component.scss']
})
export class PostDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<PostDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public formObject: IPostDialogData,
  ) { }

  onClose(): void {
    this.dialogRef.close()
  }

  onSubmit() {
    this.formObject.onSave()
  }

  get form(): FormGroup {
    return this.formObject.postForm
  }
}
