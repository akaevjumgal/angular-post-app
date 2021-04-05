import {Component, OnInit} from '@angular/core'
import {PostService} from '../post/post.service'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {IPostDialogData, PostDialogComponent} from '../post-dialog/post-dialog.component'
import {MatDialog} from '@angular/material/dialog'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private readonly postCreateForm: FormGroup

  constructor(
    public postService: PostService,
    private formBuilder: FormBuilder,
    private dialog: MatDialog
  ) {
    this.postCreateForm = formBuilder.group({
      title: [null, Validators.required],
      description: [null, Validators.required]
    })
  }

  ngOnInit() {
    console.log(this.postService.all())
  }

  openDialog() {
    this.dialog.open<PostDialogComponent, IPostDialogData>(PostDialogComponent, {
      data: {
        onSave: () => this.onSave(),
        postForm: this.postCreateForm
      },
    })
  }

  onSave() {
    this.postService.createPost(this.postCreateForm.getRawValue())
    this.postCreateForm.reset()
  }
}
