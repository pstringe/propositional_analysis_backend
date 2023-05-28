import { PartialType } from '@nestjs/mapped-types';
import { CreateDialecticDto } from './create-dialectic.dto';

export class UpdateDialecticDto extends PartialType(CreateDialecticDto) {}
