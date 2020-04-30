
export class PostModel {
  id: number;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt: string;
}

export class PostCreateDto {
  title = '';
  description = '';
}
