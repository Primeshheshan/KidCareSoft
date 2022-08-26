import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity() //use for query
export class Student {
  // type definitions
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  gender: string;

  @Field()
  @Column()
  address: string;

  @Field()
  @Column()
  mobileNo: string;

  @Field(() => Date)
  @Column()
  dateOfBirth: Date;

  @Field()
  @Column()
  inEdit: boolean;

  @Field(() => Int)
  @Column()
  age: number;

  @Field()
  @Column()
  isArchive: boolean;
}
