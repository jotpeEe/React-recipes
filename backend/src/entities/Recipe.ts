import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export default class Recipe {
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
  @Property({ type: "text" })
  title!: string;
}
