import { Component, OnInit,OnDestroy,EventEmitter,ViewChild } from '@angular/core';
import { ShopppingListService } from './../shopping-list.service';
import {Ingredient} from "../../shared/ingredient.model";
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm:NgForm;


 subscription:Subscription;
 editMode=false;
 editedItemIndex:number;
 editedItem:Ingredient;


  constructor(private shoppingListService:ShopppingListService) { }

  ngOnInit() {
      this.subscription= this.shoppingListService.startedEditing.subscribe(
        (index:number)=>{
          this.editMode=true;
          this.editedItemIndex=index;
          this.editedItem=this.shoppingListService.getIngredient(index);
          this.slForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          })
        });
  }

  onResetForm(){
    this.slForm.reset();
    this.editMode=false;
  }


  onSubmit(form:NgForm){
      const value=form.value;
      const newIngredient=new Ingredient(value.name,value.amount);
      if(this.editMode==true){
        this.shoppingListService.updateIngredient(this.editedItemIndex,newIngredient);
      }
      else {
        this.shoppingListService.addIngredient(newIngredient);
      }
      this.editMode=false;
      form.reset();
      
  }

  onDelete(){
      this.shoppingListService.deleteIngredient(this.editedItemIndex);
      this.onResetForm();
  }

  ngOnDestroy(){
      this.subscription.unsubscribe();
  }

}
