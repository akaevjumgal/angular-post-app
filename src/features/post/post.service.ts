import {Injectable} from '@angular/core';
import {Post, PostCreateDto} from './post.model'
import {PostQuery} from './post.query'

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private query: PostQuery) {}

  all(): Post[] {
    return this.query.findAll();
  }

  findOne(id: string): Post {
    return this.query.findById(id)
  }

  createPost(post: PostCreateDto) {
    this.query.saveOne(post)
  }

  updatePost(id: string, post: Post) {
    this.query.updateOne(id, post)
  }

  deletePost(id: string) {
    this.query.removeOne(id)
  }

}
