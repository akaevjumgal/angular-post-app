import { Component, OnInit } from '@angular/core';
import {PostService} from './post.service';
import {PostModel} from './post.model';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  public post: PostModel;

  constructor(private postService: PostService, private activatedRoute: ActivatedRoute) { }

  async ngOnInit() {
    let postId: number = null;
    this.activatedRoute.paramMap.subscribe(p => postId = +p.get('postId'));
    await this.postService.findOne(postId).subscribe(post => this.post = post);
  }

}
