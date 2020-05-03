import {Component, OnInit} from '@angular/core'
import {PostService} from './post.service'
import {PostModel} from './post.model'
import {ActivatedRoute, Router} from '@angular/router'
import {MatDialog} from '@angular/material/dialog'
import {IPostDialogData, PostDialogComponent} from '../post-dialog/post-dialog.component'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {AlertDialogComponent, IAlertDialogData} from '../alert-dialog/alert-dialog.component'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  public post: PostModel
  public postForm: FormGroup

  constructor(
    private postService: PostService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private editDialog: MatDialog,
    private deleteDialog: MatDialog
  ) {}

  ngOnInit() {
    this.fetchPostDetails()
  }

  fetchPostDetails() {
    let postId: number = null
    this.activatedRoute.paramMap.subscribe(p => postId = +p.get('postId'))
    this.postService.findOne(postId).subscribe(post => this.post = post)
  }

  openDialog() {
    const {title, description} = this.post
    this.postForm = this.formBuilder.group({
      title: [title, Validators.required],
      description: [description, Validators.required],
    })
    this.editDialog.open(PostDialogComponent, {
      width: '350px',
      role: 'alertdialog',
      data: {
        onSave: () => this.onSave(),
        postForm: this.postForm
      } as IPostDialogData
    })
  }

  openConfirmDialog() {
    this.deleteDialog.open(AlertDialogComponent, {
      width: '350px',
      data: {
        onSubmit: () => this.onDelete(),
        message: 'Are you sure you want to delete this post?'
      } as IAlertDialogData
    })
  }

  onSave() {
    this.postService.updatePost(this.post.id, this.postForm.getRawValue())
      .toPromise()
      .then(() => this.fetchPostDetails())
  }

  onDelete() {
    this.postService.deletePost(this.post.id)
      .toPromise()
      .then(() => this.router.navigate(['/']))
  }

}
