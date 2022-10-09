import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { isValidObjectId } from 'mongoose';

@Injectable()
export class ParseMongoIdPipe implements PipeTransform {
  transform(value: String, metadata: ArgumentMetadata) {
    //console.log({value, metadata});

    if (!isValidObjectId(value)) {
      throw new BadRequestException(`${value} is not a MOngoBojectId`);
    }

    return value;
  }
}
