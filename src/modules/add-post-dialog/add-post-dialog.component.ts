import {Component, Inject, OnInit} from '@angular/core'
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog'
import {PostCreateDto, PostModel} from '../post/post.model'
import {PostService} from '../post/post.service'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-add-post-dialog',
  templateUrl: './add-post-dialog.component.html',
  styleUrls: ['./add-post-dialog.component.scss']
})
export class AddPostDialogComponent {

  postCreateForm: FormGroup

  constructor(
    public dialogRef: MatDialogRef<AddPostDialogComponent>,
    private formBuilder: FormBuilder,
    private postService: PostService
  ) {
    this.postCreateForm = this.formBuilder.group({
      title: [null, Validators.required],
      description: [null, Validators.required]
    })
  }

  onClose(): void {
    this.dialogRef.close()
  }

  onPost() {
    const post = this.postCreateForm.getRawValue() as PostCreateDto
    this.postService.createPost(post)
      .toPromise()
      .then(() => this.postService.findAll())
  }

}
