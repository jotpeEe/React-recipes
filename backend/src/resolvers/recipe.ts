import { Arg, Ctx, Query, Resolver, Mutation } from "type-graphql";
import { Loaded } from "@mikro-orm/core/typings";
import { MyContext } from "../types";
import { Recipe } from "../entities";

// creating resolvers using context for Entity Manager from mikroORM.
@Resolver()
export default class RecipeResolver {
  // return array of recipes
  @Query(() => [Recipe])
  recipes(@Ctx() { em }: MyContext): Promise<Loaded<Recipe[]>> {
    return em.find<Recipe>(Recipe, {});
  }

  // return recipe by id
  @Query(() => Recipe, { nullable: true })
  recipe(
    @Arg("id") _id: number,
    @Ctx() { em }: MyContext
  ): Promise<Recipe | null> {
    return em.findOne<Recipe>(Recipe, { _id });
  }

  // create new recipe with title property,
  @Mutation(() => Recipe)
  async createRecipe(
    @Arg("title") title: string,
    @Ctx() { em }: MyContext
  ): Promise<Recipe> {
    const recipe = em.create(Recipe, { title });
    await em.persistAndFlush(recipe);
    return recipe;
  }

  // update recipe with given id and replace its title
  @Mutation(() => Recipe, { nullable: true })
  async updateRecipe(
    @Arg("id") _id: number,
    @Arg("title", () => String, { nullable: true }) title: string,
    @Ctx() { em }: MyContext
  ): Promise<Recipe | null> {
    const recipe = await em.findOne(Recipe, { _id });
    if (!recipe) {
      return null;
    }
    if (typeof title !== "undefined") {
      recipe.title = title;
      await em.persistAndFlush(recipe);
    }
    return recipe;
  }

  // delete recipe by provided id. Return true if succesfull, false when not.
  @Mutation(() => Boolean)
  async deleteRecipe(
    @Arg("id") _id: number,
    @Ctx() { em }: MyContext
  ): Promise<boolean> {
    try {
      em.nativeDelete(Recipe, { _id });
    } catch {
      return false;
    }
    return true;
  }
}
