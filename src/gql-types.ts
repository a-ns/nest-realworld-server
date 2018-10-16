export interface Article {
  slug: string;
  title: string;
  description?: string;
  body?: string;
  tagList?: string[];
  createdAt?: string;
  updatedAt?: string;
  favorited?: boolean;
  author?: User;
}

export interface IMutation {
  createArticle(
    title: string,
    description: string,
    body: string,
    tagList?: string[],
  ): Article | Promise<Article>;
  updateArticle(
    slug: string,
    title?: string,
    description?: string,
    body?: string,
  ): Article | Promise<Article>;
  deleteArticle(slug: string): Article | Promise<Article>;
  favoriteArticle(slug: string): Article | Promise<Article>;
  login(email: string, password: string): User | Promise<User>;
  register(
    email: string,
    username: string,
    password: string,
  ): User | Promise<User>;
  update(
    email?: string,
    username?: string,
    password?: string,
    image?: string,
    bio?: string,
  ): User | Promise<User>;
}

export interface Post {
  body: string;
  id: number;
}

export interface IQuery {
  article(slug: string): Article | Promise<Article>;
  articles(
    first?: number,
    after?: string,
    authoredBy?: string,
    favoritedBy?: string,
    withTag?: string,
  ): Article[] | Promise<Article[]>;
  post(id: number): Post | Promise<Post>;
  user(): User | Promise<User>;
  temp__(): boolean | Promise<boolean>;
}

export interface User {
  email: string;
  username: string;
  token?: string;
  image?: string;
  bio?: string;
}
