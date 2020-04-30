import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {PostCreateDto, PostModel} from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private readonly path: string = 'posts';
  private posts: Observable<PostModel[]>;

  constructor(private http: HttpClient) {}

  findAll() {
    this.posts = this.http.get<PostModel[]>(`${environment.baseUrl}${this.path}`);
  }

  findOne(id: number): Observable<PostModel> {
    return this.http.get<PostModel>(`${environment.baseUrl}${this.path}/${id}`);
  }

  createPost(post: PostCreateDto): Observable<PostModel> {
    return this.http.post<PostModel>(`${environment.baseUrl}${this.path}`, post);
  }

  get getPosts(): Observable<PostModel[]> {
    return this.posts;
  }

}
