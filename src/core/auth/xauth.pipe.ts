import { Injectable, PipeTransform, ArgumentMetadata } from '@nestjs/common';

@Injectable()
export class XAuthorizationPipe implements PipeTransform {
  transform(value: { req: Request }, metadata: ArgumentMetadata) {
    return value.req.headers['x-authorization']
      ? value.req.headers['x-authorization']
      : value;
  }
}
