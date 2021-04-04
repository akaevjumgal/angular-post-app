
export interface Post {
  id: string
  title: string
  description: string
  publishedAt: string
  updatedAt: string
}

export class PostCreateDto {
  title = ''
  description = ''
}
