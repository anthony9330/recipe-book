import { Component, OnInit ,Output,EventEmitter } from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {Subject} from 'rxjs/Subject';

export class ShopppingListService {


ingrediantsChanged= new Subject<Ingredient[]>();
startedEditing= new Subject<number>();

private ingredients:Ingredient[]=[
    new Ingredient('apples',5),
    new Ingredient('tomatos',15),
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  getIngredient(index:number){
      return this.ingredients[index];
  }


addIngredient(ingredient:Ingredient){
  this.ingredients.push(ingredient);
  this.ingrediantsChanged.next(this.ingredients.slice());
}

addIngredients(ingredients:Ingredient[]){
    // for(var i=0;i<ingredients.length;i++){
    //   this.ingredients.push(ingredients[i]);
    // }
  this.ingredients.push(...ingredients);
  this.ingrediantsChanged.next(this.ingredients.slice());
}

  updateIngredient(index:number,newIngredient:Ingredient){
    this.ingredients[index]=newIngredient;
    this.ingrediantsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index:number){
     this.ingredients.splice(index,1);
      this.ingrediantsChanged.next(this.ingredients.slice());
  }



}
