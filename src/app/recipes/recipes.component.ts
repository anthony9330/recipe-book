import { Component, OnInit,AfterViewInit  } from '@angular/core';
import {Recipe} from "./recipe.model";
import {RecipeService} from "./recipe.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],

})
export class RecipesComponent implements OnInit, AfterViewInit  {

// selectedRecipe:Recipe

  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
   // console.log('works');
   //  this.recipeService.recipeSelected.subscribe(
   //    (recipe:Recipe)=>{
   //        console.log("sunbsc");
   //        this.selectedRecipe=recipe;
   //      }
   //    );
  }

  ngAfterViewInit(){
    
  }


}
