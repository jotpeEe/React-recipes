import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export default class Ingredient {
  @Field()
  @PrimaryKey()
  _id!: number;

  @Field(() => String)
  @Property({ type: "text" })
  name!: string;

  @Field(() => String)
  @Property({ type: "text" })
  quantity!: string;
}
