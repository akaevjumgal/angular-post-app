import {Component, OnInit} from '@angular/core';
import {PostCreateDto, PostModel} from '../post/post.model';
import {PostService} from '../post/post.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  postForm: FormGroup;

  constructor(public postService: PostService, private formBuilder: FormBuilder) {
    this.postForm = this.formBuilder.group({
      title: [' ', Validators.required],
      description: [' ', Validators.required],
    });
  }

  ngOnInit() {
    this.postService.findAll();
  }
}
