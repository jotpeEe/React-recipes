import { __prod__ } from "./constants";
import { Recipe, Ingredient, User } from "./entities";
import { MikroORM } from "@mikro-orm/core";
import path from "path";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    glob: "!(*.d).{js,ts}",
  },
  entities: [Recipe, Ingredient, User],
  dbName: "recipe-to-do-backend",
  user: "minimaniac",
  type: "postgresql",
  password: "qwerty",
  debug: __prod__,
  allowGlobalContext: true,
} as Parameters<typeof MikroORM.init>[0];
