import { Resolver, Args, Query, Context, Mutation } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UseGuards, UsePipes } from '@nestjs/common';
import { GqlAuthGuard } from 'core/auth/auth.guard';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query()
  @UseGuards(GqlAuthGuard)
  async user(@Context() req) {
    console.log('hmm', req);
  }

  @Mutation()
  async register(
    @Args('email') email: string,
    @Args('username') username: string,
    @Args('password') password: string,
  ) {
    console.log('registering with', email, username, password);
  }
}
