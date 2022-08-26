import { Field, InputType, Int } from '@nestjs/graphql';

@InputType() //use for mutation
export class StudentCreateDto {
  @Field()
  name: string;
  @Field()
  gender: string;
  @Field()
  address: string;
  @Field()
  mobileNo: string;
  @Field(() => Date)
  dateOfBirth: Date;
  @Field()
  inEdit: boolean;
  @Field(() => Int)
  age: number;
  @Field()
  isArchive: boolean;
}
