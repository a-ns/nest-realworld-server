import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

export interface JwtToken {
  username: string;
}
@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  validate(token: string) {
    const { username } = this.jwtService.verify<JwtToken>(token);
    if (!username) {
      throw new HttpException('Bad token', HttpStatus.BAD_REQUEST);
    }
    return username;
  }

  sign(username: string) {
    const token = this.jwtService.sign(username);
    return token;
  }
}
