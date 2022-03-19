import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export default class User {
  @Field()
  @PrimaryKey()
  _id!: number;

  @Field(() => Date, { nullable: true })
  @Property({ type: "date" })
  createdAt? = new Date();

  @Field(() => Date, { nullable: true })
  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt? = new Date();

  @Field(() => String)
  @Property({ type: "text", unique: true })
  username?: string;

  @Property({ type: "text" })
  password: string;
}
