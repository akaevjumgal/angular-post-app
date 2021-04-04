import {EntityState, EntityStore, StoreConfig} from '@datorama/akita'
import {Post} from './post.model'
import {Injectable} from '@angular/core'

export interface PostState extends EntityState<Post, string> {}

@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: 'post' })
export class PostEntityStore extends EntityStore<PostState> {
  constructor() {
    super()
  }
}
