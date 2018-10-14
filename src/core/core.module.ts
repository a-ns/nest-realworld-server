import { Module, Global } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { JwtModule } from '@nestjs/jwt';

@Global()
@Module({
  providers: [AuthService],
  imports: [JwtModule.register({ secretOrPrivateKey: '123456789abcdefg' })],
  exports: [AuthService],
})
export class CoreModule {}
