import  {EventEmitter, Injectable} from '@angular/core';
import  { Recipe} from './recipe.model';
import {Ingredient} from "../shared/ingredient.model";
import {ShopppingListService} from "../shopping-list/shopping-list.service";
import {Subject} from 'rxjs/Subject';
import {Http,Headers,Response} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class RecipeService {

  // recipeSelected = new EventEmitter<Recipe>();

  recipeChanged= new Subject<Recipe[]>();

  constructor(private slService:ShopppingListService,
              private http:Http){}

 private recipes: Recipe[] =[
    new Recipe(0,
      'recipe test',
      'testdescription',
      'https://static.pexels.com/photos/35600/road-sun-rays-path.jpg',
      [
        new Ingredient('Meat',1),
        new Ingredient('tets Ingred',2)
      ]
    ),
    new Recipe(1,
      'recipe secons',
      'test description of second',
      'http://wfbrandstandards.com/wp-content/uploads/2014/09/WF2CH.jpg',
      [
        new Ingredient('Test ingredient',10),
        new Ingredient('another Ingreditn',15)
      ]
    )
  ];


  getRecipes() {
   //  MAKES A COPY OF EXISTED ARRAY
    return this.recipes.slice();
  }

  setRecipes(recipes:Recipe[]){
    this.recipes=recipes;
    this.recipeChanged.next(this.recipes.slice());
  }

  getRecipe(id:number){
      return this.recipes[id];
  }

  addIngrdsToShppLst(ingredients:Ingredient[]){
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe:Recipe){

    // const headers=new Headers({'Content-type':'application-json'});
    // return this.http.post('https://ng-recipe-74148.firebaseio.com/reciepes.json',
    //   recipe,
    //   {headers:headers});


    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index:number, newRecipe:Recipe){

    // const headers=new Headers({'Content-type':'application-json'});
    // return this.http.put('https://ng-recipe-74148.firebaseio.com/reciepes.json',
    //   newRecipe,
    //   {headers:headers});


      this.recipes[index]=newRecipe;
       this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index:number){
      this.recipes.splice(index,1);
      this.recipeChanged.next(this.recipes.slice());
  }

}
