import { Component, OnInit,OnDestroy } from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import { ShopppingListService } from './shopping-list.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {

  private subscribtion: Subscription;

ingredients:Ingredient[];

  constructor(private shoppingListService:ShopppingListService) { }

  ngOnInit() {
    this.ingredients= this.shoppingListService.getIngredients();
   this.subscribtion= this.shoppingListService.ingrediantsChanged.subscribe(
        (ingredients:Ingredient[])=>{
            this.ingredients=ingredients;
        }
      )
  }

  ngOnDestroy(){
    this.subscribtion.unsubscribe();
  }

  onEditItem(index:number){
      this.shoppingListService.startedEditing.next(index);
     
  }




}
