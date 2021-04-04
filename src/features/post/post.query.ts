import {QueryEntity} from '@datorama/akita'
import {PostEntityStore, PostState} from './post.store'
import {Post, PostCreateDto} from './post.model'
import {Injectable} from '@angular/core'
import {nanoid} from 'nanoid'

@Injectable({
  providedIn: 'root'
})
export class PostQuery extends QueryEntity<PostState> {
  constructor(protected store: PostEntityStore) {
    super(store);
  }

  findById(id: string): Post {
    return this.getEntity(id)
  }

  findAll(): Post[] {
    return this.getAll();
  }

  saveOne(post: PostCreateDto) {
    const postEntity: Post = {
      ...post,
      id: nanoid(10),
      publishedAt: new Date().toLocaleDateString(),
      updatedAt: new Date().toLocaleDateString()
    }
    this.store.add(postEntity)
  }

  updateOne(id: string, post: Post) {
    this.store.update(id, post)
  }

  removeOne(id: string) {
    this.store.remove(id)
  }
}
