import {Component, OnInit} from '@angular/core'
import {PostService} from './post.service'
import {ActivatedRoute, Router} from '@angular/router'
import {MatDialog} from '@angular/material/dialog'
import {IPostDialogData, PostDialogComponent} from '../post-dialog/post-dialog.component'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {AlertDialogComponent, IAlertDialogData} from '../alert-dialog/alert-dialog.component'
import {Post} from './post.model'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  public post: Post
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
    let postId: string
    this.activatedRoute.paramMap.subscribe(p => postId = p.get('postId'))
    this.post = this.postService.findOne(postId)
  }

  openDialog() {
    const {title, description} = this.post
    this.postForm = this.formBuilder.group({
      title: [title, Validators.required],
      description: [description, Validators.required],
    })
    this.editDialog.open<PostDialogComponent, IPostDialogData>(PostDialogComponent, {
      width: '40vw',
      role: 'alertdialog',
      data: {
        onSave: () => this.onSave(),
        postForm: this.postForm
      }
    })
  }

  openConfirmDialog() {
    this.deleteDialog.open<AlertDialogComponent, IAlertDialogData>(AlertDialogComponent, {
      width: '350px',
      data: {
        onSubmit: () => this.onDelete(),
        message: 'Are you sure you want to delete this post?'
      }
    })
  }

  onSave() {
    this.postService.updatePost(this.post.id, this.postForm.getRawValue())
    this.fetchPostDetails()
  }

  onDelete() {
    this.postService.deletePost(this.post.id)
    this.router.navigate(['/'])
  }

}
