import {
  Resolver,
  Args,
  Query,
  ResolveProperty,
  Parent,
} from '@nestjs/graphql';
import { UserService } from 'modules/user/user.service';
import { ArticleService } from './article.service';
import { Article, User } from 'gql-types';

@Resolver('article')
export class ArticleResolver {
  constructor(
    private readonly articleService: ArticleService,
    private readonly userService: UserService,
  ) {}

  @Query()
  async article(@Args('slug') slug: string): Promise<Article> {
    return this.articleService.findOneBySlug(slug);
  }

  @ResolveProperty()
  async author(@Parent() article: Article): Promise<User> {
    const { userId } = article; // need to create another model that has userId on it, something like a DTO
    return this.userService.findOneById(userId);
  }
}
