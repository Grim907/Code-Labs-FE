import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',[
      new Ingredient ('meat', 1)
      new Ingredient ('French Fries', 20)
    ]),
    new Recipe('Another Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', [
      new Ingredient ('buns', 2)
      new Ingredient ('Meat', 1)
    ])
  ];
  recipeSelected: any;

  getRecipes() {
    return this.recipes.slice()
  }

}
